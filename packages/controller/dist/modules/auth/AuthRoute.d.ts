import * as React from 'react';
import { ChildProps } from 'react-apollo';
import { RouteProps } from 'react-router';
import { MeQuery } from '../../schemaTypes';
declare type Props = RouteProps;
export declare class C extends React.PureComponent<ChildProps<Props, MeQuery>> {
    renderRoute: (routeProps: any) => any;
    render(): any;
}
export declare const AuthRoute: any;
export {};
