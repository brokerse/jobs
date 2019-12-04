// import { queryType, stringArg, makeSchema, objectType } from "nexus";
// ... or using `require()`
// import { GraphQLServer } from "graphql-yoga";
// const { queryType, stringArg, makeSchema, objectType } = require("nexus");

const { GraphQLServer } = require("graphql-yoga");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID
} = graphql;

const _ = require("lodash");

const feed = [
  {
    id: 1,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/1.jpeg",
    aspectRatio: 0.834,
    description: "Working hard at a Project!",
    authorId: 1
  },
  {
    id: 2,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/2.jpeg",
    aspectRatio: 0.834,
    description: "Code, code and more code!",
    authorId: 2
  },
  {
    id: 3,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/3.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/3.jpeg",
    aspectRatio: 0.834,
    description: "Make it fly away!",
    authorId: 3
  },
  {
    id: 4,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/4.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/4.jpeg",
    aspectRatio: 0.834,
    description: "3, 2, 1, ready to launch!",
    authorId: 4
  },
  {
    id: 5,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/5.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/5.jpeg",
    aspectRatio: 0.834,
    description: "Code, code and more code!",
    authorId: 2
  },
  {
    id: 6,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/6.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/6.jpeg",
    aspectRatio: 0.834,
    description: "Node.js + ReactJS + React Native = <3",
    authorId: 3
  },
  {
    id: 7,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/7.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/7.jpeg",
    aspectRatio: 0.834,
    description: "OmniStack to the rescue!",
    authorId: 1
  },
  {
    id: 8,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/8.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/8.jpeg",
    aspectRatio: 0.834,
    description: "Engineering is cool!",
    authorId: 2
  },
  {
    id: 9,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/9.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/9.jpeg",
    aspectRatio: 0.834,
    description: "Have you watched our videos at YouTube?",
    authorId: 4
  },
  {
    id: 10,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/10.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/10.jpeg",
    aspectRatio: 0.834,
    description: "Code, code and more code!",
    authorId: 3
  },
  {
    id: 11,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/11.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/11.jpeg",
    aspectRatio: 0.834,
    description: "Developing new great app!",
    authorId: 1
  },
  {
    id: 12,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/12.jpeg",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/12.jpeg",
    aspectRatio: 0.834,
    description: "Let's code everyday!",
    authorId: 3
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/4.jpeg",
    aspectRatio: 0.834,
    description: "Sleep, eat, code, repeat!",
    authorId: 2
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/5.jpeg",
    aspectRatio: 0.834,
    description: "Working hard and paying the bills!",
    authorId: 4
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/3.jpeg",
    aspectRatio: 0.834,
    description: "Code, code and more code!",
    authorId: 4
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1031&q=80",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/2.jpeg",
    aspectRatio: 0.834,
    description: "Just studying some React Native stuff!",
    authorId: 5
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/1.jpeg",
    aspectRatio: 0.834,
    description: "React Native is such a great tool by Facebook!",
    authorId: 2
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/8.jpeg",
    aspectRatio: 0.834,
    description: "Love what you do, do what you love!",
    authorId: 1
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/7.jpeg",
    aspectRatio: 0.834,
    description: "Code, code and more code!",
    authorId: 5
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    small:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/6.jpeg",
    aspectRatio: 0.834,
    description: "Are you working for your dreams?",
    authorId: 1
  }
];

const users = [
  {
    id: 1,
    name: "carlosg",
    avatar: "https://avatars0.githubusercontent.com/u/2254731?s=50&v=4"
  },
  {
    id: 2,
    name: "cleitonsouza",
    avatar: "https://avatars0.githubusercontent.com/u/4669899?s=50&v=4"
  },
  {
    id: 3,
    name: "pellizzetti",
    avatar: "https://avatars2.githubusercontent.com/u/16545335?s=50&v=4"
  },
  {
    id: 4,
    name: "jpdemagalhaes",
    avatar: "https://avatars3.githubusercontent.com/u/7268910?s=50&v=4"
  },
  {
    id: 5,
    name: "jpedroschmitz",
    avatar: "https://avatars0.githubusercontent.com/u/26466516?s=50&v=4"
  }
];

// const User = objectType({
//   name: "User",
//   definition(t) {
//     t.id("id");
//     t.string("name");
//     t.string("avatar");
//   }
// });

// const Stories = objectType({
//   name: "Stories",
//   definition(t) {
//     t.id("id");
//     t.string("image");
//     t.string("small");
//     t.float("aspectRatio");
//     t.string("description");
//     t.id("authorId");
//   }
// });

// // const Query = queryType({
// //   definition(t) {
// //     t.field("account", {
// //       type: Account, // or "Account"
// //       args: {
// //         name: stringArg(),
// //         status: arg({ type: "StatusEnum" }),
// //       },
// //     });
// //     t.list.field("accountsById", {
// //       type: Account, // or "Account"
// //       args: {
// //         ids: intArg({ list: true }),
// //       },
// //     });
// //   },
// // });

// const Query = queryType({
//   definition(t) {
//     t.string("hello", {
//       args: { name: stringArg({ nullable: true }) },
//       resolve: parent => {
//         console.log("this is parent", parent);
//         return "Hello World!!!!!!!";
//       }
//     });
//     t.list.field("users", {
//       type: User,
//       resolve: () => {
//         return [1, 2, 3];
//       }
//     });
//   }
// });

// const schema = makeSchema({
//   types: [Query, User],
//   outputs: {
//     schema: __dirname + "/generated/schema.graphql",
//     typegen: __dirname + "/generated/typings.ts"
//   }
// });

const StoryType = new GraphQLObjectType({
  name: "Story",
  fields: () => ({
    id: { type: GraphQLString },
    small: { type: GraphQLString },
    image: { type: GraphQLString },
    aspectRatio: { type: GraphQLString },
    description: { type: GraphQLString },
    authorId: { type: GraphQLString },
    author: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        let targetId = parent.authorId;
        let result = users.filter((instaUser, ind) => {
          return targetId === instaUser.id;
        });
        return result;
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    avatar: { type: GraphQLString },
    posts: {
      type: new GraphQLList(StoryType),
      resolve(parent, args) {
        let targetId = parent.id;
        let result = feed.filter((story, ind) => {
          return targetId === story.authorId;
        });
        return result;
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //LET'S MAKE THE ID INTO A NUMBER
        args.id = Number(args.id);
        return _.find(users, { id: args.id });
      }
    },
    stories: {
      type: StoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        args.id = Number(args.id);
        let result = _.find(feed, { id: args.id });
        return result;
      }
    },
    getFeed: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        args.id = Number(args.id);
        let result = users.filter(story => story.id !== args.id);
        return result;
      }
    }
  }
});

var schema = new GraphQLSchema({
  query: RootQuery
});

const server = new GraphQLServer({
  schema
});

server.start(() => console.log("Server is running on localhost:4000"));
