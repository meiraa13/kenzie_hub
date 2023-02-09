import { StyledRegister } from "./styles"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export function RegisterPage(){

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    async function registerUser(data){

        try {
            const response = await api.post('/users', data)

            if(response.status == 201){
                toast.success('Usuário cadastrado com sucesso!')
                navigate('/login')

            }

        } catch(error){

            toast.error('Cadastro não realizado')
            console.log(error)

        }
    }

    function goBack(){

        navigate(-1)
    }

    return(
        <StyledRegister>
            <header className="container2">
                <h2>Kenzie Hub</h2>
                <button className="go-back" onClick={goBack}>Voltar</button>
            </header>
            <main className="container2">
                <form onSubmit={handleSubmit(registerUser)}>
                    <h3>Crie sua conta</h3>
                    <p>Rápido e grátis, vamos nessa</p>
                    <label htmlFor="name">Nome</label>
                    <input id='name' placeholder="Digite aqui seu nome" {...register('name')}></input>
                    <label htmlFor="email">Email</label>
                    <input id='email' placeholder="Digite aqui seu email" {...register('email')}></input>
                    <label htmlFor="password">Senha</label>
                    <input id='password' placeholder="Digite aqui sua senha" {...register('password')}></input>
                    {/* <label htmlFor="password_confirm">Confirmar senha</label>
                    <input id='password_confirm' placeholder="Digite novamente a senha"></input> */}
                    <label htmlFor="bio">Bio</label>
                    <input id='bio' placeholder="Fale sobre você" {...register('bio')}></input>
                    <label htmlFor="contact">Contato</label>
                    <input id='contact' placeholder="Opção de contato" {...register('contact')}></input>
                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select id="course_module"  {...register('course_module')}>
                        <option>Primeiro módulo</option>
                        <option>Segundo módulo</option>
                        <option>Terceiro módulo</option>
                        <option>Quarto módulo</option>
                    </select>
                    <button type="submit">Cadastrar</button>
                </form>
            </main>
        </StyledRegister>
    )
}