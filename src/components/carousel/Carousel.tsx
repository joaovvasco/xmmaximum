import { useState, type HTMLAttributes } from 'react';
import './Carousel.css';

interface ICarousel{
    title: string,
    qtd: number
}

const Carousel: React.FC<HTMLAttributes<HTMLDivElement> & ICarousel>= ({ title, qtd, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? qtd - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === qtd - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-wrapper">
            <h3>{title}</h3>
            <section className="carousel-container">
                <button className="prev-btn" onClick={goToPrevious}>&#10094;</button>
                <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {children}
                </div>
                <button className="next-btn" onClick={goToNext}>&#10095;</button>
            </section>
        </div>
    );
}

export default Carousel;