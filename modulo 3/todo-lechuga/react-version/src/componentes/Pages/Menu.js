import React, { Component } from 'react'
import Producto from './SubComponentes/Producto'
import './style/Menu.css'
import PropTypes from 'prop-types';
// import './img'

import { slugify } from '../../utils';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            isActive: false,
            isActive2: false,
            nombre: "",
            contenido: "",
            tipo: ""
        }
    }

    
    onSubmit=(event)=>{
        event.preventDefault();
        this.props.addProd(this.state.tipo, this.state.nombre, this.state.contenido);
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
                <section className="destacados">
                    <h1 className="cursiva" style={this.StyleTitle()}>Menú</h1>
                    <i className={this.state.isActive?'bx bxs-edit-alt edit activado':'bx bxs-edit-alt edit'} onClick={activado} style={{
    left: "260px"}}></i>
                    <i className={this.state.isActive?'addBtn activado':'addBtn'} onClick={activado2}>Añadir Producto</i>
                    <div className={this.state.isActive2?'alerta activado': 'alerta'}>
                        <form id='ingresoForm' onSubmit={this.onSubmit}>
                            <input name='nombre' type="text" placeholder='nombre de la noticia' onChange={this.onChange} value={this.state.nombre}/>
                            <br/>
                            <br/>
                            <select name="tipo" onChange={this.onChange} style={{marginTop: '15px'}}>
                                <option key={0} value={''}>Seleccione un tipo de producto</option>
                                {this.props.types.map(tipos=>
                                    <option key={tipos.id+1} value={tipos.tipo}>
                                        {tipos.tipo}
                                    </option>
                                )}
                            </select>
                            <br/>
                            <br/>
                            <textarea name='contenido' placeholder='escriba el contenido de la noticia' onChange={this.onChange} value={this.state.contenido}></textarea>
                            <br/>
                            <br/>
                            <input type="submit" value="postear noticia" />
                        </form>
                    </div>
                    <div className="productos">
                        {this.props.types.map(tipos=>
                            <div key={tipos.id}>
                                <h2  id={slugify(tipos.tipo)} className="cursiva" style={this.StyleTitle()} key={tipos.id}>{tipos.tipo}</h2>
                                {this.props.prods.filter(producto=>producto.tipo===tipos.tipo).map(productoFiltrado=><Producto 
                                    prod={productoFiltrado} 
                                    key={productoFiltrado.id}
                                    isActive={this.state.isActive}
                                    dProd={this.props.dProd}
                                    cd={this.props.cd}
                                ></Producto>)}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        )
    }
}

Menu.propTypes={
    prods: PropTypes.array.isRequired
}