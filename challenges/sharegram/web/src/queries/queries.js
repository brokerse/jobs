import { gql } from "apollo-boost";

const randomUserId = Math.round(Math.random() * 5);

const getFeed = gql`
  {
    getFeed(id:${randomUserId}) {
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
