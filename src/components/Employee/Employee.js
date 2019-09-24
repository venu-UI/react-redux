import React from 'react';
import axios from "axios";

import Actions from "./Actions";
import EmployeeRecord from "./EmployeeRecord";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      addMode: false,
      editMode: false,
      activeRecord: {},
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.createEmployee = this.createEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.loadEmployees = this.loadEmployees.bind(this);
  }

  componentDidMount() {
    this.loadEmployees();
  }

  addEmployee() {
    this.setState({
      addMode: true,
      editMode: false,
      activeRecord: {},
    });
  }

  editEmployee(id) {
    this.setState({
      addMode: false,
      editMode: true,
    });

    const activeEmployee = this.state.employees.filter((element) => element.id === id);

    this.setState({ activeRecord: activeEmployee[0] });
  }

  deleteEmployee(id) {
    this.setState({
      addMode: false,
      editMode: false,
      activeRecord: {},
    });

    axios
      .delete(`http://localhost:3004/employees/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log("axios DELETE response: ", response.data);
        this.loadEmployees();
      })
      .catch(error => {
        console.log("axios DELETE error: ", error.message);
      });
  }

  createEmployee(emp) {
    this.setState({
      addMode: false,
      editMode: false,
      activeRecord: {},
    });

    axios
      .post("http://localhost:3004/employees", emp, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log("axios POST response: ", response.data);
        this.loadEmployees();
      })
      .catch(error => {
        console.log("axios POST error: ", error.message);
      });
  }

  updateEmployee(id, emp) {
    this.setState({
      addMode: false,
      editMode: false,
      activeRecord: {},
    });

    axios
      .put(`http://localhost:3004/employees/${id}`, emp, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log("axios PUT response: ", response.data);
        this.loadEmployees();
      })
      .catch(error => {
        console.log("axios PUT error: ", error.message);
      });
  }

  loadEmployees() {
    axios
      .get("http://localhost:3004/employees", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        this.setState({ employees: response.data });
      })
      .catch(error => {
        console.log("axios error: ", error.message);
      });
  }

  render() {
    const tableDataJSX = this.state.employees.map(element => (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.email}</td>
        <td>{element.phone}</td>
        <td>{element.department}</td>
        <td><Actions
          id={element.id}
          editHandler={this.editEmployee}
          deleteHandler={this.deleteEmployee}
        />
        </td>
      </tr>
    ));

    return (<section id="contact" >
      <div className="container">
        <br />
        <br />
        <h2 className="text-center text-uppercase text-secondary mb-0">Employee</h2>
        <hr />
        <div>
          <form>
            <input
              type="button"
              value="Add Employee"
              onClick={this.addEmployee}
            />
          </form>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr style={{ backgroundColor: "lightblue" }}>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>&nbsp;</th>
                  </tr>

                  {this.state.editMode ?
                    <EmployeeRecord
                      mode="update"
                      employee={this.state.activeRecord}
                      id={this.state.activeRecord.id}
                      updateHandler={this.updateEmployee}
                    />
                    : null}

                  {this.state.addMode ?
                    <EmployeeRecord
                      mode="create"
                      createHandler={this.createEmployee}
                    />
                    : null}

                  {tableDataJSX}
                </tbody>
              </table>
            </div>

            <br /><br /><br /><br />
          </div>
        </div>
      </div>
            </section >);
  }
}

export default Employee;
