import {} from 'react'
import {FaPlaystation } from "react-icons/fa";
import {rodape} from '../CSS/Rodae.module.css'


function Ropade (){
  return(
    <section className={rodape} >
    <h3>@2023-todos os direitos reservados</h3>
    <FaPlaystation/>
    </section>
  )
}
export default Ropade