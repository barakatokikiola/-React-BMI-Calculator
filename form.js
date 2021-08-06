import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      height: null, 
      weight: null
    };
  }
  //Takes the user height and weight
    userInputHandler=(e) => {
      let nam = e.target.name;
      let val = e.target.value;
      this.setState({[nam]:val});
      
    }
    
    //Calculates user BMI and Shows the BMI range
    bmiCalc=(event)=>{
      event.preventDefault();
      let bmi = this.state.weight / (this.state.height/100 * this.state.height/100);
      let bmiOutput= bmi.toFixed(2);
      document.getElementById('result').textContent = "Your bmi is " + bmiOutput + 'kg/m²';
      
      let a = "BMI Range : ";
      if(bmiOutput < 18.5){
      document.getElementById('bmiRange').textContent = a + "Underweight";
      } else if (bmiOutput === 18.5 || bmiOutput < 25 ) {
          document.getElementById('bmiRange').textContent = a + "Your BMI is in the normal range";
      }
       else if (bmiOutput === 25 || bmiOutput < 30) {
         document.getElementById('bmiRange').textContent = a + "Overweight";
       }
        else if ( bmiOutput > 30) {
          document.getElementById('bmiRange').textContent = a + "Obese";
        }
    }
    
    //Resets users input
   resetHandler=()=>{
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('bmiRange').textContent = '';
     document.getElementById('result').textContent = '';
   }
    render() {
       return (
         <div id ='container'>
         <form onSubmit ={this.bmiCalc}>
            <h1>BMI CALCULATOR</h1>
          <h4> Height</h4>
           <input type='text' name="height" class= 'inputed' id = 'height' onChange={this.userInputHandler}
           />
         <h4>  Weight </h4>
           <input type='text' name ='weight' class= 'inputed' id='weight' onChange={this.userInputHandler}
             />
           <input type = 'submit' id= "button" value = 'Get BMI'/>
                          <input type = 'button' id = 'button' onClick={this.resetHandler}value = 'Reset'/>
                <p id = 'result'></p>
                <h4 id='bmiRange'></h4>
             <p id = 'info'> Please enter your height(cm) and your weight(kg)</p>
            </form>
           
            </div>
       );
    };
}
   
  

export default Form;