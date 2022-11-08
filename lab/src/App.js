import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Button from './components/Button';
import background from './images/fundo.png'
import Items from './components/Items';


function App() {
  return (
    <div className="App">

      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"
      }}>

        <div><NavBar /></div>

        <Title />
        <Button />

        <div className='background'>
          <Items image='1' text='Declarative' paragraph='Reacts makes it painless to create interactive UIs' />
        </div>
      </div>
    </div >
  );
}

export default App;
