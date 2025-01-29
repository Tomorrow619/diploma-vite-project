import "./LoginPage.scss"
import { SLoginPage } from "./LoginPage.style";
export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <input type="tel" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
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