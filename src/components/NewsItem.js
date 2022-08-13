import React, { Component } from "react";

export class NewsItem extends Component { 

  render() {
    let {title, description, imageUrl, newsUrl}= this.props; //destructuring
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://besthqwallpapers.com/Uploads/23-4-2021/165238/thumb2-happy-birthday-xander-4k-blue-neon-lights-xander-name-creative.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text"> {description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
