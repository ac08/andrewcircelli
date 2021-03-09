import React from "react";

import { HomeCard } from "./HomeCard";
import { HomeWrapper, Intro } from "./Home.style";

const Home = () => {
  return (
    <HomeWrapper id="home">
      {/* <img className="svg-rect" src={svgRect} alt=""></img> */}

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>ANDREW CIRCELLI</h1>
          <p className="adjust">CREATIVE FULL-STACK DEVELOPER</p>

          {/* <div className="home__CTA">
            <div className="home__social">
              <IconLink
                label="github"
                icon={["fab", "github"]}
                href="//github.com/anuraghazra"
              />
              <IconLink
                label="twitter"
                icon={["fab", "twitter"]}
                href="//twitter.com/anuraghazru"
              />
              <IconLink
                label="codepen"
                icon={["fab", "codepen"]}
                href="//codepen.io/anuraghazra"
              />
            </div>
          </div> */}
        </div>
        {/* </Parallax> */}
        <HomeCard />
      </Intro>

      {/* Things I LOVE */}
      {/* <PageHeader style={{ marginBottom: 30 }}>
        Things I love <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove /> */}
    </HomeWrapper>
  );
};

export default Home;
