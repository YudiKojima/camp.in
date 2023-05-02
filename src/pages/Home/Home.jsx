import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import login from '../../assets/log-in.svg'
import background from '../../assets/side-image.jpg'
import { FaEye } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";

import './styles.css'

function Home() {

    const [showPassword, setShowPassword] = useState(true);

  return (
    <main>
        <div className='leftHome'>
            <div className='headerHome'>
                <img src={logo} alt="logo" />
            </div>
            <div className='formHome'>
                <div className='formHeader'>
                    <div className='loginLogo'>
                        <img src={login} alt="logo login" />
                        <h1>Faça seu login</h1>
                    </div>
                    <span>Entre com suas informações de cadastro</span>
                </div>
                <div className='formLogin'>
                    <div className='formEmail'>
                        <label>E-mail</label>
                        <input type="text" placeholder='Digite seu e-mail'/>
                        <div className='emailIcon'>
                            <AiOutlineMail />
                        </div>
                    </div>
                    <div className='formPassword'>
                        <label>Senha</label>
                        <input type={showPassword ? 'password' : 'text'} placeholder='Digite sua senha'/>
                        <button onClick={e => setShowPassword(!showPassword)}><FaEye /></button>
                        <div className='passwordIcon'>
                            <FiLock />
                        </div>
                    </div>
                </div>
                <div className='formDetails'>
                    <div className='formChecks'>
                        <input type="checkbox" id='checkbox'/>
                        <label for='checkbox'>Lembre-me</label>
                    </div>
                    <div className='formForgotPassword'>
                        <span>Esqueci minha senha</span>
                    </div>
                </div>
                <div className='formButton'>
                    <button>ENTRAR</button>
                </div>
                <div className='formRegister'>
                    <p>Não tem uma conta?</p>
                    <span>Registre-se</span>
                </div>
            </div>
        </div>
        <div className='backgroundImage'>
            <img src={background} alt="backgroundImage" />
        </div>
    </main>
  )
}

export default Home