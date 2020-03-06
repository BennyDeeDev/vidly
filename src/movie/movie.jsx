import React, { Component } from "react";

class movie extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.title}</td>
          <td>{this.props.genre}</td>
          <td>{this.props.numberInStock}</td>
          <td>{this.props.dailyRentalRate}</td>
          <td>
            <button
              onClick={() => this.props.onDelete(this.props._id)}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
          <td>
            <i
              onClick={() => this.props.onFavmovie(this.props._id)}
              className={this.props.favorite}
              aria-hidden="false"
            ></i>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default movie;