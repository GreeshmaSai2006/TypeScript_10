import React from "react";
import Course from "./Course"; // Importing the course component

function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p> Name:Greeshma </p>
      {/* Nesting the Course component inside Student */}
      <Course /> 
    </div>
  );
}

export default Student;
