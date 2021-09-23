import React, { useState } from 'react'
import './styles/Aside.css';

import { Link } from 'react-router-dom';

export default function Aside(props){

    const [isActive, setActive] = useState("false");

    const activado=()=> {
        setActive(!isActive);
    }

        return (
            //  ver como vincular los link a los productos
            <aside className={isActive?'menu':'menu  activado'}>
                <h1 className="cursiva"  style={{marginLeft: '50px', textDecoration: 'underline black'}}>Menú</h1>
                <div id="flecha">
                    <i className={isActive?'bx bxs-right-arrow flecha':'bx bxs-right-arrow flecha  activado'} onClick={activado}></i>
                </div>
                <ul>
                    {props.types.map(tipos=>
                        <li className="subindice">
                            <h4><Link to='/menu' className="linkprod" onClick={activado}>{tipos.tipo}</Link></h4>
                            <ul>
                                {props.prods.filter(producto=>producto.tipo===tipos.tipo).map(productoFiltrado=>
                                    <>
                                        <li><Link to='menu' className='linkprod' onClick={activado}>{productoFiltrado.name}</Link></li>
                                    </>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </aside>
        )
}
