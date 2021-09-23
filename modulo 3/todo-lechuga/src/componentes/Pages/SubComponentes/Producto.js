import React, { Component } from 'react'

export default class Producto extends Component {
    render() {
        const {prod}=this.props;
        return (
            <>
                <div className="producto">
                        <img src="img/lasagna.jfif" alt={prod.name}/>
                        <div  id={prod.name} className="info">
                            <h5>{prod.name}
                                <input className={this.props.isActive?'elim activado':'elim'} type='checkbox' onChange={this.props.cd.bind(this, prod.id)}></input>
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
