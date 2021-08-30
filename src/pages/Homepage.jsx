import React, { Component } from "react"
import Cadastro from "./Cadastro";
import Consulta from "./Consulta";
import "./Homepage.css"


class Homepage extends Component {
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