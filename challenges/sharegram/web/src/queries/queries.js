import { gql } from "apollo-boost";

// const randomUserId = Math.round(Math.random() * 5);

//LETS SELECT USER '4' AS THE INSTAGRAM ACCOUNT OWNER AND USE HIS ID IN THE QUERY

const getFeed = gql`
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

export { getFeed };
