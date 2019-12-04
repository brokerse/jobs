import * as React from "react";
import { graphql } from "react-apollo";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import SecondBar from "../SecondBar/SecondBar";
import { feed, users } from "../../dummyDatta.js";
import { getFeed } from "../../queries/queries";

function Feed(props) {
  let infoData = props.data.getFeed;
  console.log("this is props", props);
  return (
    <div
      className="cols-container"
      style={{ fontFamily: "Noto Sans, sans-serif" }}
    >
      <div className="col1">
        {props.data.loading ? (
          <div>Loading...</div>
        ) : (
          infoData.map((user, ind) => {
            return user.posts.map((post, ind) => {
              return (
                <div key={ind} className="post-container">
                  <div
                    className="top-of-picture"
                    style={{
                      height: "10vh",
                      paddingTop: "3%",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px"
                      // background: "red"
                    }}
                  >
                    {
                      <img
                        src={user.avatar}
                        alt=""
                        style={{ borderRadius: "50%", marginRight: "2%" }}
                      />
                    }
                    {<p style={{ fontWeight: "bold" }}>{user.name}</p>}

                    {
                      <FaEllipsisH
                        size={28}
                        style={{
                          marginLeft: "auto"
                          // paddingRight: "5%"
                        }}
                      />
                    }
                  </div>

                  <img
                    style={{
                      marginBottom: "2%",
                      display: "inline-block",
                      width: "100%",
                      height: "auto"
                    }}
                    src={post.image}
                    alt=""
                  />

                  <div
                    style={{
                      paddingLeft: "2%",
                      paddingRight: "2%",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "3%",
                      width: "90%",
                      // background: "red",
                      justifyContent: "flex-start"
                      // background: "white"
                    }}
                    className="bottom-of-picture"
                  >
                    <FaRegHeart size={32} />
                    <FaRegComment size={28} style={{ marginLeft: "2%" }} />
                    <FiShare size={28} style={{ marginLeft: "2%" }} />
                    <FaRegBookmark size={28} style={{ marginLeft: "auto" }} />
                  </div>
                  <div
                    className="description"
                    style={{
                      paddingLeft: "5%",
                      paddingTop: "3%",
                      marginBottom: "3%"
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>
                      {Math.round(Math.random() * 1000)} Likes
                    </p>
                    <p style={{ paddingTop: "2%" }}>
                      <span style={{ fontWeight: "bold" }}>{user.name}</span>
                      {" " + post.description}
                    </p>
                    <p
                      style={{
                        color: "#999999",
                        fontSize: "0.7rem",
                        paddingTop: "2%"
                      }}
                    >
                      {Math.round(Math.random() * 30)} DAYS AGO
                    </p>
                  </div>
                </div>
              );
            });
          })
        )}
      </div>
      <div className="col2">
        <div className="avatar-container">
          <img
            style={{
              borderRadius: "50%",
              width: "55px",
              height: "55px",

              display: "inline-block"
            }}
            src={users[3].avatar}
            alt=""
          />
          <div className="user-info">
            <p className="insta-name">Peterp</p>
            <p className="real-name">Peter Parker</p>
          </div>
        </div>
        <div className="second-bar-container">
          <SecondBar />
        </div>
      </div>
    </div>
  );
}
//AT 623 COL2 BECOMES ABSOLUTE AND COLS-CONTAINER POSITION IS RELATIVE

export default graphql(getFeed)(Feed);
