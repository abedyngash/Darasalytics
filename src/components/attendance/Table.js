
import React from 'react';
import $ from 'jquery';

$.DataTable = require('datatables.net')

class Tbl extends React.Component {

	componentDidMount(){
		// console.log(this.el)
		this.$el = $(this.el);
		this.$el.DataTable(
				{
					data: this.props.data,
					columns: [
						{title : "Name"},
						{title : "Name"},
						{title : "Name"},
						{title : "Name"},
						{title : "Name"},
						{title : "Name"},
					],
					
				}
			)
	}

	render() {
		return (
			<div>
				<table className="display" width="100%" ref={el => this.el = el}></table>
			</div>
		);
	}
}

export default Tbl;