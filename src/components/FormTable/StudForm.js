import React, { useState } from 'react';

import YearInsert from './YearInsert';

const StudentForm = (props) =>{
    
    const[id, setId] = useState('');
    const[name, setName] = useState('');
    const[eng, setEng] = useState('');
    const[maths, setMaths] = useState('');
    const[sci, setSci] = useState('');
    const [year, setYear] = useState('2010');
    const[isEdit, setIsEdit] = useState(false);
    
    const YearChangeHandler = selectedYear => {
        setYear(selectedYear);
      };
    
    const onTextChange = (e) =>{
        if(e.target.name === 'id'){
            setId(e.target.value)
        }
        if(e.target.name === 'name'){
            setName(e.target.value)
        }
        if(e.target.name === 'eng'){
            setEng(e.target.value)
        }
        if(e.target.name === 'maths'){
            setMaths(e.target.value)
        }
        if(e.target.name === 'sci'){
            setSci(e.target.value)
        }
    }

    const onUpdate = () =>{
        setIsEdit(true)
        setId(props.StudData.id);
        setName(props.StudData.name);
        setEng(props.StudData.eng);
        setMaths(props.StudData.maths);
        setSci(props.StudData.sci);
        setYear(props.StudData.year);
    }
    
    React.useEffect(() => {
        if(props.StudData) {
            onUpdate();
        }
    },[props.StudData])
    
    const saveData = () =>{

        if(id.trim().length === 0 || name.trim().length === 0 || eng.trim().length === 0 || maths.trim().length === 0 || sci.trim().length === 0){
            alert("Enter All Field!");
            return false;
        }

        if(+id < 1 || +eng < 1 || +maths < 1 || +sci < 1){
            alert("Enter Proper Marks");
            return false;
        }
        props.getData({
            id: id,
            name: name,
            eng: eng,
            maths: maths,
            sci: sci,
            year: year
        }, isEdit);
        setId("");
        setName("");
        setSci("");
        setEng("");
        setMaths("");
        setYear("");
        setIsEdit(false);
    }
    return(
        <div>
            <center>
            <h4>Student Information</h4>
            Id : <input type="number" disabled={isEdit} value={id} onChange={onTextChange} name="id"/><br/><br/>
            Name : <input type="text" value={name} onChange={onTextChange} name="name"/><br/><br/>
            English : <input type="text" value={eng} onChange={onTextChange} name="eng"/><br/><br/>
            Maths : <input type="text" value={maths} onChange={onTextChange} name="maths"/><br/><br/>
            Science : <input type="text" value={sci} onChange={onTextChange} name="sci"/><br/><br/>
            <YearInsert select={year} onChangeYear={YearChangeHandler}/><br/>
            <button className="StudentBtn" onClick={saveData}>Submit</button>
            </center>
        </div>
    )
}

export default StudentForm;