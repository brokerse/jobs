// import { gql } from "apollo-boost";
import gql from "graphql-tag";

//LETS SELECT USER '4' AS THE INSTAGRAM ACCOUNT OWNER AND USE HIS ID IN THE QUERY

const GET_FEED = gql`
  {
    getFeed(id: 4) {
      name
      avatar
      posts {
        image
        description
      }
    }
  }
`;

export { GET_FEED };
