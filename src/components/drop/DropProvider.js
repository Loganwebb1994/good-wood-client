import React, {useState, createContext} from "react"

export const DropContext = createContext()

export const StandProvider = (props) => {
  const [drops, setDrops] = useState([])

  const getDrops = () => {
    return fetch("http://localhost:8000/drops",{
      headers:{
        "Authorization": `Token ${localStorage.getItem("goodwood_user")}`
    }
    })
      .then(res => res.json())
      .then(setUsers)
  }

  const getDropById = (id) => {
    return fetch(`http://localhost:8000/drops/${id}`,{
      headers:{
        "Authorization": `Token ${localStorage.getItem("goodwood_user")}`
    }
    })
    .then(res => res.json())
  }
  
  const addDrop = (drop) => {
    return fetch("http://localhost:8000/drops", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("goodwood_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(drop)
      })
      .then(res => res.json())
    }

  const updateDrop = (drop) => {
    return fetch(`http://localhost:8000/drops/${drop.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("goodwood_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(drop)
      })
      .then(res => res.json())
    }
  
  const deleteDrop = (dropId) => {
    return fetch(`http://localhost:8000/drops/${postId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("goodwood_user")}`,
            "Content-Type": "application/json"
        }
    })
        .then(getDrops)
}
  

  return(
    <DropContext.Provider value ={{
      getDrops, drops, getDropById, addDrop, updateDrop, deleteDrop
    }}>
      {props.children}
    </DropContext.Provider>
    )
}