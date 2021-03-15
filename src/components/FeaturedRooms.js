import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { Loading, featuredRooms: rooms } = this.context;
    console.log(rooms);

    return (
      <div>
        Hello from featured room
        <Loading />
      </div>
    );
  }
}
