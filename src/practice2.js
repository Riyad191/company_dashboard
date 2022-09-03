// import React from "react";

// const App = () => {
//   return (
//     <div className="card">
//       {arr.map((item) => {
//         const { pillar, products } = item;
//         return (
//           <div>
//             <h1>pillar:</h1> <p>{pillar}</p>
//             <p>
//               {products.map((item) => {
//                 return (
//                   <div>
//                     <h1>product:</h1> <p>{item.productName}</p>
//                     <p>
//                       {item.applications.map((item) => {
//                         return (
//                           <div>
//                             <h1>application</h1> <p>{item.applicationName}</p>
//                             <p>
//                               {item.tools.map((item) => {
//                                 return (
//                                   <div>
//                                     <h1>tool</h1> <p>{item.toolName}</p>
//                                     <p>
//                                       {item.toolInfo.map((item) => {
//                                         return (
//                                           <div>
//                                             <p>{item.a}</p>
//                                             <p>{item.b}</p>
//                                             <p>{item.c}</p>
//                                             <hr />
//                                           </div>
//                                         );
//                                       })}
//                                     </p>
//                                   </div>
//                                 );
//                               })}
//                             </p>
//                           </div>
//                         );
//                       })}
//                     </p>
//                   </div>
//                 );
//               })}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const arr = [
//   {
//     pillar: "Technology",
//     products: [
//       {
//         productName: "social media",
//         applications: [
//           {
//             applicationName: "Facebook",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//           {
//             applicationName: "Snapchat",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//           {
//             applicationName: "WhatsApp",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         productName: "social media",
//         applications: [
//           {
//             applicationName: "Facebook",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//           {
//             applicationName: "Snapchat",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//           {
//             applicationName: "WhatsApp",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         productName: "social media",
//         applications: [
//           {
//             applicationName: "Facebook",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//           {
//             applicationName: "Snapchat",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//           {
//             applicationName: "WhatsApp",
//             tools: [
//               {
//                 toolName: "daily story",
//                 toolInfo: [{ a: "friends" }, { b: "anyone" }],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default App;

// import React from "react";
// export default App = () => {
//   return (
//     <div className="card">
//       {arr.map((item) => (
//         <main
//           style={{
//             display: "flex",
//             justifyContent: "space-",
//             textAlign: "center",
//           }}
//         >
//           <section>
//             {" "}
//             <h1>Pillar</h1>
//             <p>{item.pillar}</p>
//           </section>
//           <section>
//             <h1>Product</h1>{" "}
//             {item.products.map((item) => (
//               <p> {item.productName}</p>
//             ))}
//           </section>
//           <section>
//             <h1>Applications</h1>{" "}
//             {item.products.map((item) => (
//               <div>
//                 {item.applications.map((item) => (
//                   <p>{item.applicationName}</p>
//                 ))}
//               </div>
//             ))}
//           </section>
//           <section>
//             <h1>Tool</h1>{" "}
//             {item.products.map((item) => (
//               <div>
//                 {item.applications.map((item) => (
//                   <div>
//                     {item.tools.map((item) => (
//                       <p>{item.toolName}</p>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </section>
//           <section>
//             <h1>Tools Informations</h1>{" "}
//             {item.products.map((item) => (
//               <div>
//                 {item.applications.map((item) => (
//                   <div>
//                     {item.tools.map((item) => (
//                       <div>
//                         {item.toolInfo.map((item) => (
//                           <div>
//                             <p>{item.a}</p> <p>{item.b}</p>
//                           </div>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </section>
//         </main>
//       ))}
//     </div>
//   );
// };

const arr = [
  {
    pillar: "Technology",
    products: [
      {
        productName: "social media",
        applications: [
          {
            applicationName: "Facebook",
            tools: [
              {
                toolName: "daily story",
                toolInfo: [{ a: "Facebook friends" }, { b: "Facebook anyone" }],
              },
            ],
          },
          {
            applicationName: "Snapchat",
            tools: [
              {
                toolName: "daily story",
                toolInfo: [{ a: "Snapchat friends" }, { b: "Snapchat anyone" }],
              },
            ],
          },
          {
            applicationName: "WhatsApp",
            tools: [
              {
                toolName: "daily story",
                toolInfo: [{ a: "WhatsApp friends" }, { b: "WhatsApp anyone" }],
              },
            ],
          },
        ],
      },
      {
        productName: "social media2",
        applications: [
          {
            applicationName: "Facebook2",
            tools: [
              {
                toolName: "Facebookone daily story2",
                toolInfo: [
                  { a: "Facebookone friends2" },
                  { b: "Facebookone anyone2" },
                ],
              },
            ],
          },
          {
            applicationName: "Snapchat2",
            tools: [
              {
                toolName: "Snapchatone daily story2",
                toolInfo: [
                  { a: "Snapchatone friends2" },
                  { b: "Snapchatone anyone2" },
                ],
              },
            ],
          },
          {
            applicationName: "WhatsApp2",
            tools: [
              {
                toolName: "WhatsApp aily story2",
                toolInfo: [
                  { a: "WhatsApp riends2" },
                  { b: "WhatsApp anyone2" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
