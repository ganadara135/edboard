import * as React from "react";
import {  Icon, Button, } from 'antd';
import { withFormik,      FormikProps, Field, Form } from 'formik';

import { InputField } from "../../shared/InputField";

import { NormalizedErrorMap } from "@abb/controller";

interface FormValues {
    email: string;
}
interface Props {
  //  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
    onFinish: () => void;
    submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {

    render() {
      console.log("props in LoginView : ", this.props)
        return (
          <Form > 
          <div style={{width: 400, margin:'auto'}}>
            <Field  
              name="email"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              }
              placeholder="Email"
              component={InputField}
            />
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Reset Password
              </Button>
            </div>
          </div>
          </Form>
        );
    }
}


export const ForgotPasswordView = withFormik<Props, FormValues>({
    mapPropsToValues: () => ({ email: ""}),
    handleSubmit: async (values, {props, setErrors}) => {
      
        const errors = await props.submit(values);
        if(errors){
            setErrors(errors)
        } else {
          props.onFinish();
        }
    }
})(C);