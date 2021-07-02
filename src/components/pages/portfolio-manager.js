import React, { Component } from 'react'; 
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };

        this.handleSuccesfulFormSubmission = this.handleSuccesfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccesfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("form submission error", error)
    }

    getPortfolioItems() {
        axios.get("https://nesetkablan.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { 
            withCredentials: true 
        }).then( response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            });
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
                    <PortfolioForm 
                        handleSuccesfulFormSubmission={this.handleSuccesfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        );
    }
}