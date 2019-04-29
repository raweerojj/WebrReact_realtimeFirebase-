import React, { Component } from 'react';
import firebase from './firebase'
import './App.css';

var rand =1+(Math.floor(Math.random() * Math.floor(9))); //1-10
var count = 0;
class App extends Component {
  
  constructor(){
     super();
     this.state = {
        users:[],
        user_id:'',
        comment:'',
        name:'',
        wrong:'',
        shown: true   

     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.check1 = this.check1.bind(this)
     this.check2 = this.check2.bind(this)
     this.check3 = this.check3.bind(this)
     this.check4 = this.check4.bind(this)
     this.check5 = this.check5.bind(this)
     this.check6 = this.check6.bind(this)
     this.check7 = this.check7.bind(this)
     this.check8 = this.check8.bind(this)
     this.check9 = this.check9.bind(this)
     this.check10 = this.check10.bind(this)
     this.hit = this.hit.bind(this)

  }  
  
  componentDidMount(){
    const usersRef = firebase.database().ref('users');
    usersRef.on('value',(snapshot) => {
        let users = snapshot.val();
        let newState = [];
        for(let user in users){
          newState.push({
              user_id:user,
              comment:users[user].comment,
              name:users[user].name,
              wrong:users[user].wrong
          })
        }
        this.setState({
          users:newState
        })
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    if(this.state.comment==''){
      alert("Please choose user before users.");
    }
    else if(this.state.name==''){
      alert("Please input Your Name.");
    }
    else{
      if(this.state.user_id != ''){
        return this.updateuser();
      }
      const usersRef = firebase.database().ref('users')
      const user = {
        comment : this.state.comment,
        name : this.state.name,
        wrong : this.state.wrong
      }
      usersRef.push(user)
      this.setState({
        user_id:'',
        comment:'',
        name:'',
        wrong:''
      })
      this.state.shown = !this.state.shown
      rand =1+(Math.floor(Math.random() * Math.floor(9)));
    }
  }

  removeuser(userId){
    const usersRef = firebase.database().ref('/users');
    usersRef.child(userId).remove();
  }

check1(){
  if(rand==1){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check2(){
  if(rand==2){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check3(){
  if(rand==3){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check4(){
  if(rand==4){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check5(){
  if(rand==5){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check6(){
  if(rand==6){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check7(){
  if(rand==7){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check8(){
  if(rand==8){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check9(){
  if(rand==9){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
check10(){
  if(rand==10){
    alert("Congratulation");
    this.setState({
      shown: !this.state.shown
    })
  }
  else{
    count++
    this.setState({
      shown: this.state.shown
    })
  }
}
hit(){
  alert("Answer" + rand);
}
render() {
  var shown = {
    display: this.state.shown ? "block" : "none"
  };
  
  var hidden = {
    display: this.state.shown ? "none" : "block"
  }
  
  return (
    <div className="App">
      <center><h1>Find the Gold.</h1><br></br></center>
        <center>
          <div style={shown}>
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check1}>1</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check2}>2</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check3}>3</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check4}>4</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check5}>5</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check6}>6</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check7}>7</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check8}>8</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check9}>9</button>&nbsp;&nbsp;
                      <button type="submit" class="btn btn-warning btn-lg" onClick={this.check10}>10</button>&nbsp;&nbsp;
                      <br></br>
                      <br></br>
                      <button style={shown} class="btn btn-secondary btn-lg" onClick={this.hit}>Hit</button>
                      <text><b>Wrong = {count}</b></text>
                      </div></center>
        <div style={hidden}>
          <form  onSubmit={this.handleSubmit} onKeyPress={event => {
            if (event.which === 13 /* Enter */) {
              event.preventDefault();
            }
          }}>
          <div className="row">
                    <div className="col-8">
                      <div className="form-row">
                        <div className="col-4">
                          <input type="text" name="name" className="form-control" placeholder="name" onChange={this.handleChange} value={this.state.name}/></div>
                        <div className="col-12">
                          <textarea type="text" name="comment" className="form-control" placeholder="comment" onChange={this.handleChange} value={this.state.comment}/></div>
                          <br></br>
                          <br></br>
                          <br></br>
                        <div className="col">
                          <button type="submit" onClick={this.state.wrong=count} class="btn btn-warning">Save</button>&nbsp;&nbsp;</div>
                        </div>
                      </div>
            </div>
            </form>
          </div>
          <br></br>
          <br></br>
          <br></br>
        <div className= "App-table">
          <center><h2>Leader Board</h2><br></br></center>
            <table className="table table-hover">
                    <tr className="thead-light">
                        <th width="30%">name</th>
                        <th width="50%">comment</th>
                        <th width="52%">wrong</th>
                        <th width="5%">Delete</th>
                    </tr>

                    {this.state.users.map((user) => {
                    return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.comment}</td>
                                <td>{user.wrong}</td>
                                <td><button className="btn btn-danger btn-md" onClick={() => this.removeuser(user.user_id)}>Delete</button></td>
                            </tr>
                          )})}
            </table>
        </div>
    </div>
    );
}
}

export default App;