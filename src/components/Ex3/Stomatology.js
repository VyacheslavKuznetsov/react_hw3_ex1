import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

const columns = [
  {
    title: <h3><b>Услуга</b></h3>,
    dataIndex: "service",
    key: "service",
  },
  {
    title: <h3><b>Цена</b></h3>,
    dataIndex: "price",
    key: "price",
    render: (text) => <b>{text}</b>,
  },
];

export default class Stomatology extends React.PureComponent {
  render() {
    return (
      <Table
        dataSource={this.props.datasource}
        columns={columns}
        title={() => (
          <h2>
            <b>Услуги стоматологии</b>
          </h2>
        )}
      />
    );
  }
}
