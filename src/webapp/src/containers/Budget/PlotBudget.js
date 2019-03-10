import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../actions'
import { getFormatedDateForApi } from '../../helper'
import BudgetFieldsCard from '../../components/Budget/BudgetFieldsCard'
import _ from 'lodash';

class PlotBudget extends React.Component {

  constructor () {
    super()
    this.state = { 
    				rawdata: [],
    				expensedata: [],
    				incomedata: [],
    				investmentdata: [],
    				plotdata: [],
			    	title: "",
			    	charttype: ""
    			 }
    this.renderObjects = this.renderObjects.bind(this);
    //this.processObjects = this.processObjects.bind(this);
  }

  componentWillMount() {
  }
  
  handleSubmit = (values) => {
    console.log(values)
    
    //converting into datatime format
    values.fromExpenseDate = getFormatedDateForApi(values.fromExpenseDate)
    values.toExpenseDate = getFormatedDateForApi(values.toExpenseDate)
    this.props.getBudgetList(values)
    
    console.log("API Success")
    console.log(this.props.budgetList) 
    
    //this.processObjects(); 	
	this.setState({ plotdata: this.state.expensedata });
    //this.setState({ plotdata: [[Date.UTC(2018,7,2),1500], [Date.UTC(2018,7,15),2200], [Date.UTC(2018,7,31),600], [Date.UTC(2018,7,31),800]] })
	
    this.setState({ title: values.budgetType })
    this.setState({ charttype: values.plotType })
    //this.setState({ rawdata: res.data })
    
//    api.post('/budget/plot', values)
//      .then(res => {
//        if(res.status === 200){
	          //this.props.successToast('Successfully retrieved the budget')
	          //this.props.history.push('/budget/all')
	          //this.setState({ plotdata: [[Date.UTC(2018,7,2),1500], [Date.UTC(2018,7,15),2200], [Date.UTC(2018,7,31),600], [Date.UTC(2018,7,31),800]] })
	          //this.setState({ title: values.budgetType })
	          //this.setState({ rawdata: res.data })
	          //console.log("API Success")
	          //console.log(res.data)
//	     }
//      })
//      .catch(err => {
//        console.log(err)
//        this.props.dangerToast('Error occurred while retrieving the budget data')
//      })
  }


  render() {

	  const options = {
	  colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
	        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
	  chart: 
	  { 
		  type: this.state.charttype,
		  //type: 'bar' ,
	      backgroundColor: {
	            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
	            stops: [
	                [0, '#2a2a2b'],
	                [1, '#3e3e40']
	            ]
	        },
	      plotBorderColor: '#606063'
	  },
	  title: 
	  {
		  text: this.state.title + " Graph",
		  style: 
		  {
	            color: '#E0E0E3'
		  }
	  },
	  xAxis: {
	        gridLineColor: '#707073',
	        labels: {
	            style: {
	                color: '#E0E0E3'
	            }
	        },
	        lineColor: '#707073',
	        minorGridLineColor: '#505053',
	        tickColor: '#707073',
	        title: 
	        {
	        	text: 'Date',
	            style: 
	            {
	                color: '#A0A0A3'
	            }

	        },	          
			type: 'datetime',
			format: '{value:%e-%b-%Y}'
	  },
	  yAxis: 
	  {
	        gridLineColor: '#707073',
	        labels: {
	            style: {
	                color: '#E0E0E3'
	            }
	        },
	        lineColor: '#707073',
	        minorGridLineColor: '#505053',
	        tickColor: '#707073',
	        tickWidth: 1, 
	        title: {
	        	text: 'Amount',
	        	style: {
	                color: '#A0A0A3'
	            }
	        }
	  },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        },
        shared: true
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
    },
	 series: this.props.budgetList,
    // special colors for some of the parameters
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
	};

	    
    return (
      <Row>
        <Col>
          <div className="m-t-10">
            <BudgetFieldsCard title="Plot Budget"
                              submitName="Submit"
                              onSubmit={this.handleSubmit}>
            </BudgetFieldsCard>
          </div>

          <div className="block-content">
		  <HighchartsReact
			highcharts={Highcharts}
			constructorType={'chart'}
			options={options}
		  />
          </div>

          <div>
        	<h6> Plot List - Summary </h6>
        	{this.state.charttype}
        	<table border="1" width="20%">
        		<tr>
        			<th>Creation Date</th>
        			<th>Amount</th>
        			</tr>
        			{this.renderObjects()}
        	</table>
		  </div>

        </Col>
      </Row>
    )
	 
  }

// processObjects() 
// {
//	  
//       _.map(this.props.budgetList, object => {
//		 var exp = [object.created_date, object.expense_amount];
//		 var income = [object.createdDate, object.incomeAmount];
//		 var invest = [object.createdDate, object.investmentsAmount];
//		 
//	   if (object.expense_id != null)
//		   {  
//		   	this.setState({ expensedata:[...this.state.expensedata], exp });
//		   }
//		   
//	   if (object.incomeId != null) 
//		   {
//		   this.setState({ incomedata:[...this.state.incomedata], income });
//		   }
//	   
//	   if (object.investmentsId != null) 
//		   {
//		   this.setState({ investmentdata:[...this.state.investmentdata], invest});		   
//		   }
  //});
  //console.log("Processed Objects - expense");
  //console.log(this.state.expensedata);
  // console.log(this.state.incomedata);
  //console.log(this.state.investmentdata);

// }
  
  renderObjects() {
	  console.log("Render Objects");
	  var result = this.props.budgetList;
	  console.log(this.props.budgetList);
	  console.log(result.length);
	  for (var i=0; i<result.length; i++)
	  {
	       console.log(result[i].data);
		   return _.map(result[i].data, object => {
			   
			   var d = new Date(object[0]);
			   var date = d.toLocaleDateString();
			   var amt = object[1];
			   	return ( <tr>
			   				<td>{date} </td>
					        <td>{amt}</td>
				         </tr> );
		   });
	  }
	  //console.log(this.props.budgetList);

	   
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

export default connect(mapStateToProps, mapDispatchToProps) (PlotBudget)
