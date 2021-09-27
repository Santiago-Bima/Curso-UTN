import React, { Component } from 'react'
import './style/Contactanos.css'

export default class Contactanos extends Component {
    render() {
        return (
            <main>
                <div className="col left">
                    <h2 className="cursiva"  style={{ textDecoration: 'underline black', marginLeft: '75px'}}>Contacto Rapido</h2>
                    <form action="" method="" className="form">
                        <p>
                            <input type="text" placeholder="Nombre"/>
                        </p>
                        <p>
                            <input type="email" placeholder="Email"/>
                        </p>
                        <p>
                            <input type="text" placeholder="Tél:"/>
                        </p>
                        <p>
                            <textarea id="comentario" placeholder="Algo que decir?"></textarea>
                        </p>
                        <p className="acciones">
                            <input type="submit" value="Enviar"/>
                        </p>
                    </form>
                </div>
                <div className="col right">
                    <h2 className="cursiva"  style={{textDecoration: 'underline black', marginLeft: '75px'}}>Otras vías de contacto</h2>
                    <p>Tambien se puede comunicar con nosotros por estos medios...</p>
                    <ul>
                        <li>Teléfono: 351-655-4663</li>
                        <li>Email: todolechuga@gmail.com</li>
                        <li>Facebook: todo-lechuga</li>
                        <li>Twitter: todo_lechuga</li>
                    </ul>
                </div>
            </main>
        )
    }
}
