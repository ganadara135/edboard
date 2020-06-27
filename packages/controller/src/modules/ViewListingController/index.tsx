// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ViewListingQuery_viewListing, ViewListingQuery, ViewListingQueryVariables } from '../../schemaTypes';

const VEIWLISTING_QUERY = gql`
  query ViewListingQuery($yearName: Int!) {
    viewListing(yearName:$yearName){
      ordered
    }
  }
`;


export interface WithViewListingRaw {
  listing: ViewListingQuery_viewListing | null;
  loading: boolean;
}

interface Props {
  yearName: number;
  children: (data: WithViewListingRaw) => JSX.Element | null;
}

export class ViewListingController extends React.PureComponent<Props> {
  render() {
    const { children, yearName } = this.props;
    return (
      <Query<ViewListingQuery, ViewListingQueryVariables>
        query={VEIWLISTING_QUERY}
        variables={{ yearName }}
      >
        {({ data, loading }) => {
          let listing: ViewListingQuery_viewListing | null = null;

          if (data && data.viewListing) {
            listing = data.viewListing;
          }

          return children({
            listing,
            loading
          });
        }}
      </Query>
    );
  }
}