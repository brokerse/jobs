import * as React from "react";

import Row2 from "../Row/Row2";
import SVG from "../SVG/SVG";
import { feed, users } from "../../dummyDatta.js";
import Box from "../Box/Box";
import { marginBottom } from "styled-system";

const SecondBar = () => (
  <Row2
    className="test"
    minHeight={68}
    justifyContent="space-between"
    alignItems="center"
    // height="15px"
    py="5px"
    px="10px"
    borderBottom="1px solid #DBDBDB"
    overflow="hidden"
  >
    <div className="top-second-bar">
      <p className="stories">Stories</p>
      <p className="watch-all">Watch All</p>
    </div>
    {feed.map((pic, ind) => {
      return (
        <Box
          key={ind}
          width="100%"
          height="30%"
          // position="relative"
          // maxWidth="400px"
        >
          <div className="stories-container">
            <img
              src="https://avatars2.githubusercontent.com/u/16545335?s=50&v=4"
              alt=""
              style={{
                borderRadius: "50%",
                width: "55px",
                height: "55px",
                border: "1.5px red solid",
                padding: "1.5px"
              }}
            />
            <div
              style={{
                textAlign: "left",
                marginLeft: "1.2em"
              }}
            >
              <p id="name-account">{users[0].name}</p>
              <p id="time-ago">{Math.round(Math.random() * 24)} HOURS AGO</p>
            </div>
          </div>
        </Box>
      );
    })}
  </Row2>
);

export default SecondBar;
