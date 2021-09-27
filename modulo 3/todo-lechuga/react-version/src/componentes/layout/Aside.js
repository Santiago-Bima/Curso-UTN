import React, { useState } from 'react'
import './styles/Aside.css';

import { HashLink } from 'react-router-hash-link';
import { slugify } from '../../utils';

export default function Aside(props){

    const [isActive, setActive] = useState("false");

    const activado=()=> {
        setActive(!isActive);
    }

        return (
            //  ver como vincular los link a los productos
            <aside className={isActive?'menu':'menu  activado'}>
                <h1 className="cursiva"  style={{marginLeft: '50px', textDecoration: 'underline black'}}>Menú</h1>
                <div id="flecha"  onClick={activado}>
                    <i className={isActive?'bx bxs-right-arrow flecha':'bx bxs-right-arrow flecha  activado'}></i>
                </div>
                <ul>
                    {props.types.map(tipos=>
                        <li className="subindice" key={tipos.id}>
                            <h4><HashLink smooth to={`/menu#${slugify(tipos.tipo)}`} className="linkprod" onClick={activado}>{tipos.tipo}</HashLink></h4>
                            <ul>
                                {props.prods.filter(producto=>producto.tipo===tipos.tipo).map(productoFiltrado=>
                                    <div key={productoFiltrado.id}>
                                        <li><HashLink smooth to={`/menu#${slugify(productoFiltrado.name)}`} className='linkprod' onClick={activado}>{productoFiltrado.name}</HashLink></li>
                                    </div>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </aside>
        )
}
