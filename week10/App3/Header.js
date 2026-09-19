import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h3>Student Information</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Roll Number:</strong> 22CSE01</p>
        <p><strong>Department:</strong> Computer Science</p>
      </div>
    );
  }
}

export default Student;
