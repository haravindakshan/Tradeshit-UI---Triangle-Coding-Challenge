import React, {Component} from 'react';
import logo from './tradeshift.png';
import Vform from './Vform.js';
import TriangleInfo from './TriangleInfo.js'
import Paragraph from './Paragraph.js'
import './App.css';

class App extends Component {


	constructor(props) {
		super(props);

		this.state = {
			s1: 5,
			s2: 5,
			s3: 5,
			type: "Equilateral"
		}
	}

	// callback function to get data from Vform so that I can pass it as props to TriangleInfo component
	callbackVform = (s1, s2, s3, type) => {
		
		this.setState({
			s1: s1,
			s2: s2,
			s3: s3,
			type: type
		});
	}

  componentDidMount() {

  	window.ts.ui.get('#pastInputTable', table => {
  		var rows = table.rows();
  		table.cols(['Side 1', 'Side 2', 'Side 3', 'Type']);
  		rows.push([this.state.s1,this.state.s2,this.state.s3, this.state.type])
  	})

  	window.ts.ui.get('#tti', function(board) {
			board.title('Triangle Type Identifier');
		});

		window.ts.ui.get('#desc', function(board) {
			board.title('Description');
		});

		window.ts.ui.get('#cases', function(board) {
			board.title('Test Cases');
		});

	}

	render() {

		const design_desc = " The requirements behind this coding challenge were straight to the point yet definitely allowed me to be creative in my design while still maintaining an efficient implementation. As per requirements, the user inputs the length of three sides of a triangle, and the program outputs what type of triangle it is (Equilateral, Isosceles, or Scalene). The program also checks for invalid inputs such as negative numbers, empty inputs, and inputs that violate the basic laws of a triangle. The app is broken down by components, some major ones including: a Vform component that consists of a form with inputs built using Tradeshift's UI API and form validation (of course); a TriangleInfo component (my favorite component) that gives the user a brief description regarding the type of triangle the program has outputted all while giving the program uniqueness in a subtle yet, in my opinion, cool and interesting fashion; a very dynamic and functional tabular component that Tradeshift has built and I am utilizing.";

		const creativity_desc = "The coding challenge requirements noted that building the UI using Tradeshift components is welcomed. My goal wasn't to solve the coding challenge and add as many components possible, but to showcase a simple well-built application with revelatory additional features that showcase the components itself and my new familiarity with them. Since the requirements of the challenge needed only a minimal number of components from Tradeshift (three input fields and a button), I took it upon myself to explore my mind and Tradeshift's UI Documentation to implement some features that I'd like to highlight: the triangle SVG that's being dynamically created actually mimics the input lengths (please see attached notes under the /Notes folder); the tabular component tracks and stores user input and program output.";

		const scalability_desc = "The coding challenge description also mentioned that the solution I implement should consider applying these fundamentals in more complex problem domains. One possible route of scaling would be to make this program work for other multi-sided polygons.";

		const future_desc = "Some future implementations that I would like to see in this application include aesthetic enhancements such as animating the triangle as it changes edge length, dark mode (because who doesn't love dark mode), and figuring out a way to deal with better utilizing screen real estate. Some functional enhancements I would like to see include multiple sets of inputs so that I can check multiple triangles (or polygons) at once, importing those inputs from excel or a database, and a settings tab to customize and possibly even modularize the app to the users' interests. ";

		const sketches_desc = "Please see the attached scanned notes that I wrote to help me through the assignment. They might be scattered and hard to understand, but hopefully they give some impression of my thought process!"

		const final_desc = "Lastly, thank you so much for taking the time to review my application and exposing me to a bit of what Tradeshift has to offer! I'd love to hear and learn more. If you have any questions or feedback, please feel free to contact me. Thank you!"

	  return (
	    <div className="App">
	      <div className="container-fluid h-100">
	        <div className="row p-2 header">
	          <div id="header-logo" className="col-lg-12 h-100">
	            <img src={logo} className="logo" alt="logo"/>
	          </div>
	        </div>
	        <div className="row px-5 py-4 body">
	          <div className="col-lg-12 h-100">
		          <div data-ts="Board" id="tti" className="p-1">
		            <div className="py-2 px-3"> 
		            	<div className='row px-2'>
		            		<div className='col-lg-3 p-2'>
		            			{/* Dev created Component consisting of form with inputs */}
		            			<Vform callback={this.callbackVform}/>
		            		</div>
		            		<div className='col-lg-4 p-1' id="triangleInfoContainer">
		            			<TriangleInfo type={this.state.type} s1={this.state.s1} s2={this.state.s2} s3={this.state.s3}/>
		            		</div>
		            		<div className='col-lg-5 p-2 tableStyle'>
		            			<div data-ts="Table" id="pastInputTable"></div>
		            		</div>
		            	</div>
		            </div>
		          </div>
		          <div data-ts="Board" id="desc" className="p-1">
		          	<div className="py-2 px-3"> 
		            	<Paragraph title="Design & Implementation" description={design_desc} />
		            	<Paragraph title="Creativity" description={creativity_desc} />
		            	<Paragraph title="Scalability" description={scalability_desc} />
		            	<Paragraph title="Future Implementations" description={future_desc} />
		            	<Paragraph title="Sketches & Notes" description={sketches_desc} />
		            	<Paragraph title="Final Notes" description={final_desc} />
		            </div>
		          </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  );
	}

}

export default App;
