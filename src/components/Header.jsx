import React from "react"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header className="App-header">
                <h1>{this.props.titulo}</h1>
            </header>
         );
    }
}
 
export default Header;