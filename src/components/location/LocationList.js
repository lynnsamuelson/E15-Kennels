import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider" //import context, not provider
import "./Location.css"
import { render } from "@testing-library/react"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //Equivalent vanilla JavaScript...
  // const LocationList = () => {
  //   getLocations()
  //     .then(() => {
  //       const locations = useLocations()
  //       render(locations)
  //     })
  // }
  //useEffect - reach out to the world for something
  // useEffect hook is how you listen for custom events 

  // This is the equivalent vanilla JavaScript...
  // document.addEventListener("locationStateChange", custonEvent => {
  //   const locations = userLocations()
  //   console.log(locations)
  // })
  useEffect(() => {
    // console.log("LocationList: useEffect - getLocations") // 2 arguements, a function containing logic that should run
    getLocations()
  }, []) // second that contains an array is when something happens this component should run again.  Listens for a change. if empty, only runs when initialized.

  useEffect(() => {
    // console.log("LocationList: Location State changes")
    // console.log(locations)
  }, [locations]) //when locations changes, React updates the component for you.  React does some PFM and runs the custom events for you!

  return (
    <section className="locations">
      {
        locations.map(location => {  //on initialization this is a blank div (empty array).  Once we get the data, it will rerender and we see locations

          return (
            <div className="location" key={`location--${location.id}`} id={`location--${location.id}`}>
              <div className="location__name">
                Name: { location.name }
              </div>
              <div className="location__breed">
              Address: { location.address }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}