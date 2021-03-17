---
title: Creative Route Handling with Node.js + Express.js
date: 2021-03-14 12:00:00
author: Andrew Circelli
tags: ["express.js", "creative-route-handling", "node.js"]
path: creative-routes
type: blog
---

Create Read Update Delete (CRUD) operations are a fundamental piece of any backend software. And the most popular backend web application framework for Node.js is undoubtedly Express.js.

Express.js was introduced to me early on in my coding journey, and I love what I can do with it. So I was excited when I was tasked to create an API to handle frontend data requests for an exciting professional networking application, FullStackFutures.

I will use this post to walk through what I believe to be a confident backend solution to my application's routing challenge.

Table of Contents

- [My Express Server](#My-Express-Server)
- [Performant Routing](#Performant-Routing)

## My Express Server

The server is an impressive piece of code. It's wired up to handle multiple tier of routes, some error handling middleware, as well as a live connection to MongoDB.

Check it out on my GitHub page at the bottom.

## Performant Routing

Backend programming is my strong suit. It requires you to understand how the application works - the architecture, the database, and the application logic responsible for serving datasets to the user.

The focus of this post is routing. And Express.js provides a sophisticated routing mechanism capable of handling dynamic requests from the client.

> Routing is a feature that lets web applications retain webpage states through URLs. - **back4app**

```javascript
// server.js
const profileRouter = require("./routes/profile-routes")
const authRouter = require("./routes/auth-routes")

app.use("/api/auth", authRouter)
app.use("/api/profiles", profileRouter)
```

```javascript
// profile-routes.js
profileRouter
  .route("/all")
  // GET: get list of all profiles using Promise syntax
  .get((req, res) => {
    if (req.isAuthenticated()) {
      db.ProfileModel.find()
        .sort({ createdOn: "1" })
        .exec()
        .then(profileDocs => {
          res
            .header("Access-Control-Allow-Origin", "*")
            .status(200)
            .json(profileDocs)
        })
        .catch(err => {
          res.status(422).json({
            message: "Error finding the profiles",
            error: err,
          })
        })
    } else {
      res.json("User is authorized to access this route!")
    }
  })
```

This is a snippet of code from my FullStackFutures web application. And here I implement a feature of Express.js Routing Mechanism, _Route Handlers_ (**profileRouter**).

> A **Route Handler** is code that is looking for a request to a specific incoming URL such as _"/login"_ and often a specific HTTP verb such as POST and has specific code for handling that precise URL and verb. - **stack overflow**

This route _("/api/profiles/all")_ responds to an API GET request from the client. The API request is calling for the server to not only return all profile documents in the application's MongoDB collection, _profiles_, but also ensure the user is logged in and authenticated to access this route. Let's swipe up and see the remainder of the profileRouter.

```javascript
// profile-routes.js
profileRouter
  .route("/:profileType")
  // extend express.request to carry db."model" based on profile type
  // used on any subsequent POST routes to create profile given different schemas
  .all((req, res, next) => {
    const { profileType } = req.params
    req.profileType = profileType
    switch (profileType) {
      case "student":
        req.Model = db.StudentModel
        break
      case "athlete":
        req.Model = db.AthleteModel
        break
      case "cadet":
        req.Model = db.CadetModel
        break
    }
    next()
  })
  .get((req, res) => {
    const { profileType } = req
    db.ProfileModel.find({ profileType: profileType }, (err, docs) => {
      if (err) {
        return res.status(400).json(err)
      }
      res.header("Access-Control-Allow-Origin", "*").status(200).send(docs)
    })
  })
  // POST: post, create a new profile document based on req.Model
  .post((req, res) => {
    if (req.isAuthenticated()) {
      req.body.userRef = req.user
      const dbModel = new req.Model(req.body)
      dbModel.save((err, doc) => {
        if (err) {
          return res.status(400).json(err)
        }
        res.status(200).json(doc)
      })
    }
  })
```

This is where we get creative. The route _("/api/profiles/:profileType")_ integrates a request param (_:profileType_) and responds to either an API GET or POST request. As soon as the requests connects to the server, the server retreives the request param and passes its value to the request (req) object. This value is can also be attached to the _req.locals_ object, but I preferred to set the variable directly onto the request body. The value will persist for the lifecycle of the request.

The value of the request param is also thrown into a switch-case statement. The switch-case statement will set another variable on the request.body (_req.Model_), and this time, it will equate to the a specific data model defined.

Now that we have set the stage, we can walk through the API GET and POST requests that this route handles. All API GET requests to this route, will return all profile documents in the _profiles_ collection where the _profileType_ is set to the value stored on _req.profileType_ (for more information on this application's database schema see my post [here](/blog/using-mongoose-discriminators).

Even cooler, when an API POST request is sent to this route, a new profile document will be created based on the model version stored on the request object (_req.Model_).

I hope you enjoyed my router design and welcome you to use a similar design in your projects in the future.

> [view my full code on github](https://github.com/andrewcircelli/FullStackFutures/)

Links and Learning Resources:

- [Express.js Routing Docs](https://expressjs.com/en/guide/routing.html)

Thank you for reading!
