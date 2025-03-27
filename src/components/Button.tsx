import { ComponentProps } from "react";

export type buttonProps = ComponentProps<"button">

function Button({...props}: buttonProps) {
    return (
        <button {...props} className="bg-blue-700 text-white px-5 py-1.5 rounded cursor-pointer transition-all duration-500 hover:bg-blue-800 active:scale-150"/>
    )
}

export default Button;