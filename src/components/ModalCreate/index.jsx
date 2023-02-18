import { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledModal } from "./styles"
import { TechContext } from "../../providers/TechContext"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({

    title: yup.string().required('Campo obrigatório'),
    status: yup.string().required('Campo obrigatório')
})

export function ModalCreate(){

    const {register, handleSubmit, formState: { errors }} = useForm({resolver:yupResolver(schema)})
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
                        <p>{errors.title?.message}</p>

                        <label htmlFor="status">Selecionar Status</label>
                        <select {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <p>{errors.status?.message}</p>
                        
                        <button className="btn-create">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
         
        </StyledModal>
    )
}