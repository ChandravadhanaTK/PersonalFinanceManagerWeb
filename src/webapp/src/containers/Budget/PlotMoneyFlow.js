import React from 'react'
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import { getFormatedDateForApi } from '../../helper'
import Budget1FieldsCard from '../../components/Budget/Budget1FieldsCard'
import _ from 'lodash';

class PlotMoneyFlow extends React.Component {

  constructor () {
    super()
    this.state = { 
    				plotdata: [
    					["From", "To", "Amount"],
    					["Income","Expense",0],
    					["Income","Investment",0]
    					],
			    	title: ""
    			 }
  }

  componentWillMount() {
  }
  
  handleSubmit = (values) => {
    console.log(values)
    
    //converting into datatime format
    values.fromExpenseDate = getFormatedDateForApi(values.fromExpenseDate)
    values.toExpenseDate = getFormatedDateForApi(values.toExpenseDate)
    console.log(values.budgetType)
    values.budgetType = "Money Flow"
   	console.log(values)
    this.props.getBudgetList(values)
    
    console.log("API Success")
    //console.log(this.props.budgetList[0].data) 
    
    var result = this.props.budgetList;
    
	console.log(result.length);
	
	  for (var i=0; i<result.length; i++)
	  {
	       console.log(result[i].data);
	       this.setState({ plotdata: result[i].data });
		   return _.map(result[i].data, object => {
			   
			   var a = object[0];
			   var b = object[1];
			   var c = object[2];
			   console.log(a+" "+b+" "+c);
		   });
	  }
    
	//this.setState({ plotdata: this.props.budgetList[0].data })
    this.setState({ title: "Money Flow Diagram" })
  }


  render() {
   
	  var colors = [
		  "#b2df8a",
		  "#fb9a99",
		  "#a6cee3",
		  "#fdbf6f",


		  "#cab2d6",
		  "#ffff99",
		  "#1f78b4",
		  "#33a02c"
		];

	const data = this.state.plotdata;

	  
	//console.log(this.props.budgetList[0].data);
	const options = {
			  //tooltip: { isHtml: true },
			  sankey: {
			    node: {
			      colors: colors,
			      interactivity: true,
			      label: {
			        fontName: "calibri",
			        fontSize: 14,
			        color: "black",
			        bold: true,
			        italic: false
			      },
			      //labelPadding: 30
			      nodePadding: 30
			    },
			    link: {
			      colorMode: "gradient",
			      colors: colors
			    }
			  }
			};
		
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <Budget1FieldsCard title="Plot Budget"
                              submitName="Submit"
                              onSubmit={this.handleSubmit}>
            </Budget1FieldsCard>
          </div>
	      <div className="sankey" align="center">
	        <Chart
	          chartType="Sankey"
		      width="600px"
	          height="400px"
	          data={data}
	          options={options}
	        />
	      </div>


        </Col>
      </Row>
    )
	 
  }

}

const mapStateToProps = state => ({
	  budgetList: state.budgetReducer.budgetList
})

const mapDispatchToProps = dispatch => ({
  getBudgetList: (budgetDetails) => dispatch(actions.getAllBudget(budgetDetails)),
  successToast: (msg) => dispatch(actions.successToast(msg)),
  dangerToast: (msg) => dispatch(actions.dangerToast(msg))
})

export default connect(mapStateToProps, mapDispatchToProps) (PlotMoneyFlow)
