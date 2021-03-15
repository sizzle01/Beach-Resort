import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Lorem Ipsum dolor sit amet consecteur adipsicingly elit. mahi, corposis",
      },
      {
        icon: <FaHiking />,
        title: "Enless Hiking",
        info:
          "Lorem Ipsum dolor sit amet consecteur adipsicingly elit. mahi, corposis",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem Ipsum dolor sit amet consecteur adipsicingly elit. mahi, corposis",
      },
      {
        icon: <FaBeer />,
        title: "Finnest Beer",
        info:
          "Lorem Ipsum dolor sit amet consecteur adipsicingly elit. mahi, corposis",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
