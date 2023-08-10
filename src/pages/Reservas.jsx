import { useState } from "react"
import { db } from "../config/firebase.js"
import "../pages/Reservas.css"


export const Reservas = () => {
  const initialValue = {
    nombre: '',
    comensales: '',
    fecha: '',
    email: '',

  };

  const [reserva, setReserva] = useState(initialValue)
  const cambiar = (e) => {
    setReserva({
      ...reserva,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }

// aqui sweetalert2//
const enviarFormulario = async (e) => {
  e.preventDefault()
  await db.collection("reservas").add(reserva)
  console.log(reserva)
  setReserva(initialValue)
}


  return (
    <>
      <div className="contenedor">
        <div className="contenedor-formulario">
          <form className="form gap-5 p-5"  onSubmit={enviarFormulario}>
          <h2>Reserva tu mesa</h2>
            <input type="text" className="form-control mt-3" name="nombre" placeholder="Ingrese su nombre" value={reserva.nombre} onChange={cambiar} />
            <input type="number" className="form-control mt-3" name="comensales" placeholder="Cantidad de personas" value={reserva.comensales} onChange={cambiar} />
            <input type="datetime-local" className="form-control mt-3" name="fecha" placeholder="Fecha de reserva" value={reserva.fecha} onChange={cambiar} />
            <input type="email" className="form-control mt-3" name="email" placeholder="E-mail" value={reserva.email} onChange={cambiar} />
            <button type="submit" className="btn btn-primary mt-3">Hacer reserva</button>
            <img className="img-responsive" src="public/assets/images/pollosrecort.png" alt="pollos" />
          </form>
        </div>
      </div>
  </>
  )





}


