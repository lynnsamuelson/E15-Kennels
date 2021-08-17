import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"


export const ApplicationViews = () => {
    return (
        <>
            {/* This is the NSS Kennels Link. Render the location list when http://localhost:3000/ */}
            <LocationProvider>
              <Route exact path="/">
                  <LocationList />
              </Route>
             
            </LocationProvider>
             {/* This is the Locaions Link. Render the animal list when http://localhost:3000/locations */}
            <LocationProvider>
              <Route path="/locations">
                  <LocationList />
              </Route>
            </LocationProvider>
             {/* This is the Animals Link. Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
            <LocationProvider>
            <CustomerProvider>
              <Route exact path="/animals">
                  <AnimalList />
              </Route>
              <Route path="/animals/create">
                  <AnimalForm />
              </Route>
              <Route path="/animals/detail/:animalId(\d+)"> 
              {/*(\d+) is regex to match only a digit.  The `:animalId` must be an integer.*/}
                  <AnimalDetail />
              </Route>
              <Route path="/animals/edit/:animalId(\d+)">
                  <AnimalForm />
              </Route>
            </CustomerProvider>
            </LocationProvider>
            </AnimalProvider>
            <CustomerProvider>
              <Route path="/customers">
                <CustomerList />
              </Route>
            </CustomerProvider>
           
            <EmployeeProvider>
              <Route path="/employees">
                <EmployeeList />
              </Route>
          </EmployeeProvider>
        </>
    )
}


