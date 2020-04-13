import * as React from "react";
import {    Icon, Button, Checkbox } from 'antd';
import { withFormik,     FormikProps, Field, Form } from 'formik';
import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@abb/controller";

interface FormValues {
    email: string;
    password : string;
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
          {/* <Form onSubmit={this.handleSubmit} className="login-form"> */}
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
              <Checkbox>Remember me</Checkbox>
            
                Forgot password
            
            </div>
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Register
              </Button>
            </div>
            <div>
              {/* Or <a href="register">Login now!</a> */}
              Or <Link to="/login ">Login now!</Link>
            </div>
          </div>
          </Form>
        );
    }
}





export const RegisterView = withFormik<Props, FormValues>({
    validationSchema: validUserSchema,
    // validateOnChange : false,
    // validateOnBlur: false,
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