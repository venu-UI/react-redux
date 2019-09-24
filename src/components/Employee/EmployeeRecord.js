import React from "react";
import axios from "axios";

class EmployeeRecord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/departments", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log("axios GET DEPTS response: ", response.data);
        this.setState({ departments: response.data });
      })
      .catch(error => {
        console.log("axios GET DEPTS error: ", error.message);
      });

    if (this.props.mode === "update") {
      const {
        name, phone, email,
      } = this.props.employee;

      this.txtName.value = name;
      this.txtPhone.value = phone;
      this.txtEmail.value = email;
    } else {
      this.txtName.value = "";
      this.txtPhone.value = "";
      this.txtEmail.value = "";
    }
  }

  componentDidUpdate() {
    if (this.props.mode === "update") {
      const {
        name, phone, email,
      } = this.props.employee;

      this.txtName.value = name;
      this.txtPhone.value = phone;
      this.txtEmail.value = email;
    } else {
      this.txtName.value = "";
      this.txtPhone.value = "";
      this.txtEmail.value = "";
    }
  }

  validations() {
    if (this.txtName.value.trim() === "") {
      alert("Enter Name.");
      this.txtName.focus();
      return false;
    }

    if (this.txtEmail.value.trim() === "") {
      alert("Enter Email.");
      this.txtEmail.focus();
      return false;
    }

    if (this.txtPhone.value.trim() === "") {
      alert("Enter Phone.");
      this.txtPhone.focus();
      return false;
    }

    if (this.drpDepartment.value === "0") {
      alert("Select Department.");
      this.drpDepartment.focus();
      return false;
    }

    return true;
  }

  render() {
    let selectString;
    const optionsJSX = this.state.departments.map(element => {
      selectString = false;
      if (this.props.employee) {
        if (this.props.employee.department === element.name) {
          selectString = true;
        }
      }

      return (
        <option key={element.id} selected={selectString}>
          {element.name}
        </option>
      );
    });

    return (<tr style={{ backgroundColor: "lightpink" }}>
      <td>&nbsp;</td>
      <td>
        <input
          type="text"
          ref={(node) => {
            this.txtName = node;
          }}
        />
      </td>
      <td>
        <input
          type="text"
          ref={(node) => {
            this.txtEmail = node;
          }}
        />
      </td>
      <td>
        <input
          type="text"
          ref={(node) => {
            this.txtPhone = node;
          }}
        />
      </td>
      <td>
        <select
          style={{ height: 30 }}
          ref={node => {
            this.drpDepartment = node;
          }}
        >
          <option value="0">Select Department</option>
          {optionsJSX}
        </select>
      </td>
      <td>
        {
          this.props.mode === "create" ?
            <input
              type="button"
              value="Create"
              onClick={() => {
                const emp = {
                  name: this.txtName.value,
                  email: this.txtEmail.value,
                  phone: this.txtPhone.value,
                  department: this.drpDepartment.value,
                };
                if (this.validations()) {
                  this.props.createHandler(emp);
                }
              }}
            />
            : <input
              type="button"
              value="Update"
              onClick={() => {
                const emp = {
                  id: this.props.id,
                  name: this.txtName.value,
                  email: this.txtEmail.value,
                  phone: this.txtPhone.value,
                  department: this.drpDepartment.value,
                };

                if (this.validations()) {
                  this.props.updateHandler(this.props.id, emp);
                }
              }}
            />
        }

      </td>
            </tr>);
  }
}

export default EmployeeRecord;
