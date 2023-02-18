import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"


const schema = yup.object({

    email:yup.string().required('Campo obrigatório'),
    password:yup.string().required('Campo obrigatório')

})

export function LoginForm(){
    const {register, handleSubmit, formState: { errors }} = useForm({resolver:yupResolver(schema)})
    const { userLogin} = useContext(UserContext)

   

    return(
        <form onSubmit={handleSubmit(userLogin)}>
            <h3>Login</h3>
            <label htmlFor="email">Email</label>
            <input id='email' placeholder="Digite aqui seu email"{...register('email')}></input>
            <p>{errors.email?.message}</p>

            <label htmlFor="password">Senha</label>
            <input id='password' type='password' placeholder="Digite aqui sua senha" {...register('password')}></input>
            <p>{errors.password?.message}</p>

            <button type="submit">Entrar</button>
            <p>Ainda não possui uma conta?</p>
            <Link to={'/register'}>Cadastre-se</Link>
           
        </form>
    )

}