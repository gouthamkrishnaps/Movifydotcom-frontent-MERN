import React, { useEffect, useState } from 'react'
import './Admin.css'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HC_exporting from 'highcharts/modules/exporting'
import { getAllMoviesAPI, getAllTheatresAPI, getAllUsersAPI } from '../services/allAPI'

function Dashboard() {
    const chart1 = ('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Tickets Booking Chart',
        align: 'left'
    },
    subtitle: {
        text: 'Source: IMDB.com',
        align: 'left'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} $',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Income',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Percetage of income generated ',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Ticket rates',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value} ®️',
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
        name: 'Movies Released',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Ticket rates',
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
        name: 'Theatres booking',
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
        text: 'Movifydotcom Data'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">IMDB</a>'
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
                    name: 'Tickets',
                    y: 55.02
                },
                {
                    name: 'Movies',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'Theatres',
                    y: 1.09
                },
                {
                    name: 'Users',
                    y: 15.5
                },
                {
                    name: 'Income',
                    y: 1.68
                }
            ]
        }
    ]
    });
    HC_exporting(Highcharts);

    //state to hold all movies from db
    const [allMovies,setAllMovies] = useState([])

    //fetching all movies from db
    const getAllMovies = async()=>{
        const result = await getAllMoviesAPI()
        //console.log(result.data);
        setAllMovies(result.data)
    }

    //state to hold all theatres from db
    const [alltheatres,setAllTheatres] = useState([])

    //fetching all theatres from db
    const getThreatre = async()=>{
        const result = await getAllTheatresAPI()
        //console.log(result.data);
        setAllTheatres(result.data)
    }

    const [allUsers,setAllUsers] = useState([])

    //fetching all users from db
    const getAllUsers = async()=>{
        const result = await getAllUsersAPI()
        //console.log(result.data);
        setAllUsers(result.data)
    }

    useEffect(()=>{
        getAllUsers()
        getThreatre()
        getAllMovies()
    },[])
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
                      <div className='admin-card shadow w-100 d-flex justify-content-center align-items-center rounded my-2' style={{height:'130px'}}>
                          <h1 className='fw-bold'>Admin Workspace</h1>
                      </div>
                      <Row>
                      <Col lg={4} >
                        <div className="card1 my-2 rounded d-flex justify-content-center align-items-center">
                          <h3 className='fw-bold'>Movies : {allMovies.length}</h3>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="card2 my-2 rounded d-flex justify-content-center align-items-center" >
                          <h3 className='fw-bold'>Theatres : {alltheatres.length}</h3>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="card3 my-2 rounded d-flex justify-content-center align-items-center">
                          <h3 className='fw-bold'>Users : {allUsers.length}</h3>
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
                          <div className="card4 rounded m-2 shadow d-flex justify-content-center align-items-center flex-column">
                            <h3 className='fw-bold'>Tickets Sold</h3>
                            <span className='fw-bold' style={{fontSize:"80px"}}>2351+</span>
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