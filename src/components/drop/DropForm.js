import React, { useContext, useState, useEffect } from "react"
import { DropContext } from "./DropProvider.js"
import { useHistory, useParams } from 'react-router-dom'


export const DropForm = () => {
  const history = useHistory()

  const current_user_id = parseInt(localStorage.getItem("goodwood_user_id"))
  
  const { updateDrop, getDropById, addDrop } = useContext(DropContext)
  
  const {dropId} = useParams()
  
  const [currentDrop, setCurrentDrop] = useState({
    wood_type: "",
      cut_date: "",
      arborist: current_user_id,
      availability: true,
      woodworker_id: ""
  })
  
const handleSaveDrop = () =>{
  if (dropId) {
      updateDrop(currentDrop)
        .then(() => history.push("/"))
  } else {
    addDrop(currentDrop)
      .then(() => history.push("/"))
    }
}


  useEffect(() => {
    if (dropId) {
          getDropById(dropId)
          .then(drop => {
                  setCurrentDrop({
                    id: dropId,
                    wood_type: drop.wood_type,
                    cut_date: drop.cut_date,
                    arborist: drop.arborist.id,
                    availability:true,
                    woodworker_id:""
                  })
              })
            }
  }, [dropId])
  
  
  const handleInputChange = (e) => {
      const tempDrop = {...currentDrop}
      tempDrop[e.target.name] = e.target.value
      setCurrentDrop(tempDrop)
  }
  
    return (
      <form className="dropForm">
            <h2 className="DropForm__title">Drop Form</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="wood_type">Wood Type: </label>
                    <input name="wood_type" type="text" onChange={ handleInputChange} value={currentDrop.wood_type}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cut_date">Cut Date: </label>
                    <input type="date" name="cut_date" required autoFocus className="form-control"
                        value={currentDrop.cut_date}
                        onChange={ handleInputChange}
                        />
                </div>
            </fieldset>
          {console.log(currentDrop, "currentDrop")}


            <button type="submit"
            onClick={evt => {
                evt.preventDefault()
                handleSaveDrop()
                }
            }
            className="btn btn-primary">Save</button>
        </form>
    )
}