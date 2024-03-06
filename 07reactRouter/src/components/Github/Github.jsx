import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {

    const data = useLoaderData()


    //practising section here which could still be use but trying to get a more better practice 


// const [data, setData] = React.useState([])
// useEffect(() =>{
//     fetch('https://api.github.com/users/clovis739')
//     .then((response) => response.json())
//     .then(data => {
//         console.log(data) 
//         setData(data)
//     })
// }, []) 



  return (
    <div className='text-center m-4 bg-pink-500 text-white p-4 text-3xl'>Github followers:  {data.followers}
    <p className="text-center m-4 text-white p-4 text-3xl">Bio: {data.bio} </p>
    <p className="text-center m-4 text-white p-4 text-3xl">Following: {data.following} </p>
    <p className="text-center m-4 text-white p-4 text-3xl">My name: {data.name} </p>
    <img src={data.avatar_url} width={300} alt="profile pic" />
    </div>
  )
}

export default Github

export const githubInFoLoader = async ()=>{
const response = await fetch('https://api.github.com/users/clovis739')
return response.json()
}

// understanding data flow we are not returning this response here in this file , we go to the main jsx file and do the data flow return 