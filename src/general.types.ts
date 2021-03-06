import type { CSSProperties, ReactElement } from "react";

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DataState = 'done' | 'loading' | 'error';

export type ColorTypes = 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info';

export type ObjMap<S extends string, T = string> = { [K in S]: T };

export type AnyFct = () => any;

export type NavItem = { onClick?: AnyFct, children: jsx_ | string };

export type jsx_ = ReactElement | JSX.Element;

export type ComponentBase = {
    className?: string;
    style?: CSSProperties;
}