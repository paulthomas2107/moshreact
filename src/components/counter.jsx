import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>No tags found....</p>;
    } else {
      return (
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary btn-sm">Increment </button>
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag."}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
