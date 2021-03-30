---
title: Enthusiastic APIs
date: 2021-03-20 12:00:00
author: Andrew Circelli
tags: ["api", "graphql", "http", "axios"]
path: enthusiastic-apis
type: blog
---

If you have stick around programming for more than a couple days, you will quickly become familiar with the acronynm - API.

API, or **A**pplication **P**rogramming **I**nterface is quite possibly my favorite piece of about programming. And when it comes to software, APIs are literally everywhere. But first, what is an **interface**? Well in the software world, an interface is an endpoint of an application that an end-user can interact with.

And so, then what is a **Programming Interface**? This is simply the method by which different programs interact with each another. Whether that is to access an underlying data source, or to "add specific functionality to an application, without having to write all of the code themselves" - **RapidAPI**

> APIs go hand in hand with one of the most fundamental concepts in computer science: abstraction. Abstraction is just a way of organizing the complexity of a system so that complicated actions can be handled in a simple way. **infoworld**

As you are aware, there are many types of API interactions and they serve many functions. And to make this interaction easier, protocols have been put in place.

But if you are here, you know all about that. I want to use this post to illustrate _some_ of the ways I implement these interfaces in my code.

Table of Contents

- [HTTP Methods used in REST APIs](#HTTP-Methods-used-in-REST-APIs)
- [Let's Build on That](#Lets-Build-on-That)
- [My New Obsession is GraphQL](#My-New-Obsession-is-GraphQL)

## HTTP Methods used in REST APIs

REST APIs and their associated HTTP methods are universal. And because of this, there are many solutions or techniques used to abstract away some of the boilerplate - axios (Node.js) or ajax.

Let's check out an example from one of my earlier projects, _CreativeOdds_:

```javascript
// CreativeOdds repo - logic.js
// ajaxCall to bettingFuturesMarketURL to retrieve World Series 2020 Odds by Team and append them dynamically to the page
    $.ajax({
        "url": bettingFuturesMarketURL,
        "method": "GET"
    }).done(function (response) {
        // Declare Data Response
        let data = response[0];
        // Filter out all betting markets "World Series Winner"
        let bettingMarkets = data.BettingMarkets;
        bettingMarkets.forEach(function(bettingMarketEl) {
            if (bettingMarketEl.BettingBetType) {
                if (bettingMarketEl.BettingBetType === "World Series Winner") {
                    WSBettingMarketArr.push(bettingMarketEl);
                };
            } else return
        });

        // Configure Array for World Series Odds at DraftKings sportsbook (Id=7)
        let draftKingsWSOddsArr  = [];
        // Loop through Array for World Series Odds and push "line" to World Series Odds at DraftKings sportsbook Array (above)
        let tempArr = WSBettingMarketArr[0].BettingOutcomes;
        tempArr.forEach(function(tempEl) {
            let sportsBook = tempEl.SportsBook;
            if (sportsBook.SportsbookID === 7) {
                draftKingsWSOddsArr.push(tempEl);
            };
        });

        // Loop through Array for Worlds Series Odds at DraftKings sportsbook and push teamName and odds to functional array
        draftKingsWSOddsArr.forEach(function(dkWorldSeriesEl) {
            worldSeriesOddsArr.push({
                teamName: dkWorldSeriesEl.Participant,
                odds:     dkWorldSeriesEl.PayoutAmerican
            });
        });

  [...]
```

This is pretty introductory stuff here. But it is the basis of interacting with a third party API. Here, I send off an ajax HTML GET request to a predefined endpoint (Sportsdata.io API). "With ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page" **wikipedia**

So when the page loads, it calls out to this endpoint requesting some data from the service's underlying database. And _time stops_ until a response is returned from the API. The returned data is captured in our variable _response_. And with some niffty JavaScript, I can pin down the fields I am looking for and push them to an array for further processing on the front-end.

Alright, now let's get just a little more complex. Here is some code my a similar project for accessing NFL Odds, _AnyGivenSunday_.

```javascript
// AnyGivenSunday repo - logic.js
// getCompletedGames() call
const getCompletedGames = () => {
  try {
    return $.ajax({
      url:
        "https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/" +
        "2020" +
        week +
        sportDataApiKey,
      method: "GET",
    })
  } catch (err) {
    console.log(err)
  }
}

[...]

const completedGamesResArr = await getCompletedGames()
const completedGamesDataArr = completedGamesResArr.filter(
  gameEl => gameEl.Status === "Final"
)
completedGamesDataArr.forEach(completedGameEl => {
  let scoreCheck = completedGameEl.HomeScore > completedGameEl.AwayScore
  completedGamesArr.push({
    homeWon: scoreCheck,
    gameKey: completedGameEl.GameKey,
    scoreID: completedGameEl.ScoreID,
    homeTeam: completedGameEl.HomeTeam,
    homeTeamID: completedGameEl.HomeTeamID,
    awayTeam: completedGameEl.AwayTeam,
    awayTeamID: completedGameEl.AwayTeamID,
    homeScore: completedGameEl.HomeScore,
    awayScore: completedGameEl.AwayScore,
    channel: completedGameEl.Channel,
    forecastLow: completedGameEl.ForecastTempLow,
    forecastHigh: completedGameEl.ForecastTempHigh,
    forecastDesc: completedGameEl.ForecastDescription,
    stadiumName: completedGameEl.StadiumDetails.Name,
    stadiumCity: completedGameEl.StadiumDetails.City,
    stadiumState: completedGameEl.StadiumDetails.State,
  })
}) //end getCompletedGames handler

[...]

```

This also isn't the most ground breaking code. But it illustrates progress. I implement async await for cleaner code and abstract away my API calls. I also make use of modern JavaScript methods in my data handling.

The end product is a lean array populated with the completed NFL games for the week. I can then make use of this array on the front-end.

## Let's Build on That

Outside of the two above projects and some use with other public APIs, most of my interfaces I have built are done so directly between my front-end client and back-end server and database. This is pretty standard in full stack development and I am excited to share some of the work I have done for my _Full Stack Futures_ project:

```jsx
// Full Stack Futures repo - Home.js
const Home = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { profileType } = useParams();
  useEffect(() => {
    async function init() {
      if (profileType !== "all") {
        try {
          const apiResults = await axios.get("/api/profiles/" + profileType);
          setProfiles(apiResults.data);
        } catch (error) {
          setError(error);
        } finally {
          console.log("from Home", profiles);
          setLoading(false);
        }
      } else {
        try {
          const results = await axios.get("/api/profiles/all");
          setProfiles(results.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    }
    init();
  }, [profileType]);

  if (error) throw error;
  if (loading) return <SpinnerPage />;

  [...]
```

Alright, so this is cool. I make use of the useEffect React... API, to call on my own server to retrieve data from my MongoDB database on my backend. I also implement async await, but this time with the proper try, catch syntax. I love it.

The first API call is to an endpoint I have defined myself, on the Express.js server. And the results are set in _state_. Errors are also managed in _state_.

The one piece I would change, and have begun to do so, is moving the API call out to a custom hook for use in other components. Boom.

## My New Obsession is GraphQL

If you are on this site, you are enjoying the benefits of Gatsby.js and it's implementation of Facebook's GraphQL spec. I began learning GraphQL following the completion of my full stack development program and I found it be incredible efficient.

You may have noticed all the data handling I had to do when I returned data from a REST API. It is a good test of your modern JavaScript knowledge and is very practical in many use-cases, but with GraphQL, there is not such thing as "over-fetching". In fact, Gatsby.js will not even allow you to do so.

And if you check out my full code examples in _CreativeOdds_ or _AnyGivenSunday_ you will also take note of the limitations to REST API servers. Specifically, how some response data arrays rely on other; and this waterfall of network requests is not performant (ala under-fetching").

GraphQL handles this, and more. And was used on this site to build out my blog as well as many of the components displayed on my Home page. There are many other benefits of GraphQL, but let's jump into the code:

```javascript
/// andrewcircelli.github.io repo - gatsby-node.js

[...]

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
```

This is part of the code that makes this blog post possible. The GraphQL query here is called at build-time and with the help of the expansive Gatsby.js plugin library, we can call on all the markdown (.md) files on my site. The query calls only the fields that are needed and in the format we need them. And the result is quite remarkable. And again, with the help of a Gatsby API, we can create pages based on the data in the [...].edges array. That is pretty powerful stuff.

But what about that cool carousel on the Home page of this site? That also uses a GraphQL query to fetch data:

```jsx
// andrewcircelli.github.io rep - LearningXP.js

[...]

const LearningXP = () => {
  const smallprojects = useStaticQuery(
    graphql`
      query {
        allSmallprojectsJson {
          edges {
            node {
              id
              title
              links {
                demo
                src
              }
              description
            }
          }
        }
      }
    `
  )

  return (
    <SmallProjectWrapper>
      <BG />
      <InnerContent>
        <Slider {...settings}>
          {smallprojects.allSmallprojectsJson.edges.map(({ node }) => (
            <SmallProjectCard key={node.id}>
              <h3>{node.title}</h3>
              <CardText>{node.description}</CardText>
              <ProjectLinks className="smallproject__links">
                <Button target="__blank" as="a" href={node.links.demo}>
                  Live Demo
                </Button>
                <IconButton
                  label="github"
                  href={node.links.src}
                  icon={"github"}
                />
              </ProjectLinks>
            </SmallProjectCard>
          ))}
        </Slider>
      </InnerContent>
    </SmallProjectWrapper>
  )
}
```

This time using a GraphQL _staticQuery_ we are able to fetch the data when the component is loaded on the page. Processing first tracks down the static .json file in my content-json folder named _smallprojects.js_. It then returns only the data elements I have requested, and makes that data available throughout the component scope. In this case, I map through and render a predefined React.js component.

Wow. GraphQL transforms the way applications are managed. And why I believe it can be a technology of the future. I think I will keep working on this.

Links and Learning Resources:

- [Check out the Future at Gatsby.js](https://www.gatsbyjs.com/)
- [Twitter #GraphQL](https://twitter.com/hashtag/GraphQL)

If you made it this far, thank you for reading!
