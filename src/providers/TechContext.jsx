import { createContext, useState } from "react";
import { useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";


export const TechContext = createContext({})

export function TechProvider({children}){

    const [modal, setModal] = useState(false)
    const [editContent, setEditContent] = useState(null)
    const { setUser, user } = useContext(UserContext)

    async function createTech(data){
        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.post('/users/techs',data,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            } )
            toast.success('tecnologia cadastrada!')
            setModal(false)
            setUser({...user, techs:[...user.techs, response.data]})

            
        } catch (error) {
            
        }
    }

    
    async function removeTech(techId){
        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.delete(`/users/techs/${techId}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            toast.warning('tecnologia deletada!')
            let arrayTechs = user.techs
            const newTechs = arrayTechs.filter(tech => tech.id !== techId)
            setUser({...user, techs:[...newTechs]})
            setEditContent(null)

        } catch (error) {
            console.log(error)            
        }
    }

    return(
        <TechContext.Provider value={{modal, setModal, editContent, setEditContent, createTech, removeTech}}>
            {children}
        </TechContext.Provider>
    )

}