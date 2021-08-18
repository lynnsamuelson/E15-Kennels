import { useHistory, Link } from 'react-router-dom'
import React, { useContext, useEffect, useState  } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalDetail } from "./AnimalDetail"
import "./Animal.css"

export const AnimalList = () => {
  // Invoke the useHistory() hook function
  
  const history = useHistory()
  const [ filteredAnimals, setFiltered ] = useState([])
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])



  return (
    <>
    <h2>Animals</h2>
    <button onClick={
      () => history.push("/animals/create")
    }>
          Add Animal
    </button>
     <section className="animals">
        {
          filteredAnimals.map(animal => {
            return <AnimalDetail key={animal.id} animal={animal} />
          })
        }
      </section>
    </>
  )
}
