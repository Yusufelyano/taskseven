import { useState } from "react"

const Heroes = () => {


   const [name, setName] = useState([
      "Шерлок Холмс",
      "Доктор Ватсон",
      "Профессор Мориарти",
      "Миссис Хадсон",
      "Ирен Адлер"
   ])

const handleDelete = (i) => {
   const del = name.filter((item, index) => {
      if(i === index){
         return false
      }
      return true
   })
   setName(del)
}
   return(
      <div>
         <ul>
            {name.map((item, index) => {
               return <li onClick={() => handleDelete(index)}>{item}</li>
            })}
         </ul>
      </div>
   )
}

export default Heroes