import React from "react"
import Cadastro from "../Cadastro/Cadastro";
import Consulta from "../Consulta/Consulta";
import "./Homepage.css"


class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Cadastro />
                <Consulta />
            </div>
        )
    }
}

export default Homepage;