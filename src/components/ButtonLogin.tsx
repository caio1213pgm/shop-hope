import { buttonProps } from "./Button";

function ButtonLogin({...props}: buttonProps) {
  return <button className="w-full bg-white text-2xl px-2 py-3 rounded-xl disabled:bg-white-200 enabled:cursor-pointer" {...props}/>
}

export default ButtonLogin;
