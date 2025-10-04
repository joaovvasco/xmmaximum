import {type IProduct} from './ItemProduct'


import estabilizadorFlex100ml from '../../../assets/xmmaximum-fuel-power/estabilizador-flex-100mL.jpg'
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
                name: 'Flex 100mL',
                model: 'CX 30X100ML',
                image: estabilizadorFlex100ml
            },
            {
                name: 'Flex Moto 50mL',
                model: 'CX 16X50ML',
                image: estabilizadorMarcha
            },
            {
                name: 'Diesel 200 mL',
                model: 'CX 30X200ML',
                image: diesel200mL
            },
            {
                name: 'Diesel 1L',
                model: 'CX 12X1L',
                image: diesel1L
            },
            {
                name: 'Diesel 5L',
                model: 'CX4X5L',
                image: diesel5L
            },
            {
                name: 'Diesel 20L',
                model: 'CX 1X20L',
                image: diesel20L
            },
            {
                name: 'Diesel 200L',
                model: 'TB 200LTS',
                image: diesel200L
            },
            {
                name: 'Diesel 1000L',
                model: 'CTN 1.000LTS',
                image: diesel1000L
            },
        ];

        const xmTec:IProduct [] = [
            {
                name: 'XMTEC Friction Low 200mL',
                description: 'Condicionador de Metais',
                image: frictionLow
            },
            {
                name: 'XMTEC Friction Low Moto 50mL',
                description: 'Condicionador de Metais',
                image: frictionLowMoto
            },
            {
                name: 'XMTEC Smokeless 500mL',
                description: 'Redutor de fumaça',
                image: smokeless
            },
        ];

        const xmRadWater:IProduct[] = [
            {
                name: 'Água Desmineralizada 1L',
                image: aguaDesmineralizadora
            },
            {
                name: 'Aditivo Verde Pronto Uso 1L',
                description: 'Máxima proteção para o motor, anti-corrosivo e orgânico',
                image: aditivoVerde
            },
            {
                name: 'Aditivo Rosa Pronto Uso 1L',
                description: 'Máxima proteção para o motor, anti-corrosivo e orgânico',
                image: aditivoRosaProntoUso
            },
            {
                name: 'Aditivo Rosa Concentrado 1L',
                description: 'Máxima proteção para o motor, anti-corrosivo e orgânico',
                image: aditivoRosaConcentrado
            },
        ]

    return {
       xmFuelPower,
       xmTec,
       xmRadWater  
    }
}
