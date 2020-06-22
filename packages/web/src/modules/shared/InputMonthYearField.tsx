import * as React from "react";
import { FieldProps,  } from "formik";
import { Form,  } from 'antd';
// import moment from "antd/node_modules/moment";
import DatePicker from 'react-datepicker'
// import { CalendarContainer} from 'react-datepicker';


export const InputMonthYearField: React.SFC<
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
    console.log("yearName : ", yearName);
    console.log("field : ", field)
    console.log("props : ", props)
    // const {yearName} = props;


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
            <DatePicker 
                {...field}
                {...props}  
                // {...props.meta}
                dateFormat={pickerVal==='month' ? "MM" : "yyyy"}
                showMonthYearPicker={pickerVal==='month' ? true : false}
                showYearPicker={pickerVal==='year' ? true : false}
                // showMonthYearDropdown
                

                // {...props.prefix} 
                // {...props.children} 
                // placeholder={field.name}
                // onChange={(newValue) => console.log(field.value=newValue?.getMonth())} // setFieldValue(field.name, newValue)}
                selected={typeof field.value !== 'number' ? field.value : new Date(
                    pickerVal === 'month' ? yearName as number : (field.value === 0 ? yearName : field.value) as number,
                    pickerVal === 'month' ? field.value : 0)}
                onChange={(newValue) => {
                    pickerVal === 'month' ? 
                    setFieldValue(field.name, newValue?.getMonth()) : 
                    setFieldValue(field.name, newValue?.getFullYear())
                }}
            />  
        </Form.Item>
    );
};