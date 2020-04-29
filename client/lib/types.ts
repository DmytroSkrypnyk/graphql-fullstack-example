import { gql } from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type Query = {
  __typename?: "Query";
  post?: Maybe<Post>;
  posts: Array<Post>;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

export type Post = {
  __typename?: "Post";
  id: Scalars["Int"];
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  author: User;
  comments: Array<Comment>;
  votes: Array<Vote>;
  rating: Scalars["Int"];
};

export type PostCommentsArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<CommentWhereUniqueInput>;
  before?: Maybe<CommentWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type PostVotesArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<VoteWhereUniqueInput>;
  before?: Maybe<VoteWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  votes: Array<Vote>;
};

export type UserVotesArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<VoteWhereUniqueInput>;
  before?: Maybe<VoteWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type VoteWhereUniqueInput = {
  authorId_postId?: Maybe<AuthorIdPostIdCompoundUniqueInput>;
};

export type AuthorIdPostIdCompoundUniqueInput = {
  authorId: Scalars["Int"];
  postId: Scalars["Int"];
};

export type Vote = {
  __typename?: "Vote";
  direction: Direction;
};

export enum Direction {
  Up = "UP",
  Down = "DOWN",
}

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

export type Comment = {
  __typename?: "Comment";
  id: Scalars["Int"];
  text: Scalars["String"];
  createdAt: Scalars["DateTime"];
  author: User;
};

export type PostWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  text?: Maybe<NullableStringFilter>;
  authorId?: Maybe<IntFilter>;
  comments?: Maybe<CommentFilter>;
  votes?: Maybe<VoteFilter>;
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  not?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
};

export type StringFilter = {
  equals?: Maybe<Scalars["String"]>;
  not?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars["String"]>;
  not?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
};

export type CommentFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type CommentWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  text?: Maybe<StringFilter>;
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  replyToId?: Maybe<NullableIntFilter>;
  replies?: Maybe<CommentFilter>;
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  post?: Maybe<PostWhereInput>;
  replyTo?: Maybe<CommentWhereInput>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  not?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
};

export type VoteFilter = {
  every?: Maybe<VoteWhereInput>;
  some?: Maybe<VoteWhereInput>;
  none?: Maybe<VoteWhereInput>;
};

export type VoteWhereInput = {
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  direction?: Maybe<Direction>;
  AND?: Maybe<Array<VoteWhereInput>>;
  OR?: Maybe<Array<VoteWhereInput>>;
  NOT?: Maybe<Array<VoteWhereInput>>;
  post?: Maybe<PostWhereInput>;
};

export type PostOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  title?: Maybe<OrderByArg>;
  text?: Maybe<OrderByArg>;
  authorId?: Maybe<OrderByArg>;
};

export enum OrderByArg {
  Asc = "asc",
  Desc = "desc",
}

export type Mutation = {
  __typename?: "Mutation";
  login: User;
  createOnePost: Post;
  createOneComment: Comment;
  createOneVote: Vote;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};

export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};

export type MutationCreateOneVoteArgs = {
  data: VoteCreateInput;
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  votes?: Maybe<VoteCreateManyWithoutPostInput>;
};

export type CommentCreateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  replyTo?: Maybe<CommentCreateOneWithoutRepliesInput>;
  replies?: Maybe<CommentCreateManyWithoutReplyToInput>;
};

export type CommentCreateOneWithoutRepliesInput = {
  create?: Maybe<CommentCreateWithoutRepliesInput>;
  connect?: Maybe<CommentWhereUniqueInput>;
};

export type CommentCreateWithoutRepliesInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  post: PostCreateOneWithoutCommentsInput;
  replyTo?: Maybe<CommentCreateOneWithoutRepliesInput>;
};

export type PostCreateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  votes?: Maybe<VoteCreateManyWithoutPostInput>;
};

export type VoteCreateManyWithoutPostInput = {
  create?: Maybe<Array<VoteCreateWithoutPostInput>>;
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
};

export type VoteCreateWithoutPostInput = {
  direction: Direction;
};

export type CommentCreateManyWithoutReplyToInput = {
  create?: Maybe<Array<CommentCreateWithoutReplyToInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateWithoutReplyToInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  post: PostCreateOneWithoutCommentsInput;
  replies?: Maybe<CommentCreateManyWithoutReplyToInput>;
};

export type CommentCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  post: PostCreateOneWithoutCommentsInput;
  replyTo?: Maybe<CommentCreateOneWithoutRepliesInput>;
  replies?: Maybe<CommentCreateManyWithoutReplyToInput>;
};

export type VoteCreateInput = {
  direction: Direction;
  post: PostCreateOneWithoutVotesInput;
};

export type PostCreateOneWithoutVotesInput = {
  create?: Maybe<PostCreateWithoutVotesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateWithoutVotesInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type AuthorAvatarFragment = { __typename?: "User" } & Pick<
  User,
  "id" | "name"
>;

export type CommentOnCardFragment = { __typename?: "Comment" } & Pick<
  Comment,
  "id" | "text"
> & {
    author: { __typename?: "User" } & Pick<User, "id" | "name"> &
      AuthorAvatarFragment;
  };

export type PostOnCardFragment = { __typename?: "Post" } & Pick<
  Post,
  "id" | "title" | "text" | "createdAt" | "rating"
> & { author: { __typename?: "User" } & AuthorAvatarFragment };

export type CreatePostMutationVariables = {
  data: PostCreateInput;
};

export type CreatePostMutation = { __typename?: "Mutation" } & {
  createOnePost: { __typename?: "Post" } & PostOnCardFragment;
};

export type GetPostQueryVariables = {
  id: Scalars["Int"];
};

export type GetPostQuery = { __typename?: "Query" } & {
  post?: Maybe<
    { __typename?: "Post" } & {
      comments: Array<{ __typename?: "Comment" } & CommentOnCardFragment>;
    } & PostOnCardFragment
  >;
};

export type GetPostsQueryVariables = {};

export type GetPostsQuery = { __typename?: "Query" } & {
  posts: Array<{ __typename?: "Post" } & PostOnCardFragment>;
};

export const AuthorAvatarFragmentDoc = gql`
  fragment AuthorAvatar on User {
    id
    name
  }
`;
export const CommentOnCardFragmentDoc = gql`
  fragment CommentOnCard on Comment {
    id
    text
    author {
      id
      name
      ...AuthorAvatar
    }
  }
  ${AuthorAvatarFragmentDoc}
`;
export const PostOnCardFragmentDoc = gql`
  fragment PostOnCard on Post {
    id
    title
    text
    createdAt
    rating
    author {
      ...AuthorAvatar
    }
  }
  ${AuthorAvatarFragmentDoc}
`;
export const CreatePostDocument = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createOnePost(data: $data) {
      ...PostOnCard
    }
  }
  ${PostOnCardFragmentDoc}
`;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CreatePostDocument, baseOptions);
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export const GetPostDocument = gql`
  query GetPost($id: Int!) {
    post(where: { id: $id }) {
      ...PostOnCard
      comments {
        ...CommentOnCard
      }
    }
  }
  ${PostOnCardFragmentDoc}
  ${CommentOnCardFragmentDoc}
`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
export function useGetPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export const GetPostsDocument = gql`
  query GetPosts {
    posts {
      ...PostOnCard
    }
  }
  ${PostOnCardFragmentDoc}
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;