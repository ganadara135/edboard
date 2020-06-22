import * as React from "react";
import { FieldProps,  } from "formik";
import { Form,  } from 'antd';
// import moment from "antd/node_modules/moment";
import DatePicker from 'react-datepicker';


export const InputMonthField: React.SFC<
    FieldProps<any> & { prefix: React.ReactNode, label?: string, pickerVal?: string }
> = ({
    field: {onChange, ...field},
    form: { touched, errors, setFieldValue },
    label,
    // pickerVal = false,
    ...props
}) => {

    const errorMsg = touched[field.name] && errors[field.name];

    const Comp = DatePicker;

    return (
        <Form.Item 
            label={label}
            help={errorMsg}
            validateStatus={errorMsg ? "error" : undefined } 
            noStyle={false}
        >
            <Comp 
                {...field}
                {...props}  
                // {...props.meta}
                dateFormat="M"
                showMonthYearPicker
                showPopperArrow={true}
                calendarClassName="rasta-stripes"
                // {...props.prefix} 
                // {...props.children} 
                // placeholder={field.name}
                // onChange={(newValue) => console.log(field.value=newValue?.getMonth())} // setFieldValue(field.name, newValue)}
                selected={field.value}
                onChange={(newValue) => {
                    setFieldValue(field.name, newValue);
                    console.log(newValue, " / ", field.value);
                }}
            />  
        </Form.Item>
    );
};