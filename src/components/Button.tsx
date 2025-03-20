import { ComponentProps } from "react";

export type buttonProps = ComponentProps<"button">

function Button({...props}: buttonProps) {
    return (
        <button {...props} className="bg-blue-500 text-white px-5 py-1.5 rounded cursor-pointer"/>
    )
}

export default Button;