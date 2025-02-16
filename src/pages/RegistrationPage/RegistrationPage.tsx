

import "./Registration.scss"

import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { IRegisterUserPayload, useRegisterUserMutation } from "../../store/API/authAPI";
import { SubmitHandler } from "react-hook-form";
import { changeUser } from "../../store/userSlice";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/AppButton/AppButton";

const registrationFormScheme = yup.object({
    name: yup.string().required(),
    email: yup
      .string()
      .email("Введите корректный email")
      .required("Введите email"),
  
    phone_number: yup.string().required("Введите номер телефона"),
    password: yup
      .string()
      .min(4, "Пароль должен быть не менее 4 символов")
      .required("Обязательное поле"),
    user_city: yup.string().required("Введите город"),
  });
  






export const RegistrationPage = ()=> {

    const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerUser] = useRegisterUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserPayload>({
    resolver: yupResolver(registrationFormScheme),
    // mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      user_city: "",
    },
  });
  const formData: SubmitHandler<IRegisterUserPayload> = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      password: data.password,
      user_city: data.user_city,
    };
    try {
      const response = await registerUser(payload).unwrap();

      if (response.user_id) {
        dispatch(changeUser(payload));
        navigate("/");
      }
    } catch (error) {
      console.error("Ошибка" + error);
    }
  };
    return(

        
<div className="RegistrationPage">
<h1>Регистрация</h1>
<form onSubmit={handleSubmit(formData)}>
<Controller
          control={control}
          name="name"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваше имя"
              inputType="text"
              inputValue={field.value}
              onChange={field.onChange}
              isError={errors.email ? true : false}
              errorText={errors.name?.message}
            />
          )}
        />
  <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите почту"
              inputType="email"
              inputValue={field.value}
              onChange={field.onChange}
              isError={errors.email ? true : false}
              errorText={errors.name?.message}
            />
          )}
        />
    <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваш номер"
              inputType="text"
              {...field}
              isError={errors.phone_number ? true : false}
              errorText={errors.phone_number?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
    <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.name)}
              errorText={errors.password?.message}
            />
          )}
        />
   <Controller
          control={control}
          name="user_city"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваш город"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.user_city)}
              errorText={errors.user_city?.message}
              inputType="text"
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

    )
}
