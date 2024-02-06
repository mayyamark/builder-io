import * as Types from '../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetLinksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLinksQuery = { __typename?: 'RootQueryType', link?: Array<{ __typename?: 'Link', data?: { __typename?: 'LinkData', href?: string | null, label?: string | null } | null } | null> | null };


export const GetLinksDocument = gql`
    query GetLinks {
  link {
    data {
      href
      label
    }
  }
}
    `;

/**
 * __useGetLinksQuery__
 *
 * To run a query within a React component, call `useGetLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLinksQuery(baseOptions?: Apollo.QueryHookOptions<GetLinksQuery, GetLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinksQuery, GetLinksQueryVariables>(GetLinksDocument, options);
      }
export function useGetLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinksQuery, GetLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinksQuery, GetLinksQueryVariables>(GetLinksDocument, options);
        }
export function useGetLinksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLinksQuery, GetLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLinksQuery, GetLinksQueryVariables>(GetLinksDocument, options);
        }
export type GetLinksQueryHookResult = ReturnType<typeof useGetLinksQuery>;
export type GetLinksLazyQueryHookResult = ReturnType<typeof useGetLinksLazyQuery>;
export type GetLinksSuspenseQueryHookResult = ReturnType<typeof useGetLinksSuspenseQuery>;
export type GetLinksQueryResult = Apollo.QueryResult<GetLinksQuery, GetLinksQueryVariables>;