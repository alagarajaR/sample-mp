import React,{useState , useEffect}  from "react";
import MaterialTable  from "material-table";


const USERS_REST_API_URL = 'http://localhost:8080/api/users';



export default function UserListTable() {


    //let STATUSES = ['Completed', 'Pending', 'Yet to Start'];

    const [data,setData] = useState([]);
    const columns = [
        {title:"ID" , field:"id"},
        {title:"Name" , field:"firstName"},
        {title:"Company Name" , field:"companyname"},
        {title:"Registration Date" , field:"registeredDate"},
        {title:"Phone" , field:"phone"},
        {title:"Email Address" , field:"email"},
        {title:"Status" , field:"status"},

    ]

    useEffect(()=>{
        fetch(USERS_REST_API_URL)
        .then(resp=>resp.json())
        .then(resp=>setData(resp))
    },[])

    return (
       <MaterialTable
        title="User Details"
        data = {data}
        columns = {columns}
        tableLayout="auto"
        options={{
            sorting: true,
            search: true,
            filtering: true,
            exportButton: true,
            draggable: true,
          }}
       />

       
    );
}