import * as React from "react";
import {    Button } from 'antd';
import { withFormik,     FormikProps, Field, Form } from 'formik';
// import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
// import { Link } from "react-router-dom";
import { NormalizedErrorMap, CreateEDBoardMutationVariables } from "@abb/controller";

interface FormValues extends CreateEDBoardMutationVariables{
  name: string;
  description: string;
}
interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {
    
  render() {
      // const { handleSubmit, errors} = this.props;
      return (
        <Form style={{ display: "flex" }}> 
        <div style={{width: 400, margin:'auto'}}>
          <Field  
            name="name"
            // prefix={
            //   <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            // }
            component={InputField}
          />
          <Field  
            name="description"
            // prefix={
            //   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
            // }
            component={InputField}
          />
          <div>
            <Button type="primary" htmlType="submit" className="">
              게시판 생성
            </Button>
          </div>
        </div>
        </Form>
      );
  }
}


export const CreateEDBoardView = withFormik<Props, FormValues>({
    // validationSchema: validUserSchema,
    // validateOnChange : false,
    // validateOnBlur: false,
    mapPropsToValues: () =>  ({ name: "", description: "" }),
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