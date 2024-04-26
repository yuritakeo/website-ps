import React from 'react';

import './style.css';

import noticia1 from '../../assets/Imagem Noticia 1.jpg'

const Transcol = () => {
    return (
        <div className="home-container">
            <header>
                <h1>Bem-vindo à Transcol</h1>
                <nav>
                    <ul>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
            <section id="sobre">
                <h2>Sobre a Transcol</h2>


                <div className="bus-images">
                    <img src={noticia1} alt="Ônibus Transcol 1" />
                    <img src={noticia1} alt="Ônibus Transcol 2" />
                    <img src={noticia1} alt="Ônibus Transcol 3" />
                </div>



                <p>A Transcol é uma empresa de transporte coletivo urbano comprometida em oferecer serviços de qualidade e segurança para seus passageiros.</p>
            </section>
            <section id="servicos">
                <h2>Nossos Serviços</h2>
                <ul>
                    <li>Transporte coletivo urbano</li>
                    <li>Linhas regulares</li>
                    <li>Transporte acessível</li>
                    <li>Horários flexíveis</li>
                </ul>
            </section>
            <section id="contato">
                <h2>Contato</h2>
                <p>Para mais informações, entre em contato conosco:</p>
                <p>Telefone: (XX) XXXX-XXXX</p>
                <p>Email: contato@transcol.com</p>
            </section>
            <footer>
                <p>&copy; {new Date().getFullYear()} Transcol - Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default Transcol;