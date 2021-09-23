import React, { Component } from 'react'
import './style/Inicio.css'
import { Link } from 'react-router-dom';
import './SubComponentes/NewForm.css';
import PropTypes from 'prop-types';

export default class Inicio extends Component {

    constructor(props){
        super(props);
        this.state={
            isActive: false,
            isActive2: false,
            nombre: "",
            contenido: ""
        }
    }
    
    onSubmit=(event)=>{
        event.preventDefault();
        this.props.addNew(null, this.state.nombre, this.state.contenido);
    }

    onChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    StyleTitle(){
        return{
            marginLeft: '50px', 
            textDecoration: 'underline black'     
        }
    }

    render() {

        
        let activado=()=>{
            if(this.state.isActive===false){
                this.setState({isActive: true})
            }else{
                this.setState({
                    isActive: false,
                    isActive2: false
                })
            }
        }

        let activado2=()=>{
            let valor= this.state.isActive2
            this.setState({isActive2: !valor})
        }

        return (
            <main>
                <div className="columnas">
                    <section className="novedades">
                        <h1 className="cursiva"  style={this.StyleTitle()}>Novedades</h1>
                        <i className={this.state.isActive?'bx bxs-edit-alt edit activado':'bx bxs-edit-alt edit'} onClick={activado}></i>
                        <i className={this.state.isActive?'bx bxs-message-add addBtn activado':'bx bxs-message-add addBtn'} onClick={activado2}></i>
                        <i className={this.state.isActive?'bx bx-x elimBtn activado':'bx bx-x elimBtn'} onClick={this.props.dNew}></i>
                        
                        <ul>
                            {this.props.news.map(news=>
                                <div key={news.id}>
                                    <li>
                                        <div className='noticia'>
                                            <h4>{news.nombre}<input className={this.state.isActive?'elim activado':'elim'} type='checkbox' onChange={this.props.chDone.bind(this, news.id)}></input></h4>
                                            <p>
                                                {news.contenido}
                                            </p>
                                        </div>
                                    </li>
                                </div>  
                            ).reverse()}
                        </ul>
                    </section>
                    <div className={this.state.isActive2?'alerta activado': 'alerta'}>
                        <form onSubmit={this.onSubmit}>
                            <input name='nombre' type="text" placeholder='nombre de la noticia' onChange={this.onChange} value={this.state.nombre}/>
                            <br/>
                            <br/>
                            <textarea name='contenido' placeholder='escriba el contenido de la noticia' onChange={this.onChange} value={this.state.contenido}></textarea>
                            <br/>
                            <br/>
                            <input type="submit" value="postear noticia" />
                        </form>
                    </div>
                    <section className="destacados">
                        <h1 className="cursiva" style={this.StyleTitle()}>Platos Del Día</h1>
                        <div className="productos">

                            {this.props.prods.filter(productos=>productos.destacado===true).map(productosFiltrados=>
                                <div key={productosFiltrados.id}>
                                    <div className="producto">
                                        <Link to='/menu'>
                                            <img src="" alt={productosFiltrados.name}/>
                                            <div className='info'>
                                                <h5>{productosFiltrados.name}</h5>
                                                <p>{productosFiltrados.content}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

Inicio.propTypes={
    news: PropTypes.array.isRequired
}
