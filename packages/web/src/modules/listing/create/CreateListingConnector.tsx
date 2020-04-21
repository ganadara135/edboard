import * as React from 'react'
import {  RouteComponentProps } from 'react-router-dom';
import {   Formik } from 'formik';
import { Form as AntForm,  Button } from 'antd';
// import { InputField } from "../../../modules/shared/InputField";
import { Page1 } from './ui/Page1';
import { Page2 } from './ui/Page2';
import { Page3 } from './ui/Page3';


interface FormikValues {
    name: string;
    category: string;
    description: string;
    price: number;
    beds: number;
    guests: number;
    latitude: number;
    longitude: number;
    amenities: string[];
}

interface State {
    page: number
}

const pages = [<Page1 />, <Page2 />, <Page3 />];

export class CreateListingConnector extends React.PureComponent<
    RouteComponentProps<{}>, State
> {
    state = {
        page: 0
    }
    submit = (values: any ) => {
        console.log("values : ", values);
    };

    nextPage = () => this.setState(state => ({ page: state.page + 1 }))

    render() {
     
        return (
            <Formik<FormikValues>
             initialValues={{
                name: "",
                category: "",
                description: "",
                price: 0,
                beds: 0,
                guests: 0,
                latitude: 0,
                longitude: 0,
                amenities: []
             }} 
             onSubmit={this.submit}
            >
            {() => (
            // <Form style={{ display: "flex" }}> 
                <div style={{width: 400, margin:'auto'}}>
                
                {pages[this.state.page]}
                            
                <AntForm>
                    <div 
                        style={{
                            display: "flex",
                            justifyContent: "flex-end"
                        }} 
                    >
                    {this.state.page === pages.length - 1 ? (
                        // htmlType="submit"  이 onSubmit() 을 호출
                        <Button type="primary" htmlType="submit"> 
                            create listing
                        </Button>
                    ) : (
                        <Button type="primary" onClick={this.nextPage}>
                            next page
                        </Button>
                    )}
                    </div>
                </AntForm>
                </div>
            //  </Form> 
            )}
            </Formik>
        );
    }
}