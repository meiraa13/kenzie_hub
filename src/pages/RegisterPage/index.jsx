import { StyledRegister } from "./styles"
import { KenzieHub } from "../../components/KenzieHub"
import { RegisterForm } from "../../components/RegisterForm"
import { useNavigate } from "react-router-dom"


export function RegisterPage(){

    const navigate = useNavigate()

    function goBack(){
        navigate(-1)
    }

    return(
        <StyledRegister>
            <header className="container2">
                <KenzieHub />
                <button className="go-back" onClick={goBack}>Voltar</button>
            </header>
            <main className="container2">
                <RegisterForm />
             
            </main>
        </StyledRegister>
    )
}