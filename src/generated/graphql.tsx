import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Blogs = {
  __typename?: 'Blogs';
  blog1: Scalars['String'];
  blog2: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  gibBlogs: Blogs;
};

export type SomequeryQueryVariables = Exact<{ [key: string]: never; }>;


export type SomequeryQuery = { __typename?: 'Query', gibBlogs: { __typename?: 'Blogs', blog1: string, blog2: string } };


export const SomequeryDocument = gql`
    query somequery {
  gibBlogs {
    blog1
    blog2
  }
}
    `;

/**
 * __useSomequeryQuery__
 *
 * To run a query within a React component, call `useSomequeryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSomequeryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSomequeryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSomequeryQuery(baseOptions?: Apollo.QueryHookOptions<SomequeryQuery, SomequeryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SomequeryQuery, SomequeryQueryVariables>(SomequeryDocument, options);
      }
export function useSomequeryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SomequeryQuery, SomequeryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SomequeryQuery, SomequeryQueryVariables>(SomequeryDocument, options);
        }
export type SomequeryQueryHookResult = ReturnType<typeof useSomequeryQuery>;
export type SomequeryLazyQueryHookResult = ReturnType<typeof useSomequeryLazyQuery>;
export type SomequeryQueryResult = Apollo.QueryResult<SomequeryQuery, SomequeryQueryVariables>;