

import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';





class AddTask extends Component{

  constructor(props){
    super(props)
    this.state = {
      titleInput: '',
      descInput: '',
    }
  }



  addTask(){


    console.log("this is title input", this.state.titleInput, "this is desc input",  this.state.descInput)


    axios.post("http://localhost:5000/api/tasks/create", {title: this.state.titleInput, description: this.state.descInput})
      .then((res)=>{

        console.log(res)
          


      })
      .catch((err)=>{
        console.log(err)
      })

    this.setState({
      titleInput: '',
      descInput: '',
    })

  }

  updateTitle(e){
    this.setState({
      titleInput: e.target.value,
      descInput: this.state.descInput,
    })
    console.log(this.state)
  }


  updateDescription(e){
    this.setState({
      titleInput: this.state.titleInput,
      descInput: e.target.value,
    })
  }


  render(){
    return(
      <div className="add-task">
        <h3> Add A New Task </h3>
        <label> title </label>
        <input value={this.state.titleInput} onChange={(e)=>{this.updateTitle(e)}}/>

        <label> Description </label>
        <input value={this.state.descInput} onChange={(e)=>{this.updateDescription(e)}}/>

        <button onClick={()=> {this.addTask()}}> submit a new task</button>




      </div>
    )



  }




  




}



export default AddTask