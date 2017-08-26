import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';
import '../table.css';

class ServiceRequest extends Component {
  render() {
    const columns = [
      { title: 'No', width: '10%', dataIndex: 'no', key: 'no'},
      { title: 'Name', width: '20%', dataIndex: 'name', key: 'name'},
      { title: 'Department', width: '20%', dataIndex: 'department', key: 'department'},
      { title: 'Type', width: '30%', dataIndex: 'type', key: 'type'},
      { title: 'Elapsed', width: '30%', dataIndex: 'elapsed', key: 'elapsed'}
    ]
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        no: i+1,
        key: i,
        name: `John ${i}`,
        department: 'Dept',
        type: 'Not your type',
        elapsed: '1 hr'
      })
    }
    return(
      <div>
        <Row gutter={16}>
          <Col span={9} offset={3}>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                New <br/>
                {/* <table width="100%" className="fixed_headers">
                  <thead>
                    <tr style={{align:'center'}}>
                      <th width="10%">No</th>
                      <th width="20%">Name</th>
                      <th width="20%">Department</th>
                      <th width="30%">Type</th>
                      <th width="20%">Elapsed</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table> */}
                <Table columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false} />
                </Col>
            </Row>
            <br/>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                Cleared <br/>
                <Table columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false} />
              </Col>
            </Row>
          </Col>
          <Col span={9}>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                Cleared <br/>
                <Table columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false} />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col span={24} style={{minHeight:'200px'}}>
                Completed <br/>
                <Table columns={columns} dataSource={data} scroll={{x: 200, y: 150}} pagination={false} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ServiceRequest;
