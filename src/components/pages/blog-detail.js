import React, { Component } from 'react'; 
import axios from 'axios';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        }
    }

    getBlogItem() {
        axios
            .get(
                `https://nesetkablan.devcamp.space/portfolio/portfolio_blogs/
                ${this.state.currentId}`
            )
            .then(response => {
                console.log("get blog item", response);
            })
            .catch(error => {
                console.log("get blog item error", error);
            })
    }

    componentDidMount() {
        this.getBlogItem(); 
    }

    render() {
        console.log("current Id", this.state.currentId);
        return (
            <div>
                <h1>BlogDetail</h1>
            </div>
        );
    }
}