import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({

    email:yup.string().required('Campo obrigatório'),
    password:yup.string().required('Campo obrigatório')

})

export function LoginForm({ setLoading, setUser }){
    const {register, handleSubmit, formState: { errors }} = useForm({resolver:yupResolver(schema)})
    const navigate = useNavigate()

    async function userLogin(data){
        
        try{
            setLoading(true)
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
        }finally {
            setLoading(false)
        }
    }

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
            <Link to={'/'}>Cadastre-se</Link>
        </form>
    )

}