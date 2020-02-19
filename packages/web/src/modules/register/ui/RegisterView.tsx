import * as React from "react";
import { Form as AntForm, Icon, Button, Checkbox } from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";

interface FormValues {
    email: string;
    password : string;
}
interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
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
       
            <AntForm>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </AntForm>
            <AntForm>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Register
              </Button>
            </AntForm>
            <AntForm>
              Or <a href="">Login now!</a>
            </AntForm>
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
        }
    }
})(C);