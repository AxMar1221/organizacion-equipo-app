import "./Myorg.css"

export const Myorg = (showHide) => {

  return (
    <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/Btn-expand.png" alt="btn-expand" onClick={showHide.changeShowHide}/>
    </section>
  )
}
