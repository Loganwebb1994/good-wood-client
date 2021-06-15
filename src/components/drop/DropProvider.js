import React, {useState, createContext} from "react"

export const DropContext = createContext()

export const DropProvider = (props) => {
  const [drops, setDrops] = useState([])
  const [profiles, setProfiles] = useState([])
  const [profile, setProfile] = useState({})

  const getDrops = () => {
    return fetch("https://good-wood-server.herokuapp.com/drops",{
      headers:{
        "Authorization": `Token ${localStorage.getItem("goodwood_user")}`
    }
    })
      .then(res => res.json())
      .then(setDrops)
  }

  const getDropById = (id) => {
    return fetch(`https://good-wood-server.herokuapp.com/drops/${id}`,{
      headers:{
        "Authorization": `Token ${localStorage.getItem("goodwood_user")}`
    }
    })
    .then(res => res.json())
  }
  
  const addDrop = (drop) => {
    return fetch("https://good-wood-server.herokuapp.com/drops", {
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
    return fetch(`https://good-wood-server.herokuapp.com/drops/${drop.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("goodwood_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(drop)
      })
      .then(getDrops)
    }
  
  const deleteDrop = (dropId) => {
    return fetch(`https://good-wood-server.herokuapp.com/drops/${dropId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("goodwood_user")}`,
            "Content-Type": "application/json"
        }
    })
        .then(getDrops)
}

  const getProfiles = () => {
    return fetch("https://good-wood-server.herokuapp.com/profiles",{
      headers:{
        "Authorization": `Token ${localStorage.getItem("goodwood_user")}`
    }
    })
      .then(res => res.json())
      .then(setProfiles)
  }

  const getProfileById = (id) => {
    return fetch(`https://good-wood-server.herokuapp.com/profiles/${id}`,{
      headers:{
        "Authorization": `Token ${localStorage.getItem("goodwood_user")}`
    }
    })
    .then(res => res.json())
    .then(setProfile)
  }
  

  return(
    <DropContext.Provider value ={{
      getDrops, drops, getDropById, addDrop, updateDrop, deleteDrop, getProfiles, profiles, getProfileById, profile, setProfile
    }}>
      {props.children}
    </DropContext.Provider>
    )
}