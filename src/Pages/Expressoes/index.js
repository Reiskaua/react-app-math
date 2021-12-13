import React from "react"
import HeaderResponsive from "../../Components/HeaderResponsive"
import { Link } from "react-router-dom";
import "./styles.css"

function Expressoes() {

    return (
        <div>
            <HeaderResponsive />
            <div className="expressoes">
                <div className="expressao">
                    <Link to="/expressao/random">
                        <div className="operacao">
                            <p>?</p>
                        </div>
                        <p>Random</p>
                    </Link>
                </div>
                <div className="expressao">
                    <Link to="/expressao/add">
                        <div className="operacao">
                            <p>+</p>
                        </div>
                        <p>Adição</p>
                    </Link>
                </div>
                <div className="expressao">
                    <Link to="/expressao/sub">
                        <div className="operacao">
                            <p>-</p>
                        </div>
                        <p>Subtração</p>
                    </Link>
                </div>
                <div className="expressao">
                    <Link to="/expressao/div">
                        <div className="operacao">
                            <p>/</p>
                        </div>
                        <p>Divisão</p>
                    </Link>
                </div>
                <div className="expressao">
                    <Link to="/expressao/mul">
                        <div className="operacao">
                            <p>x</p>
                        </div>
                        <p>Multiplicação</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Expressoes