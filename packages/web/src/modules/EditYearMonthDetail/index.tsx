import * as React from "react";
import { EditYearController } from '@abb/controller';
import { RouteComponentProps } from "react-router-dom";
import { EditYearPage,  } from "./ui/EditYearPage";

interface IPropsVal {
  y_id: string;
  y_year: number;
  y_goal: number;
  y_description: string;

  m_id: string;
}

export class EditYearMonthDetail extends React.PureComponent<
    RouteComponentProps<{}>, IPropsVal  // 이게 state 임
> {
    onFinish = () => {
      this.props.history.push("donemsg", {
          message: "등록이 완료 됐습니다."
      });
    }

    render() {      
      console.log("match : ", this.props.match);
      const paramData = this.props.match.params;
      const {y_id,y_year,y_goal,y_description, m_id} : IPropsVal = paramData as IPropsVal;
      const test : IPropsVal = paramData as IPropsVal;
      console.log(paramData);
      console.log(m_id, y_id);
      console.log(test)

      return (
        <>
        {
          this.props.match.params !== undefined ?
            <EditYearController>
              {({ submit }: any) => <EditYearPage 
                submit={submit}
                onFinish={this.onFinish}
                y_id={y_id}
                year={Number(y_year)}
                goal={Number(y_goal)}
                description={y_description}
              >{y_id}</EditYearPage>}
            </EditYearController> : null
        }
        </>
      )
    }
}