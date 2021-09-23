import React, { Component } from 'react'
import Producto from './SubComponentes/Producto'
import './style/Menu.css'
// import './img'

export default class Menu extends Component {
    render() {
        return (
            <main>
                <section className="destacados">
                    <h1 className="cursiva" style={{marginLeft: '70px', textDecoration: 'underline black'}}>Platos Del Día</h1>
                    <div className="productos">
                        {this.props.types.map(tipos=>
                            <>
                                <h2  id={tipos.tipo} className="cursiva" style={{marginLeft: '70px', textDecoration: 'underline black'}} key={tipos.id}>{tipos.tipo}</h2>

                                {this.props.prods.filter(producto=>producto.tipo===tipos.tipo).map(productoFiltrado=><Producto 
                                    prod={productoFiltrado} 
                                    key={productoFiltrado.id}
                                />)}
                            </>
                        )}
                    </div>
                </section>
            </main>
        )
    }
}
