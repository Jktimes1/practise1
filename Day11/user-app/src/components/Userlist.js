import { useState } from "react";
export default function Userlist(){
    const[users,setUsers]=useState([]);
    return(
        <div>
            <table className='table table-bordered table-hover table-responsive'>
                <thead>
                    <tr><td>Firstname</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Navni</td><td>22</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}