import * as React from "react";
import {    Icon, Button } from 'antd';
import { withFormik,     FormikProps, Field, Form } from 'formik';
// import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
// import { Link } from "react-router-dom";
import { NormalizedErrorMap, InsertGoalMutationVariables, YearGoalInput } from "@abb/controller";

interface FormValues extends InsertGoalMutationVariables{
  name: string;
  description: string;
  yeargoals: YearGoalInput;
}
interface Props {
    onFinish: () => void;
    submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {
    
    render() {
       // const { handleSubmit, errors} = this.props;
       // console.log(errors);
    
        return (
          <Form style={{ display: "flex" }}> 
          <div style={{width: 400, margin:'auto'}}>
            <Field  
              name="name"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              }
              component={InputField}
            />
            <Field  
              name="description"
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            <Field  
              name="yeargoals.goal"
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            <Field  
              name="yeargoals.description"
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            <div>
              <Button type="primary" htmlType="submit" className="">
                연간 목표값 등록
              </Button>
            </div>
          </div>
          </Form>
        );
    }
}


export const InsertGoalView = withFormik<Props, FormValues>({
    // validationSchema: validUserSchema,
    // validateOnChange : false,
    // validateOnBlur: false,
    mapPropsToValues: () =>  ({ name: "", description: "", yeargoals: {
      goal: "", description: ""}
    }),
    handleSubmit: async (values, {props, setErrors}) => {
        console.log("handleSubmit: ", values)
        // values.yeargoals.goal
        
        const errors = await props.submit(values);
        if(errors){
            setErrors(errors)
        } else {
          props.onFinish();
        }
    }
})(C);