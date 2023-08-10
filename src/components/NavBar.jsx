import { NavLink } from 'react-router-dom'

export const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar-background">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src="/public/assets/images/pollos-header.png" alt="logo"className="img-fluid"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/menu">Menú</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/novedades">Novedades</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="dondeestamos">
                                    Dónde estamos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="reservas">Reservas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="nosotros">Sobre Nosotros</NavLink>
                            </li>
                            <li>
                            <NavLink to="/pideaqui" className="nav-link">
                                <button className="btn btn-outline-success" type="submit">PIDE AQUÍ</button>
                            </NavLink>
                            </li>
                        </ul>
                        <ul className="nav-item">
                            <NavLink className="nav-link" to="#">Descarga la APP</NavLink>
                            </ul>
                        <li>
                            <img src="/public/assets/images/applogo.png" alt="logoapp"className="img-fluid"/>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}