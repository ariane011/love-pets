import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../services/api'
import logoImg from '../../assets/logo.png';
import lovePetImg from '../../assets/love-pet.png';


export default function Logon() { 

    const [id, setId] = useState('');
    const history = useHistory();


    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('session', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
           alert('Falha no login, tente novamente!'); 
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Love Pets"/>  
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="teal"/> Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={lovePetImg} alt="Love Pet"/>
        </div>
    );
 }