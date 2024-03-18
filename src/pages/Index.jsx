import React from "react";
import { Box, Flex, Heading, Input, Icon, VStack, Grid, Button, Text, List, ListItem } from "@chakra-ui/react";
import { FaPlus, FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Flex h="100vh" flexDirection="column">
      {/* Header */}
      <Box bg="lightblue" px={4} py={2}>
        <Flex justify="space-between" align="center">
          <Heading size="lg" textTransform="uppercase" fontWeight="bold">
            Smartlibrary
          </Heading>
          <Flex align="center">
            <Input placeholder="Search..." borderRadius="md" mr={2} />
            <Icon as={FaPlus} boxSize={6} />
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex flex={1}>
        {/* Left Sidebar */}
        <Box bg="lightblue" w={16} p={4}>
          <VStack spacing={8} align="center">
            <Icon as={FaBars} boxSize={6} />
            {/* Add more sidebar icons */}
          </VStack>
        </Box>

        {/* Content Columns */}
        <Flex flex={1}>
          {/* Left Column */}
          <Box bg="white" w="30%" p={4}>
            <VStack spacing={8} align="stretch">
              <Box borderWidth={1} borderColor="lightblue" p={4}>
                <Heading size="md" mb={2}>
                  Radiology Reporting
                </Heading>
                <List>
                  <ListItem>Item 1</ListItem>
                  <ListItem>Item 2</ListItem>
                  {/* Add more list items */}
                </List>
              </Box>
              <Box borderWidth={1} borderColor="lightblue" p={4}>
                <Heading size="md" mb={2}>
                  Pathology Cancer Reporting
                </Heading>
                <List>
                  <ListItem>Item 1</ListItem>
                  <ListItem>Item 2</ListItem>
                  {/* Add more list items */}
                </List>
              </Box>
            </VStack>
          </Box>

          {/* Right Column */}
          <Box bg="paleblue" flex={1} p={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {/* Category Box */}
              <Box borderWidth={1} borderColor="lightblue" p={4}>
                <Heading size="md">Neuroradiology</Heading>
                <List>
                  <ListItem>CT Traumatic Brain Injury</ListItem>
                  {/* Add more list items */}
                </List>
                <Button size="sm" colorScheme="blue" mt={4} alignSelf="flex-end">
                  &gt; OPEN
                </Button>
              </Box>
              {/* Add more category boxes */}
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
