import * as React from "react";
import {  Icon, Button,} from 'antd';
import { withFormik,      FormikProps, Field, Form } from 'formik';
import { loginSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@abb/controller";

interface FormValues {
    email: string;
    password : string;
}
interface Props {
  //  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
    onFinish: () => void;
    submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {

    render() {
      // console.log("props in LoginView : ", this.props)
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
            <Field  
              name="password"
              prefix={
                <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              placeholder="Password"
              component={InputField}
            />
       
            <div>
              <Link to="/forgot-password">Forgot password</Link>
            </div>
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
            </div>
            <div>
              Or <Link to="/register">Register!</Link>
            </div>
          </div>
          </Form>
        );
    }
}


export const LoginView = withFormik<Props, FormValues>({
    validationSchema: loginSchema,
    validateOnChange: false,
    validateOnBlur: false,
    mapPropsToValues: () => ({ email: "", password: "" }),
    handleSubmit: async (values, {props, setErrors}) => {
      
        const errors = await props.submit(values);
        if(errors){
            setErrors(errors)
        } else {
          props.onFinish();
        }
    }
})(C);