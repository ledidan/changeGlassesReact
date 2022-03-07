import React, { Component } from "react";
import GlassList from "./GlassList";
let dataGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "img/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "img/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "img/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "img/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "img/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class BaiTapThuKinh extends Component {
  state = {
    currentGlass: {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "img/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  changeGlass = (spClick) => {
    this.setState({
      currentGlass: spClick,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(img/glassesImage/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-center text-white py-4"
          style={{ backgroundColor: "black", opacity: 0.6 }}
        >
          <h4 className="text-uppercase display-5">try glasses online app</h4>
        </div>
        <div className="container">
          <div className="row justify-content my-4">
            <div className="col-4 m-auto">
              <img
                src="img/glassesImage/model.jpg"
                alt="..."
                height={400}
                style={{ position: "relative" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 95,
                  left: 87,
                }}
              >
                <img
                  src={this.state.currentGlass.url}
                  alt="..."
                  style={{
                    width: "185px",
                    opacity: 0.7,
                  }}
                />
                <div
                  className="pt-2 mt-2 text-center"
                  style={{
                    backgroundColor: "orange",
                    position: "absolute",
                    top: 160,
                    right: -70,
                    width: 325,
                    opacity: 0.6,
                  }}
                >
                  <h3 style={{ color: "blue", fontWeight: 700 }}>
                    {this.state.currentGlass.name}
                  </h3>
                  <p style={{ color: "white" }}>
                    {this.state.currentGlass.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 m-auto">
              <img
                src="img/glassesImage/model.jpg"
                alt="..."
                height={400}
                style={{ position: "relative" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 95,
                  left: 87,
                }}
              >
                <img
                  src={this.state.currentGlass.url}
                  alt="..."
                  style={{
                    width: "185px",
                    opacity: 0.7,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <GlassList arrGlasses={dataGlasses} changeGlass={this.changeGlass} />
      </div>
    );
  }
}
