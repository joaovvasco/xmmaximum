document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Óleo Motor 5W30',
            image: 'https://placehold.co/300x300/ffffff/000000?text=Produto+1'
        },
        {
            name: 'Óleo Motor 15W40',
            image: 'https://placehold.co/300x300/ffffff/000000?text=Produto+2'
        },
        {
            name: 'Óleo Câmbio Manual',
            image: 'https://placehold.co/300x300/ffffff/000000?text=Produto+3'
        },
        {
            name: 'Fluido de Freio DOT 4',
            image: 'https://placehold.co/300x300/ffffff/000000?text=Produto+4'
        }
    ];

    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function renderCarousel() {
        carousel.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
            `;
            carousel.appendChild(productDiv);
        });
        updateCarousel();
    }

    function updateCarousel() {
        const productWidth = document.querySelector('.product').clientWidth;
        carousel.style.transform = `translateX(${-currentIndex * productWidth}px)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % products.length;
        updateCarousel();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateCarousel();
    }

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    renderCarousel();

    window.addEventListener('resize', () => {
        updateCarousel();
    });
});