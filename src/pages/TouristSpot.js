// Header.js
import React, {Component} from 'react';
import {PageTitle} from '../components'

export default class TouristSpot extends Component {

    constructor(props) {
        super(props) 
        this.state = { //state is by default an object
            touristSpots: []
        }
     }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/tourist_spots')
        .then(response =>  response.json())
        .then(resData => {
           console.log(resData);
           this.setState({ touristSpots: resData }); //this is an asynchronous function
        })
    }

    renderTouristSpotsData() {
        return this.state.touristSpots.map((touristSpot, index) => {
           const { id, name, description, photo_url } = touristSpot //destructuring
        //    photo_url = "http://127.0.0.1:8000/" + photo_url;
           return (
            <div className="6u">
                <section className="special">
                    <a href="#" className="image fit"><img src={"http://127.0.0.1:8000" + photo_url} alt="" /></a>
                    <h3>{name}</h3>
                    <p>{description.substring(0, 300)}</p>
                    <ul className="actions">
                        <li><a href="#" className="button alt">Learn More</a></li>
                    </ul>
                </section>
            </div>
           )
        })
     }

    
    render(){

        return (
            <section id="main" className="wrapper style1">
                <PageTitle
                    title="Tourist Spots"
                    description="List of best tourist spots in Japan"
                />
				<div className="container">
					
					<hr className="major" />
					<div className="row">
                        {this.renderTouristSpotsData()}
					</div>
				</div>
			</section>
        )
    }
}