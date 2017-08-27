import React, { Component } from 'react';
import { Row, Col, Form, Input, Tabs } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class SRDetails extends Component {
  render() {
    return(
      <div>
        <Form>
          <Row gutter={16}>
            <Col
              xs={{span:22, offset: 0}}
              sm={{span:22, offset: 1}}
              md={{span:11, offset: 1}}>
              <Row gutter={8}>
                <Col xs={{span:8, offset: 3}} sm={{span:11, offset: 1}} md={{span:11, offset: 1}}>
                  First Name
                </Col>
                <Col xs={{span:8}} sm={{span:11, offset: 0}} md={{span:11, offset: 0}}>
                  Actual Name
                </Col>
              </Row>
              <Row gutter={8}>
                <Col xs={{span:8, offset: 3}} sm={{span:11, offset: 1}} md={{span:11, offset: 1}}>
                  Last Name
                </Col>
                <Col xs={{span:8}} sm={{span:11, offset: 0}} md={{span:11, offset: 0}}>
                  Actual Name
                </Col>
              </Row>
              <Row gutter={8}>
                <Col xs={{span:8, offset: 3}} sm={{span:11, offset: 1}} md={{span:11, offset: 1}}>
                  Department
                </Col>
                <Col xs={{span:8}} sm={{span:11, offset: 0}} md={{span:11, offset: 0}}>
                  department
                </Col>
              </Row>
            </Col>
            <Col
              xs={{span:22, offset: 0}}
              sm={{span:22, offset: 1}}
              md={{span:11, offset: 1}}>
              <Row gutter={8}>
                <Col xs={{span:8, offset: 3}} sm={{span:11, offset: 1}} md={{span:11, offset: 1}}>
                  Email
                </Col>
                <Col xs={{span:8}} sm={{span:11, offset: 0}} md={{span:11, offset: 0}}>
                  iam@email.com
                </Col>
              </Row>
              <Row gutter={8}>
                <Col xs={{span:8, offset: 3}} sm={{span:11, offset: 1}} md={{span:11, offset: 1}}>
                  Phone No
                </Col>
                <Col xs={{span:8}} sm={{span:11, offset: 0}} md={{span:11, offset: 0}}>
                  9234329483
                </Col>
              </Row>
              <Row gutter={8}>
                <Col xs={{span:8, offset: 3}} sm={{span:11, offset: 1}} md={{span:11, offset: 1}}>
                  Extension No
                </Col>
                <Col xs={{span:8}} sm={{span:11, offset: 0}} md={{span:11, offset: 0}}>
                  3212
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="1" onChange="" className="centering-text">
                <TabPane tab="Incident Details" key="1">
                  Type of S.R
                  Description
                  Remarks
                </TabPane>
                <TabPane tab="Assignee" key="2">
                  Department: Asignee
                </TabPane>
                <TabPane tab="Knowledge Base" key="3">
                  Turn Off Router
                </TabPane>
                <TabPane tab="Escalation" key="4">
                  Create Problems
                  Request for Change
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default SRDetails;
