// Venue.js
import React, {Component} from 'react';
import {PageTitle} from '../components';

var foursquare = require('react-foursquare')({
    clientID: 'G51O3JXC4UYMVTGOHORYOBDMLMS4QS3SMW1NK5DP50BT2WSE',
    clientSecret: 'R044LM25NYZ2XPCNYR1K1T213VZ4MIJIJQJFUXCKL2TAFYYD'  
});

var params = {
    "ll": "35.652832,-139.839478",
    "query": 'Blue Bottle'
};

export default class Venue extends Component {

    constructor(props) {
        super(props) 
        this.state = { //state is by default an object
            touristSpots: [],
            cities: [],
            longitude: '35.69',
            latitude: '139.75',
        }

        this.handleChange = this.handleChange.bind(this);
     }

    componentDidMount() {    
        const {longitude, latitude} = this.state;
        fetch('https://api.foursquare.com/v2/venues/explore?client_id=G51O3JXC4UYMVTGOHORYOBDMLMS4QS3SMW1NK5DP50BT2WSE&client_secret=R044LM25NYZ2XPCNYR1K1T213VZ4MIJIJQJFUXCKL2TAFYYD&v=20180323&limit=20&ll='+ longitude +','+ latitude +'&query=tourist%20spot')
        .then(response =>  response.json())
        .then(resData => {
           console.log(resData.response.groups[0].items);
           var items = resData.response.groups[0].items;
           
           this.setState({ touristSpots: items }); //this is an asynchronous function
        });


        fetch('http://127.0.0.1:8000/api/cities')
        .then(response =>  response.json())
        .then(resData => {
           console.log(resData);
           this.setState({ cities: resData }); //this is an asynchronous function
        })
    }

    renderTouristSpotsData() {
        return this.state.touristSpots.map((touristSpot, index) => {
           const { reasons, venue } = touristSpot //destructuring
        //    photo_url = "http://127.0.0.1:8000/" + photo_url;
           return (
            <div className="6u">
                <section className="special">
                    {/* <a href="#" className="image fit"><img src={"http://127.0.0.1:8000" + photo_url} alt="" /></a> */}
                    <h3>{venue.name}</h3>
                    <p><b>Adress: </b>{venue.location.address}</p>
                </section>
            </div>
           )
        })
    }

    renderCities() {
        return this.state.cities.map((city, index) => {
           const { name, longitude, latitude } = city //destructuring
        //    photo_url = "http://127.0.0.1:8000/" + photo_url;
           return (
                <option 
                    value={latitude + "|" + longitude}
                    >
                    {name}
                </option>
           )
        })
    }

    handleChange(event) {
        console.log(event.target.value);
        var str = event.target.value;
        var res = str.split("|");
        
        var latitudeRes = res[1];
        var longitudeRes = res[0];

        this.callFourSquareApi(longitudeRes, latitudeRes);

        

        
    }

    callFourSquareApi(longitudeRes, latitudeRes)
    {
        console.log(longitudeRes);
        fetch('https://api.foursquare.com/v2/venues/explore?client_id=G51O3JXC4UYMVTGOHORYOBDMLMS4QS3SMW1NK5DP50BT2WSE&client_secret=R044LM25NYZ2XPCNYR1K1T213VZ4MIJIJQJFUXCKL2TAFYYD&v=20180323&limit=20&ll='+ longitudeRes +','+ latitudeRes +'&query=tourist%20spot')
        .then(response =>  response.json())
        .then(resData => {
           console.log(resData.response.groups[0].items);
           var items = resData.response.groups[0].items;
           
           this.setState({ touristSpots: items }); //this is an asynchronous function
        });
    }
    
    
    render(){

        return (
            <section id="main" className="wrapper style1">
                <PageTitle
                    title="Venues"
                    description="List of best establishments in Japan"
                />
                
				<div className="container">
                    <div className="widget-container">
                            <div className="5u">
                                <select
                                onChange={this.handleChange}
                                >
                                <option value="">
                                    Select City
                                </option>
                                 {this.renderCities()}
                                </select>
                            </div>
                    </div>
                    <hr className="major" />
					<div className="row">
                        {this.renderTouristSpotsData()}
					</div>
				</div>
			</section>
        )
    }
}