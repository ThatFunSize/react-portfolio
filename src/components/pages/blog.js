import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogItem from '../blog/blog-item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.activateInfiniteScroll();
    }

    activateInfiniteScroll() {
        window.onscroll = () => {
            console.log("window inner height", window.innerHeight)
            console.log("document sctoll top", document.documentElement.scrollTop)
            console.log("offset height", document.documentElement.offsetHeight)

            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                console.log("get more posts")
            }
        };
    }
    

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1  
        })
        axios
            .get(
                "https://nesetkablan.devcamp.space/portfolio/portfolio_blogs",
                { withCredentials: true }
            )
            .then(response => {
               this.setState({
                   blogItems: response.data.portfolio_blogs,
                   totalCount: response.data.meta.total_records,
                   isLoading: false
               })
            })
            .catch(error => {
                console.log("get blog items error", error);
            })
    }

    componentWillMount() {
        this.getBlogItems()
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />;
        });

        /*
        for (let i = 0; i < 69421; i++) {
            console.log("onscroll")
        }
        */
    

        return (
            <div className="blog-container">
                <div className="content-loader">
                    <FontAwesomeIcon icon="circle-notch" spin />
                </div>
                <div className="content-container">
                    {blogRecords}
                </div>
            </div>
            

        )
    }
}

export default Blog;