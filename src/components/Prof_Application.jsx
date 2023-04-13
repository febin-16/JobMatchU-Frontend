import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('Editor', "Zach King","California", "Approved"),
  createData('Editor', "Zach King","California", "Approved"),
];





const Prof_Application = () => {
  return (
    <div>
        <br />
        <br />
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontSize: '20px', fontWeight:"bold", textAlign:"center"}}>Job Title</TableCell>
            <TableCell sx={{ fontSize: '20px', fontWeight:"bold", textAlign:"center"}}  align="right" >Company</TableCell>
            <TableCell sx={{ fontSize: '20px', fontWeight:"bold", textAlign:"center"}} align="right">Location</TableCell>
            <TableCell sx={{ fontSize: '20px', fontWeight:"bold", textAlign:"center"}} align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: '16px', fontWeight:"semibold", textAlign:"center"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight:"semibold", textAlign:"center"}}>{row.calories}</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight:"semibold", textAlign:"center"}}>{row.fat}</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight:"semibold", textAlign:"center",color:"green"}}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Prof_Application
