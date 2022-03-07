import React, { Component } from "react";
import GlassItem from "./GlassItem";

export default class GlassList extends Component {
  renderGlassItem = () => {
    let { arrGlasses } = this.props;
    return arrGlasses.map((item, index) => {
      return (
        <GlassItem
          item={item}
          changeGlass={this.props.changeGlass}
          key={index}
        />
      );
    });
  };
  render() {
    return (
      <div className=" container">
        <div className="row d-flex p-5 justify-content">
          {this.renderGlassItem()}
        </div>
      </div>
    );
  }
}
