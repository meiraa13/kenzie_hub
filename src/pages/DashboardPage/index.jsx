import { StyledDashboard } from "./styles"
import { useNavigate } from "react-router-dom"
import { KenzieHub } from "../../components/KenzieHub"

export function DashboardPage({ user, setUser }){

    const navigate = useNavigate()

    function logout(){

        setUser('')
        localStorage.clear()
        navigate('/')

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
                    <h3>Que pena! estamos em desenvolvimento :( </h3>
                </div>
                <ul>Nossa aplicação está em desenvolvimento, em breve teremos novidades</ul>
            </main>

        </StyledDashboard>
    )
}