import "./App.css";
import Header from "./components/header";
import Products from "./components/products";
import {Provider} from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
};

export default App;
