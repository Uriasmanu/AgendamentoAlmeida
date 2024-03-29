import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../../context";

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
  position: absolute;
  top: 10%;
  left: 40%;
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

.agenda{
    display: flex;
    justify-content: space-around;
}

@media screen and (max-width: 600px){
    .form-container {
    width: 88vw;
    height: 68vh;
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

    .agenda{
        display: flex;
    justify-content: space-around;
    flex-direction: column;


        input{
            height: 33px;
            margin-bottom: 10%;
            border: 1px solid #ccc;
        }
    }
}
`

const Motorista = () => {
  const {
    nome, 
    placa,
    data,
    hora,
    handleNome, 
    handlePlaca,  
    handleData, 
    handleHora,
    handleSubmit
  
   } = useContext(MyContext);

    return (
        <Div>
            <div className="form-container">
                <div className="logo-container">
                    Agende o melhor dia e horário para o check-list
                </div>

                <div className="line"></div>
                <form className="form" onSubmit={handleSubmit} >

                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input 
                        type="text"
                        value={nome}
                        onChange={handleNome}
                        required
                        />
                    </div>

                    <div className="form-group">

                        <label htmlFor="placa">Placa:</label>
                        <input 
                        type="text" 
                        value={placa}
                        onChange={handlePlaca}
                        required

                        />

                    </div>

                    <div className="form-group">

                        <div className="agenda">
                            <label htmlFor="data">Data:</label>
                            <input 
                            type="date" 
                            value={data}
                            onChange={handleData}
                            required

                            />


                            <label htmlFor="hora">Hora:</label>
                            <input 
                            type="time" 
                            value={hora}
                            onChange={handleHora}
                            required

                            />
                        </div>
                    </div>

                    <button type="submit" className="form-submit-btn">Confirmar</button>
                </form>
            </div>
        </Div>
    )
}

export default Motorista;








