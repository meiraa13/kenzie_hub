import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
    name:yup.string().required('Campo obrigatório'),
    email:yup.string().email('Preencha com formato válido de email').required('Campo obrigatório'),
    password:yup.string()
    .matches(/[a-z]/, "Sua senha deve ter pelo menos 1 letra minuscula")
    .matches(/(\d)/, "Sua senha deve ter pelo menos 1 número")
    .matches(/[A-Z]/, "Sua senha deve ter pelo menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Sua senha deve ter pelo menos 1 caracter especial")
    .matches(/.{8,}/, "Sua senha deve ter no mínimo 8 caracteres"),
    password_confirm:yup.string().oneOf([yup.ref('password')], 'Deve ser igual a senha').required('Campo obrigatório'),
    bio:yup.string().required('Campo obrigatório'),
    contact:yup.string().required('Campo obrigatório'),
    course_module:yup.string().required('Campo obrigatório'),

})

export function RegisterForm(){
    const {register, handleSubmit, formState: { errors },} = useForm({resolver:yupResolver(schema)})
    const navigate = useNavigate()

    async function registerUser(data){
        delete data.password_confirm
        
        try {
            const response = await api.post('/users', data)
            if(response.status == 201){
                toast.success('Usuário cadastrado com sucesso!')
                navigate('/')
            }
        
        } catch(error){
            toast.error('Cadastro não realizado')
            console.log(error)
        }
    }

   return(

        <form onSubmit={handleSubmit(registerUser)}>
            <h3>Crie sua conta</h3>
            <p>Rápido e grátis, vamos nessa</p>
            <label htmlFor="name">Nome</label>
            <input id='name' placeholder="Digite aqui seu nome" {...register('name')}></input>
            <p>{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input id='email' placeholder="Digite aqui seu email" {...register('email')}></input>
            <p>{errors.email?.message}</p>

            <label htmlFor="password">Senha</label>
            <input id='password' type='password' placeholder="Digite aqui sua senha" {...register('password')}></input>
            <p>{errors.password?.message}</p>

            <label htmlFor="password_confirm">Confirmar senha</label>
            <input id='password_confirm' type='password' placeholder="Digite novamente a senha" {...register('password_confirm')}></input>
            <p>{errors.password_confirm?.message}</p>

            <label htmlFor="bio">Bio</label>
            <input id='bio' placeholder="Fale sobre você" {...register('bio')}></input>
            <p>{errors.bio?.message}</p>

            <label htmlFor="contact">Contato</label>
            <input id='contact' placeholder="Opção de contato" {...register('contact')}></input>
            <p>{errors.contact?.message}</p>

            <label htmlFor="course_module">Selecionar módulo</label>
            <select id="course_module"  {...register('course_module')}>
                <option>Primeiro módulo</option>
                <option>Segundo módulo</option>
                <option>Terceiro módulo</option>
                <option>Quarto módulo</option>
            </select>
            <p>{errors.course_module?.message}</p>

            <button type="submit">Cadastrar</button>
        </form>
    )
}