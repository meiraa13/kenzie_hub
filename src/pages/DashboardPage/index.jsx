import { StyledDashboard } from "./styles"
import { useNavigate } from "react-router-dom"

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
                <h2>Kenzie Hub</h2>
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
                    <button>+</button>
                </div>
                <ul>
                    <li>
                        <h3>ReactJS</h3>
                        <p>Intermediário</p>
                    </li>
                    <li>
                        <h3>ReactJS</h3>
                        <p>Intermediário</p>
                    </li>
                    <li>
                        <h3>ReactJS</h3>
                        <p>Intermediário</p>
                    </li>
                </ul>
            </main>

        </StyledDashboard>
    )
}