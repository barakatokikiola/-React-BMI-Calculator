import React, { useState } from 'react';

const Calc =(props) => {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [result, setResult] = useState('');
    const [bmiRange, setRange] = useState('');

  //Takes the user height and weight
    const handleHeight=(e)=>{
      setHeight(e.target.value)
    }
    const handleWeight=(e)=>{
      setWeight(e.target.value)
    }
    
    const handleReset =() => {
      setHeight(null);
      setWeight(null);
      setResult('');
      setRange('');
    }
    //Calculates user BMI and Shows the BMI range
    function bmiCalc(){
      let bmi = weight/ (height/100 * height/100);
      let bmiOutput= bmi.toFixed(2);
       setResult(`Your BMI is ${bmiOutput}
       kg/m²`)
  
      let a = "BMI Range : ";
 
      if(bmiOutput < 18.5){
          setRange( a + "Underweight");
      } else if (bmiOutput === 18.5 || bmiOutput < 25 ) {
          setRange(a + "Your BMI is in the normal range");
      }
       else if (bmiOutput === 25 || bmiOutput < 30) {
         setRange( a + "Overweight");
       }
        else if ( bmiOutput > 30) {
          setRange(a + "Obese");
        }
    }
   
    
       return (
         <div id ='container'>
         <form>
            <h1>BMI CALCULATOR</h1>
          <h4> Height</h4>
           <input type='text' className='inputed' name="height"  onChange={handleHeight}
           />
         <h4>  Weight </h4>
           <input type='text' className='inputed' name ='weight' onChange={handleWeight}
             />
           <input type = 'button' onClick={bmiCalc} id= "button" value = 'Get BMI'/>
            <input type = 'reset' id = 'button' value = 'Reset' onClick={handleReset}/>
                <p>{result}</p>
                <h4>{bmiRange}</h4>
                <p id = 'info'> Please enter your height(cm) and your weight(kg)</p>
            </form>
           
            </div>
       );
    };

   
  

export default Calc;