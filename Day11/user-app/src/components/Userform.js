import { useState,useEffect } from "react"
import axios from "axios"
import Message from "./Message";
export default function Userform(){
    const[skills,setSkills]=useState([]);
    const [userform,setUserform]=useState({
        firstname:"Ram",
        age:'20',
        date:'2021-07-20',
        
    });
    useEffect(function(){
        // if(skills.length!==0){
        //     return;
        // }
        const promise=axios.get('http://localhost:4200/skills');
        promise.then(function(response){
            setSkills(response.data);
            console.log(response.data);
        },[])
    });
    const [isError,setError]=useState({msg:'default message'});
    const handleEvent= function (event){
        //console.log(event);
        setUserform({...userform, [event.target.name]:event.target.value});
    }
    const save = function(event){
        //console.log(event);
       // console.log(userform.firstname+userform.age);
        const promise=axios.post("http://localhost:4200/users",userform);
        promise.then(function(response){
           // console.log(response);
            setError({...isError,msg:"Success"})
            console.log(response);
        });
        // promise.catch(function(error){
        //     console.log(error);
        //     setError(String(error.Message));
        // });
    }
    const handleSection=function(event){
  //      console.log("heloo");
        setUserform({...userform, [event.target.name]:event.target.value});
    }
    return(//JSX
        <div className='form-group'>
            <Message msg={isError.msg}></Message>
            <h3>Create User</h3>
        <label>Name</label><input name='firstname' className='form-control'value={userform.firstname} onChange={handleEvent} />
        <label >Age</label><input name='age' value={userform.age} className='form-control' onChange={handleEvent} type="Number"></input>
        <label >Date </label><input name='date' value={userform.date} className='form-control' onChange={handleEvent} type="date" />
        {/* <select name='skill' onChange={handleSection}>
            <option defaultValue>Select a skill</option>
            <option value='Html'>Html</option>
            <option value='css'>css</option>
            <option value='JS'>JS</option>
        </select>   THESE ARE HARDCODED VALUES*/} 
        <select name='skill' onChange={handleEvent}>
        {skills.map(function(skill,index){
                    return (
                    <option key={index} value={skill}>{skill}</option>)})};
        </select>
        <button className='btn-dark'onClick={save}>Save</button>
        <Message msg={userform.msg}></Message>
        </div>
    )
}