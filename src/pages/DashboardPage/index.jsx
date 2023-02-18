import { StyledDashboard } from "./styles"
import { KenzieHub } from "../../components/KenzieHub"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { ModalCreate } from "../../components/ModalCreate"
import { ModalEdit } from "../../components/ModalEdit"
import { TechContext } from "../../providers/TechContext"

export function DashboardPage(){

    const { user, logout} = useContext(UserContext)
    const { modal, setModal, editContent, setEditContent} = useContext(TechContext)
   
    

   
    return(
        <StyledDashboard>
            <header className="container">
                <KenzieHub />
                <button onClick={logout}>Sair</button>
            </header>
            <section className="section">
                <div className="container">
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                </div>
            </section>
            <main className="container">
                <div>
                    <h3>Tecnologias</h3>
                    <button onClick={()=> setModal(true)}>+</button>
                </div>
                {modal && <ModalCreate />}
                {
                    user.techs.length > 0 ? (
                    <ul>
                        {
                            user.techs.map((tech)=>(
                                
                                    <li onClick={()=> setEditContent(tech)} key={tech.id} >
                                        <h3 >{tech.title}</h3>
                                        <p>{tech.status}</p>
                                    
                                    </li>
                            ))
                        }
                    </ul>) 
                    : (<h1>Você não possui tecnologias cadastradas no momento</h1>)
                }
                {editContent && <ModalEdit />}

            </main>

        </StyledDashboard>
    )
}