import Nav from './componentes/layout/Nav'
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
            </Router>
        </>
    );
}

export default App;
