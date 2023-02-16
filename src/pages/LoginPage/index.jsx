import { StyledLogin } from "./styles"
import { useContext, useState } from "react"
import { Loading } from "../../components/Loading"
import { KenzieHub } from "../../components/KenzieHub"
import { LoginForm } from "../../components/LoginForm"
import { UserContext } from "../../providers/UserContext"



export function LoginPage(){

    const { loading } = useContext(UserContext)
  
  
    return(
        <StyledLogin>
            <header className="container2">
                <KenzieHub />
            </header>
            {loading? <Loading />:
                <main className="container2">
                    <LoginForm />
                </main>
            }
        </StyledLogin>
    )
}