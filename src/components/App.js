import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component 
{
    constructor(props) 
	{
		super(props);
		this.state = {isClicked:false};
		// this.printPara=this.printPara.bind(this);
	};	
    render() 
	{
		const printPara =()=>{
			// alert("here");
			this.setState({isClicked:true});
		}
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={printPara}>
					Click Me
				</button>
				{this.state.isClicked ?(
					<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
				):null}
    		</div>
    	);
    }
}


export default App;
