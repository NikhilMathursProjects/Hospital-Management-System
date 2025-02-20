import React from 'react';
import DynamicTable from '../components/Table/DynamicTable';
import ListComponent from '../components/List/ListComponent';
// Table test page
const TestPage = () => {
  const columns = ['ID', 'Patient_Name', 'Age', 'email','Doctor_Name'];
  const data = [
    { ID: 1, Patient_Name: 'John Doe', Age: 28, email: 'john@example.com',Doctor_Name: 'MEOW' },
    { ID: 2, Patient_Name: 'Jane Smith', Age: 34, email: 'jane@example.com',Doctor_Name: 'MEOW' },
    { ID: 3, Patient_Name: 'Sam Green', Age: 45, email: 'sam@example.com',Doctor_Name: 'MEOW' },
  ];

  return (
    <div>
      <h1>Table Component</h1>
      <DynamicTable columns={columns} data={data} showEdit={true} showDelete={true} />
    </div>
  );
};
// const TestPage= ()=> {
//     const appointmentsData = [
//         { id: 1, firstName: 'Chance', lastName: 'Vaccaro', date: '10.01.2003 12:54', status: 'Pending' },
//         { id: 2, firstName: 'Desirae', lastName: 'Kenter', date: '04.12.2003 03:21', status: 'Rejected' },
//         { id: 3, firstName: 'Paityn', lastName: 'Lubin', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 4, firstName: 'Phillip', lastName: 'Bator', date: '04.12.2003 03:21', status: 'Pending' },
//         { id: 5, firstName: 'Emerson', lastName: 'Stanton', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 6, firstName: 'Alfredo', lastName: 'Rhiel Madsen', date: '03.08.2019 12:54', status: 'Rejected' },
//         { id: 3, firstName: 'Paityn', lastName: 'Lubin', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 4, firstName: 'Phillip', lastName: 'Bator', date: '04.12.2003 03:21', status: 'Pending' },
//         { id: 5, firstName: 'Emerson', lastName: 'Stanton', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 6, firstName: 'Alfredo', lastName: 'Rhiel Madsen', date: '03.08.2019 12:54', status: 'Rejected' },
//       ];
    
//       const columns = ['firstName', 'lastName', 'date'];
//       const showStatusButtons = true;
    
//       return (
//         <div>
//           <h1>Appointments</h1>
//           <ListComponent data={appointmentsData} columns={columns} showStatusButtons={showStatusButtons} />
//         </div>
//       );
// }
export default TestPage;



// import React, { useState } from "react";
// import { Box } from "@mui/material";
// import { Rnd } from "react-rnd";
// // import ListComponent from "./ListComponent"; // Import your ListComponent
// // import DynamicTable from "./DynamicTable"; // Import your DynamicTable
// import ListComponent from "../components/List/ListComponent";
// import DynamicTable from "../components/Table/DynamicTable";

// const ResizableDraggableComponent = ({ id, children, onResize, onDrag, defaultSize }) => {

//   return (
//     <Rnd
//       default={{ width: defaultSize.width, height: defaultSize.height, x: defaultSize.x, y: defaultSize.y }}
//       minWidth={200}
//       minHeight={150}
//       bounds="parent"
//       onResizeStop={(e, direction, ref, delta, position) => {
//         onResize(id, { width: ref.offsetWidth, height: ref.offsetHeight, ...position });
//       }}
//       onDragStop={(e, d) => {
//         onDrag(id, { x: d.x, y: d.y });
//       }}
//       style={{
//         border: "1px solid #ccc",
//         background: "white",
//         display: "flex",
//         flexDirection: "column",
//         overflow: "hidden",
//       }}
//     >
//       {children}
//     </Rnd>
//   );
// };

// const TestPage = () => {
//     const appointmentsData = [
//         { id: 1, firstName: 'Chance', lastName: 'Vaccaro', date: '10.01.2003 12:54', status: 'Pending' },
//         { id: 2, firstName: 'Desirae', lastName: 'Kenter', date: '04.12.2003 03:21', status: 'Rejected' },
//         { id: 3, firstName: 'Paityn', lastName: 'Lubin', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 4, firstName: 'Phillip', lastName: 'Bator', date: '04.12.2003 03:21', status: 'Pending' },
//         { id: 5, firstName: 'Emerson', lastName: 'Stanton', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 6, firstName: 'Alfredo', lastName: 'Rhiel Madsen', date: '03.08.2019 12:54', status: 'Rejected' },
//         { id: 3, firstName: 'Paityn', lastName: 'Lubin', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 4, firstName: 'Phillip', lastName: 'Bator', date: '04.12.2003 03:21', status: 'Pending' },
//         { id: 5, firstName: 'Emerson', lastName: 'Stanton', date: '10.01.2003 12:54', status: 'Accepted' },
//         { id: 6, firstName: 'Alfredo', lastName: 'Rhiel Madsen', date: '03.08.2019 12:54', status: 'Rejected' },
//     ];
//     const columns = ['firstName', 'lastName', 'date'];
//     const showStatusButtons=true;
//     const Tablecolumns = ['ID', 'Patient_Name', 'Age', 'email','Doctor_Name'];
//     const data = [
//         { ID: 1, Patient_Name: 'John Doe', Age: 28, email: 'john@example.com',Doctor_Name: 'MEOW' },
//         { ID: 2, Patient_Name: 'Jane Smith', Age: 34, email: 'jane@example.com',Doctor_Name: 'MEOW' },
//         { ID: 3, Patient_Name: 'Sam Green', Age: 45, email: 'sam@example.com',Doctor_Name: 'MEOW' },
//     ];
//     const [components, setComponents] = useState([
//     { id: 1, component: <ListComponent data={appointmentsData} columns={columns} showStatusButtons={showStatusButtons} />, x: 0, y: 0 },
//     { id: 2, component: <DynamicTable columns={Tablecolumns} data={data} showEdit={true} showDelete={true} />, x: 320, y: 0 },
//   ]);

//   const updateComponent = (id, newProps) => {
//     setComponents((prev) =>
//       prev.map((comp) => (comp.id === id ? { ...comp, ...newProps } : comp))
//     );
//   };

//   return (
//     <Box
//       sx={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden", p: 2 }}
//     >
//       {components.map((comp) => (
//         <ResizableDraggableComponent
//           key={comp.id}
//           id={comp.id}
//           defaultSize={{ width: comp.width, height: comp.height, x: comp.x, y: comp.y }}
//           onResize={updateComponent}
//           onDrag={updateComponent}
//         >
//           {comp.component}
//         </ResizableDraggableComponent>
//       ))}
//     </Box>
//   );
// };

// export default TestPage;
