import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineChart extends Component {
	render() {
				
		const {options} = this.props;
		return (
		<div>
			<h3>General Class Attendace</h3>
			<CanvasJSChart options = {options} 
				/*onRef={ref => this.chart = ref}*/
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;