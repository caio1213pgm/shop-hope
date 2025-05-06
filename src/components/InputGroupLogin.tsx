import { ComponentProps } from "react";

type divProps = ComponentProps<"div">;
export function ContainerLogin({...props}: divProps){
    return(
        <div {...props} className="flex px-2 py-3 w-full focus-within:w-full focus-within:border-white-600 bg-white border-3 border-white-200 transition-all duration-650 rounded-2xl mt-1 "/>
    )
}

type inputProps = ComponentProps<"input">;
export function InputLogin({ ...props }: inputProps) {
  return <input {...props} className="w-full outline-0" />;
}
