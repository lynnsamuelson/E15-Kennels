import React from "react"
import {Animal} from "./animal/Animal"
import {Customer} from "./customer/Customer"
import {Employee} from "./employee/Employee"
import {Location} from "./location/Location.js"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
        </article>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <article className="locations">
            <Location />
            <Location />
        </article>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)
