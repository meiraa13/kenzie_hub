import { StyledDashboard } from "./styles"
import { KenzieHub } from "../../components/KenzieHub"
import { useContext, useRef } from "react"
import { UserContext } from "../../providers/UserContext"
import { ModalCreate } from "../../components/ModalCreate"

export function DashboardPage(){

    const { user, logout} = useContext(UserContext)
    const modalRef = useRef(null)
    
    function openModal(){
        modalRef.current.showModal()
    }


   
    return(
        <StyledDashboard>
            <header className="container">
                <KenzieHub />
                <button onClick={logout}>Sair</button>
            </header>
            <section>
                <div className="container">
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                </div>
            </section>
            <main className="container">
                <div>
                    <h3>Tecnologias</h3>
                    <button onClick={openModal}>+</button>
                </div>
                <ModalCreate modalRef={modalRef}/>

             
                <ul>Nossa aplicação está em desenvolvimento, em breve teremos novidades</ul>
            </main>

        </StyledDashboard>
    )
}