import './App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {

  const [data,setData]=useState({
    title:"",
    description:"",
    date:""
  })

  const [cardData,setCardData] = useState({
    cardTitle:"",
    cardDescription:"",
    cardDate:""
  })

  const {
    register,
    handleSubmit
  } = useForm(); 

  const onSubmit=(()=>{
    setCardData({...cardData,cardTitle:data.title})
    setCardData({...cardData,cardDescription:data.description})
    setCardData({...cardData,cardDate:data.date})
  })

  return (
    <div className="App">
      <header className="">
        <h1>Note making app</h1>
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
        <label>Descripton</label>
        <input
        {...register("description")}
         name="description" onChange={(e) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })}} type="text" placeholder='Add title'></input>
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
        {/* <div>
          {cardData.map((e)=>{
            return(
              <div className='cardColor' key={e.title}>
                <p>{cardData.title}</p>
              </div>
            )
          })}
        </div> */}
       </div>
      </header>
    </div>
  );
}

export default App;
