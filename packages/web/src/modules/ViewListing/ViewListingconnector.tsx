import * as React from "react";
import { ViewListingController  } from "@abb/controller";
import { RouteComponentProps, Link } from "react-router-dom";

import { Card } from 'antd';
// const { Meta } = Card;

export class ViewListingConnector extends React.PureComponent<
  RouteComponentProps<{   // RouteComponentProps 는  string 타입만 파라미터로 받음
    yearName: any
  }>
> {
  render() {
    // const {
    //   match: {
    //     params: { yearName }
    //   }
    // } = this.props;
    return (
      <ViewListingController yearName={2019}>
        {(data) => {
          console.log(data);
          console.log(data.listing);
          console.log(data.listing?.ordered);
          if (data.loading) {
            return <div>...loading</div>;
          }

          return (
            <div>
              { data.listing?.ordered?.map((l:any) =>               
              
                <Card
                  key={`${l?.mn_id}-card`}
                  hoverable={true}
                  style={{ width: 500 }}
                  // cover={ }
                >
                  <Link to={`/listing/${l.mn_id}-mm`}>
                    <Card.Meta title={l.y_year + '년'}  description={
                      l.mn_description+" / "+l.m_description+" / "+l.y_description+" / "+l.m_goal+" / "+l.m_id+" / "+l.m_month 
                      +" / "+l.mn_id+" / "+l.mn_mgidId+" / "+l.mn_ygidId+" / "+l.y_edboardId+" / "+l.y_goal+" / "+l.y_id+" / "+l.y_year} >                 
                    </Card.Meta>
                  </Link>
                </Card>
              )
            }
            </div>
          );
        }}
      </ViewListingController>
    );
  }
}