import React from 'react';
import ReactDOM from 'react-dom';

/*First component created*/

function Cartoon(props){
	return <h1>Hello, {props.name} age {props.age}</h1>

}



//component using class
/*
class Cartoon extends React.Component{
	render (){
		return <h1>Hello, {this.props.name}</h1>
	}

}

*/

function Show(){
	return <div>
		<Cartoon name='Goutham' age= '25'/>
		<Cartoon name='Samyuktha' age = '2'/>
		</div>
}



	ReactDOM.render(

	<Show />,
	document.getElementById('root')

	)


