import React from "react"

class Form extends React.Component {
    render() {
        
        return (
            <form>
                <div className="form-group">
                    <label id="name-label" htmlFor="name">Nome:</label>
                    <input id="name" className="form-control" type="text" name="name" placeholder="Nome da criança" required=""></input>
                </div>

                <div className="form-group">
                    <label id="date-label" htmlFor="name">Data de Nascimento:</label>
                    <input id="date" className="form-control" type="date" name="date" required=""></input>
                </div>

                <div className="form-group">
                    <label id="nameResp-label" htmlFor="name">Nome do Responsável:</label>
                    <input id="nameResp" className="form-control" type="text" name="name" placeholder="Digite o nome do responsável" required=""></input>
                </div>

                <div className="form-group">
                    <label id="telResp-label" htmlFor="">Telefone de Contato do Responsável:</label>
                    <input id="telResp" className="form-control" type="text" name="name" placeholder="Digite o telefone do responsável" required=""></input>
                </div>

                <div className="form-group">
                    <label id="avisarResp-label" htmlFor="">Em caso de emergência avisar:</label>
                    <select name="select">
                        <option value="valor1"selected>Pais</option>
                        <option value="valor2">Tios</option>
                        <option value="valor3">Avós</option>
                        <option value="valor3">Padrinhos</option>
                    </select>
                </div>

                <div class="form-group">
                    <button id="submit" className="submit-button" type="submit">Enviar</button>
                </div>
            </form>
        );
    }
}

export default Form;