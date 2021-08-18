import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = (props) => {
    const { animals, releaseAnimal  } = useContext(AnimalContext)
    const [ animal, setAnimal ] = useState({ location: {}, customer: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { animalId } = useParams();
    const history = useHistory()
    useEffect(() => {
        const thisAnimal = animals.find(a => a.id === parseInt(animalId)) || { location: {}, customer: {} }
        setAnimal(thisAnimal)
    }, [animalId])

    const handleRelease = () => {
      releaseAnimal(props.animal.id)
        .then(() => {
          history.push("/animals")
        })
    }

    return (
    <>
      <button onClick={handleRelease}>
          Release HAPPY Animal
      </button>
      <button onClick={() => {
        history.push(`/animals/edit/${props.animal.id}`)
      }}>Edit</button>
      <section className="animal">
        <h3 className="animal__name">{ props.animal.name }</h3>
        <div className="animal__breed">{ props.animal.breed }</div>
        <div className="animal__location">Location: { props.animal.location.name }</div>
        <div className="animal__owner">Customer: { props.animal.customer.name }</div>
      </section>
    </>
  )
}
