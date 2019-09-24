import React from 'react';
import axios from "axios";

class Department extends React.Component {
  constructor() {
    super();
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
        this.setState({ departments: response.data });
      })
      .catch(error => {
        console.log("axios error: ", error.message);
      });
  }

  render() {
    const tableDataJSX = this.state.departments.map(element => (
      <tr key={element.id}>
        <td>{element.name}</td>
      </tr>
    ));

    return (<section id="contact" >
      <div className="container">
        <br />
        <br />
        <h2 className="text-center text-uppercase text-secondary mb-0">Department</h2>
        <hr />

        <div className="row">
          <div className="col-lg-12 mx-auto">

            <br /><br />

            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr style={{ backgroundColor: "lightblue" }}>
                    <th>Name</th>
                  </tr>
                  {tableDataJSX}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
            </section>);
  }
}

export default Department;
