import React, { MouseEventHandler, ReactElement } from "react";
import type { ComponentBase, jsx_ } from "../../general.types";
import { Backdrop } from "../Backdrop/Backdrop";

type ModalProps = {
    zIndex?: number;
    header?: string | jsx_;
    content?: jsx_;
    onClose?: MouseEventHandler
} & ComponentBase;

export function Modal({
    zIndex = 1004, className, style = {}, header, onClose
}: ModalProps) {
    return <>
        <Backdrop zIndex={zIndex - 1}/>
        <div 
            className="fixed w-full inset-0 overflow-hidden flex justify-center items-center 
            
                h-100
                animated fadeIn faster
            "   // TODO animation
            style={{zIndex, ...style}}
        >
            <div
                className="border border-secondary-300 shadow-lg bg-white w-11/12 md:max-w-md mx-auto rounded overflow-y-auto"
            >
                <div className="py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Header</p>

                        {/* CLOSE BTN */}
                        <div className="cursor-pointer z-50">
                            <svg 
                                className="fill-current text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                            >
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="my-5">
                        <p>Inliberali Persius Multi iustitia pronuntiaret expeteretur sanos didicisset laus angusti ferrentur arbitrium arbitramur huic desiderent.?</p>
                    </div>

                    <div className="flex justify-end pt-2">
                        <button
                            className="focus:outline-none px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">Cancel</button>
                        <button
                            className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}