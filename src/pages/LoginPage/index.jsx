import { StyledLogin } from "./styles"
import { useState } from "react"
import { Loading } from "../../components/Loading"
import { KenzieHub } from "../../components/KenzieHub"
import { LoginForm } from "../../components/LoginForm"



export function LoginPage({ setUser }){

    const [loading, setLoading] = useState(false)

  
    return(
        <StyledLogin>
            <header className="container2">
                <KenzieHub />
            </header>
            {loading? <Loading />:
                <main className="container2">
                    <LoginForm setUser={setUser} setLoading={setLoading} />
                </main>
            }
        </StyledLogin>
    )
}