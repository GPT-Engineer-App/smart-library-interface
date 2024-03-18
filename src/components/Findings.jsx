import React, { useState } from "react";
import { Box, Heading, Textarea, Button } from "@chakra-ui/react";

const Findings = ({ findings, setFindings }) => {
  const [newFinding, setNewFinding] = useState("");

  const handleAddFinding = () => {
    if (newFinding.trim() !== "") {
      setFindings([...findings, newFinding]);
      setNewFinding("");
    }
  };

  return (
    <Box borderWidth={1} borderColor="lightblue" p={4}>
      <Heading size="md" mb={4}>
        Findings
      </Heading>
      <Textarea value={newFinding} onChange={(e) => setNewFinding(e.target.value)} placeholder="Enter a new finding..." mb={2} />
      <Button colorScheme="blue" onClick={handleAddFinding}>
        Add Finding
      </Button>
      {findings.map((finding, index) => (
        <Box key={index} mt={2}>
          {finding}
        </Box>
      ))}
    </Box>
  );
};

export default Findings;
