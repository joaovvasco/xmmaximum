import logo from './assets/xmmaximum-title.jpg';
import './App.css'

import useProducts from './components/business/products/useProducts.tsx'
import ItemProduct from './components/business/products/ItemProduct.tsx'; 
import Carousel from './components/carousel/Carousel.tsx';
import { InstagramButton, WhatsappButton, YoutubeButton } from './components/buttons/SocialButton.tsx';
import Sidebar from './components/sidebars/SideBar.tsx';

function App() {
  const products =  useProducts();
  const xmFuelPower = products.xmFuelPower
  const xmRadWater = products.xmRadWater
  const xmTec = products.xmTec
  
  return (
    <>
      <header>
        <img style={{width: '192px', height: '124px'}} alt="XM Maximum" src={logo} />
      </header>
      
      <main>
        <h2>Conheça nossos produtos</h2>
        <Carousel title='XM Fuel Power' qtd={xmFuelPower.length}>
          {xmFuelPower.map((product) => (
                        <ItemProduct {...product} />
                    ))}
        </Carousel>
        <Carousel title='XM Rad Water' qtd={xmRadWater.length}>
          {xmRadWater.map((product) => (
                        <ItemProduct {...product} />
                    ))}
        </Carousel>
        <Carousel title='XM Tec' qtd={xmTec.length}>
          {xmTec.map((product) => (
                        <ItemProduct {...product} />
                    ))}
        </Carousel>
      </main>
      <Sidebar>
        <YoutubeButton contact='@xmmaximum' name='Canal Youtube XM Maximum' />
        <InstagramButton contact='xmmaximum.oficial' name='Instagram XM Maximum' />
        <WhatsappButton 
          contact='556392162709' 
          name='Contato XM Maximum de Vendas'
          message='Olá! Gostaria saber melhor dos produtos XM Maximum.'
        />
      </Sidebar>
    </>
  )
}

export default App
