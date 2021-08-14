import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider" //import context, not provider
import "./Customer.css"
import { render } from "@testing-library/react"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //Equivalent vanilla JavaScript...
  // const CustomerList = () => {
  //   getCustomers()
  //     .then(() => {
  //       const customers = useCustomers()
  //       render(customers)
  //     })
  // }
  //useEffect - reach out to the world for something
  // useEffect hook is how you listen for custom events 

  // This is the equivalent vanilla JavaScript...
  // document.addEventListener("customerStateChange", custonEvent => {
  //   const customers = userCustomers()
  //   console.log(customers)
  // })
  useEffect(() => {
    // console.log("CustomerList: useEffect - getCustomers") // 2 arguements, a function containing logic that should run
    getCustomers()
  }, []) // second that contains an array is when something happens this component should run again.  Listens for a change. if empty, only runs when initialized.

  useEffect(() => {
    // console.log("CustomerList: Customer State changes")
    // console.log(customers)
  }, [customers]) //when customers changes, React updates the component for you.  React does some PFM and runs the custom events for you!

  return (
    <section className="customers">
      {
        customers.map(customer => {  //on initialization this is a blank div (empty array).  Once we get the data, it will rerender and we see customers

          return (
            <div className="customer" key={`customer--${customer.id}`} id={`customer--${customer.id}`}>
              <div className="customer__name">
                Name: { customer.name }
              </div>
              <div className="customer__breed">
                Address: { customer.address }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}