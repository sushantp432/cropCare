import { Box, Flex  } from '@chakra-ui/react'
import React from 'react'
import { BarChrt } from './BarChrt'
import { LineChart } from './LineChart'
import Reminder from './Reminder'
// import Sidebar from './Sidebar'

export const Homepage = () => {
  return (
    <Box >
        
    <Box display={"flex"} 
    gap="10px"
    >
        <Box >
            <LineChart />
        </Box>
        <Box>
            <Reminder />
        </Box>
        <Box>
        <BarChrt />
        </Box>

    </Box >
    {/* <Sidebar/> */}
    </Box>
   
  )
}
