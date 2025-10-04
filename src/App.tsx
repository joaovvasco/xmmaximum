import logo from './assets/xmmaximum-title.jpg';
import './App.css'

import useProducts from './collections/useProducts.tsx'
import Carousel from './components/carousel/Carousel.tsx';
import { InstagramButton, WhatsappButton, YoutubeButton } from './components/buttons/SocialButton.tsx';
import Sidebar from './components/sidebars/SideBar.tsx';

function App() {
  const products =  useProducts();
  
  return (
    <>
      <header>
        <img style={{width: '192px', height: '124px'}} alt="XM Maximum" src={logo} />
      </header>
      
      <main>
        <h2>Conheça nossos produtos</h2>
        <Carousel products={products.xmFuelPower} title='XM Fuel Power' />
        <Carousel products={products.xmRadWater} title='XM Rad Water' />
        <Carousel products={products.xmTec} title='XM Tec' />
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
