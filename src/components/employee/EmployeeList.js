import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider" //import context, not provider
import "./Employee.css"
import { render } from "@testing-library/react"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //Equivalent vanilla JavaScript...
  // const EmployeeList = () => {
  //   getEmployees()
  //     .then(() => {
  //       const employees = useEmployees()
  //       render(employees)
  //     })
  // }
  //useEffect - reach out to the world for something
  // useEffect hook is how you listen for custom events 

  // This is the equivalent vanilla JavaScript...
  // document.addEventListener("employeeStateChange", custonEvent => {
  //   const employees = userEmployees()
  //   console.log(employees)
  // })
  useEffect(() => {
    // console.log("EmployeeList: useEffect - getEmployees") // 2 arguements, a function containing logic that should run
    getEmployees()
  }, []) // second that contains an array is when something happens this component should run again.  Listens for a change. if empty, only runs when initialized.

  useEffect(() => {
    // console.log("EmployeeList: Employee State changes")
    // console.log(employees)
  }, [employees]) //when employees changes, React updates the component for you.  React does some PFM and runs the custom events for you!

  return (
    <section className="employees">
      {
        employees.map(employee => {  //on initialization this is a blank div (empty array).  Once we get the data, it will rerender and we see employees

          return (
            <div className="employee" key={`employee--${employee.id}`} id={`employee--${employee.id}`}>
              <div className="employee__name">
                Name: { employee.name }
              </div>
              <div className="employee__breed">
                Address: { employee.address }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}