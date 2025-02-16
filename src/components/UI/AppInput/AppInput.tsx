import React from "react";
import { SAppInput, SErrorText } from "./AppInput.style";

type TAppInput = {
  inputType: "text" | "tel" | "password" | "email"| "search";
  inputPlaceholder: string;
  inputValue?: string;
  isError?: boolean;
  errorText?: string;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void, 
}& React.InputHTMLAttributes<HTMLInputElement>;




export const AppInput =  React.forwardRef<HTMLInputElement, TAppInput> (({
  inputType,
  inputPlaceholder,
  inputValue,
  isError,
  errorText,
  onChange,
  ...props
},ref ) => {
  return (
    <>
      <SAppInput
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
        ref={ref}
        {...props}
      />
      {isError && <SErrorText> {errorText} </SErrorText>}
    </>
  );
});
