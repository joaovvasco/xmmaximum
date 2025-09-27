
const productsXmMaximumFuelPower =[
    {
        name: 'Estabilizador para Veículo Flex',
        image: './images/xmmaximum-fuel-power/estabilizador-flex-100mL.jpg'
    },
    {
        name: 'Óleo Diesel 200 mL',
        image: './images/xmmaximum-fuel-power/diesel-200mL.jpg'
    },
    {
        name: 'Óleo Diesel 1L',
        image: './images/xmmaximum-fuel-power/diesel-1L.jpg'
    },
    {
        name: 'Óleo Diesel 20L',
        image: './images/xmmaximum-fuel-power/diesel-20L.jpg'
    },
];
const productsXmTec = [
    {
        name: 'Friction Low',
        image: './images/xm-tec/friction-low.jpg'
    },
    {
        name: 'Friction Low Moto',
        image: './images/xm-tec/friction-low-moto.jpg'
    },
    {
        name: 'Smokeless',
        image: './images/xm-tec/smokeless.jpg'
    },
];
const productsXmRadWater =[
    {
        name: 'Água Desmineralizadora',
        image: './images/xm-rad-water/agua-desmineralizadora.jpg'
    },
    {
        name: 'Aditivo Azul',
        image: './images/xm-rad-water/aditivo-azul.jpg'
    },
    {
        name: 'Aditivo Verde',
        image: './images/xm-rad-water/aditivo-verde.jpg'
    },
    {
        name: 'Aditivo Rosa',
        image: './images/xm-rad-water/aditivo-rosa.jpg'
    },
];



 function mountCarousel(products, id){

    const container = document.getElementById(id);
    
    const carousel = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

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
    renderCarousel ();
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    window.addEventListener('resize', () => {
        updateCarousel()});
 }

document.addEventListener('DOMContentLoaded', () =>{

mountCarousel(productsXmMaximumFuelPower, 'car-xm-maximum-fuel-power');
mountCarousel(productsXmRadWater, 'car-xm-rad-water');
mountCarousel(productsXmTec, 'car-xm-tec');


});