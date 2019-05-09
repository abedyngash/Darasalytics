import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineChart extends Component {
	render() {
				const options = {
				animationEnabled: true,
				// title:{
				// 	text: "Weeks"
				// },
				axisX: {
					
					title: "Weeks",
				},
				axisY: {
					title: "Number of classes",
					includeZero: false
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "spline",
					name: "Classes Attended",
					showInLegend: true,
					dataPoints: [
						{ y: 10, label: "Week 1" },
						{ y: 12, label: "Week 2" },
						{ y: 14, label: "Week 3" },
						{ y: 12, label: "Week 4" },
						{ y: 15, label: "Week 5" },
						{ y: 20, label: "Week 6" },
						{ y: 18, label: "Week 7" },
						{ y: 14, label: "Week 8" },
						{ y: 16, label: "Week 9" },
						{ y: 12, label: "Week 10" },
						{ y: 8, label: "Week 11" },
						{ y: 6, label: "Week 12" }
					]
				},
				{
					type: "spline",
					name: "Classes Missed",
					showInLegend: true,
					dataPoints: [
						{ y: 20, label: "Week 1" },
						{ y: 18, label: "Week 2" },
						{ y: 16, label: "Week 3" },
						{ y: 18, label: "Week 4" },
						{ y: 15, label: "Week 5" },
						{ y: 10, label: "Week 6" },
						{ y: 12, label: "Week 7" },
						{ y: 16, label: "Week 8" },
						{ y: 14, label: "Week 9" },
						{ y: 18, label: "Week 10" },
						{ y: 22, label: "Week 11" },
						{ y: 24, label: "Week 12" }
					]
				}]
		}
		
		
		return (
		<div>
			<h3>General Class Attendace</h3>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;