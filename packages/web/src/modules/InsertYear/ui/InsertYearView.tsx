import * as React from "react";
import { Icon, Button } from 'antd';
import { withFormik, ErrorMessage,  FormikProps, Field, Form } from 'formik';
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
      //  console.log(" message : ", message)

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
            <Field  
              name="yeargoals.year"
              label="목표연도"
              useNumberComponent={true}
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            <ErrorMessage name="yeargoals.year" render={msg => <div style={{ color:'red'}}>{msg}</div>} />
            <Field  
              name="yeargoals.goal"
              label="목표전력"
              useNumberComponent={true}
              // as: object
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            <ErrorMessage name="yeargoals.goal" render={msg => <div style={{ color:'red'}}>{msg}</div>} />
            <Field  
              name="yeargoals.description"
              label="설명"
              prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
              }
              component={InputField}
            />
            {/* <ErrorMessage name="message" render={msg => <div style={{ color:'red'}}>{msg}</div>} /> */}
            {errors && touched ? ( <div style={{color:'red', margin:'auto'}}>{message}</div> ) : null}

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
  edboardName: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  yeargoals: Yup.object<YearGoalInput>({
    year: Yup.number().min(1, 'Too Short!').max(9999, 'Too Long!').required(),
    goal: Yup.number().min(1, 'Too Short!').max(9999, 'Too Long!').required(),
  }),

});

export const InsertYearView = withFormik<Props, FormValues>({
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