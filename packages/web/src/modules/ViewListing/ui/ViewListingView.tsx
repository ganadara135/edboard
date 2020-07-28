import * as React from "react";
import { ListYearController,  } from "@abb/controller";
// import { RouteComponentProps, Link } from "react-router-dom";
import { Form, Field, FormikProps, withFormik } from 'formik';
import { Button } from 'antd';
// const { Meta } = Card;
import { SelectField } from "../../shared/SelectField";
// import * as Yup from "yup";

export interface FormValues {  // extends InsertMonthMutationVariables{
  yearName: number;
}
interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<FormValues | null>;
  // submit: (year: number) => Promise<number>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
 
  render() {
    // const {
    //   match: {
    //     params: { yearName }
    //   }
    // } = this.props;
    return (
      <ListYearController yearName={1970}>
        {(data) => {
          if (data.loading) {
            return <div style={{ display: "flex", justifyContent: "center" }}>...loading</div>;
          }
          console.log("data.listing : ", data.listing)
          return (
            <Form style={{ display: "flex", justifyContent: "center" }}> 
              <div style={{width: 300, marginLeft: 100, marginRight: 20}}>
                <Field 
                  as="select" 
                  name="yearName"
                  label="연도선택" 
                  // placeholder="연도선택"
                  defaultValue={2020}
                  listing={data.listing}
                  component={SelectField}
                />
              </div>
              <div>
                <Button type="primary" htmlType="submit" className="">
                  선택버튼
                </Button>
              </div>
            </Form>
          )
        }}
      </ListYearController>
    );
  }
}

// const yearNameSchema = Yup.object().shape({
//   yearName: Yup.number().min(2018, 'Too Short!').max(2030, 'Too Long!').required('Required'),
// });

export const ViewListingView = withFormik<Props, FormValues>({
  // validationSchema : yearNameSchema,
  mapPropsToValues: () =>  ({ yearName: 2020, }),
  handleSubmit: async (values, {props, setErrors}) => {
    console.log("handleSubmit: ", values)
    const errors = await props.submit(values);
    
    if(errors){
      console.log("error : ", errors)
      setErrors(errors as any)
    } else {
      props.onFinish();
    }
  }
})(C);