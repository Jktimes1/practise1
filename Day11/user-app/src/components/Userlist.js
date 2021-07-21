import { useEffect, useState } from "react";
import axios from "axios";
import Counter from "./Counter";
export default function Userlist(){
    const[users,setUsers]=useState([]);
    const [flag1,setFlags]=useState(true);
    useEffect(function(){
        if(users.length!==0){
            return;
        }
       // console.log('Caleeddd');
        const promise = axios.get('http://localhost:4200/users')
        promise.then(function(response){
            setUsers(response.data)
            console.log(response.data);
        },[])
    })
    const deleteUser= function(){
       // console.log(this);
       // const promise=console.log(arguments[0]);
       const promise= axios.delete("http://localhost:4200/users/"+this);
        promise.then(()=>{
            //console.log(arguments[0]);
            users.splice(arguments[0],1);
            const users1=[...users];
            setUsers(users1);

        })
    }
    const sortByAge=()=>{
        setFlags(!flag1)//reverse current flag value
        users.sort((user1,user2)=>flag1?user1.age-user2.age:user2.age-user1.age);
        setUsers([...users]);
    }
    return(
         <div>
        {/* <Counter count={users.length}></Counter> */}
            <table className='table table-bordered table-hover table-responsive'>
                <thead>
                    <tr><th>Firstname</th>
                        <th onClick={sortByAge.bind()}>Age</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(function(user,index){
                    return <tr key={user.id}>
                    <td>{user.firstname}</td>
                    <td>{user.age}</td>
                    <td>{user.date}</td>
                    <td><button className='btn btn-danger' onClick={deleteUser.bind(user.id,index)}>Delete</button>
                    </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}