import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function List({ employees, handleEdit, handleDelete }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="center" colSpan={2}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <TableRow key={employee.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{formatter.format(employee.salary)}</TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                No Employees
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
