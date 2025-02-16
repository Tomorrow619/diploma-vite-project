import "./LoginPage.scss"
// import { SLoginPage } from "./LoginPage.style";

import { AppButton } from "../../components/UI/AppButton/AppButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "../../store/API/authAPI";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../../components/UI/Header/Header";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import * as yup from "yup";
import { SHeader } from "../../components/UI/Header/Header.style";





const AuthFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Email обязателен")
    .email("Введите корректный email")
    .min(4, "Введите минимум 4 символа")
    .max(30, "не более 30 символов"),

  userPassword: yup
    .string()
    .required("Пароль обязателен")
    .min(6, "Минимум 6 символов")
    .max(30, "не более 30 символов"),
});
interface ILoginPage {
  userEmail: string;
  userPassword: string;
}

export const LoginPage = () => {

  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
 const {
   control,
   handleSubmit,
   formState: { errors },
 } = useForm<ILoginPage>({
   resolver: yupResolver(AuthFormScheme),
   defaultValues: {
     userEmail: `${user?.email ? user.email : ""}`,
     userPassword: `${user?.password ? user.password : ""}`,
   },
 });
 const [loginUser, { data: userData }] = useLoginUserMutation();

 const formData: SubmitHandler<ILoginPage> = async (data) => {
   const payloud = {
     email: data.userEmail,
     password: data.userPassword,
   };
   loginUser(payloud);
 };
 useEffect(() => {
   if (userData?.user_id) {
     navigate("/main-page");
     localStorage.setItem("userLoginData",JSON.stringify(userData.user_id))
   }
 }, [userData]);



  return (
   
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(formData)}>
      <Controller
          control={control}
          name="userEmail"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваша почта"
              inputType="email"
              {...field}
              isError={Boolean(errors.userEmail)}
              errorText={errors.userEmail?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
         <Controller
          control={control}
          name="userPassword"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              {...field} //onChange,onBlur
              isError={Boolean(errors.userPassword)}
              errorText={errors.userPassword?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false} />
      </form>
      <a href="#">Забыли пароль?</a>
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        
        </div>
      </div>
    
  );
};