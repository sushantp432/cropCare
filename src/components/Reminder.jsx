import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/reminder.module.css"
import figmaIcon from "./logo/remLogo.svg";
const Reminder = () => {
  return (
    <Box className={styles.containerRem}>
      <Stack className={styles.RemFont}>
        <Text mt="15px" >Agency Design Kit</Text>
      </Stack>
      <Stack alignItems="center" mt="10px">
        <Stack
          className={styles.img}
        >
          <img src={figmaIcon} alt="" width="38px" />
        </Stack>
      </Stack>
      <Stack className={styles.RemFont}>
        <Text mt="10px">Will be published</Text>
        <Text>Nov 25, 2022</Text>
      </Stack>
      <Stack mt="10px">
        <Button className={styles.Rembtn} borderRadius="10px">
          Set as Reminder
        </Button>
      </Stack>
    </Box>
  );
};

export default Reminder;