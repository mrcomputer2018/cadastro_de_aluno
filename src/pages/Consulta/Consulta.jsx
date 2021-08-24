import React from "react"
import Header from "../../components/Header/Header";
import Ul from "../../components/List/Ul"
class Consulta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    } 
 
    render () {
        return (
            <div>
                <Header titulo="Consulta"/>
                <Ul/>
            </div>
        )
    }
}

export default Consulta