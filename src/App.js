import './App.css';
import City from './conteiner/City';
// import Counter from './conteiner/Counter';
import Country from './conteiner/country';
import Props from './conteiner/Props';
import Functional from './conteiner/Functional';
import CountryFun from './conteiner/CountryFun';
import CounterFun from './conteiner/CounterFun';
import Medicines from './conteiner/Medicines';
import Timer from './conteiner/Timer';
import Timerfun from './conteiner/Timerfun';
import Quotes from './conteiner/Quotes';
import Product from './conteiner/Product';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Dummyproduct from './conteiner/Dummyproduct';
import Navbar from './conteiner/Navbar';
import Test from './conteiner/Test';
import Test1 from './conteiner/Test1';
import { Provider } from 'react-redux';
import { configureStore } from './conteiner/redux/store';
import Counter from './conteiner/counter/Counter';
import Cart from './conteiner/cart/Cart';

const store = configureStore();

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

      {/* <CountryFun />
      <CounterFun /> */}

      {/* <Medicines /> */}

      {/* <Timer /> */}

      {/* <Timerfun /> */}

      {/* <Quotes /> */}

      {/* <Product /> */}

      <Dummyproduct />

      <Cart />

      {/* <Navbar /> */}

      {/* <Test /> */}

      {/* <Test1 /> */}
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}
    </>
  );
}

export default App;
