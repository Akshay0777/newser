import React, { Component } from 'react'

export class NewsItems extends Component {
    
    
    render() {
        let {title, desc, imageurl, newsurl, author, date} = this.props
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}...</p>
                        <p class="card-text"><small className="text-muted">By {!author?"Unknown":author} on {date}</small></p>
                        <a href={newsurl} target="_blank" className="btn btn-dark">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
