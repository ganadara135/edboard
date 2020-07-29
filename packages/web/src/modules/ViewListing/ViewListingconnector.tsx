import * as React from "react";
import { ViewListingController } from '@abb/controller';

import { ViewListingView, FormValues } from "./ui/ViewListingView";
import {  Link } from "react-router-dom";
import { Card,  } from 'antd';

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

              if (data.loading) {
                return <div style={{display: "flex", justifyContent: "center"}}>...loading</div>;
              }
              return (
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "flex-start", }}>
                  { data.listing?.ordered?.map((l:any) =>
                    <Card
                      key={`${l?.mn_id}-card`}
                      hoverable={true}
                      loading={data.loading}
                      style={{ width: 500 }}
                    >
                      <Link to={`/listing/${l.mn_id}-mm`}>  
                        <Card.Meta title={l.y_year + '년  ' + (l.m_month+1) + '월'}  description={
                          "연간전력목표: " + l.y_goal
                          // l.m_myTimestamp
                          // l.mn_description+" / "+l.m_description+" / "+l.y_description+" / "+l.m_goal+" / "+l.m_id+" / "+l.m_month 
                          // +" / "+l.mn_id+" / "+l.mn_mgidId+" / "+l.mn_ygidId+" / "+l.y_edboardId+" / "+l.y_goal+" / "+l.y_id+" / "+l.y_year
                        }> 
                        </Card.Meta>
                      {/* <Typography.Text type="secondary"> 연간 전력목표: {l.y_goal}</Typography.Text> */}
                        
                        월전력목표: {l.m_goal} <br/>
                        해당월설명: {l.m_description} <br/>
                        연간 설명: {l.y_description} <br/>
                        mn  설명: {l.mn_description} <br/>
                      
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