import React, {Component} from 'react';
import './Vform.css';

// I'm not too familiar with useState so I switched over to using classes
class Vform extends Component {

	constructor(props) {
		super(props);

		this.state = {
			s1: 5,
			s2: 5,
			s3: 5,
			type: 'Equilateral'
		}
	}

	sendData = () => {
		this.props.callback(this.state.s1, this.state.s2, this.state.s3, this.state.type)
	}

	updateTable() {
	  	window.ts.ui.get('#pastInputTable', table => {
	  		var rows = table.rows()
	  		rows.push([this.state.s1, this.state.s2, this.state.s3, this.state.type]);
	  	})
	}

	checkSides = () => {

		this.setState({
			type: this.triangleType()
		}, function() {
			this.sendData();
			if (this.illegalInput(this.state.s1, this.state.s2, this.state.s3)) {
				document.getElementById('triangleContainer').style.display = 'none';
				document.getElementById('errMsg').style.display = 'block';
			}
			else {
				document.getElementById('triangleContainer').style.display = 'block';
				document.getElementById('errMsg').style.display = 'none';
				this.updateTable();
			}
		})
	}

	handleS1 = (event) => {
		this.setState({
			s1: event.target.value
		})
	}

	handleS2 = (event) => {
		this.setState({
			s2: event.target.value
		})
	}

	handleS3 = (event) => {
		this.setState({
			s3: event.target.value
		})
	}

	triangleType() {
		var s1= parseFloat(this.state.s1);
		var s2= parseFloat(this.state.s2);
		var s3= parseFloat(this.state.s3);

		if (!this.illegalInput(s1,s2,s3)) {

			// checking if triangle is Equilateral
			if (s1 === s2 && s1 === s3) {
				return 'Equilateral';
			}

			// checking if triangle is Isosceles
			else if (s1 === s2 || s1 === s3 || s2 === s3) {
				return 'Isosceles';
			}
			else {
				return 'Scalene'
			}
		}
		else {
			return 'Invalid'
		}
	}

	illegalInput(s1, s2, s3) {

		// checking for empty inputs
		if (this.state.s1 === '' || this.state.s2 === '' || this.state.s3 === '') {
			return true;
		}

		// checking for inputs with value zero
		else if (parseInt(this.state.s1) === 0 || parseInt(this.state.s2) === 0 || parseInt(this.state.s3) === 0) {
			return true;
		}

		// checking for negative sides
		if (s1 < 0 || s2 < 0 || s3 < 0) {
			return true;
		}

		// checking if the sum of two sides is less than or equal to the third side
		if (parseFloat(s1) + parseFloat(s2) <= parseFloat(s3)) {
			return true;
		}
		else if (parseFloat(s2) + parseFloat(s3) <= parseFloat(s1)) {
			return true;
		}
		else if (parseFloat(s1) + parseFloat(s3) <= parseFloat(s2)) {
			return true;
		}

		return false;
	}

	formValidation() {
		if (this.illegalInput(this.state.s1, this.state.s2, this.state.s3)) {
			document.getElementById('errMsg').style.display = 'block !important';
		}
		else {
			document.getElementById('errMsg').style.display = 'none !important';
		}
	}

	render() {
		return (
			<form data-ts="Form">
				{/* Number inputs for sides of triangle with a 'submit' button */}
				<fieldset>
					<label>
						<span>Side 1</span>
						<input type="number" value={this.state.s1} onChange={this.handleS1}/>
					</label>
					<label>
						<span>Side 2</span>
						<input type="number" value={this.state.s2} onChange={this.handleS2}/>
					</label>
					<label>
						<span>Side 3</span>
						<input type="number" value={this.state.s3} onChange={this.handleS3}/>
					</label>
				</fieldset>
				<button data-ts="Button" className="ts-primary mx-2 px-2" onClick={this.checkSides}>
					<span>Check</span>
				</button>
			</form>
		);
	}

}

export default Vform;
