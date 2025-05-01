import React from 'react'

const RenderizaBackOuFront = () => {
    function escolhaDeRenderizacao(oQueRenderizar){
        if(oQueRenderizar === "Java"){
            return <h1>backend</h1>
        } else{
            return <b>frontend</b>
        }

    }
return (
    <div>
        {escolhaDeRenderizacao("Java")}
        {escolhaDeRenderizacao("React")}
    </div>
)
}

export default RenderizaBackOuFront