import { ComponentProps } from "react";

type divProps = ComponentProps<"div">;
export function ContainerSearch({ ...props }: divProps) {
  return (
    <div
      className="flex items-center w-[400px] h-[50px] bg-white-100 border-2 border-white-200 focus-within:border-white-800 focus-within:w-[470px] transition-all duration-650"
      {...props}
    />
  );
}

type inputProps = ComponentProps<"input">;
export function InputSearch({ ...props }: inputProps) {
  return (
    <input
      className="bg-white-100 text-white-800 w-full px-3 py-1 outline-0"
      {...props}
    />
  );
}
