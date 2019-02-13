import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'


class Connexion extends Component {

  state = {
    pseudo: '',
    goToTchat: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({goToTchat:true})
  }

  handleChange = (event) => {
    const pseudo = event.target.value
    this.setState({pseudo})
  }


  render(){
    if(this.state.goToTchat){
      return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
    }

    return(
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleSubmit}>
          <input
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder="pseudo"
            type="text"
            required />
            <button type="submit">Yallah</button>
        </form>
      </div>

      )
  }
}


export default Connexion;






