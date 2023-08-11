import './nosotrosPollos.css';


export const NosotrosPollos = () => {
    return (
        <>
            <div className="card">
                <img src="images/local.jpeg" className="card-img" alt="local" width="800" height="650"/>
                <div className="card-img-overlay">
                    <div id='tarjeta'>
                        <h5 className="card-title"> 🍗⭐️ Los Pollos Hermanos - desde 1999 el mejor Pollo Frito 🍗⭐️</h5>
                        <p className="card-text">Desde su humilde origen en 1999 en pleno corazón de la Ciudad de México, nuestro icónico restaurante de pollo frito ha tejido una historia culinaria llena de sabor y tradición. A lo largo de los años, hemos cautivado paladares con el inconfundible aroma y crujiente textura de nuestro pollo, manteniendo el legado de calidad y servicio excepcional. Cada bocado es un vínculo con nuestros inicios, donde la pasión por la excelencia culinaria ha forjado una experiencia gastronómica que perdura en el tiempo y sigue deleitando a locales y visitantes por igual.</p>
                        <a  to="/" className="boton-enlace"> Conocer más</a>
                    </div>
                </div>
            </div>
        </>
    )
}
