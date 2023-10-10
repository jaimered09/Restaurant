import { Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { Menu } from '../pages/Menu';
import { Novedades } from "../pages/Novedades";
import { Reservas } from "../pages/Reservas";
import { PideAqui } from "../pages/PideAqui";
import { Nosotros } from "../pages/Nosotros";
import { DondeEstamos } from "../pages/DondeEstamos";



export const MainRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/novedades' element={<Novedades />} />
            <Route path='/reservas' element={<Reservas />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/pideaqui' element={<PideAqui />} />
            <Route path='/dondeestamos' element={<DondeEstamos/>} />


            <Route path='*' element={<h1>Error 404 - ruta no encontrada</h1>} />


        </Routes>
    )
}