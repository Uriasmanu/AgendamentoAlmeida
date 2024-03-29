import styled from "styled-components";

const Div = styled.div`
   .form-container {
  width: 350px;
  background-color: #fff;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container button:active {
  scale: 0.95;
}

.form-container .logo-container {
  margin-bottom: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
}

.form-container .social-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.form-container .social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: inherit;
  color: #fff;
  border: none;
  padding: 12px 16px;
  gap: 8px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container .social-button svg {
  width: 22px;
  height: 22px;
  fill: white;
}

.form-container .social-button.facebook {
  background-color: #1778f2;
}

.form-container .social-button.apple {
  background-color: #212121;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-container .form-group input[type="text"],
.form-container .form-group input[type="password"] {
  width: 90%;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid #ccc;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input[type="text"]:focus,
.form-container .form-group input[type="password"]:focus {
  outline: none;
  border-color: #1778f2;
}

.form-container .form-submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  color: #fff;
  background-color: #212121;
  border: none;
  width: 100%;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container .form-submit-btn:hover {
  background-color: #313131;
}

.form-container .link {
  color: #1778f2;
  text-decoration: none;
}

.form-container .forgot-password-link {
  align-self: flex-end;
  margin-top: -20px;
}

.form-container .signup-link {
  align-self: center;
  font-weight: 500;
}

.form-container .signup-link .link {
  font-weight: 400;
}

.form-container .link:hover {
  text-decoration: underline;
}

.form-container .line {
  width: 100%;
  height: 1px;
  background-color: #212121;
  opacity: 0.1;
}


`
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Div>
            <div className="form-container">
                <div className="logo-container">
                    Bem vindo(a)
                </div>


                <div className="line"></div>
                <form class="form">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input placeholder="Enter your email" type="text" />
                    </div>

                    <div className="form-group">
                        <label for="password">Senha</label>
                        <input name="password" placeholder="Enter your password" type="password" />
                    </div>

                    <Link to="/administracao">
                        <button type="submit" className="form-submit-btn">Confirmar</button>
                    </Link>
                </form>

                <a className="forgot-password-link link" href="#">Esqueci a senha</a>

            </div>
        </Div>
    )
}

export default Login;