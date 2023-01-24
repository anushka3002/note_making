import './App.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {

  const [data,setData]=useState({
    title:"",
    description:"",
    date:""
  })

  const [mainData,setMainData]= useState([])

  var cardData;
  var userData;

  const {
    register,
    handleSubmit
  } = useForm(); 

  const onSubmit=(()=>{
    cardData=JSON.parse(localStorage.getItem('noteData') || "[]")
    if(cardData==null){
      userData=[]
    }
    else{
      userData=cardData;
    }
    userData.push(data)
    localStorage.setItem('noteData',JSON.stringify(userData))
    setMainData(userData)
    console.log(userData)
    console.log("submitted data")
    userData.map((e)=>{
      console.log(e.title)
    })
    // cardData=JSON.parse(localStorage.getItem('noteData') || "[]")
    // console.log(cardData)
  })

  const deleteItem = ((index)=>{
    let localItems = JSON.parse(localStorage.getItem('noteData'))
    mainData.splice(index, 1)
    localStorage.setItem('noteData',JSON.stringify(mainData))
  })


  // useEffect(()=>{
  //   userData.map((e)=>{
  //     console.log(e.title)
  //   })
  // },[])

  return (
    <div className="App">
      <header className="">
        <h1>Note making app</h1>
        {console.log("userdata",userData)}
        {console.log("carddata",cardData)}
        {console.log("anushka")}
       <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input
        {...register("title")}
         name="title" type="text" placeholder='Add title' onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })}}></input>
                  <br></br>
        <label>Descripton</label>
        <input
        {...register("description")}
         name="description" onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })}} type="text" placeholder='Add title'></input>
                  <br></br>
        <label>Date</label>
        <input
        {...register("date")}
        name="date" type="text" onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })}} placeholder='Add title'></input>
        <br></br>
        <button className='bg-[pink]' type='submit'>Submit</button>
        </form>
        <div className='border flex grid grid-cols-4 '>
        {mainData.map((data,index) => {
          return (
            <div className='border w-[200px] h-[200px]'>
              <p>Title: {data.title}</p>
              <p>Description: {data.description}</p>
              <p>Date: {data.date}</p>
              <button className='border bg-[pink]'>Delete</button>
              </div>
            
          )})}
           </div>
       </div>
      </header>
    </div>
  );
}

export default App;
