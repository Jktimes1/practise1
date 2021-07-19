import { useState } from "react"
export default function Userform(){
    const [userform,setUserform]=useState({firstname:"Ram",age:'20'});
    const handleEvent= function (event){
        console.log(event);
        setUserform({...userform, firstname:event.target.value})
    }
    const handleEventage= function (event){
        console.log(event);
        setUserform({...userform, age:event.target.value})
    }
    const save = function(event){
        console.log(event);
        console.log(userform.firstname+userform.age);
    }
    return(
        <div><h3>Create User</h3>
        <input value={userform.firstname} onChange={handleEvent} />
        <input value={userform.age} onChange={handleEventage}></input>
        <button onClick={save}>Save</button>
        </div>
    )
}