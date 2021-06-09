import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

const columns = [
  {
    title: (
      <h3>
        <b>Раздел науки</b>
      </h3>
    ),
    dataIndex: "discipline",
    key: "discipline",
  },
  {
    title: (
      <h3>
        <b>Статья</b>
      </h3>
    ),
    dataIndex: "article",
    key: "article",
  },
  {
    title: (
      <h3>
        <b>Impact-фактор</b>
      </h3>
    ),
    dataIndex: "impact",
    key: "impact",
  },
];

export default class Science extends React.PureComponent {
  render() {
    return (
      <Table
        dataSource={this.props.datasource}
        columns={columns}
        title={() => (
          <h2>
            <b>Научные публикации</b>
          </h2>
        )}
      />
    );
  }
}
