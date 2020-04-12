import * as React from "react";
import {   Button, } from 'antd';
import { withFormik,      FormikProps, Field, Form } from 'formik';

import { InputField } from "../../shared/InputField";

import { NormalizedErrorMap } from "@abb/controller";
import { changePasswordSchema } from "@abb/common";

interface FormValues {
    newPassword: string;
}
interface Props {
  //  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;

    submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {

    render() {
      console.log("props in LoginView : ", this.props)
        return (
          <Form > 
          <div style={{width: 400, margin:'auto'}}>
            <Field  
              name="newPassword"
              type="password"
              placeholder="New Password"
              component={InputField}
            />
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                change Password
              </Button>
            </div>
          </div>
          </Form>
        );
    }
}


export const ChangePasswordView = withFormik<Props, FormValues>({
    validationSchema: changePasswordSchema,
    mapPropsToValues: () => ({ newPassword: ""}),
    handleSubmit: async (values, {props, setErrors}) => {
      
        const errors = await props.submit(values);
        if(errors){
            setErrors(errors)
        }
    }
})(C);