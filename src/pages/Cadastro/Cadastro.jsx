import React from "react"
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
class Cadastro extends React.Compoonent {
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

