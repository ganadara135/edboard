import * as React from "react";
// import { Form as AntForm, Icon, Button, Checkbox } from 'antd';
import { View, Button } from "react-native";
// import {  } from "react-native-elements";
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
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
       const { handleSubmit, errors} = this.props;
       // console.log(errors);
        return (
          // <Form style={{ display: "flex" }}> 
          <View style={{marginTop: 200}}>
            <Field  name="email"  placeholder="Email" component={InputField} />
            <Field  
              name="password"
              secureTextEntry={true}
              placeholder="Password"
              component={InputField}
            />
            <Button title='Submit' onPress={handleSubmit as any}>
            </Button>

            </View>
          // </Form>
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