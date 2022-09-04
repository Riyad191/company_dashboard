import React from "react";

function App() {
  // console.log(arr[0].products);
  // let tabledata = [];
  // let tabledata2 = [];
  // arr[0].products.map((item) => {
  //   tabledata.push(item);
  // });
  // console.log(tabledata);

  // tabledata.map((item3) => {
  //   tabledata2.push(item3.applications);
  // });

  // var merged = [].concat.apply([], tabledata2);

  // console.log(merged);

  console.log(arr);

  return (
    <div className="App">
      <h2>table</h2>

      <table>
        <thead>
          <tr>
            <td>Pillar</td>
            <td>Product</td>
            <td>Application</td>
            <td>Tools</td>
            <td>tool Info</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => {
            // console.log(item, "item1");
            return item.products.map((item2) => {
              // console.log(item2, "item2");
              return item2.applications.map((item3) => {
                // console.log(item3, "item3");
                return item3.tools.map((item4) => {
                  // console.log(item4, "item4");
                  return item4.toolInfo.map((item5) => {
                    console.log(item5, "item5");
                    return (
                      <tr>
                        <td>{item.pillar}</td>
                        <td>{item2.productName}</td>
                        <td>{item3.applicationName}</td>
                        <td>{item4.toolName}</td>
                        <td>{item5.a || item5.b || item5.c}</td>
                      </tr>
                    );
                  });
                });
              });
            });
          })}
        </tbody>
      </table>
    </div>
  );
}

