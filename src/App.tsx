import logo from './assets/xmmaximum-title.jpg';
import './App.css'

import useProducts from './collections/useProducts.tsx'
import Carousel from './components/carousel/Carousel.tsx';
import { InstagramButton, WhatsappButton, YoutubeButton } from './components/buttons/SocialButton.tsx';

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

       <div style={ {display: 'flex', flexDirection: 'column'}}>
          <YoutubeButton href='https://www.youtube.com/@xmmaximum' alt='Canal Youtube XM Maximum' style={{bottom: '160px'}}/>
          <InstagramButton href='https://www.instagram.com/xmmaximum.oficial/' alt='Instagram XM Maximum' style={{bottom: '90px'}}/>
          <WhatsappButton href='https://wa.me/556392162709' alt='Contato XM Maximum de Vendas'/>
        </div>
    </>
  )
}

export default App
