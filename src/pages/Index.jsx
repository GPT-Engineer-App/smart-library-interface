import React, { useState } from "react";
import { Box, Flex, Heading, Input, Icon, VStack, Grid, Button, List, ListItem } from "@chakra-ui/react";
import { FaPlus, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Findings from "../components/Findings";

const Index = () => {
  const [findings, setFindings] = useState([]);
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    navigate("/report", { state: { findings } });
  };

  return (
    <Flex h="100vh" flexDirection="column">
      {}
      <Box bg="lightblue" px={4} py={2}>
        <Flex justify="space-between" align="center">
          <Heading size="lg" textTransform="uppercase" fontWeight="bold">
            Radiology Reporting
          </Heading>
          <Flex align="center">
            <Input placeholder="Search..." borderRadius="md" mr={2} />
            <Icon as={FaPlus} boxSize={6} />
          </Flex>
        </Flex>
      </Box>

      {}
      <Flex flex={1}>
        {}
        <Box bg="lightblue" w={16} p={4}>
          <VStack spacing={8} align="center">
            <Icon as={FaBars} boxSize={6} />
            {}
          </VStack>
        </Box>

        {}
        <Flex flex={1}>
          {}
          <Box bg="white" w="30%" p={4}>
            <VStack spacing={8} align="stretch">
              <Box borderWidth={1} borderColor="lightblue" p={4}>
                <Heading size="md" mb={2}>
                  Neuroradiology
                </Heading>
                <List>
                  <ListItem>CT Brain</ListItem>
                  <ListItem>MRI Brain</ListItem>
                  {}
                </List>
              </Box>
              <Box borderWidth={1} borderColor="lightblue" p={4}>
                <Heading size="md" mb={2}>
                  Musculoskeletal
                </Heading>
                <List>
                  <ListItem>X-Ray Knee</ListItem>
                  <ListItem>MRI Shoulder</ListItem>
                  {}
                </List>
              </Box>
            </VStack>
          </Box>

          {}
          <Box bg="paleblue" flex={1} p={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {}
              <Findings findings={findings} setFindings={setFindings} />
            </Grid>
            <Button colorScheme="blue" onClick={handleGenerateReport} mt={4}>
              Generate Report
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
