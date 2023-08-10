import './takeaway.css';
import { NavLink } from 'react-router-dom'


export const TakeAway = () => {
    return (
        <>
            <div id='contenedor'>
                <img id='imagen' src="public/assets/images/carousel/takeaway.jpg" alt="pedidos" />
                <NavLink to="https://www.ubereats.com/cl-en" target="_blank">
                <button className="menu-button">ORDENA UBER-EATS</button> </NavLink>
                <NavLink to="https://www.pedidosya.cl/" target="_blank">
                <button className="menu-button">ORDENA PEDIDOS YA</button> </NavLink>
            </div>
        </>
    );
};
