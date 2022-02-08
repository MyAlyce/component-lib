import classNames from "classnames";
import React, {  } from "react";
import { Spinner } from "../..";
import { Button } from "../../components/Button/Button";
import { TextInput } from "../../forms/TextInput/TextInput";
import type { ComponentBase, jsx_ } from "../../general.types";
import { gradients, grFrom, grTo } from "./LoginGradients";

type ThirdPartyBtnProps = { name: string; logo: jsx_; onClick: () => any; };



export type LoginPageProps = {
    isLoading?: boolean;
    thirdPartyLogins?: ThirdPartyBtnProps[];
    useRegularLogin?: boolean;
    brand?: jsx_;
    companyName?: string;
    /** Applies background gradient. Need to use all 3 properties `gradient`, `bgGradientFrom`, & `bgGradientTo` to activate the gradient. */
    gradient?: keyof typeof gradients;
    bgGradientFrom?: keyof typeof grFrom;
    bgGradientTo?: keyof typeof grTo;

    /** Function will render a sign-up button */
    onSignUpClick?: () => any;

    /** Function to fire when login button is pressed */
    onLoginClick?: (credentials: { email: string; password: string; }) => any;
} & ComponentBase;

export function LoginPage({
    thirdPartyLogins, useRegularLogin, brand, companyName,
    bgGradientFrom, bgGradientTo, onLoginClick,
    isLoading, gradient, onSignUpClick,
    className, style
}: LoginPageProps) {
    // https://github.com/BuckleUp-Health/BuckleUp-PWA/blob/main/frontend/views/Login.view.tsx
    // const [s, setState] = useState({ loading: false, failedLoginNotify: false });
    
    const inputParentClass = 'rounded-md text-sm font-medium';
    const inputClass = 'py-2.5 pl-3 text-base font-semibold ' + (isLoading ? 'bg-gray-200' : 'bg-gray-50');
    const useGradient = bgGradientFrom && bgGradientTo && gradient;
    
    return <div
        className={classNames(
            "h-full w-full py-14 px-4",
            useGradient && gradients[gradient],
            useGradient && grFrom[bgGradientFrom],
            useGradient && grTo[bgGradientTo],
            className,
        )}
        style={style}
    >

        <div className="flex flex-col items-center justify-center">
            {brand}

            <div className="bg-white shadow rounded lg:w-2/3 md:w-3/4 max-w-lg w-full p-10">
                <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                    Login to {companyName || 'your account'}
                </p>
                {onSignUpClick && <p tabIndex={0} className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                    Dont have account?
                    <a
                        onClick={isLoading ? undefined : onSignUpClick}
                        className={classNames(`
                            hover:text-gray-500 focus:text-gray-500 focus:outline-none
                            focus:underline hover:underline text-sm font-medium leading-none
                            text-gray-800`,
                            isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
                        )}
                    > Sign up here</a>
                </p>}

                <div className="mt-4"/>
                {thirdPartyLogins?.map(x => <ThirdPartyBtn {...x} disabled={isLoading} />)}
                
                {thirdPartyLogins && useRegularLogin && <div className="w-full flex items-center justify-between py-5">
                    <hr className="w-full bg-gray-400" />
                    <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                    <hr className="w-full bg-gray-400" />
                </div>}

                {useRegularLogin && <>
                    <TextInput
                        label="Email"
                        className={inputParentClass}
                        inputClassName={inputClass}
                        disabled={isLoading}
                    />
                    <TextInput 
                        label="Password"
                        className={"mt-4 " + inputParentClass}
                        inputClassName={inputClass} type="password"
                        disabled={isLoading}
                    />
                    
                    <div className="mt-8">
                        <Button
                            size="auto"
                            type="primary"
                            className="font-bold leading-none border rounded h-12"
                            disabled={isLoading}
                            onClick={onLoginClick && (() => onLoginClick({} as any))}
                        >{isLoading ? <Spinner size="xs" className="m-auto"/> : 'Log In'}</Button>
                    </div>
                </>}
            </div>
        </div>
    </div>;
}

const ThirdPartyBtn = ({ 
    disabled, name, logo
}: ThirdPartyBtnProps & { disabled?: boolean; }) => {
    return <Button
        size="auto"
        outline
        type="secondary"
        disabled={disabled}
        className="py-2.5 px-3 rounded-md flex items-center mt-3.5"
    >
        {logo}
        <p className="text-base font-medium ml-4">Login With {name}</p>
    </Button>;
};