const arr = [
  {
    pillar: "technology111",
    products: [
      {
        productName: "social media",
        applications: [
          {
            applicationName: "facebook",
            tools: [
              {
                toolName: "facebook daily story",
                toolInfo: [{ a: "facebook friends" }, { b: "facebook family" }],
              },
              {
                toolName: "facebook direct messages",
                toolInfo: [
                  { a: "facebook every one" },
                  { b: "facebook close friends" },
                ],
              },
            ],
          },
          {
            applicationName: "snapchat",
            tools: [
              {
                toolName: "snapchat daily story",
                toolInfo: [{ a: "sanpchat friends" }, { b: "sanpchat family" }],
              },
              {
                toolName: "snapchat direct messages",
                toolInfo: [
                  { a: "sanpchat every one" },
                  { b: "sanpchat close friends" },
                  { c: "ccccccccccccccccc" },
                ],
              },
            ],
          },
        ],
      },
      {
        productName: "cell phones",
        applications: [
          {
            applicationName: "iphone",
            tools: [
              {
                toolName: "iphone 12",
                toolInfo: [{ a: "iphone 12 plus" }, { b: "iphone 12 max" }],
              },
              {
                toolName: "iphone 13",
                toolInfo: [{ a: "iphone 13 plus" }, { b: "iphone 13 max" }],
              },
            ],
          },
          {
            applicationName: "samsung",
            tools: [
              {
                toolName: "galaxy ultra",
                toolInfo: [{ a: "ultra 21" }, { b: "ultra 22" }],
              },
              {
                toolName: "galaxy note",
                toolInfo: [{ a: "note 10" }, { b: "note 20" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pillar: "technology222",
    products: [
      {
        productName: "social media",
        applications: [
          {
            applicationName: "facebook",
            tools: [
              {
                toolName: "facebook daily story",
                toolInfo: [{ a: "facebook friends" }, { b: "facebook family" }],
              },
              {
                toolName: "facebook direct messages",
                toolInfo: [
                  { a: "facebook every one" },
                  { b: "facebook close friends" },
                ],
              },
            ],
          },
          {
            applicationName: "snapchat",
            tools: [
              {
                toolName: "snapchat daily story",
                toolInfo: [{ a: "sanpchat friends" }, { b: "sanpchat family" }],
              },
              {
                toolName: "snapchat direct messages",
                toolInfo: [
                  { a: "sanpchat every one" },
                  { b: "sanpchat close friends" },
                ],
              },
            ],
          },
        ],
      },
      {
        productName: "cell phones",
        applications: [
          {
            applicationName: "iphone",
            tools: [
              {
                toolName: "iphone 12",
                toolInfo: [{ a: "iphone 12 plus" }, { b: "iphone 12 max" }],
              },
              {
                toolName: "iphone 13",
                toolInfo: [{ a: "iphone 13 plus" }, { b: "iphone 13 max" }],
              },
            ],
          },
          {
            applicationName: "samsung",
            tools: [
              {
                toolName: "galaxy ultra",
                toolInfo: [{ a: "ultra 21" }, { b: "ultra 22" }],
              },
              {
                toolName: "galaxy note",
                toolInfo: [{ a: "note 10" }, { b: "note 20" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pillar: "technology333",
    products: [
      {
        productName: "social media",
        applications: [
          {
            applicationName: "facebook",
            tools: [
              {
                toolName: "facebook daily story",
                toolInfo: [{ a: "facebook friends" }, { b: "facebook family" }],
              },
              {
                toolName: "facebook direct messages",
                toolInfo: [
                  { a: "facebook every one" },
                  { b: "facebook close friends" },
                ],
              },
            ],
          },
          {
            applicationName: "snapchat",
            tools: [
              {
                toolName: "snapchat daily story",
                toolInfo: [{ a: "sanpchat friends" }, { b: "sanpchat family" }],
              },
              {
                toolName: "snapchat direct messages",
                toolInfo: [
                  { a: "sanpchat every one" },
                  { b: "sanpchat close friends" },
                ],
              },
            ],
          },
        ],
      },
      {
        productName: "cell phones",
        applications: [
          {
            applicationName: "iphone",
            tools: [
              {
                toolName: "iphone 12",
                toolInfo: [{ a: "iphone 12 plus" }, { b: "iphone 12 max" }],
              },
              {
                toolName: "iphone 13",
                toolInfo: [{ a: "iphone 13 plus" }, { b: "iphone 13 max" }],
              },
            ],
          },
          {
            applicationName: "samsung",
            tools: [
              {
                toolName: "galaxy ultra",
                toolInfo: [{ a: "ultra 21" }, { b: "ultra 22" }],
              },
              {
                toolName: "galaxy note",
                toolInfo: [{ a: "note 10" }, { b: "333" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pillar: "cars",
    products: [
      {
        productName: "american cars",
        applications: [
          {
            applicationName: "tesla",
            tools: [
              {
                toolName: "tesla exterior",
                toolInfo: [
                  { a: "tesla exterior red" },
                  { b: "tesla exterior white" },
                ],
              },
              {
                toolName: "tesla interior",
                toolInfo: [
                  { a: "tesla interior material" },
                  { b: "tesla interior leather" },
                ],
              },
            ],
          },
          {
            applicationName: "ford",
            tools: [
              {
                toolName: "fusion",
                toolInfo: [{ a: "fusion gas" }, { b: "fusion hybrid" }],
              },
              {
                toolName: "focus",
                toolInfo: [{ a: "focus gas" }, { b: "focus hybrid" }],
              },
            ],
          },
        ],
      },
      {
        productName: "japanese cars",
        applications: [
          {
            applicationName: "toyota",
            tools: [
              {
                toolName: "camary",
                toolInfo: [{ a: "camary gas" }, { b: "camary hybrid" }],
              },
              {
                toolName: "corolla",
                toolInfo: [{ a: "corolla gas" }, { b: "corolla hybrid" }],
              },
            ],
          },
          {
            applicationName: "honda",
            tools: [
              {
                toolName: "accord",
                toolInfo: [{ a: "accord white" }, { b: "accord black" }],
              },
              {
                toolName: "civic",
                toolInfo: [{ a: "civic white" }, { b: "civic black" }],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default App;

{
  /* <tbody>
{arr[0].products.map((eachproduct)=>{
 return eachproduct.applications.map((item)=>{
    console.log(item);
    return <tr>
    <td>{arr[0].pillar}</td>
    <td>{eachproduct.productName}</td>
    <td>{item.applicationName || item.name}</td>
    <td>{item.tools[0].toolName}</td>
  </tr>
  })
})}
</tbody> */
}

// {arr.map((item) => {
//   // console.log(item);
//   {
//     item.products.map((item2) => {
//       // console.log(item2);
//       {
//         item2.applications.map((item3) => {
//           // console.log(item3);
//           {
//             item3.tools.map((item4) => {
//               // console.log(item4);
//               {
//                 item4.toolInfo.map((item5) => {
//                   console.log(item5);

//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// })}
