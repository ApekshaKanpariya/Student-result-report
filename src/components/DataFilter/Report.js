import { ConsoleWriter } from 'istanbul-lib-report';
import React, { useState } from 'react';

import DataFilter from './DataFilter';
import Generate from './GenerateReport';

const Report = (props) => {
  // console.log(props.filterData)
  const [filteredYear, setFilteredYear] = useState('2010');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const FilterStudData = props.filterData.filter(data => {
    return data.year === filteredYear;
  })
    
  return(
    <div>
      <center><h4>Generate Report</h4></center>
      <DataFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/><br/>
      <Generate items={FilterStudData}/>
    </div>
  );
 
};

export default Report;