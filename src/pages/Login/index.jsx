import styled from "styled-components";
import bgImage from "./assets/bg-login-desktop.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginContainer = styled.section`    
    background-image: url(${bgImage});
    background-size: cover;
    background-repeat: no-repeat;   
    background-color: #515D7D;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    & .login {
        text-align: center;
        & h1 {
            font-size: 45px;
            line-height: 45px;
            letter-spacing: 1px;
            color: white;
        }
        & h2 {
            font-size: 32px;
            line-height: 32px;
            letter-spacing: 0.75px;             
            font-weight: normal;
            color: #24A6EE;
            margin-bottom: 20px;
        }
        & .containerForm {
            background-color: #F5F7FB;
            padding: 20px 30px 30px 30px;
            border-radius: 7px;
            & form {
                display: flex;
                flex-direction: column;
                gap: 15px;
                & input {
                    border: 1px solid #B3B3B3;
                    border-radius: 5px;
                    color: #333333;
                    padding: 10px;
                    font-size: 11px;
                    line-height: 13px;
                    letter-spacing: 0.75px;
                    font-weight: 700;                     
                    &::placeholder {
                        color: #808080;
                    }
                }
                & button {
                    background-color: #24A6EE;
                    border: none;
                    border-radius: 5px;
                    color: #FFFFFF;
                    padding: 10px;
                    font-size: 12px;
                    line-height: 13px;
                    letter-spacing: 0.75px;
                    font-weight: 600;
                    &:hover {
                        background-image: linear-gradient(to right,#24A6EE, #d44487);
                    }
                }
            }

        }
        
    }

    @media (max-width: 525px) {
        padding: 0 20px 0 20px;
    }

`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(userpassword);
        navigate('/dashboard');
    }  


    return (
        <LoginContainer>
            <div className="login">
                <h1>SISTEMA DE GESTÃO</h1>
                <h2>de processos organizacionais</h2>
                <div className="containerForm">
                    <form onSubmit={handleSubmit}>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Name"
                            value = {username}
                            onChange={(e) => setUsername(e.target.value)} 
                            />
                        <input 
                            id="password" 
                            type="password"
                            placeholder="Password"
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)} 
                            />
                        <button type="submit">LOGIN</button>
                    </form>
                </div>                
            </div>
        </LoginContainer>
    );
}

export default Login;