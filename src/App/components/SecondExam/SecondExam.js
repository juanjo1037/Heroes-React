import React from 'react'
import './SecondExam.css';
const About = () => {
    return (
        <React.Fragment>
        
            <link rel="stylesheet" href="css/style.css" type="text/css"></link>
            <h1 className="animated fadeIn fast">Segundo examen (16%)</h1>
            <hr />
            <p className="animated fadeIn">
                <p><h2 className="animated fadeIn fast">Indicaciones:</h2></p>
                <div>
                    <ol>
                        <li>Descargar todo el proyecto de Heroes-React.</li>
                        <li>En este espacio, usted debe crear una página que tenga que ver con su proyecto de clase.</li>
                        <li>Entre los integrantes del proyecto no pueden existir paginas iguales, ni similares.</li>
                        <li>El proyecto completo debe adicionarse al GitHub.</li>
                        <li>En un documento ubicado en el Google Drive cada uno escribirá el enlace suministrado por GitHub para una posterior descarga.</li>
                        <li>El contenido de la página como mínimo debe tener algo similar a la página de "Heroes"; es decir, varias imagenes, enlaces, divisiones, lo que usted considere pertinente para ganarse un 5.0.</li>
                        <li>A las 12 m. del día de hoy debe estar el enlace en el Google Drive.</li>
                    </ol>
                </div>
            </p>
            <br></br>
           <div>
            <div className="jumbotron jumbotron-fluid animated fadeIn fast">
            <div className="container">
                <h1 className="display-3">Complejo deportivo</h1>
                <p className="lead">Una pagina web para que reserves tus espacios facilmente</p>
            </div>
        </div>
        <section>
        <div class="content">
            <h2>INFORMACIÓN</h2>
            <br></br>

            <p>Nuestro objetivo es brindarte en una pagina web simplificada informacion sobre nuestro complejo deportivo tambien te brindamos un sistema de reservas que te facilita el uso de cada uno de estos espacios. </p>     
               
                <br></br>
                <div class="slider">
                <ul>
                    <li>
                        <p>Información sobre eventos y cursos en nuestro complejo</p>
                        <img src="../assets/images/Canchatenis.jpg" alt=""></img>
                    </li>
                    <li>
                        <p>Reservas y mas...</p>
                        <img src="../assets/images/Canchas sintéticas.jpg" alt=""></img>
                    </li>
                    <li>
                        <p>Espacios llenos de naturaleza para que descanses luego de tu practica</p>
                        <img src="../assets/images/piscina.jpg" alt=""></img>
                    </li>
                    
                </ul>
            </div>
        </div>
    </section>
        </div>
    
    

        </React.Fragment>


    )
}

export default About
