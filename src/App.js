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
  })

  const deleteItem = ((index)=>{
    let localItems = JSON.parse(localStorage.getItem('noteData'))
    localItems.splice(index, 1)
    localStorage.setItem('noteData',JSON.stringify(localItems))
  })

  return (
    <div className="App">
      <header className="bg-[#1b1b1b]">
        <h1 className='text-[white]'>Note making app</h1>
       <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='bg-[#fc8478]'>
        <label className='text-20 font-semibold mr-3'>Title</label>
        <input required
        className='border '
        {...register("title")}
         name="title" type="text" placeholder='Add title' onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })}}></input>
                  <br></br>
        <label className='text-20 font-semibold mr-3'>Descripton</label>
        <input required
         className='border '
        {...register("description")}
         name="description" onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })}} type="text" placeholder='Add title'></input>
                  <br></br>
        <label className='text-20 font-semibold mr-3'>Date</label>
        <input required
         className='border '
        {...register("date")}
        name="date" type="text" onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })}} placeholder='Add title'></input>
        <br></br>
        <button className='bg-[pink]' type='submit'>Submit</button>
        </div>
        </form>
        <div className=' flex grid grid-cols-4 bg-[#232f3e] justify-center items-center mx-auto'>
        {mainData.map((data,index) => {
          return (
            <div className='w-[200px] h-[200px] mx-auto bg-[#1b1b1b] mb-3'>
              <p className='text-[white]'>Title: {data.title}</p>
              <p className='text-[white]'>Description: {data.description}</p>
              <p className='text-[white]'>Date: {data.date}</p>
              <button onClick={()=>deleteItem(index)} className='border bg-[pink]'>Delete</button>
              </div>
            
          )})}
           </div>
       </div>
      </header>
    </div>
  );
}

export default App;
