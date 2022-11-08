import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Button from './components/Button';
import Items from './components/Items';

import background from './images/fundo.png'
import parafuso from './images/parafuso.png'
import caneta from './images/caneta.png'
import engrenagem from './images/engrenagem.png'
import pagina from './images/pagina.png'
import logo from './images/logo.png'
import icone from './images/icone-menu.png'

function App() {

  return (
    <div className="App">
      <div className="container">

        <div className='header'>
        
          <div><NavBar image={logo} image2={icone} /></div>

          <Title />
          <Button />
        </div>

        <div className='background'>

          <Items image={parafuso} text='Declarative' paragraph='Reacts makes it painless to create interactive UIs' />
          <Items image={caneta} text='Components' paragraph='Build encapsulated components that manage their state' />
          <Items image={engrenagem} text='Single-Way' paragraph="A set of immutable values are passed to the componet's" />
          <Items image={pagina} text='JSX' paragraph='Statically-typed designed to run on modern browsers.' />
        </div>


      </div>
    </div>
  );
}

export default App;
