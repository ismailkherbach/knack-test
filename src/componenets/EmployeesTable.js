import React, { Component, Fragment } from "react";
import employeesList from "../data/employees";
import searchIcon from "../assets/img/search-interface-symbol.svg";
import filterIcon from "../assets/img/filter.svg";

import EmployeePopup from "../containers/popup/EmployeePopup";
import FilterPopup from "../containers/popup/FilterPopup";
export default class EmployeesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employeesList,
      employee: null,
      searchInput: "",
      filter: false,
      employeeClicked: null,
      employeePopup: false,
    };
  }

  filterByName = (e) => {
    let key = e.target.value;
    if (key === "") {
      this.setState({ employees: employeesList });
    } else {
      const filteredItems = employeesList.filter((x) =>
        x.name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      this.setState({ employees: filteredItems });
    }
  };
  handleEmployeeClick = (e) => {
    this.setState({ employeeClicked: e, employeePopup: true });
  };
  render() {
    const { employees, filter, employeeClicked, employeePopup } = this.state;
    return (
      <Fragment>
        {employeePopup && (
          <EmployeePopup
            employee={employeeClicked}
            closeEmployeePopup={() => this.setState({ employeePopup: false })}
          />
        )}
        {filter && (
          <FilterPopup closeFilter={() => this.setState({ filter: false })} />
        )}
        {!employeePopup && (
          <div className="table-core flex fdc aifs jcfs">
            <div className="filter-container flex fdr aic jcc">
              <div className="filter-left flex fdr aic jcc">
                <div className="search-container flex fdr aic jcc">
                  <div className="icon flex fdr aic jcc">
                    <img alt="loupe" src={searchIcon} />
                  </div>
                  <input
                    placeholder="Search by name"
                    onChange={this.filterByName}
                  />
                </div>
              </div>
              <div className="filter-right flex fdr aic jcfe">
                <div
                  onClick={() => this.setState({ filter: !this.state.filter })}
                  className="filterBtn flex fdr aic jcc"
                >
                  <div className="icon flex fdr aic jcc">
                    <img alt="loupe" src={filterIcon} />
                  </div>
                  <h5>Filter</h5>
                </div>
              </div>
            </div>

            <table>
              <thead>
                <tr className="head disable-select">
                  <th>Employee</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Country</th>
                  <th>Contract</th>
                </tr>
              </thead>
              {
                <tbody>
                  {employees.map((e, i) => {
                    return (
                      <tr onClick={() => this.handleEmployeeClick(e)} key={i}>
                        <td>
                          <h3>{e.name}</h3>
                        </td>
                        <td>
                          <h3>{e.position}</h3>
                        </td>
                        <td>
                          <h3>{e.department}</h3>
                        </td>
                        <td>
                          <h3>{e.location}</h3>
                        </td>
                        <td>
                          <h3>{e.country}</h3>
                        </td>
                        <td>
                          <h3>{e.contract}</h3>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              }
            </table>
            {employees.length <= 0 && (
              <div className="wb-100 empty-state flex fdr aic jcc">
                No employees found with this name !
              </div>
            )}
            {/* <div className="wb-100 flex fdr aic jcc">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>*/}
          </div>
        )}
      </Fragment>
    );
  }
}
