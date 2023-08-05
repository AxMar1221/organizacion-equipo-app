import { Inputs } from "../Inputs/Inputs"
import "./Form.css"

export const Form = () => {
  return (
    <>
        <section className="form">
            <form>
                <h2>Rellene el formulario para crear el registro</h2>
                <Inputs title="Nombre" placeholder="Ingrese el nombre"/>
                <Inputs title="Puesto" placeholder="Ingrese el puesto"/>
                <Inputs title="URL Foto" placeholder="Pega el URL de la foto"/>
            </form>
        </section>
    </>
  )
}
