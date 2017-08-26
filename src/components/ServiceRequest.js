import React, { Component } from 'react';
import { Row, Col } from 'antd';

class ServiceRequest extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col span={9} offset={3}>
            New
          </Col>
          <Col span={9}>
            Completed
          </Col>
        </Row>
      </div>
    )
  }
}

export default ServiceRequest;
