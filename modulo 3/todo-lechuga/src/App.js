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

    componentDidMount(){
        if(localStorage.getItem('newsValueKey')!=null){
            var recoveredNew=JSON.parse(localStorage.getItem('newsValueKey'))
            this.setState({
                news: recoveredNew
            })
        }
        if(localStorage.getItem('prodsValueKey')!=null){
            var recoveredProd=JSON.parse(localStorage.getItem('prodsValueKey'))
            this.setState({
                prods: recoveredProd
            })
        }
    }

    componentDidUpdate(){
        localStorage.setItem("newsValueKey", JSON.stringify(this.state.news))  
        localStorage.setItem("prodsValueKey", JSON.stringify(this.state.prods))
    }


    add = (tipo, nombre, contenido) => {
        if(tipo===null){
            const newNew = {
                id: this.state.news.length,
                nombre: nombre,
                contenido: contenido,
                done: false
            }
            this.setState({
                news: [...this.state.news, newNew]
            })
        }else{
            const newProd={
                id: this.state.prods.length,
                tipo: tipo,
                name: nombre,
                content: contenido,
                posted: true
            }
            this.setState({
                prods: [...this.state.prods, newProd]
            })
        }
    }

    deleteNew=(id)=>{
        const newNews=this.state.news.filter((news)=>!news.done)
        this.setState({news: newNews})
    }
    

    deleteProd=(id)=>{
        const changePosted=this.state.prods.map(prod=>{
            if(prod.id===id){
                prod.posted=!prod.posted
            }
            return prod;
        })
        this.setState({prods: changePosted})
        const newProds=this.state.prods.filter((prods)=>prods.posted)
        this.setState({prods: newProds})
    }

    checkDestacado=id=>{
        const newProd=this.state.prods.map(prod=>{
            if(prod.id===id){
                prod.destacado=!prod.destacado
            }
            return prod;
        })
        this.setState({prods: newProd})
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
                        <Inicio prods={this.state.prods} news={this.state.news} addNew={this.add} dNew={this.deleteNew} chDone={this.checkDone} ></Inicio>
                    </Route>
                    <Route path='/menu' render={()=>{
                            return (
                                <>
                                    <Aside  prods={this.state.prods} types={this.state.tipos}></Aside>
                                    <Menu prods={this.state.prods} types={this.state.tipos} addProd={this.add} dProd={this.deleteProd} cd={this.checkDestacado}></Menu>
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