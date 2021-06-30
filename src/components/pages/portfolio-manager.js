import React, { Component } from 'react'; 
import axios from 'axios';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }
    }

    getPortfolioItems() {
        axios.get("https://nesetkablan.devcamp.space/portfolio/portfolio_items", { 
            withCredentials: true 
        }).then( response => {
            console.log("response! ", response);
        }).catch( error => {
            console.log("error!", error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>left</h1>
                </div>

                <div className="right-column">
                    <h1>right</h1>
                </div>
            </div>
        );
    }
}