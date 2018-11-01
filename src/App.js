import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {file: "", input:"", words:"", suggestions:[]};
            
            changeState = (object) => {
                console.log(this);
             // this.setState(object);

            };

            handleFile = (event) => {
    
                var fileInput = event.target;

                
                var reader = new FileReader();

                reader.readAsText(fileInput.files[0]);
                
                reader.onload = (event) => {
               
                this.setState({file:reader});
                this.state.words = this.state.file.result.split(" ");
                this.setState({suggestions:this.state.words});
                };  

            }


            handleKeyPress = (event) => {
               
                var textInput = event.target;

                if(event.key == "Enter"){
                
                var word = textInput.value;
                console.log(this.state);
                 var content = this.state.file.result;
                // console.log(this.state);
                 if(content.indexOf(word) != -1 && word != "") {
                    console.log("it's here!");
                } else {
                    console.log("not here");
                } 
                
                }
            }

            handleChange = (event) => {
                var text = event.target.value;
              
                this.setState({input:text}, () => {
                
                    var sugg = this.state.words.filter(word => {
                        return word.indexOf(this.state.input) === 0;
                    });

                  this.setState({suggestions:sugg});

                });
                
                

            }

            handleClick = () => {
                document.getElementById("fileInput").click();
            }
  render() {

  var suggestions = this.state.suggestions.map(function(suggestion) {
          return  <p> {suggestion} </p>;
      });
    return (
      <div className="App">
        <header className="App-header">
        <div className="divStyle">
                <center>
                    <h1 className="titleStyle"> Welcome to Search Bar ! :) </h1>
                </center>
               <center>
                 <input id="fileInput" type="file" className="invisible" onChange={this.handleFile}/>
                 <button id="fileBtn" className="btn btn-dark fileBtnStyle" onClick={this.handleClick} > Choose File </button>
               </center>
               <center>
                <input id="searchBar" type="input" className="searchBarStyle" onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
                {suggestions}
                </center>
                
                </div>
        </header>
      </div>
    );
  }
}

export default App;
