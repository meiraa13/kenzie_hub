import { useForm } from "react-hook-form"
import { StyledEditModal } from "./styles"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"


export function ModalEdit(){

    const { editContent, setEditContent, removeTech} = useContext(TechContext)
   
    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            title:editContent.title,
            status: editContent.status
        }
    })

    
    return(

        <StyledEditModal >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Tecnologia Detalhes</h3>
                        <button onClick={()=>setEditContent(null)}>X</button>
                    </div>
                    <form >
                        <label htmlFor="title">Nome</label>
                        <input id="title" placeholder="Nome da tecnologia"{...register('title')}></input>
                        <label htmlFor="status">Selecionar Status</label>
                        <select {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <div className="div-buttons">
                            <button className="btn-edit" type="submit">Salvar alterações</button>
                            <button onClick={()=>removeTech(editContent.id)} className="btn-exclude" type="button">Excluir</button>
                        </div>
                  
                    </form>
                  
                </div>
            </div>
        </StyledEditModal>
    )
}