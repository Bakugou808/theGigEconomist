import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {RadialChart, DiscreteColorLegend} from 'react-vis'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';



class TaxesForService extends Component {
    convertData = () => {
        const {results} = this.props 
        let data = []
        let totalEarned = results.earned.sum
        let ssTax = (.124 * totalEarned)
        let mediTax = +((.029 * totalEarned).toFixed(2))
        let totalTax = ssTax + mediTax

        data = [{y: mediTax, x: `Medicare Tax`}, {y: ssTax, x: `Social Security Tax`}, {y: (totalEarned - totalTax), x: `Profits After Tax`}]
        // data.push({x: `Earned $${results.earned.sum}`, y: results.earned.sum})
        // data.push({x: `Projected $${results.projected.sum}`, y: (results.projected.sum - results.earned.sum) })
        const items = [`Profits After Tax: $${totalEarned - totalTax}`, `Social Security Tax: $${ssTax}`, `Medicare Tax: $${mediTax}`]
        return {data: data, items: items, domain: totalEarned + 10}
    }
    

    render() {
        const pieStyle = {
            // 'align-items': 'auto',
            // 'justify-content': 'center',
            // 'display': 'flex',
            // 'width': '100%',
            // 'height': '100%',
            // 'margin': '10px'
        }
        const chartWidth = 500;
        const chartHeight = 200;

        // const chartDomain = [0, this.convertData().domain];
        
        return (
            <Fragment>
                {/* {this.props.results && <VictoryPie
                    colorScale={['cyan', 'gold']}
                    data={this.convertData()} /> */}
                   
                    
                    {this.props.results.earned &&
                    <Row>
                <Col md={{span: 4, offset:-5}} style={pieStyle}>

                <XYPlot 
                    xType="ordinal" 
                    width={chartWidth} 
                    height={chartHeight} 
                    yDomain={[0, this.convertData().domain]}
                    // stackBy={'y'}
                >
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries
                        data={this.convertData().data}
                    />
                    <LabelSeries
                        data={this.convertData().data.map(obj => {
                            return { ...obj, label: obj.y > 1 ? `$${obj.y.toString()}` : `$${obj.y.toString()} ` }
                        })}
                        labelAnchorX="middle"
                        labelAnchorY="text-after-edge"
                    />
                    </XYPlot>



                {/* <RadialChart 
                showLabels={true}
                labelsRadiusMultiplier={1}
                data={this.convertData().data}
                width={900}
                height={300}
                labelsStyle={{'margin': '10px'}}
            />     */}
                    </Col>   
                    {/* <Col md={{span:3, offset:4}}>
                    <DiscreteColorLegend height={200} width={300} items={this.convertData().items} />
                    </Col> */}
                    
                    </Row> }


            </Fragment>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        results: store.stats.serviceStats.earnedVsProjected
    }
}

export default connect(mapStateToProps)(TaxesForService)