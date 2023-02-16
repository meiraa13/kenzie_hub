import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"

export function ModalCreate({modalRef}){

    const {register, handleSubmit, reset} = useForm()
    const [techs, setTechs] = useState([])

    function closeModal(){
        modalRef.current.close()
    }

    
    async function createTech(data){

        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await api.post('/users/techs',data,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            } )
            setTechs([...techs, response.data])
            modalRef.current.close()
            reset()

            
        } catch (error) {
            
        }

    }

     return(
        <dialog className="modal" ref={modalRef} >
            <div className="modal-title">
                <h3>Cadastrar Tecnologia</h3>
                <button onClick={closeModal}>X</button>
            </div>
            <form method="dialog" onSubmit={handleSubmit(createTech)}>
                <label htmlFor="title">Nome</label>
                <input id="title" placeholder="Nome da tecnologia"{...register('title')}></input>
                <label htmlFor="status">Selecionar Status</label>
                <select {...register('status')}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button>Cadastrar Tecnologia</button>

            </form>
        </dialog>
    )
}