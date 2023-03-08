import React from 'react'


const List = ({data, loading}) => {
    console.log(loading)
  return (
    <>
   {(data.Response === "False") ? <h1> {data.Error} </h1> : 
   data.map((ele, indx) => {
    return <div className="box" key={indx} title={`Released in ${ele.Year}`}>
        <a href={ele.Poster} target="_blank" rel="noreferrer"> <img src={ele.Poster} /></a>
         <p> {ele.Title} </p>
    </div>
   })
   }
    </>
  )
}

export default List