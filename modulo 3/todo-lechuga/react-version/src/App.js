import Nav from './componentes/layout/Nav'
import Footer from './componentes/layout/Footer'
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <header>
                    <Nav></Nav>
                </header>
                <Route exact path='/'>

                </Route>
                <footer>
                    <Footer></Footer>
                </footer>
            </Router>
        </>
    );
}

export default App;
