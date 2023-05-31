import React,{useEffect,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ApplyJob } from '../api/AppyJob';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('Editor ',"California", "Approved"),
  createData('Editor',"California", "Approved"),
];





const Prof_Application = () => {
  const [app,setApp] = useState([]);
  const [booll,setBooll] = useState([]);
  useEffect(()=>{
    async function getApplication()
    {
      try{
        const user = localStorage.getItem('username');
        const app_list = await ApplyJob(1,user,1,2);
        console.log(app_list);
        setApp(app_list[0])
        setBooll(app_list[1])
      }
      catch(error)
      {
        console.log(error);
      }
    }
    getApplication();
  },[])
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontSize: '20px', fontWeight:"bold", textAlign:"center"}}>Job Title</TableCell>
            <TableCell sx={{ fontSize: '20px', fontWeight:"bold", textAlign:"center"}} align="right">Location</TableCell>
            <TableCell sx={{ fontSize: '20px', fontWeight:"bold", textAlign:"center"}} align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {app.map((row,index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: '16px', fontWeight:"semibold", textAlign:"center"}}>
                {row.title}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight:"semibold", textAlign:"center"}}>{row.location}</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight:"semibold", textAlign:"center",color:"green"}}>{booll[index].status==false?"Pending":"Approved"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Prof_Application
