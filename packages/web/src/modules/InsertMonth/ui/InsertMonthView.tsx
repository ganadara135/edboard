import * as React from "react";
import {  Button } from 'antd';
// import { Icon } from '@ant-design/icons';
import { withFormik,   FormikProps, Field, Form } from 'formik';
// import { validUserSchema } from "@abb/common";
import { InputMonthField } from "../../shared/InputMonthField";
import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap } from '@abb/controller';
import * as Yup from "yup";


interface FormValues {  // extends InsertMonthMutationVariables{
  month?: number;
  goal: number;
  yearName: number;
  description?: string;
}
interface Props {
    onFinish: () => void;
    submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {
    
  render() {
    const {  errors, touched} = this.props;

    const { message }: any = errors;
    console.log(" errors props : ", errors)

    return (
      <Form style={{ display: "flex" }}> 
      <div style={{width: 700, margin:'auto'}}>
        <Field  
          name="month"
          label="월"
          // useNumberComponent={true}
          // prefix={
          //   <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
          // }
          style={{width: 700, height:'100%', }}
          component={InputMonthField}
        />
        <Field  
          name="goal"
          label="목표전력"
          useNumberComponent={true}
          // prefix={
          //   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
          // }
          component={InputField}
        />
        {/* <ErrorMessage name="yeargoals.year" render={msg => <div style={{ color:'red'}}>{msg}</div>} /> */}
        <Field  
          name="yearName"
          label="해당년도"
          useNumberComponent={true}
          // as: object
          // prefix={
          //   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
          // }
          component={InputField}
        />
        {/* <ErrorMessage name="yeargoals.goal" render={msg => <div style={{ color:'red'}}>{msg}</div>} /> */}
        <Field  
          name="description"
          label="설명"
          // prefix={
          //   <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
          // }
          component={InputField}
        />
        {/* <ErrorMessage name="message" render={msg => <div style={{ color:'red'}}>{msg}</div>} /> */}
        {errors && touched ? ( <div style={{color:'red', margin:'auto'}}>{message}</div> ) : null}

        <div>
          <Button type="primary" htmlType="submit" className="">
            월 목표값 등록
          </Button>
        </div>
      </div>
      </Form>
    );
  }
}

const InsertMonthSchema = Yup.object().shape({
  month: Yup.number().min(0, 'Too Short!').max(12, 'Too Long!').required('Required'),
  goal: Yup.number().min(1, 'Too Short!').max(9999, 'Too Long!').required('Required'),
  yearName: Yup.number().min(2020, 'Too Short!').max(2030, 'Too Long!').required('Required'),
});

export const InsertMonthView = withFormik<Props, FormValues>({
    // validateOnChange : false,
    // validateOnBlur: false,
    validationSchema : InsertMonthSchema,
    mapPropsToValues: () =>  ({ goal: 0, yearName: 0, }),
    handleSubmit: async (values, {props, setErrors}) => {
        console.log("handleSubmit: ", values)
 
        const errors = await props.submit(values);
        
        if(errors){
          console.log("error : ", errors)
          setErrors(errors)
        } else {
          props.onFinish();
        }
    }
})(C);