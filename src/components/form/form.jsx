import React from "react"

class Form extends React.Component {
    render() {
        
        return (
            <form>
                <div className="form-group">
                    <label id="name-label" for="name">Nome:</label>
                    <input id="name" className="form-control" type="text" name="name" placeholder="Nome da criança" required=""></input>
                </div>

                <div className="form-group">
                    <label id="date-label" htmlFor="name">Data de Nascimento:</label>
                    <input id="date" className="form-control" type="date" name="date" required=""></input>
                </div>

                <div className="form-group">
                    <label id="nameResp-label" htmlForr="name">Nome do Responsável:</label>
                    <input id="nameResp" className="form-control" type="text" name="name" placeholder="Digite o nome do responsável" required=""></input>
                </div>

                <div className="form-group">
                    <label id="telResp-label" htmlFor="">Telefone de Contato do Responsável:</label>
                    <input id="telResp" className="form-control" type="text" name="name" placeholder="Digite o telefone do responsável" required=""></input>
                </div>


                {/* <div class="form-group">
                    <button id="submit" className="submit-button" type="submit">Enviar</button>
                </div> */}
            </form>
        );
    }
}

export default Form;