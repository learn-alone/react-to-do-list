import './App.css'
import { useState } from 'react';
function App() {
const [toDosArray, setToDosArray] = useState([]);
const [toDo, setToDo] = useState('');

  return (
    <>
    {/* -------------------     To-do List    ---------------- */}
    <div className='headbar'><span > TO-DO LIST APP </span></div>
    <div className="app">
     
    <div className="mainHeading todo">
      <h1>To-Do List</h1>
   
    </div>
    <div className="subHeading">
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{ if(toDo !== ""){
                          setToDosArray([...toDosArray,{id: Date.now(), text: toDo, dropped:false, ActvCheck: false}]);
                          setToDo("") };
                        return null;
                      }} className="fas fa-plus"></i>
    </div> <hr/>
    {toDosArray.map((mapobj)=>{
      if(mapobj.ActvCheck === false && mapobj.dropped === false){
      return(
        <div className="todos">
          <div className="todo">
          <div className="left">
            <input onChange={ (e)=>{ 
                                      console.log(e.target.checked);
                                      console.log(mapobj);
                                      setToDosArray( (toDosArray.filter( obj2 => { 
                                                                                  if(obj2.id === mapobj.id) 
                                                                                     obj2.ActvCheck = e.target.checked //using .checked an inbuilt function returns the value or set the state of radio button
                                                                                  return obj2
                                                                               }  )) )
                            }} type="checkbox" name="" id=""/>
            <p>{mapobj.text}</p>
          </div>
          <div className="right">
          <i className="fas fa-times" onClick={ ()=>{
                                      setToDosArray( (toDosArray.filter( obj2 => { 
                                                                                  if(obj2.id === mapobj.id) 
                                                                                     obj2.dropped = true
                                                                                  return obj2
                                                                               }  )) )
                            }}/>
        </div>
      </div>
    </div>
      )
    }
    else return null
    })}
</div>

{/* -------------------    Active List / Done   ---------------- */}
<div className="app done">
    <div className="mainHeading">
      <h1>Done</h1>
    </div>
  {toDosArray.map((mapobj2)=>{
    if(mapobj2.ActvCheck === true && mapobj2.dropped === false){
    
    return (<div className='todos'>
              <div className='todo'>
                <div className='left'>
                <input checked onChange={ (e)=>{ 
                                      console.log(e.target.checked);
                                      console.log(mapobj2);
                                      setToDosArray( (toDosArray.filter( obj2 => { 
                                                                                  if(obj2.id === mapobj2.id) 
                                                                                     obj2.ActvCheck = e.target.checked //using .checked an inbuilt function returns the value or set the state of radio button
                                                                                  return obj2
                                                                               }  )) )
                            }} type="checkbox" name="" id=""/>
                  <p>{mapobj2.text}</p>
                </div>
                <div className="right">
          <i className="fas fa-times" onClick={ ()=>{
                                      setToDosArray( (toDosArray.filter( obj2 => { 
                                                                                  if(obj2.id === mapobj2.id) 
                                                                                     obj2.dropped = true
                                                                                  return obj2
                                                                               }  )) )
                            }}/>
        </div>
              </div>
            </div>)
  }
  else return null
  })}
</div>

{/* ---------------------   Dropped     ----------------------- */}
<div className="app trash">
     
    <div className="mainHeading">
      <h1>Trash</h1>
    </div>
  {toDosArray.map((mapobj2)=>{
    if(mapobj2.dropped === true){
    
    return (<div className='todos'>
              <div className='todo'>
                <div className='left'>
                <input disabled defaultChecked={mapobj2.ActvCheck} type="checkbox" name="" id=""/>
                  <p>{mapobj2.text}</p>
                </div>
              </div>
            </div>)
  }
  else return null
  })}

</div>
</>

  );
}


export default App;
