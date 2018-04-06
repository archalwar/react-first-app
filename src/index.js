import React from 'react';
import ReactDOM from 'react-dom';

//https://www.youtube.com/watch?v=ffjCtBhsDv4&list=PLe30vg_FG4OT1gN7waO7ESyrn7EfI_fG-&index=12

function ToonList(props){

	const list= props.cartoon;
	//const toons = list.map((list, index) => <li key = {index}>{list}</li>)

		return <ul>
			{list.map((list, index) => <li key = {index}>{list}</li>)}
			</ul>
			
}

const cartoons = ['Mickymouse', 'SuperMan', 'Batman', 'Spiderman', 'Spiderman']






ReactDOM.render(
	<ToonList cartoon = {cartoons}/>,
	document.getElementById('root')

	)