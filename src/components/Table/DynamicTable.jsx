import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicTable = ({ columns, data, showEdit, showDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column}</TableCell>
            ))}
            {showEdit && <TableCell>Edit</TableCell>}
            {showDelete && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>{row[column]}</TableCell>
              ))}
              {showEdit && (
                <TableCell>
                  <IconButton aria-label="edit" onClick={() => console.log('Edit:', row)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              )}
              {showDelete && (
                <TableCell>
                  <IconButton aria-label="delete" onClick={() => console.log('Delete:', row)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;