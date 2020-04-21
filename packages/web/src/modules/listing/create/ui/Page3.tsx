import * as React from 'react'
import { Field } from "formik";
// import { Form } from "antd";
import { InputField } from "../../../shared/InputField";
import { TagField } from '../../../shared/TagField';

export const Page3 = () => (
    <React.Fragment>
        <Field label="Latitude" name="latitude" placeholder="Latitude" component={InputField} />
        <Field label="Longtitude" name="longitude" placeholder="Longtitude" component={InputField} />
        <Field label="Amenities" name="amenities" placeholder="Amenities"  component={TagField} />
    </React.Fragment>
);