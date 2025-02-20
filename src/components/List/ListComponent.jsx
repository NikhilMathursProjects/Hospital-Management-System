import React, { useState } from 'react';
import { Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const ListComponent = ({ data, columns, showStatusButtons }) => {
  const [tabValue, setTabValue] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(`Appointment ID: ${id}, New Status: ${newStatus}`);
    // You can update the status in the data array here if needed
  };

  const filteredData = data.filter(appointment => {
    if (tabValue === 0) return true; // All appointments
    if (tabValue === 1) return appointment.status === 'Rejected'; // Rejected appointments
    return true;
  });

  return (
    <Paper style={{ maxWidth: '600px', margin: 'auto', padding: '16px' }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="All Appointments" />
        <Tab label="Rejected Appointments" />
      </Tabs>
      <FormControl variant="outlined" style={{ margin: '16px', minWidth: '120px' }}>
        <InputLabel>Show</InputLabel>
        <Select value={itemsPerPage} onChange={handleItemsPerPageChange} label="Show">
          <MenuItem value={10}>10 items</MenuItem>
          <MenuItem value={20}>20 items</MenuItem>
          <MenuItem value={50}>50 items</MenuItem>
        </Select>
      </FormControl>
      <TableContainer style={{ maxHeight: '400px', overflow: 'auto' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index} style={{ fontWeight: 'bold' }}>{column}</TableCell>
              ))}
              {showStatusButtons && <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(0, itemsPerPage).map((appointment, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>{appointment[column]}</TableCell>
                ))}
                {showStatusButtons && (
                  <TableCell>
                    {appointment.status === 'Rejected' && (
                      <Button variant="contained" color="error" size="small" onClick={() => handleStatusChange(appointment.id, 'Rejected')}>
                        Rejected
                      </Button>
                    )}
                    {appointment.status === 'Pending' && (
                      <Button variant="contained" color="warning" size="small" onClick={() => handleStatusChange(appointment.id, 'Pending')}>
                        Pending
                      </Button>
                    )}
                    {appointment.status === 'Accepted' && (
                      <Button variant="contained" color="success" size="small" onClick={() => handleStatusChange(appointment.id, 'Accepted')}>
                        Accepted
                      </Button>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ListComponent;