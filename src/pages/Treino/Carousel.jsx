import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Importando o arquivo CSS para estilos

const Carousel = ({ title, images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNextSlide();
        }, 10000); // Troca de slide a cada 10 segundos

        return () => clearInterval(intervalId);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <h2>{title}</h2>
            <div className="carousel">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={index === currentSlide ? 'active' : ''}
                    />
                ))}
                <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
                <button className="next" onClick={goToNextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default Carousel;