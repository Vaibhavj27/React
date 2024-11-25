import React, { useState } from 'react'
import { useEffect } from 'react'
function Github() {
    const [data, setdata] = useState([])

    useEffect(() => {
          fetch("https://api.github.com/users/vaibhavj27")
          .then(response => response.json())
          .then( data => {
            setdata(data)
            
          })
    },[])
  return (
    <div className='flex'><div>
    <img src={data.avatar_url} alt="" /></div>
    <div className='bg-gray-500 text-white p-4 '>
        User Name:{data.login}
        <br />
        Github Followers:{data.followers}
        <br />
        Repositories:{data.public_repos}
        </div>
    </div>
  )
}

export default Github