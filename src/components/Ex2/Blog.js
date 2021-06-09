import React from "react";

export default class Blog extends React.PureComponent {
  render() {
    const data = [
      {
        title: "Коты любят мышей!",
        desc: "Коты, оказывается любят мышей!!!!"
      },
      {
        title: "Кошки боятся собак",
        desc: "Британские ученые установили, что кошки убегают от собак"
      },
      {
        title: "Собаки боятся кошек",
        desc: "Другими британскими учеными опровергнуто, что кошки боятся собак. По новым исследованиям собаки боятся кошек."
      }
    ];

    const newsCard = ({ title, desc }) => {
      return (
        <div
          key={title}
          style={{
            boxSizing: "border-box",
            padding: "10px",
            border: "1px solid black",
            width: "30%",
            borderRadius: "10px",
          }}
        >
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      );
    };
    return (
      <div className="Blog">
        <img
          style={{
            maxWidth: "10%",
          }}
          src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
          alt="Котэ"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {data.map((props) => newsCard(props))}
        </div>
      </div>
    );
  }
}
