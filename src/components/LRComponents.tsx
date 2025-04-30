import { ComponentProps } from "react";

type labelProps = ComponentProps<"label">;
export function Label({...props}: labelProps) {
  return(
    <label {...props} className="w-full text-2xl text-white" />
  )
}
type divFormProps = ComponentProps<"div">;
export function DivForm({...props}: divFormProps) {
  return (
    <div className="flex flex-col gap-5 w-[550px] p-5 py-10 items-center justify-center bg-blue-700 rounded-xl" {...props}/>
  )
}

type divProps = ComponentProps<"div">;
export function DivContainerLR({...props}: divProps) {
  return (
    <div className="w-full flex justify-center items-center flex-col pt-10" {...props} />
  )
}