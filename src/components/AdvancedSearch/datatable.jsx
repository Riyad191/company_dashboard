// import * as React from "react";
// import { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import { data } from "./data.js";
// import Stack from "@mui/material/Stack";
// import Autocomplete from "@mui/material/Autocomplete";
// import Box from "@mui/material/Box";
// function App() {
//   const [search, setSearch] = useState("");
//   const [search1, setSearch1] = useState("");
//   const [search2, setSearch2] = useState("");
//   const [show, setShow] = useState(false);

//   const u = [...new Set(data.map((a) => a.email))];

//   return (
//     <div>
//       <div>
//         <button onClick={() => setShow(true)}>click</button>
//         <h1 className="text-center mt-4">Contact Keeper</h1>
//         <Box
//           sx={{
//             "& > :not(style)": { m: 1, width: "25ch" },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField
//             id="outlined-basic"
//             label="Outlined"
//             variant="outlined"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </Box>
//         <Stack spacing={2} sx={{ width: 300 }}>
//           <Autocomplete
//             options={u}
//             renderInput={(params) => <TextField {...params} label="email" />}
//             onChange={function (e, newValue) {
//               console.log("newValue:", newValue);
//               return setSearch1(newValue === null ? "" : newValue);
//             }}
//           />
//         </Stack>
//         <Stack spacing={2} sx={{ width: 300 }}>
//           <Autocomplete
//             options={data.map((a) => a.phone)}
//             renderInput={(params) => <TextField {...params} label="phone" />}
//             onChange={(e, newValue) => {
//               console.log("newValue:", newValue);
//               return setSearch2(newValue === null ? "" : newValue);
//             }}
//           />
//         </Stack>
//         <table striped bordered hover>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data
//               .filter((a) => {
//                 return (
//                   a.first_name
//                     .toLowerCase()
//                     .indexOf(`${search}`.toLowerCase()) !== -1 ||
//                   a.last_name
//                     .toLowerCase()
//                     .indexOf(`${search}`.toLowerCase()) !== -1 ||
//                   a.email.toLowerCase().indexOf(`${search}`.toLowerCase()) !==
//                     -1 ||
//                   a.phone.toLowerCase().indexOf(`${search}`.toLowerCase()) !==
//                     -1
//                 );
//               })
//               .filter((a) => {
//                 return a.email.indexOf(`${search1}`) !== -1;
//               })
//               .filter((a) => {
//                 return a.phone.indexOf(`${search2}`) !== -1;
//               })
//               .map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.first_name}</td>
//                   <td>{item.last_name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.phone}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;
