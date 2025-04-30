import React from "react";

type buttonEyeProps = {
  content?: React.ReactNode;
  showPassword: boolean;
  type: boolean;
  setPassword?: (value: React.SetStateAction<boolean>) => void;
  setType?: (value: React.SetStateAction<boolean>) => void;
};

function ButtonEye({
  content,
  setPassword,
  setType,
  showPassword,
  type,
}: buttonEyeProps) {
  function setEye({ type, showPassword }: buttonEyeProps) {
    if (setPassword && setType) {
      setPassword(!showPassword);
      setType(!type);
    }
  }
  return (
    <button
      className="cursor-pointer"
      type="button"
      onClick={() => setEye({type, showPassword})}
    >
      {content}
    </button>
  );
}
export default ButtonEye;
