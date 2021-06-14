import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { DropContext } from "./DropProvider"


export const Drop = ({ drop }) => {

  const {deleteDrop, getProfileById, profile, setProfile} = useContext(DropContext)
  const history = useHistory()
  const isAdmin = JSON.parse(localStorage.getItem("admin"))


  
  const { updateDrop, getDrops } = useContext(DropContext)
  
  const current_user_id = parseInt(localStorage.getItem("goodwood_user_id"))


  
  const [currentDrop, setCurrentDrop] = useState({
      id: drop.id,
      wood_type: drop.wood_type,
      cut_date: drop.cut_date,
      arborist: drop.arborist.id,
      availability: false,
      woodworker_id: current_user_id
  })



  return (
    <>
    <section className="drop" id={drop.id}>
      <h1 className="wood_type">{drop.wood_type}</h1>
      <h2 className="cut_date">{new Date(drop.cut_date).toLocaleString()}</h2>
      <div className="contact_info">
        <h2>Contact Info</h2>
        <p className="full_name">{drop.arborist.user.first_name} {drop.arborist.user.last_name}</p>
        <p className="Phone_number">{drop.arborist.phone_number}</p>
      </div>
      <div className="availability">{drop.availability === true ? "Available" : "Claimed"}</div>
    {isAdmin === false ? (<button onClick={() => updateDrop(currentDrop)}>Claim</button>) : (
      <>
        <button className="dropButton" onClick={() => {history.push(`/edit/${drop.id}`)}}>Edit</button>
        <button onClick={() => deleteDrop(drop.id)}>Delete</button>
    </>
      )
    }
    </section>
    </>
  )
}
