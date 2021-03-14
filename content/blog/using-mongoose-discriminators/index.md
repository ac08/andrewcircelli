---
title: Using Mongoose Discriminators
date: 2021-03-01 12:00:00
author: Andrew Circelli
tags: ["mongoose", "creative-schema-designs", "discriminators"]
path: using-mongoose-discriminators
---

Hey all! A few weeks ago in designing my FullStackFutures web application, I accepted the challenge to identify a functional solution to the project's MongoDB schema business requirement.

Since I completed this challenge I thought I should share briefly what I learned about this schema design, so let's get
started.

Table of Contents

- [What are Mongoose Discriminators?](#What-Are-Mongoose-Discriminators)
- [Default Mongoose Behavior](#Default-Mongoose-Behavior)
- [Discriminator Keys](#Discriminator-Keys)
- [My Take](#My-Take)

## What Are Mongoose Discriminators?

"The model dot discriminator function is part of Mongoose (a popular MongoDB library for Node.js). They are a schema inheritance mechanism. They enable you to have multiple models with overlapping schemas on top of the same underlying MongoDB collection." - **mongoose docs**

There are three topics around Mongoose Discriminators, and we are going to cover them one by one.

- **Default Mongoose Behahvior**

- **Discriminator Keys**

- **My Take**

## Default Mongoose Behavior

By default, Mongoose will save each model in its own collection. You would then have to query each collection seperately to perform operations on the persistant data. Here is an example:

```javascript
const MusicEvent = mongoose.model(
  "MusicEvent",
  new mongoose.Schema({
    date: { type: Date, default: Date.now },
    length: { type: Number }
    genre: String,
    artist: String,
  })
)

const SportingEvent = mongoose.model(
  "SportingEvent",
  new mongoose.Schema({
    date: { type: Date, default: Date.now },
    length: { type: Number }
    sport: { type: String },
    home: { type: String },
    away: { type: String },
  })
)

const music = new MusicEvent({
  length: 120,
  genre: "Folk",
  artist: "Caamp",
})
music.save((err, savedMusic) => {
  console.log(JSON.stringify(savedMusic))
})

const soccer = new SportingEvent({
  length: 90,
  sport: "Soccer",
  home: "ManchesterCity",
  away: "ManchesterUnited",
})
soccer.save((err, savedSoccer) => {
  console.log(JSON.stringify(savedSoccer))
})
```

In this example, we have two models: MusicEvent and SportingEvent and if we run this, we will end up with two collections in MongoDB.`

## Discriminator Keys

Discriminators in Mongoose allows us to specify one property (key) in a document that we'll use to discriminate between different types of entities, and allow us to store different types of entities in the same collection.

> The way mongoose tells the difference between the different discriminator models is by the 'discriminator key'.

## My Take

AND, now let's take a look at how I have used the discriminator function in my FullStackFutures web application.

### Use Cases

The application required a database schema that could handle different person profile types. But still allow the user to call all the profile types through a single query.

So, different profile types (athlete, military, student), with slightly different schema constraints, but a single collection. Sounds pretty straight forward, and something that I have probably come up quite a bit through the web development world.

First step is to create the base (parent) schema. These are properties that all child schemas will inherit from:

```javascript
const baseOptions = {
  discriminatorKey: "profileType",
}

const reMatch = /[a-zA-z]/

const Base = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      match: reMatch,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      match: reMatch,
    },
    age: { type: Number, required: [true, "Age is required."] },
    graduationYear: { type: Number },
    email: { type: String },
    createdOn: { type: Date, default: Date.now() },
    isActive: { type: Boolean, default: true },
    userRef: { type: Schema.Types.ObjectId, ref: "User" },
  },
  baseOptions
)

const ProfileModel = mongoose.model("Profile", Base)
```

That was simple enough. Now let's extend the Profile Model, for those profiles classified as an athlete:

```javascript
const athleteSchema = new Schema({
  sport: {
    type: String,
    required: [true, "Sport is required."],
  },
  position: { type: String },
  height: { type: Number, required: true },
})

const AthleteModel = ProfileModel.discriminator("athlete", athleteSchema)
```

See what we did there? We created the Athelete's Schema as we normally would. But at the end we used the model dot discriminator function to allow the properties of the Profile Schema to become available to the Athlete Schema on create. Oh, and the "athlete" string there populates under each document's profileType property. This **discriminates** between the entities in the collection.

Now let's extend the Profile Schema once more. This time for those profiles classified as a "student":

```javascript
const studentSchema = new Schema({
  university: { type: String, required: true },
  GPA: { type: Number },
  SAT: { type: Number },
  ACT: { type: Number },
  extracurriculars: { type: Array },
})

const StudentModel = ProfileModel.discriminator("student", studentSchema)
```

And let's assume we created some instances of both the athlete model and the student model. Check this out too:

```javascript
ProfileModel.find(}, function (err, profileDocs) {
  console.log(profileDocs);
});
```

To recap, in this example, we have three models: ProfileModel, AthleteModel, and StudentModel. And if we run this, we will end up with a single collection in MongoDB, "profiles". And the "profiles" collection would house the athlete profile documents (profileType: "athlete") as well as the student profile documents (profileType: "student").`

> [view my full code on github](https://github.com/ac08/FullStackFutures/)

ANNNDDD THATS IT! Feel free to reference this page when you have a similar schema design pattern.

Links and Learning Resources:

- [Mongoose Documentation on Discriminators](https://mongoosejs.com/docs/discriminators.html)
- [Another Good Guide](https://thecodebarbarian.com/2015/07/24/guide-to-mongoose-discriminators.html)
- [Twitter #MongoDB](https://twitter.com/hashtag/MongoDB)

Thank you for reading!
