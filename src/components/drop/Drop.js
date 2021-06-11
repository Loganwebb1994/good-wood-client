import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { DropContext } from "./DropProvider"


export const Drop = ({ drop, profile }) => {

  const { getDrops, drops } = useContext(DropContext)

  useEffect(() => {
    getDrops()

  }, [])
  



  return (
    <section className="drop" id={drop.id}>
      <h1 className="wood_type">{drop.wood_type}</h1>
      <h2 className="cut_date">{drop.cut_date}</h2>
      <div className="contact_info">
        <h2>Contact Info</h2>
        <p className="full_name">{drop.arborist.user.first_name ||" "|| drop.arborist.user.last_name}</p>
        <p className="Phone_number">{drop.arborist.phone_number}</p>
      </div>
    </section>
  )
}