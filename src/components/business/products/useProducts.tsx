import {type IProduct} from './ItemProduct'


import estabilizadorFlex100ml from '../../../assets/xmmaximum-fuel-power/estabilizador-flex-100ml.jpg'
import estabilizadorMarcha from '../../../assets/xmmaximum-fuel-power/estabilizador-marcha.jpg'
import diesel200mL from '../../../assets/xmmaximum-fuel-power/diesel-200mL.jpg'
import diesel1L from '../../../assets/xmmaximum-fuel-power/diesel-1L.jpg'
import diesel5L from '../../../assets/xmmaximum-fuel-power/diesel-5L.jpg' 
import diesel20L from '../../../assets/xmmaximum-fuel-power/diesel-20L.jpg'
import diesel1000L from '../../../assets/xmmaximum-fuel-power/diesel-1000L.jpg'
import diesel200L from '../../../assets/xmmaximum-fuel-power/diesel-200L.jpg'

import frictionLow from '../../../assets/xm-tec/friction-low.jpg'
import frictionLowMoto from '../../../assets/xm-tec/friction-low-moto.jpg'
import smokeless from '../../../assets/xm-tec/smokeless.jpg'

import aguaDesmineralizadora from '../../../assets/xm-rad-water/agua-desmineralizadora.jpg'
import aditivoVerde from '../../../assets/xm-rad-water/aditivo-verde.jpg'
import aditivoRosaConcentrado from '../../../assets/xm-rad-water/aditivo-rosa-concentrado.jpg'
import aditivoRosaProntoUso from '../../../assets/xm-rad-water/aditivo-rosa-pronto-uso.jpg'

export default function useProducts() {
    const xmFuelPower:IProduct[] = [
            {
                name: 'Estabilizador para Veículo Flex',
                image: estabilizadorFlex100ml
            },
            {
                name: 'Flex Moto 50 mL',
                model: 'CX 16X50ML',
                price: 15.00,
                image: estabilizadorMarcha
            },
            {
                name: 'Óleo Diesel 200 mL',
                image: diesel200mL
            },
            {
                name: 'Óleo Diesel 1L',
                image: diesel1L
            },
            {
                name: 'Óleo Diesel 5L',
                image: diesel5L
            },
            {
                name: 'Óleo Diesel 20L',
                image: diesel20L
            },
            {
                name: 'Óleo Diesel 200L',
                image: diesel200L
            },
            {
                name: 'Óleo Diesel 1000L',
                image: diesel1000L
            },
        ];

        const xmTec:IProduct [] = [
            {
                name: 'Friction Low',
                image: frictionLow
            },
            {
                name: 'Friction Low Moto',
                image: frictionLowMoto
            },
            {
                name: 'Smokeless',
                image: smokeless
            },
        ];

        const xmRadWater:IProduct[] = [
            {
                name: 'Água Desmineralizadora',
                image: aguaDesmineralizadora
            },
            {
                name: 'Aditivo Verde',
                image: aditivoVerde
            },
            {
                name: 'Aditivo Rosa Pronto Uso',
                image: aditivoRosaProntoUso
            },
            {
                name: 'Aditivo Rosa Concentrado',
                image: aditivoRosaConcentrado
            },
        ]

    return {
       xmFuelPower,
       xmTec,
       xmRadWater  
    }
}
