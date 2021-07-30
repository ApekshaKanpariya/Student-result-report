import React, { useState } from 'react';

const Generate = (props) =>{
  // console.log(props.items);
    
    const MathsHighest = props.items.map(value => value.maths);
    const MathsHigh = Math.max(...MathsHighest);
  
    const mathsName = props.items.find(element => element.maths === MathsHigh.toString());
    
    const EngHighest = props.items.map(value => value.eng);
    const EngHigh = Math.max(...EngHighest);

    const engName = props.items.find(element => element.eng === EngHigh.toString());

    const AvgHighest = props.items.map(value => value.Averege);
    const AvgHigh = Math.max(...AvgHighest);

    const AvgName = props.items.find(element => element.Averege === AvgHigh);

    return (
        <div>
            <center>
            Maths Toper: {mathsName && mathsName.name} got {MathsHigh} in {mathsName && mathsName.year}. <br/><br/>
            English Toper: {engName && engName.name} got {EngHigh} in {engName && engName.year}. <br/><br/>
            Overall Toper: {AvgName && AvgName.name} got {AvgHigh} in  {AvgName && AvgName.year}.<br/><br/>
            </center>
        </div>
    );
}

export default Generate;