import { useState } from 'react'
import noticia1 from '../../assets/Imagem Noticia 1.jpg'
import noticia2 from '../../assets/containerNoticia1.jpg'
import noticia3 from '../../assets/PRAIA-SOL-GRANVIA24_2 1.jpg'

import Carousel from './Carousel';

import './style.css'
export default function Treino() {

    const images = [
        { src: noticia1, alt: 'Imagem 1' },
        { src: noticia2, alt: 'Imagem 2' },
        { src: noticia3, alt: 'Imagem 3' },
    ];

    return (
        <div>
            <Carousel title="Fotos do Evento" images={images} />
        </div>
    )
}