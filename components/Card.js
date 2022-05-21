import React, { Component } from "react";
import Image from "next/image";

class Card extends Component {
  render() {

    return (
      <div className="mx-4 py-2 rounded justify-center items-center cursor-pointer">
        <div className="w-24 h-24 rounded border m-4 ">
          <Image
            src={this.props.image_url}
            className="rounded w-24 h-24 "
            alt={this.props.title}
            priority
          />
        </div>
        <span className="text-black font-semibold opacity-70 flex justify-center items-center w-36">
          {this.props.title}
        </span>
      </div>
    );
  }
}

export default Card;
