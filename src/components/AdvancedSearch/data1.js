import React from "react";
import data from "../../data";
import AdvancedSearchData from "./AdvancedSearchData";
const Data1 = () => {
  return (
    <div>
      {data.map((item) => {
        console.log(item, "item1");
        return item.products.map((item2) => {
          // console.log(item2, "item2");
          return item2.applications.map((item3) => {
            // console.log(item3, "item3");
            return item3.tools.map((item4) => {
              // console.log(item4, "item4");
              return item4.toolInfo.map((item5) => {
                // console.log(item5, "item5");
                return (
                  <div>
                    {/* <tr>
                          <td>{item.pillar}</td>
                          <td>{item2.productName}</td>
                          <td>{item3.applicationName}</td>
                          <td>{item4.toolName}</td>
                          <td>{item5.a || item5.b || item5.c}</td>
                        </tr> */}
                    <AdvancedSearchData
                      item={item}
                      item2={item2}
                      item3={item3}
                      item4={item4}
                      item5={item5}
                    />
                  </div>
                );
              });
            });
          });
        });
      })}
    </div>
  );
};

export default Data1;
