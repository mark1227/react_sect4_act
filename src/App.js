import React, { Component } from 'react';
import './App.css';



class App extends Component {
  // state = { username: "Mako", toHideOrNot: true };
  

  // UpdateUsername = ( event ) => {
  //     this.setState({ username: event.target.value })
  // };

  // hideField = () => {
  //   const doesShow = this.state.toHideOrNot;
  //   this.setState({ toHideOrNot: !doesShow})
  // };

  

  state = { username: 'Mako' };
  UpdateUsername = ( event ) => {
      this.setState({ username: event.target.value })
  };


  deleteCharacter = ( index ) => {
    const characterIndex = this.state.username.split(''); //break string to several characters
    characterIndex.splice(index, 1);                      //remove character on the specified index
    const updating = characterIndex.join('');             //regroup the characters into a string
    this.setState({ username: updating });                //update state value to render

  };


  render(){

    // let hold = null;

    // if( this.state.toHideOrNot){    //another way in using conditional statement but the same output as ?: condition
    //   hold=(<div>
    //       <UserInput changed = { this.UpdateUsername } value={ this.state.username }/>
    //       <UserOutput name= { this.state.username }  />
    //   </div>)
    // }






    let Characters = this.state.username.split('').map((char,index) =>{ // pull characters from string using map
      return <Char name = {char}                                        // asign the pulled character to name
           key = {index}                                                // asign key the index of the specific character
           clicked = { () => this.deleteCharacter(index)} />            // executes deleteCharacter method when the character component is clicked
    });


    return (
      <div className="App">
        {/* <button onClick={ this.hideField }>Click me</button> */}
        {/* { this.state.toHideOrNot === true ? //if condition is true, execute statements after ?
          <div>
          <UserInput changed = { this.UpdateUsername } value={ this.state.username }/>
          <UserOutput name= { this.state.username }  />
          </div>
          : null  //else, executes statements after :
        } */}
        {/* {hold} */}
        {/*displays the value of hold which is jsx codes*/} 

          <UserInput value = { this.state.username } changed = { this.UpdateUsername } />
          <Display length = { this.state.username.length } />     {/* take the length of the string */}
          <div className='App'>
          {Characters}                                             {/* calls the Character variable */}
          </div>

      </div>
    );
  }
}


const Char = ( props ) => {
  const style = {
    display:'block',
    border: '2px solid black',
    margin: '20px auto',
    padding: '20px',
    width: '50px',
    textAlign: 'center'

  };
  return (
    <div style = {style} onClick= { props.clicked }>
      {props.name}
    </div>
  );
}

const UserInput = ( props ) =>{
  return (
    <div className="App">
      <input type="text" 
        onChange = { props.changed }
        value = { props.value }
        onClick = { props.clicked }
      />
    </div>
  );
}

const Display = ( props ) =>{
   let hold = 'too short!!' ;
   if( props.length >= 8 ){
      hold = 'good input!';
   };


  return (
    <div className="App">
      <p>{hold}</p>
    </div>
  );
}

      







// const UserInput = ( props ) =>{
//   return (
//     <div class="App">
//       <input type="text" 
//         onChange = { props.changed }
//         value = { props.value }
//       />
//     </div>
//   );
// }

// const UserOutput = (props) =>{
//   return (
//     <div class="App">
//       <p>Your username is { props.name }</p>
//       <p>And you are Gwapo </p>
//     </div>
//   );
// }

export default App;
