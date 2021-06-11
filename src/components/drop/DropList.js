import React, { useContext, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { DropContext } from "./DropProvider"
import { Drop } from "./Drop"


export const DropList = () => {
  const history = useHistory()

  const { getProfiles, getDrops, profiles, drops} = useContext(DropContext)
  


  useEffect(() => {
    getDrops()
    .then(getProfiles)


  }, [])


  
  
  return (
  <>
  
    
    <div className="DropList">
      {
        drops.map(drop => {
          const currentProfile = profiles.find(profile => profile.id === drop.arborist_id)
          console.log(currentProfile)
          return <Drop key={drop.id} drop={drop} profile={currentProfile} />
        })
      }
    </div>
  </>
  )
}