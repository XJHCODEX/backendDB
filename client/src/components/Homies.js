import React, {Component} from 'react'

class Homies extends React.Component{
    constructor(){
        super()
        this.state = {
            homies: [],
        }
    }

    componentDidMount(){
        // this gets called when component finishes rendering
        console.log("in COM");
        fetch('/api/homies')
        .then(response => response.json())
        .then(homies => console.log(homies));
    }

    render(){
        return(
            <div>
               <h2>My Homies!</h2> 
               <ul>
                    {this.state.homies.map((homie, index) => {
                        //some function to call on each element
                        return <li key = {index}> (homie) </li>
                    })}
               </ul>
            </div>
        )
    }

}
    export default Homies;