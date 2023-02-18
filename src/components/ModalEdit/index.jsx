import { useForm } from "react-hook-form"
import { StyledEditModal } from "./styles"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object({

    title: yup.string().required('Campo obrigatório'),
    status: yup.string().required('Campo obrigatório')
})

export function ModalEdit(){

    const { editContent, setEditContent, removeTech, updateTech} = useContext(TechContext)
   
    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            title:editContent.title,
            status: editContent.status
        },
        resolver:yupResolver(schema)
    })

   
    
    return(

        <StyledEditModal >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Tecnologia Detalhes</h3>
                        <button onClick={()=>setEditContent(null)}>X</button>
                    </div>
                    <form onSubmit={handleSubmit(updateTech)}>
                        <label htmlFor="title">Nome</label>
                        <input disabled id="title" placeholder="Nome da tecnologia"{...register('title')}></input>
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