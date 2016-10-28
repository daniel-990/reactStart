import React from 'react';
import ReactDOM from 'react-dom';

//create a new component. thos component should produce some html
const  App = function(){
	return <div>hi!</div>;
}


// take this component's generated html and put it on the page (in the DOM)

ReactDOM.render(<App />); //se deve de instanciar el ReactDOM ya que vamos a interactuar con el DOM del document


