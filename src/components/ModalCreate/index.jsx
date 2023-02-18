import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext"
import { api } from "../../services/api"
import { StyledModal } from "./styles"
import { toast } from "react-toastify"
import { TechContext } from "../../providers/TechContext"

export function ModalCreate(){

    const {register, handleSubmit, reset} = useForm()
    const { createTech, setModal } = useContext(TechContext)
    
  

     return(

        <StyledModal  >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Cadastrar Tecnologia</h3>
                        <button onClick={()=>setModal(false)}>X</button>
                    </div>
                    <form onSubmit={handleSubmit(createTech)}>
                        <label htmlFor="title">Nome</label>
                        <input id="title" placeholder="Nome da tecnologia"{...register('title')}></input>
                        <label htmlFor="status">Selecionar Status</label>
                        <select {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button className="btn-create">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
         
        </StyledModal>
    )
}