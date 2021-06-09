import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card, Typography } from "antd";

const COLS = 3;

export default class Art extends React.PureComponent {
  render() {
    const len = this.props.datasource.length;
    const rowsCount = Math.ceil(len / COLS);

    let rows = [];
    for (let row = 0; row < rowsCount; ++row) {
      let cols = [];
      for (let idx = row * COLS; idx < Math.min((row + 1) * COLS, len); ++idx) {
        cols.push(this.props.datasource[idx]);
      }
      rows.push(cols);
    }

    return (
      <div className="site-card-wrapper">
        {rows.map((item) => (
          <Row gutter={16}>
            {item.map((col) => (
              <Col span={8}>
                <Card title={col.name} bordered={true}>
                  <img src={col.url} alt="картина" />
                  <Typography>{col.author}</Typography>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    );
  }
}
