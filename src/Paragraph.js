import React, {Component} from 'react';

// I'm not too familiar with useState so I switched over to using classes
class Paragraph extends Component {

	render() {

		return (
			<div id="Paragraph" className="my-2">
				<p className="my-1 mx-0"><b> {this.props.title} </b></p>
				<p> {this.props.description} </p>
			</div>
		);
	}

}

export default Paragraph;
