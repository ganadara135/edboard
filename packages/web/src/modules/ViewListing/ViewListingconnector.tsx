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
                  style={{ width: 350 }}
                  // cover={ }
                >
                  <Link to={`/listing/${l.mn_id}-mm`}>
                    <Card.Meta title={l.y_year + '년'}  description={l.y_description} >
                    {l.mn_description}
                    {l.m_description}
                    {l.y_description}
                    {/* m_description: null
                    m_goal: 222
                    m_id: 1
                    m_month: 1
                    mn_description: null
                    mn_id: 1
                    mn_mgidId: 1
                    mn_ygidId: 1
                    y_description: "한글설명"
                    y_edboardId: 1
                    y_goal: 111
                    y_id: 1
                    y_year: 2020 */}
                     
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