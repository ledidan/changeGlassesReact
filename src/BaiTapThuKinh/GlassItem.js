import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="col-2 my-2">
        <button
          onClick={() => {
            {
              this.props.changeGlass(item);
            }
          }}
        >
          <img
            src={item.url}
            alt=".."
            width={100}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </button>
      </div>
    );
  }
}
