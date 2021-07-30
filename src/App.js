import React, { useState } from 'react';

import StudentForm from './components/FormTable/StudForm';
import TableData from './components/FormTable/StudTable';
import Report from './components/DataFilter/Report';
const App = () => {

  const [val, setVal] = useState([]);
  const [stud, setStud] = useState();
  
  const getData = (data) =>{
    setVal([...val, {...data, 'TotalMarks': totalMark(data),'Averege': Avg(data),'Result': PassFail(data)}]);
    // console.log(val);
  }

  const totalMark = (value) =>{
    return parseInt(value.eng) + parseInt(value.maths) + parseInt(value.sci);
  }
  
  const Avg = (value) =>{
    return (totalMark(value)/3);
  }

  const PassFail = (value) =>{
    if(Avg(value) > 35){
      return 'pass';
    }else{
      return 'fail';
    }
  }

  const onDelete = (index) =>{
    val.splice(index, 1)
    setVal([...val]);   
  }

  const onEdit = (stud) =>{
    setStud(stud);
  }


  return (
    <div>
      <StudentForm getData={getData} StudData={stud}/>
      <TableData studentData={val} onDelete={onDelete} onEdit={onEdit}/>
      <Report filterData={val}/>
    </div>
  );
}

export default App;