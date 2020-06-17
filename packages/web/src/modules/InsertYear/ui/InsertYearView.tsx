import * as React from "react";
import { Icon, Button } from 'antd';
import { withFormik,  FormikProps, Field, Form } from 'formik';
// import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap, InsertYearMutationVariables, YearGoalInput } from "@abb/controller";
import * as Yup from "yup";

interface FormValues extends InsertYearMutationVariables{
  edboardName: string;
  yeargoals: YearGoalInput;
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
       console.log(" message : ", message)
      //  console.log(" errors.edboardName : ", errors.edboardName)
      //  console.log(" errors.yeargoals : ", errors.yeargoals)
      //  const { message } = errors;
        return (
          <Form style={{ display: "flex" }}> 
          <div style={{width: 400, margin:'auto'}}>
            <Field  
              name="edboardName"
              label="게시판명"
              prefix={
                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
              }
              component={InputField}
            />
            {/* <ErrorMessage name="edboardName" render={msg => <div>{msg}</div>} /> */}
            <Field  
              name="yeargoals.year"
              label="목표연도"
              useNumberComponent={true}
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            <Field  
              name="yeargoals.goal"
              label="목표전력"
              useNumberComponent={true}
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            <Field  
              name="yeargoals.description"
              label="설명"
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            {errors && touched ? ( <div style={{color:'red', margin:'auto'}}>{message}</div> ) : null}
            {/* <ErrorMessage name="yeargoals.year" />
            <ErrorMessage name="yeargoals.goal" />
            <ErrorMessage name="yeargoals.description" /> */}
            <div>
              <Button type="primary" htmlType="submit" className="">
                연간 목표값 등록
              </Button>
            </div>
          </div>
          </Form>
        );
    }
}

const InserYearSchema = Yup.object().shape({
  edboardName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  // yeargoals: Yup.object().fields
  //   .('Invalid email')
  //   .required('Required'),
});

export const InsertYearView = withFormik<Props, FormValues>({
    // validationSchema: validUserSchema,
    // validateOnChange : false,
    // validateOnBlur: false,
    validationSchema : InserYearSchema,
    mapPropsToValues: () =>  ({ edboardName: "", yeargoals: {
      year: 0, goal: 0, description: ""}
    }),
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