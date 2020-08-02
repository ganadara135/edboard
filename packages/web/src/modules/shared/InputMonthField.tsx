import * as React from "react";
import { FieldProps,  } from "formik";
import { Form,  } from 'antd';
// import moment from "antd/node_modules/moment";
import DatePicker from 'react-datepicker'
// import { CalendarContainer} from 'react-datepicker';


export const InputMonthField: React.SFC<
    FieldProps<any> & { prefix: React.ReactNode, label?: string, pickerVal?: string, yearName?: number }
> = ({
    field: {onChange, ...field},
    form: { touched, errors, setFieldValue },
    label,
    pickerVal = 'month',
    yearName,
    ...props
}) => {

    const errorMsg = touched[field.name] && errors[field.name];

    // const Comp = DatePicker;

    // console.log("field : ", field)
    // console.log("props : ", props)
    // const {yearName} = props;
    console.log("field.value: ", field.value)
    console.log("typeof: ", typeof field.value)
    return (
        <Form.Item 
            label={label}
            help={errorMsg}
            validateStatus={errorMsg ? "error" : undefined } 
            noStyle={false}
        >
            <DatePicker 
                {...field}
                {...props}
                dateFormat="MM"
                showMonthYearPicker                   
                withPortal
                // portalId="root-portal"
                // scrollableYearDropdown

                selected={typeof field.value !== 'number' ? field.value : new Date(yearName as number,field.value)}
                // selected={field.value}
                onChange={(newValue) => {
                    setFieldValue(field.name, newValue?.getMonth());
                    console.log("kkk: ", newValue);
                }}
            />
        </Form.Item>
    );
};