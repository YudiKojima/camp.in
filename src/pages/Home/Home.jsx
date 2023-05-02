import React from 'react'
import logo from '../../assets/logo.svg'
import login from '../../assets/log-in.svg'
import background from '../../assets/side-image.jpg'

import './styles.css'

function Home() {
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
                    </div>
                    <div className='formPassword'>
                        <label>Senha</label>
                        <input type="password" placeholder='Digite sua senha'/>
                    </div>
                </div>
                <div className='formDetails'>
                    <div className='formChecks'>
                        <input type="checkbox"/>
                        <span>Lembre-me</span>
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