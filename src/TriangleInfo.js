import React, {Component} from 'react';
import './TriangleInfo.css';

// I'm not too familiar with useState so I switched over to using classes
class TriangleInfo extends Component {

	coordinates(s1, s2, s3) {

		var multiplier = 95/Math.max(s1,s2,s3);

		var sortedSides = [(s1*multiplier),(s2*multiplier),(s3*multiplier)].sort(function(a,b){return a-b});

		var iAngle = Math.acos((Math.pow(sortedSides[2], 2) + Math.pow(sortedSides[0], 2) - Math.pow(sortedSides[1], 2)) / (2 * sortedSides[2] * sortedSides[0])) * (180/Math.PI)

		var iSide = Math.abs(Math.sin((iAngle*Math.PI/180))) * sortedSides[0];

		var rAngle = 90 - iAngle;

		var rSide = Math.abs(Math.sin((rAngle*Math.PI/180))) * sortedSides[0];

		if (!isNaN(iSide)) {
			return "4,4 4," + (sortedSides[2]+4) + " " + parseFloat(iSide) + "," + (parseFloat(rSide)+4)
		}

	}

	render() {

		// defining the different types of triangles and their corresponding descriptions & images
		var triangle_type = {
			Isosceles: {
				name: "Isosceles Triangle",
				desc: "An Isosceles triangle is a triangle in which two of the three sides have the same length.",
			},
			Scalene: {
				name: "Scalene Triangle",
				desc: "A Scalene triangle is a triangle in which none of the three sides have the same length.",
			},
			Equilateral: {
				name: "Equilateral Triangle",
				desc: "An Equilateral triangle is a triangle in which all three sides have the same length.",
			},
			Invalid: {
				name: "Invalid Input",
				desc: "You have entered an invalid input."
			}
		}

		return (
			<div id="TriangleInfo" className="px-5">
				<div id="triangleContainer">
					<svg viewBox="0 0 100 100" id="triangleSVG">
					  <polygon points={this.coordinates(this.props.s1, this.props.s2, this.props.s3)} id="triangleStyling"/>
					</svg>
					<h2 className="py-0">{triangle_type[this.props.type].name}</h2>
					<p>{triangle_type[this.props.type].desc}</p>
				</div>
				<form data-ts="Form">
					<div id="errMsg" className="hide py-3">
						<fieldset>
							<dl className="ts-errors">
								<dt>Invalid Inputs</dt>
								<dd>Please ensure that all inputs are filled.</dd>
								<dd>Please enter valid lengths of a triangle.</dd>
								<dd>Any negative input is invalid.</dd>
							</dl>
						</fieldset>
					</div>
				</form>
			</div>
		);
	}

}

export default TriangleInfo;
