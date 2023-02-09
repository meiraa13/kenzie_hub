import { StyledLogin } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { toast } from "react-toastify"


export function LoginPage({user, setUser}){

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    async function userLogin(data){
        
        try{
            const response = await api.post('/sessions', data)
            const userName = response.data.user.name 
            if(response.status == 200){

                toast.success(`Bem-vindo, ${userName}`)
                navigate(`/dashboard/${userName}`)

                setUser(response.data.user)

                localStorage.setItem('@TOKEN', JSON.stringify(response.data.token))
                localStorage.setItem('@USERID', JSON.stringify(response.data.user.id))
            }
        }catch(error){
            toast.error('email ou senha inválidos')
            console.log(error)
        }
    }

    return(
        <StyledLogin>
            <header className="container2">
                <h2>Kenzie Hub</h2>
            </header>
            <main className="container2">
                <form onSubmit={handleSubmit(userLogin)}>
                    <h3>Login</h3>
                    <label htmlFor="email">Email</label>
                    <input id='email' placeholder="Digite aqui seu email"{...register('email')}></input>
                    <label htmlFor="password">Senha</label>
                    <input id='password' placeholder="Digite aqui sua senha" {...register('password')}></input>
                    <button type="submit">Entrar</button>
                    <p>Ainda não possui uma conta?</p>
                    <Link to={'/'}>Cadastre-se</Link>
                </form>
            </main>
        </StyledLogin>
    )
}