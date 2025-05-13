import React, { useEffect, useState } from 'react'
import axios from 'axios'
 

const Dpolgpd = () => {

    const [dtoLgpd, setDpoLgpd] = useState([])

    useEffect(() => {
      axios.get("http://localhost:3000/dpolgpd") //request 
      .then(response => setDpoLgpd (response.data)) //response
      .catch(error => console.error("Erro ao carregar a lista de Dpo Lgpd: ", error))
    }, [])

    return (
        <div>
            <h1>Dpo LGPD</h1>
            <ul>
                {
                  dpoLgpd.map((dpoLgpd) => (
                   <li key={dpoLgpd.id}>
                     <h2>{dpoLgpd.titulo}</h2>
                   </li> 
                  ))
                }
            </ul>
    
        </div>
      ) 
    }

export default Dpolgpd