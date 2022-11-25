import React, { useEffect, useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
 
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Box, Stack, Text } from "@chakra-ui/react";

export const BarChrt = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
  fetch("https://sushant-server.herokuapp.com/api/income")
  .then((res)=>res.json())
  .then((el)=>setData(el.price))
  .catch((e)=>console.log(e))
  },[])

  return (
    <Box
    p="5px"
    borderRadius="10px"
    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" 
    >
      <Stack>
        <Text color="gray.400">Saved this month</Text>
        <Text fontSize="3rem" fontWeight="700">$ 12,281</Text>
         <Box>
         <Text color="gray.400">Your payment will be</Text>
        <Text color="gray.400">updated by the system</Text>
         </Box>
      </Stack>
      <BarChart width={300} height={250} data={data}>
        <CartesianGrid strokeDasharray="0 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="pv" fill="#00d1ff" barSize={7} />
        <Bar dataKey="uv" fill="#0038ff" barSize={7} />
      </BarChart>
    </Box>
  );
};