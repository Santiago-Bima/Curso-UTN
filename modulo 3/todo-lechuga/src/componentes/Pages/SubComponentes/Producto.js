import React, { Component } from 'react'

export default class Producto extends Component {
    render() {
        const {prod}=this.props;

        return (
            <>
                <div className="producto">
                        <img src="img/lasagna.jfif" alt={prod.name}/>
                        <div  id={prod.name} className="info">
                            <h5>{prod.name}</h5>
                            <p>
                                {prod.content}
                            </p>
                        </div>
                </div>
            </>
        )
    }
}
