import { useState } from 'react';
import './Carousel.css';


export interface IProduct{
    name: string,
    image: string,
    description?: string,
}

interface ICarousel{
    title: string,
    products: IProduct[]
}

export default function Carousel({ title, products }: ICarousel) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === products.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-wrapper">
            <h3>{title}</h3>
            <section className="carousel-container">
                <button className="prev-btn" onClick={goToPrevious}>&#10094;</button>
                <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {products.map((product) => (
                        <div className="product" key={product.name}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                        </div>
                    ))}
                </div>
                <button className="next-btn" onClick={goToNext}>&#10095;</button>
            </section>
        </div>
    );
}