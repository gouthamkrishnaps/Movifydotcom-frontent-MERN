import React from 'react'
import './Admin.css'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HC_exporting from 'highcharts/modules/exporting'

function Dashboard() {
  const chart1 = ('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Weather Data for Tokyo',
        align: 'left'
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        align: 'left'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sea-Level Pressure',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value} mb',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    credits:{
      enabled:false
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ' mb'
        }

    }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: ' °C'
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    visible: false
                }]
            }
        }]
    }
});

  const chart2 = ('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Egg Yolk Composition'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    credits:{
      enabled:false
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Water',
                    y: 55.02
                },
                {
                    name: 'Fat',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'Carbohydrates',
                    y: 1.09
                },
                {
                    name: 'Protein',
                    y: 15.5
                },
                {
                    name: 'Ash',
                    y: 1.68
                }
            ]
        }
    ]
});

  HC_exporting(Highcharts);


  return (
    <div className='main-container'>
        <Row>
            <Col lg='2'>
                <Sidebar/>
            </Col>
            <Col lg='10'>
                <div>
                  <Row>
                    <Col lg={8}>
                      <div className='admin-card shadow card w-100 d-flex justify-content-center align-items-center rounded my-2' style={{height:'130px'}}>
                          <h2 className='text-light fw-bold'>Admin Workspace</h2>
                      </div>
                      <Row>
                      <Col lg={4} >
                        <div className="card1 my-2 rounded d-flex justify-content-center align-items-center">
                          <h3>Movies : 10</h3>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="card2 my-2 rounded d-flex justify-content-center align-items-center" >
                          <h3>Theatres : 5</h3>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="card3 my-2 rounded d-flex justify-content-center align-items-center">
                          <h3>Users : 35</h3>
                        </div>
                      </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                        <div className="card my-2 rounded d-flex justify-content-center align-items-center" >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={chart1}
                        />
                        </div>
                        </Col>
                      </Row>
                      
                    </Col>
                    <Col lg={4}>
                      <Row>
                        <Col lg={12}>
                          <div className="card rounded m-2 shadow">
                          <HighchartsReact
                          highcharts={Highcharts}
                          options={chart2}
                        />
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="card rounded m-2 shadow" style={{height:'238px'}}>
  
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Dashboard