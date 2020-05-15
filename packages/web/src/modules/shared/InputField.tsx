import * as React from "react";
import { FieldProps,  } from "formik";
import { Form, Input, InputNumber } from 'antd';


export const InputField: React.SFC<
    FieldProps<any> & { prefix: React.ReactNode, label?: string, useNumberComponent?: boolean }
> = ({
    field: {onChange, ...field},
    form: { touched, errors, setFieldValue },
    label,
    useNumberComponent = false,
    ...props
}) => {

    const errorMsg = touched[field.name] && errors[field.name];

    const Comp = useNumberComponent ? InputNumber : Input;

    // console.log("...props in InputField 333: ", props)
    // const { prefix } = props;
    // console.log("prefix : ", prefix);
    return (
        <Form.Item 
            label={label}
            help={errorMsg}
            validateStatus={errorMsg ? "error" : undefined } 
        >
            <Comp 
                {...field} 
                // {...props}
                {...props.meta} 
                // {...props.prefix} 
                {...props.children} 
                placeholder={"test"}
                onChange={
                    useNumberComponent 
                    ? (newValue: any) => setFieldValue(field.name, newValue)
                    : onChange
                }
            />     {/* {...props} /> */}
        </Form.Item>
    );
};