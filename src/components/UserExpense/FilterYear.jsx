import React from "react";
import Card from "../UI/Card";


const FilterYear = (props) => {
// console.log(defaultYear)

const filterYearHandler =(year) =>{

props.onChangeFilterYear(year.target.value);

}


  return (
    <Card>
 
   <form  className="year-form">
  <label >Filter by Year</label>
  <select value={props.defaultYear}  onChange ={filterYearHandler }>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
  </select>
</form>
</Card>


  );

};

export default FilterYear;
