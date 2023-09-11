import './App.css';
import City from './conteiner/City';
import Counter from './conteiner/Counter';
import Country from './conteiner/country';
import Props from './conteiner/Props';
import Functional from './conteiner/Functional';
import CountryFun from './conteiner/CountryFun';
import CounterFun from './conteiner/CounterFun';

function App() {
  return (
    <>
      {/* <Country />
      <City />
      <Counter />
      <Props name="meet" last="sharma">
        <p>meet is a good person</p>
      </Props>
      <Props name="milan" last="varma" />
      <Props name="yash" />

      <Functional text="Functional component"/> */}

      <CountryFun />
      <CounterFun />
    </>
  );
}

export default App;
