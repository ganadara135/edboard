import  * as React from 'react';
import { FieldProps, ErrorMessage } from "formik";
import { Input } from "react-native-elements";


const errStyle = {
    color: "red"
};

export const InputField extends React.Component<FieldProps<any>> {
    onChangeText = (test: string) => {
        const {
            form: { setFieldValue},

        } = this.props;
        this.props.form.setFieldValue()
    };
    render () {
        cnost {
            field,
            form: { touched, errors },
            ...props
        } = this.props;
        const errorMsg = touched[field.name] && errors[field.name];

        return (
            <Input
                placeholder="INPUT WITH ERROR MESSAGE"
                errorStyle={ errStyle }
                errorMessage={errorMsg}
                onChangeText={this.onChangeText}
                value={field.value}
             />
        )
    }
};