import React, { FormEvent, useState } from "react";
import "./profile.css";
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
                    <img className="imagemPerfil" src={avatarUrl} alt="" />
                <h1 className="tituloProfile">Opções de Usuário</h1>
                <h2 className="subtituloProfile">Perfil</h2>
                <h3 className="nomeUsuario">Nome de usuário</h3>
                <input type="Name" name="Name" className="inputNomeUsuario" value="Hianna de truco" />
                <h3 className="linkPerfil">Link da foto de perfil</h3>
                <input type="url" name="avatar" className="inputLink" value={avatarUrl} id="avatar" placeholder="https://perfil" onChange={event => setAvatarUrl(event.target.value)} />
                <h2 className="tituloSegurança">Segurança</h2>
                <input type="Name" name="Name" className="inputMFA" placeholder="MFA"/>
                <a className="botaoRecuperarSenha"  href="/recuperarSenha"  type="submit">Alterar Senha</a>
                <h3 className="opçaoSegurança">Escolha uma pergunta de segurança</h3>
                <h3 className="resposta">Resposta</h3>
                <button className="botaoSalvar" type="submit">Salvar</button>
                
                </div>
            </form>}
        </div>

    )
}

export default RecuperarSenha;