import React, {Component} from 'react';
import Nav from './componentes/layout/Nav'
import Footer from './componentes/layout/Footer'
import Aside from './componentes/layout/Aside';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import products from './sample/prod.json';
import types from './sample/tipos.json'
import noticias from './sample/noticias.json'

import Inicio from './componentes/Pages/Inicio'
import Menu from './componentes/Pages/Menu';
import Nosotros from './componentes/Pages/SobreNosotros'
import Contactanos from './componentes/Pages/Contactanos';




class App extends Component {


    state={
        prods: products,
        tipos: types,
        news: noticias
    }

    UNSAFE_componentWillMount(){
        console.log(JSON.parse(localStorage.getItem('newsValueKey')))
        if(localStorage.getItem('newsValueKey')!=null){
            var recoveredNew=JSON.parse(localStorage.getItem('newsValueKey'))
            this.setState({
                news: recoveredNew
            })
        }
    }

    componentDidUpdate(){
        localStorage.setItem("newsValueKey", JSON.stringify(this.state.news))
    }


    addNew = (nombre, contenido) => {
        const newNew = {
            id: this.state.news.length,
            nombre: nombre,
            contenido: contenido,
            done: false
        }
        this.setState({
            news: [...this.state.news, newNew]
        })
    }

    deleteNew=(id)=>{
        const newNews=this.state.news.filter((news)=>!news.done)
        this.setState({news: newNews})
    }

    checkDone=id=>{
        const newNew=this.state.news.map(news=>{
            if(news.id===id){
                news.done=!news.done
            }
            return news;
        })
        this.setState({news: newNew})
    }

    render(){
        return (
            <>
                <Router>
                    <header>
                        <Nav></Nav>
                    </header>
                    <Route exact path='/'>
                        <Inicio prods={this.state.prods} news={this.state.news} addNew={this.addNew} dNew={this.deleteNew} chDone={this.checkDone} ></Inicio>
                    </Route>
                    <Route path='/menu' render={()=>{
                            return (
                                <>
                                    <Aside  prods={this.state.prods} types={this.state.tipos}></Aside>
                                    <Menu prods={this.state.prods} types={this.state.tipos}></Menu>
                                </>
                            )
                        }}>
                    </Route>
                    <Route path='/nosotros' component={Nosotros}>
                    </Route>
                    <Route path='/contactanos' component={Contactanos}>
                    </Route>
                    <footer>
                        <Footer></Footer>
                    </footer>
                </Router>
            </>
        );
    }
}

export default App;