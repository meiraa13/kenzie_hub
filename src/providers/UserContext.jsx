import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export function UserProvider({ children }){

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function userRegister(data){
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

    useEffect(()=>{
        const token = localStorage.getItem('@TOKEN')
        if(token){
            async function autoLogin(){
                try{
                    const response = await api.get('/profile',{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(response.data)
                    navigate(`dashboard/${response.data.name}`)


                }catch(error){
                    console.log(error)
                }
               

            }
            autoLogin()
         }
    },[])

    async function userLogin(data){
        
        try{
            setLoading(true)
            const response = await api.post('/sessions', data)
            const userName = response.data.user.name 

            if(response.status == 200){

                toast.success(`Bem-vindo, ${userName}`)
                navigate(`/dashboard/${userName}`)

                setUser(response.data.user)

                localStorage.setItem('@TOKEN', response.data.token)
                localStorage.setItem('@USERID', response.data.user.id)
            }
        }catch(error){
            toast.error('email ou senha inválidos')
            console.log(error)
        }finally {
            setLoading(false)
        }
    }
    
    function logout(){

        setUser('')
        localStorage.clear()
        navigate('/')

    }

    return(
        <UserContext.Provider value={{ userRegister, user, setUser, userLogin, loading, logout }}>
            {children}
        </UserContext.Provider>
    )

}

