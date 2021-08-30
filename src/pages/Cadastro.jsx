import React from "react"
import Header from "../components/Header";
import Form from "../components/Form"
class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    } 

    render() {
        return (
            <div>
                <Header titulo="Cadastro"/>
                <Form />
            </div>
        )
    }
}

export default Cadastro

