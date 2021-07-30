import React, { useState } from 'react';

import './StudTable.css';

const TableData = (props) =>{
    const tableDatas = props.studentData;
    console.log(tableDatas);
    return (
        <div>
            <center>
            <h4>Student Data</h4>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Student Id</th>
                        <th>Name</th>
                        <th>English</th>
                        <th>Maths</th>
                        <th>Computer</th>
                        <th>Total Marks</th>
                        <th>Average</th>
                        <th>Result</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {tableDatas.map((value,index) => (
                    <tr key={index}>
                      <td>{value.year}</td>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td className={`Font-Size ${value.eng < 35 ? "Font-Color" : ""}`}>{value.eng}</td>
                      <td className={`Font-Size ${value.maths < 35 ? "Font-Color" : ""}`}>{value.maths}</td>
                      <td className={`Font-Size ${value.sci < 35 ? "Font-Color" : ""}`}>{value.sci}</td>
                      <td className={`Font-Size ${value.TotalMarks < 35 ? "Font-Color" : ""}`}>{value.TotalMarks}</td>
                      <td className={`Font-Size ${value.Averege < 35 ? "Font-Color" : ""}`}>{value.Averege.toFixed(2)}</td>
                      <td>{value.Result}</td>
                      <td><button onClick={() => (props.onDelete(index))}>delete</button></td>
                      <td><button onClick={() => (props.onEdit(value))}>Edit</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </center>   
        </div>
    )
}

export default TableData;