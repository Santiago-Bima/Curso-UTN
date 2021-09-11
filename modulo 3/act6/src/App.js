// import logo from './logo.svg';
import './App.css';

import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";
import Cuerpo from './componentes/layout/Cuerpo';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Cuerpo></Cuerpo>
      <Footer></Footer>
    </div>
  );
}

export default App;
