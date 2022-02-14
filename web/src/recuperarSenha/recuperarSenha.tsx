import React, { FormEvent, useState } from "react";
import "./recuperarSenha.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

function RecuperarSenha() {

    const [avatarUrl, setAvatarUrl] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const data = new FormData()
        data.append('avatarUrl', avatarUrl)
        console.log(avatarUrl)
    }

    return (
        <div className="mainProfile">
            <Navbar />
            {<form onSubmit={handleSubmit}>
                <div className="container">        
                <h3 className="AlterarSenha">Alterar Senha</h3>
                <p className="texto">Insira o email vinculado a sua conta e nós iremos enviar um e-mail com as instruções para a alteração da senha.</p>
                <input type="Name" name="Name" className="inputMFA"/>
                <a className="botaoRecuperarSenha"  href="/recuperarSenha"  type="submit">Alterar Senha</a>           
                </div>
            </form>}
        </div>

    )
}

export default RecuperarSenha;