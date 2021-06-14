import React, { useContext, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { DropContext } from "./DropProvider"
import { Drop } from "./Drop"


export const DropList = () => {
  const history = useHistory()
  const isAdmin = JSON.parse(localStorage.getItem("admin"))

  const { getProfiles, getDrops, drops} = useContext(DropContext)
  
  const handleLogout = () =>{
    localStorage.clear()
    history.push("/login")
  }
  


  useEffect(() => {
    getDrops()
    .then(getProfiles)


  }, [])


  
  
  return (
  <>
    <button onClick={handleLogout}>Logout</button>
    {isAdmin === true ? <button className="addButton" onClick={() => history.push("/create")}>Add Drop</button> : "" }
    
    <div className="DropList">
    
      {
        drops.map(drop => {


          return <Drop key={drop.id} drop={drop} />
        })
      }
    </div>
  </>
  )
}