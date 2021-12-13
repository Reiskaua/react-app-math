import React, { useState, useEffect } from "react"
import HeaderResponsive from "../../Components/HeaderResponsive"
import { useParams } from "react-router-dom"
import api from '../../Api'
import "./styles.css"

function Expressao() {
    const { name } = useParams();
    const [ctrl, setCtrl] = useState(1)
    const [data, setData] = useState(null)

    useEffect( () => {
        async function load() {
            let res = await api.getExpression(name)
            setData(res)
        }
    
        load()
    }, [name, ctrl])
    

    return (
        <div>
            <HeaderResponsive />
            <div className="resultado">
                {data &&
                    ((data.error)
                        ? <h1>Busca não encontrada</h1>
                        : (
                        <div className="desc">
                            <h1>{name.replace(name[0], name[0].toLocaleUpperCase())}</h1>
                            <p><b>First:</b> {data.first}</p>
                            <p><b>Operation:</b> {data.operation}</p>
                            <p><b>Second:</b> {data.second}</p>
                            <p><b>Expression:</b> {data.expression}</p>
                            <p><b>Answer:</b> {data.answer}</p>
                            <p>{data.expression} = {data.answer}</p>
                        </div>
                        )
                    )
                }
            </div>
            <div>
                <button onClick={() => {
                    setCtrl(ctrl+1)
                }}>Atualizar</button>
            </div>
        </div>
    )
}

export default Expressao