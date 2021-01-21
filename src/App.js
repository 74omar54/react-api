import React, { Component } from 'react';
import Beer from './components/Beer'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      beers: null,
    };
}





componentDidMount(){
  console.log("Mounted");
  fetch('https://api.punkapi.com/v2/beers')
  .then((res) => res.json())
  .then((data) => this.setState({ beers: data }));
}

componentDidUpdate(){
  console.log("I have updated")
}
  
render() {
    return(
      <div className="App">
        <ul>{this.state.beers && 
        this.state.beers.map((beer) => {
          console.log(beer)
          return <Beer 
          name={beer.name} 
          tagline={beer.tagline}
          description = {beer.description}
          image={beer.image_url}
          abv={beer.abv}
          firstbrew={beer.first_brewed}
          />
        })}
        </ul>   
      </div>
    );
  }

}





export default App;
