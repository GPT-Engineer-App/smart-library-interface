import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { findings } = location.state;

  return (
    <Box p={4}>
      <Heading mb={4}>Radiology Report</Heading>
      <Text mb={4}>Date: {new Date().toLocaleDateString()}</Text>
      <Heading size="md" mb={2}>
        Findings:
      </Heading>
      {findings.map((finding, index) => (
        <Text key={index} mb={2}>
          {finding}
        </Text>
      ))}
      <Button colorScheme="blue" mt={4} onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Box>
  );
};

export default Report;
