import { NavLink } from "react-router-dom";
import carousel from './carousel.css';


export const Carousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="public/assets/images/carousel/carrousel2.png" className="d-block w-100" alt="..." width="1440" height="620" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Ven a probar el mejor pollo frito de la costa oeste</h3>
                                <p>POLLO RECIEN FRITO ♨️ CON TUS SALSAS FAVORITAS 🍗 EN EL MEJOR LUGAR 😎 </p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="public/assets/images/carousel/carousel2 copy.png" className="d-block w-100" alt="..." width="1440" height="620" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Promo todos los días</h3>
                                <p>ESTAMOS EN TODOS LADOS 📍🍗 BUSCA TU PROMO MÁS SABROSA 🤤</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="public/assets/images/carousel/carousel3.png" className="d-block w-100" alt="..." width="1440" height="620" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>TAKE AWAY -DISFRUTA EN TU HOGAR O DONDE QUIERAS</h3>
                                <p>ESTAMOS DISPONIBLES EN TODAS LAS APPS DE PEDIDOS 🍗🥡</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}





{/* // <div id="carouselExampleIndicators" className="carousel slide" data-bs-slide="carousel">
//                 <div className="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                 </div>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src="public/assets/images/carousel/carrousel2.png" className="d-block w-100" alt="foto1" width="1440" height="620" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="public/assets/images/carousel/carousel2 copy.png" className="d-block w-100" alt="foto2" width="1440" height="620" /></div>
//                     <div className="carousel-item">
//                         <img src="public/assets/images/carousel/carousel3.png" className="d-block w-100" alt="foto3" width="1440" height="620" />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div> */}