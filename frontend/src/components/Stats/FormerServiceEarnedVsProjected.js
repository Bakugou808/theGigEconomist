import React, { Component } from 'react'
import {connect} from 'react-redux'
import { VictoryPie } from 'victory'
import {RadialChart} from 'react-vis' 

class ServiceEarnedVsProjected extends Component {

    convertData = () => {
        const {results} = this.props 
        let data = []
        // data.push({x: `Earned $${results.earned.sum}`, y: results.earned.sum})
        // data.push({x: `Projected $${results.projected.sum}`, y: (results.projected.sum - results.earned.sum) })
        data.push({angle: results.earned.sum, label: 'Earned', subLabel: `$${results.earned.sum}/$${results.projected.sum}`})
        data.push({angle: (results.projected.sum - results.earned.sum), label: 'Remaining', subLabel: `$${results.projected.sum - results.earned.sum}` })
        return data
    }
    

    render() {
        return (
            <div>
                {/* {this.props.results && <VictoryPie
                    colorScale={['cyan', 'gold']}
                    data={this.convertData()} /> */}
                    
                {this.props.results.earned &&
                    <RadialChart 
                        showLabels={true}
                        labelsRadiusMultiplier={1}
                        data={this.convertData()}
                        width={900}
                        height={300}
                        // labelsStyle={{'margin': '10px'}}
                    />
                }    

            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        results: store.stats.serviceStats.earnedVsProjected
    }
}

export default connect(mapStateToProps)(ServiceEarnedVsProjected)