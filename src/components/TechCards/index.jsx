import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"

export function TechCards({tech}){

    const { setEditContent } = useContext(TechContext)

    return (

        <li onClick={()=> setEditContent(tech)} key={tech.id}>
            <h3>{tech.title}</h3>
            <p>{tech.status}</p>
        </li>
    )


}