import React from 'react';
import { Grid, Box } from "@chakra-ui/core";

export default function Kandan() {
  return (
    <div style={{ marginLeft: '3.75rem', width: 'calc(100% - 3.75rem)', height: '100%' }}>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <Box w='100%' h='300px' bg='blue' >ffdfd</Box>
        <Box w='100%' h='10%' bg='blue' />
        <Box w='100%' h='10%' bg='blue' />
        <Box w='100%' h='10%' bg='blue' />
        <Box w='100%' h='10%' bg='blue' />
      </Grid>
    </div>
  );
}
