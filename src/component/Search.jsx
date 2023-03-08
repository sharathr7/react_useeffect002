import React,{ useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import List from './List';
import Loading from './Loading/Loading';

const Search = () => {
    
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(false)

    const fetchData = (search) => {
        if(search === ""){
            search = "iron"
        }
     return fetch(`https://www.omdbapi.com/?i=tt0944947&s=${search}&apikey=fb790d1c`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.Response !== "True"){
                setData(data)
                setLoading(false)
                setTimeout(() => {
                    setLoading(true)
                }, 1000)
            }else{
                setData(data.Search)
                setLoading(false)
                setTimeout(() => {
                    setLoading(true)
                }, 1000)
            }
          })
    }
   
    const getButton = () => {
        fetchData(input)
    }
       
      useEffect(() => {
        setTimeout( () => {
            fetchData("")
        },2000)
      },[])
   
      

    const getInput = (e) => {
        setInput(e.target.value)
    }
    
    const enter = (e) => {
        if(e.code === "Enter"){
            getButton()
        }
    }
    

  return (
    <>
        <div className="main_container">
        <header>
            <h1> Movie Finder </h1>
            <p> Find Your Favourite Movie</p>
        </header>
        <div className="input_box">
            <input type="text" id="input" value={input} onChange={getInput} onKeyPress={enter}/>
            <Button variant="contained" color="success" onClick={getButton}>Search</Button>
        </div>
        <div className="content_box">
            <div className="content" id="content">
            {loading ? <List data={data} loading={loading}/>: <Loading />}
            </div>
        </div>
    </div>
    </>
  )
}

export default Search