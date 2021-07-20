import { useEffect, useState } from "react";
import axios from "axios";
export default function Userlist(){
    const[users,setUsers]=useState([]);
    useEffect(function(){
        if(users.length!==0){
            return;
        }
        console.log('Caleeddd');
        const promise = axios.get('http://localhost:4200/users')
        promise.then(function(response){
            setUsers(response.data)
            console.log(response.data);

        })
    })
    return(
        <div>
            <table className='table table-bordered table-hover table-responsive'>
                <thead>
                    <tr><th>Firstname</th>
                        <th>Age</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(function(user,index){
                    return <tr key={user.id}>
                    <td>{user.firstname}</td>
                    <td>{user.age}</td>
                    <td>{user.date}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}