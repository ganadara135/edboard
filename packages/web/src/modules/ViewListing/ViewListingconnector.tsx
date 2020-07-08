import * as React from "react";
import { ViewListingController } from '@abb/controller';

import { ViewListingView, FormValues } from "./ui/ViewListingView";
import {  Link } from "react-router-dom";
import { Card } from 'antd';

export class ViewListingConnector extends React.PureComponent<
    {},{selectedYear: number}
> {
    constructor(props: any){
      super(props);
      this.state = {selectedYear: 2020};
    }

    onFinish = () => {
      console.log(" in onFinish() ")
        // this.props.history.push("/m/confirm-email", {
        //     message: "등록이 완료 됐습니다."
        // });
        // this.setState({selectedYear: 2019})
        // this.setState(state => ({
        //   yearName: state
        // }));
        // const returnVal = this.state.yearName;
        // return returnVal;
    }

    handleYearName = async (val: FormValues) => {
      console.log("in dummy : ", val)
      this.setState({selectedYear: val.yearName})
      return null;  // null is no error meaning
                    // chk ViewListingView.tsx if(errors){...}
    }

    render() {      
        return (
            <div>
            <ViewListingView onFinish={this.onFinish} submit={this.handleYearName}>
            </ViewListingView>
            <ViewListingController yearName={this.state.selectedYear}>
            {(data) => {
              console.log(data);
              // console.log(data.listing);
              // console.log(data.listing?.ordered);
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
          </div>
        );
    }
}