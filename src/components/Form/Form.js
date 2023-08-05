import { Button } from "../Button/Button"
import { Inputs } from "../Inputs/Inputs"
import { OptionList } from "../OptionList/OptionList"
import "./Form.css"

export const Form = () => {

  const handleSend = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
        <section className="form">
            <form onSubmit={handleSend}>
                <h2>Rellene el formulario para crear el registro</h2>
                <Inputs title="Nombre" placeholder="Ingrese el nombre"/>
                <Inputs title="Puesto" placeholder="Ingrese el puesto"/>
                <Inputs title="URL Foto" placeholder="Pega el URL de la foto"/>
                <OptionList />
                <Button>
                    Crear
                </Button>
            </form>
        </section>
    </>
  )
}
