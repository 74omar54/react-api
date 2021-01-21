import React, { Component } from 'react'
import './Beer.css'
class Beer extends Component {
    constructor(props) {
        super(props);

        
    }



    

    render() {
        return (
           
            <div>
                <h1>{this.props.name }</h1>
                <h3>{`What you actually care about! - ${this.props.abv}% (ABV)`}</h3>
                <img src={this.props.image} className="beer__image" alt= "Beer logo"/>
                <br/>
                <span className= "beer__description">{`About Me: ${this.props.description}`}</span>
                <p className= "beer__tips">
                    {this.props.tips}
                </p>
                <input className="likebox" type="checkbox" value="liked"/>Add to favorites
                {/* <button className= "likebutton">Beer Me</button> */}


            </div>
        )
    }
}

export default Beer;