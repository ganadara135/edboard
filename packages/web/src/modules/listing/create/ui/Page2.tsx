import * as React from 'react'
import { Field } from "formik";
// import { Form } from "antd";
import { InputField } from "../../../shared/InputField";

export const Page2 = () => (
    <React.Fragment>
        <Field 
            label="Price" 
            name="price" 
            placeholder="Price" 
            component={InputField} 
            useNumberComponent={true}
        />
        <Field 
            label="Beds" 
            name="beds" 
            placeholder="Beds" 
            component={InputField} 
            useNumberComponent={true}
            />
        <Field 
            label="Guests" 
            name="guests" 
            placeholder="Guests" 
            component={InputField}
            useNumberComponent={true}
        />
    </React.Fragment>
);