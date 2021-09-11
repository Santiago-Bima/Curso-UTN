const cuerpo=(props)=>{
    return(
        <section>
            <article id='inicio'>
                <h1>Inicio</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum laborum excepturi ipsam ullam dolores provident aspernatur at quibusdam corrupti maiores neque labore necessitatibus, nulla eos quasi fuga vitae laboriosam! Unde, eius. Nihil architecto praesentium mollitia quis delectus porro fugit, maiores vitae error corporis ea accusantium est veniam laborum fugiat perferendis impedit esse a nostrum qui fuga beatae. Nesciunt, corporis.</p>
                <h3>Subtema</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam dicta repellendus placeat eveniet expedita ipsa harum ipsam! Optio unde voluptates quisquam doloremque iste possimus, amet iusto soluta corrupti eius magnam officiis nesciunt culpa animi fugit natus libero magni, molestiae perspiciatis necessitatibus aspernatur? Iusto ipsum voluptatum, sed nihil nam consequuntur rem, enim eius fugiat explicabo suscipit a. Optio impedit nemo quaerat nisi veniam aliquam tempora fuga at corrupti omnis quia blanditiis dolore, minima deleniti architecto cupiditate magnam error corporis neque? Tempora atque natus placeat doloremque amet in est explicabo asperiores voluptates, eos, minima consequatur distinctio impedit repellendus! Repellat, omnis maxime.</p>
            </article>
            <article id='nosotros'>
                <h1>Nosotros</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum laborum excepturi ipsam ullam dolores provident aspernatur at quibusdam corrupti maiores neque labore necessitatibus, nulla eos quasi fuga vitae laboriosam! Unde, eius. Nihil architecto praesentium mollitia quis delectus porro fugit, maiores vitae error corporis ea accusantium est veniam laborum fugiat perferendis impedit esse a nostrum qui fuga beatae. Nesciunt, corporis.</p>
            </article>
            <article id='contact'>
                <h1>Contactanos</h1>
                <from>
                    <label htmlFor="usr">Tu nombre</label>
                    <input name='usr' id='usr' type='text'></input>
                    <label htmlFor="email">Tu email</label>
                    <input name='email' id='email' type='email'></input>
                    <label htmlFor="chat">algo para decirnos</label>
                    <textarea name="chat" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Enviar</button>
                </from>
            </article>
            <article id='config'>
                <h1>Configuracion</h1>
                <ul>
                    <li><a href="#">Usuario</a></li>
                    <li><a href="#">Vista</a></li>
                    <li><a href="#">Idioma</a></li>
                    <li><a href="#">Avanzados</a></li>
                </ul>
            </article>
        </section>
    )
}

export default cuerpo;