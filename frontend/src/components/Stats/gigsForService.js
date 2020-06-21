import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchServicesMonthsGigs} from '../../actions/statsActions'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory'
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


let domain = 0

class GigsForService extends Component {

    componentDidMount(){
        const {selectedService, onGetMonthsGigs} = this.props
        selectedService.id && onGetMonthsGigs(selectedService.id)
    }
    
    convertData = () => {
        const {gigsThisMonth} = this.props 
        const data = []
        for(var key in gigsThisMonth){
            data.push({x: key, y: gigsThisMonth[key].length})
            if(gigsThisMonth[key].length > domain){
                domain = gigsThisMonth[key].length
            }
        }
        console.log(data)
        return data
    }
    
    // tickValuesXAxis = () => {
    //     const {gigsThisMonth} = this.props 
    //     const tickValues = []
    //     let i = 1
    //     while(i<=gigsThisMonth.length){
    //         tickValues.push(i)
    //         i++
    //     }
    //     return tickValues
    // }
    
    // tickFormatXAxis = () => {
    //     const {gigsThisMonth} = this.props 
    //     const tickFormat = []
    //     for(var key in gigsThisMonth){
    //         tickFormat.push(`${key}`)
    //     }
    //     return tickFormat
    // }
    

    
    render() {
        const data = this.convertData()
        const chartWidth = 500;
        const chartHeight = 200;
        const chartDomain = [0, domain+2];
        const cardStyle = {
            "margin": '10px',
        }
        const statStyle = {
            'align-items': 'center',
            'justify-content': 'center',
            'display': 'flex',
            'width': '100%',
            'height': '100%',
            'margin': '10px'
        }
        const {selectedService} = this.props
        return (
            <div>
                <Container style={statStyle}>
                    <Row>
                    <Col>
                    <XYPlot 
                    xType="ordinal" 
                    width={chartWidth} 
                    height={chartHeight} 
                    yDomain={chartDomain}
                    // stackBy={'y'+ 2}
                >
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries
                        data={data}
                    />
                    <LabelSeries
                        data={data.map(obj => {
                            return { ...obj, label: obj.y > 1 ? `${obj.y.toString()} Appointments` : `${obj.y.toString()} Appointment` }
                        })}
                        labelAnchorX="middle"
                        labelAnchorY="text-after-edge"
                    />
                    </XYPlot>
                    </Col>
                    <Col>
                    <Row>

                    
                    </Row>
                    </Col>
                    </Row>
                </Container>









                {/* <VictoryChart 
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    styles={chartStyle}
                    preserveAspectRatio="none"
                >
                    <VictoryAxis
                        tickValues={this.tickValuesXAxis()}
                        tickFormat={this.tickFormatXAxis()}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x)=> (`${x} Appts`)}
                    />
                    <VictoryBar 
                        data={data}
                        x='gig'
                        y='appointments'
                        // style={{
                        //     data: {width: 30},
                        //     labels: {padding: -30}
                        // }}
                    />

                </VictoryChart> */}
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        selectedService: store.services.selectedService,
        gigsThisMonth: store.stats.serviceStats.gigsThisMonth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetMonthsGigs: (serviceId) => fetchServicesMonthsGigs(serviceId, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigsForService)