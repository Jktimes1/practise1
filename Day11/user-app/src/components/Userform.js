import { useState } from "react"
import axios from "axios"
export default function Userform(){
    const [userform,setUserform]=useState({
        firstname:"Ram",
        age:'20',
        date:'20-07-2021'
    });
    const handleEvent= function (event){
        //console.log(event);
        setUserform({...userform, [event.target.name]:event.target.value});
    }
    const save = function(event){
        //console.log(event);
        console.log(userform.firstname+userform.age);
        const promise=axios.post("http://localhost:4200/users",userform);
        promise.then(function(response){
            console.log(response);
        })
    }
    return(
        <div className='form-group'><h3>Create User</h3>
        <label>Name</label><input name='firstname' className='form-control'value={userform.firstname} onChange={handleEvent} />
        <label >Age</label><input name='age' value={userform.age} className='form-control' onChange={handleEvent} type="Number"></input>
        <label >Date </label><input name='date' value={userform.date} className='form-control' onChange={handleEvent} type="date" />
        <button onClick={save}>Save</button>
        </div>
    )
}