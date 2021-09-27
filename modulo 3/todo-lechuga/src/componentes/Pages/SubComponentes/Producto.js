import React, { Component } from 'react'
import { slugify } from '../../../utils';

export default class Producto extends Component {
    render() {
        const {prod}=this.props;
        return (
            <>
                <div className="producto">
                        <img src="" alt={prod.name}/>
                        <div  id={slugify(prod.name)} className="info">
                            <h5>{prod.name}
                                <label htmlFor="destacado" style={{marginLeft: '10px', textDecoration: 'underline black'}} className={this.props.isActive?'activado':'destacado'}>Destacado:</label>
                                <input name='destacado' className={this.props.isActive?'elim activado':'elim'} type='checkbox' onChange={this.props.cd.bind(this, prod.id)}></input>
                                <i style={{marginLeft: '10px'}}className={this.props.isActive?'bx bx-x elimBtn activado':'bx bx-x elimBtn'} onClick={this.props.dProd.bind(this, prod.id)}></i>
                            </h5>
                            <p>
                                {prod.content}
                            </p>
                        </div>
                </div>
            </>
        )
    }
}
