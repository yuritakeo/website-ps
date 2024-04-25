import { useState } from 'react'
import noticia1 from '../../assets/PRAIA-SOL-GRANVIA24_2 1.jpg'

import './style.css'
export default function Treino() {

    const [listNoticias, setListNoticias] = useState([])

    return (
        <div className="container">
            <div className='Deslizante'>
                <div className='Deslizar1'>
                    <img src={noticia1} alt="" />
                </div>
                <div className='Deslizar2'>
                    <img src={noticia1} alt="" />
                </div>
                <div className='Deslizar3'>
                    <img src={noticia1} alt="" />
                </div>

                <div className='barraPaginacao'>
                    <div className='btn-radio' id='radio1'/>
                    <div className='btn-radio' id='radio2'/>
                    <div className='btn-radio' id='radio3'/>
                </div>               
            </div>

        </div>
    )
}