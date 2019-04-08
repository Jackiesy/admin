import React, { Component, Fragment } from 'react';
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { Line } from './../../component/AntV';

class PieCharts extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {
    var data = [{
      year: '1991',
      value: 3
    }, {
      year: '1992',
      value: 4
    }, {
      year: '1993',
      value: 3.5
    }, {
      year: '1994',
      value: 5
    }, {
      year: '1995',
      value: 4.9
    }, {
      year: '1996',
      value: 6
    }, {
      year: '1997',
      value: 7
    }, {
      year: '1998',
      value: 9
    }, {
      year: '1999',
      value: 13
    }];
    var data2 = [
      {country:'china',year:'1999',value:12},
      {country:'china',year:'2000',value:18},
      {country:'china',year:'2001',value:24},
      {country:'china',year:'2002',value:45},
      {country:'china',year:'2003',value:55},

      {country:'USA',year:'1999',value:16},
      {country:'USA',year:'2000',value:18},
      {country:'USA',year:'2001',value:38},
      {country:'USA',year:'2002',value:66},
      {country:'USA',year:'2003',value:88},

      {country:'japan',year:'1999',value:7},
      {country:'japan',year:'2000',value:14},
      {country:'japan',year:'2001',value:22},
      {country:'japan',year:'2002',value:35},
      {country:'japan',year:'2003',value:56},
    ];
    return (
      <Fragment>
        <Card style={{ margin: 30 }}>
          <h1 style={{ textAlign: 'center' }}>Antv 折线图</h1>
        </Card>

        <Row style={{ margin: 30 }}>
          <Col span={12}>
            <Card>
              <Line
                title={'基础折线图'}
                id={'baseLine'}
                height={400}
                data={data}
                axis={{title:'year',value:'value'}}
                type={'base'}
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ margin: 30 }}>
          <Col span={12}>
            <Card>
              <Line
                title={'多条折现图'}
                id={'multipleLine'}
                height={400}
                data={data2}
                axis={{title:'country',value:'value',Yaxis:'year'}}
                type={'multiple'}
              />
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

PieCharts.propTypes = {};

export default PieCharts;
