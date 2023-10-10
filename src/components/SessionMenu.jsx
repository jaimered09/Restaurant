import { useContext } from "react"
import UsersContext from "../context/UsersContext"
import { NavLink, Outlet } from "react-router-dom"

export const SessionMenu = () => {

    const userCtx = useContext(UsersContext)

    const { logout, authStatus, usersData } = userCtx


  return (
<>
            <div>
                <ul>
                    <li>
                        <NavLink to = '/'>
                            Inicio
                        </NavLink>
                    </li>

                    {
                        authStatus ?
                            <>
                                <li>
                                    <NavLink to='/'>
                                        {usersData?.nombre}
                                    </NavLink>
                                </li>
                                <li onClick = {() => { logout() }}>
                                    <NavLink to='/login'>
                                        Cerrar Sesion
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink to='/register'>
                                        Registro
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to= '/login'>
                                        Iniciar Sesion
                                    </NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
            <Outlet />
        </>
  )
}
