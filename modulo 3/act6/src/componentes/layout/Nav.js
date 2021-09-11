const Nav=(props)=>{
    return(
        <nav>
            <h1>Pagina De Prueba</h1>
            <img className='logo' src="https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png" width='50px' height='50px' alt='logo'/>
            <div>
                <ul className='links'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contact">Contactanos</a></li>
                    <li><a href="#config">Configuracion</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;