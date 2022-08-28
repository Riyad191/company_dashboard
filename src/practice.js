import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSolo() {
  const [items, setItems] = useState([]);
  const [pillar, setPillar] = useState("");
  const [product, setProduct] = useState("");

  useEffect(() => {
    let result;
    for (let i = 0; i < data.length; i++) {
      if (data[i].pillar === pillar) {
        result = data[i].product;
      }
    }
    setItems(result);
  }, [pillar]);
  const uniquePillarName = [...new Set(data.map((item) => item.pillar))];
  return (
    <div>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={uniquePillarName}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
          onChange={(e, newValue) => setPillar(newValue)}
        />
      </Stack>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={items && items.map((option) => option.name)}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
          onChange={(e, newValue) => setProduct(newValue)}
        />
      </Stack>
      <h1>{product ? `${product} ${pillar}` : pillar}</h1>
    </div>
  );
}

const data = [
  {
    pillar: "support",
    product: [
      {
        name: "Supply Chain Operations Tool (GSCOPE) ",
        applications: [
          { name: "application1", tools: ["tool1", "tool2", "tool3"] },
          { name: "application2", tools: ["tool1", "tool2", "tool3"] },
          { name: "application33", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          {
            name: "application",
            tools: [{ tool1: [1, 2, 3] }, "tool2", "tool3"],
          },
          {
            name: "application",
            tools: [{ tool1: [1, 2, 3] }, "tool2", "tool3"],
          },
          {
            name: "application",
            tools: [{ tool1: [1, 2, 3] }, "tool2", "tool3"],
          },
        ],
      },

      {
        name: "OAR ",
        applications: [
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application44", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
        ],
      },
      {
        name: "Supply Chain Support Engineering ",
        applications: [
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application55", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
        ],
      },
      {
        name: "Operational Data Store (ODS) ",
        applications: [
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application66", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
          { name: "application", tools: ["tool1", "tool2", "tool3"] },
        ],
      },
    ],
  },
];
