---
title: Creative Route Handling with Node.js + Express.js
date: 2021-03-14 12:00:00
author: Andrew Circelli
tags: ["express.js", "creative-route-handling", "node.js"]
path: creative-routes
type: blog
---

Create Read Update Delete (CRUD) operations are a fundamental piece of any backend software. And the most popular backend web application framework for Node.js is undoubtedly Express.js.

Express.js was introduced to me early on in my coding journey, and I love what I can do with it. So I was excited when I was tasked to create an API to handle front end data requests for an exciting professional networking application, _Full Stack Futures_.

I will use this post to walk through what I believe to be a confident backend solution to my application's routing challenge.

Table of Contents

- [My Express Server](#My-Express-Server)
- [Performant Routing](#Performant-Routing)

## My Express Server

The server is an impressive piece of code. It's wired up to handle multiple tier of routes, some error handling middleware, as well as a live connection to MongoDB.

Check it out on my GitHub page at the bottom.

## Performant Routing

Back-end programming is my strong suit. It requires you to understand how the application works - the Node.js architecture, the database, and the application logic responsible for serving datasets to the user.

The focus of this post is routing. And Express.js is the technology I use to handle routing. Express.js is a routing and middleware web framework for Node.js and is used alongside client-side frameworks like React.js to build full stack applications.

> Routing is a feature that lets web applications retain webpage states through URLs. - **back4app**

```javascript
// Full Stack Futures repo - server.js
// sets up the Express app instance
const express = require("express")
const app = express()

// sets up body parsing middleware in order to populate req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const profileRouter = require("./routes/profile-routes")
const authRouter = require("./routes/auth-routes")

app.use("/api/auth", authRouter)
app.use("/api/profiles", profileRouter)
```

The above demonstrates what part of a web applications server.js file could look like. The server will listen for a specific type of request at a specific endpoint (URL) and when it hears that request, it will respond.

Moreover, the body parsing middleware functions shown here are built into Express and run on the server between the time a server receives a request, and a server sends out a response. Thus, the order of middleware design on the server matters in how it runs (top to bottom).

> Initialize middleware with app dot use

The final pieces of code are examples of custom middleware. And specifically, they are application-level middleware as they are bound to an instance of the app object. The functions are executed every time the app receives a request.

```javascript
// Full Stack Futures repo - profile-routes.js
const express = require("express")
const profileRouter = express.Router()
const db = require("../models")

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

In the above snippet of code I implement more middleware. This time at the router-level. Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express dot Router().

For some context, the top-level express object has a Router() method that creates a new router object - named **profileRouter** in my application. Once I have created a router object, I add middleware and HTTP method routes (such as GET, PUT, POST) to it.

> A **Route Handler** is code that is looking for a request to a specific incoming URL such as _"/login"_ and often a specific HTTP verb such as POST and has specific code for handling that precise URL and verb. - **stack overflow**

This route _("/api/profiles/all")_ responds to an API GET request from the client. The API request is calling for the server to not only return all profile documents in the application's MongoDB collection, _profiles_, but also ensure the user is logged in and authenticated to access this route. Let's swipe up and see the remainder of the **profileRouter**.

```javascript
// Full Stack Futures repo - profile-routes.js
profileRouter
  .route("/:profileType")
  // extend express.request object to carry db.[model] based on the profile type
  // to be used on any subsequent POST routes to create profile given different schemas
  .all((req, res, next) => {
    // request (req) object is available immediately
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

This is where we get creative. The route _("/api/profiles/:profileType")_ integrates a request param (_:profileType_) and responds to either an HTML GET or POST request. The "profileType" property is available on req dot params dot profileType. And this object defaults to _{}_.

> The req dot params property is an object containing properties mapped to the named route “parameters”.

As soon as the request connects to the server, the "profileType" property, value is destructured from the request (req) dot params property, object. I immediately direct the destructured variable to the req body. This variable could have also been attached to the _req.locals_ object. The variable, value will persist for the lifecycle of the request.

The "profileType" cooridnates the switch-case statement. And depending on the value of "profileType", the switch-case statement will modify the req.body (_req.Model_), and this time, it will equate to the specific Mongoose data model defined. We now have a model d

Now that we have set the stage, we can walk through the HTML GET and POST requests that this route handles. All HTML GET requests to this route will return all profile documents in the _profiles_ collection where the _profileType_ is set to the value stored on _req.profileType_ (for more information on this application's database schema see my post [here](/blog/using-mongoose-discriminators).

Even cooler, when an HTML POST request is sent to this route, a new profile document will be created based on the model version stored on the request object (_req.Model_).

I hope you enjoyed my router design and welcome you to use a similar design in your projects in the future.

> [view my full code on github](https://github.com/andrewcircelli/FullStackFutures/)

Links and Learning Resources:

- [Express.js Routing Docs](https://expressjs.com/en/guide/routing.html)

Thank you for reading!
