import * as React from "react";
import { FieldProps,  } from "formik";
import { Form,  } from 'antd';
// import moment from "antd/node_modules/moment";
import DatePicker from 'react-datepicker'
// import { CalendarContainer} from 'react-datepicker';




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

    // const myContainer = ( className: any, children: any ) : any => {
    //     return (
    //       <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
    //         <CalendarContainer className={className} >
    //           <div style={{ background: "#f0f0f0" }}>
    //             What is your favorite day?
    //           </div>
    //           <div style={{ position: "relative" }}>{children}</div>
    //         </CalendarContainer>
    //       </div>
    //     );
    // };

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
                dateFormat="MM/yyyy"
                // showMonthYearPicker={true}
                showMonthYearPicker
                showMonthYearDropdown
                
                // showTwoColumnMonthYearPicker={true}
                // showPopperArrow={true}
                calendarClassName="rasta-stripes"
                // {...props.prefix} 
                // {...props.children} 
                // placeholder={field.name}
                // onChange={(newValue) => console.log(field.value=newValue?.getMonth())} // setFieldValue(field.name, newValue)}
                selected={typeof field.value !== 'number' ? field.value : new Date(2020,field.value)}
                onChange={(newValue) => {
                    setFieldValue(field.name, newValue?.getMonth());
                    console.log(newValue, " / ", newValue?.getMonth());
                    console.log(newValue, " / ", field.value);
                }}
            />  
        </Form.Item>
    );
};