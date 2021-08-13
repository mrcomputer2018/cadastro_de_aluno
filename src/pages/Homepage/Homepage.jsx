import React from "react"
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import "./Homepage.css"

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Form/>
            </>
        )
    }
}

export default Homepage;