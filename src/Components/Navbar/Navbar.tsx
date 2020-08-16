import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

function Navbar({ children }: any) {
  return (
      <Box bg='white' h='100vh' w='3.75rem' borderRight='0.5px solid #eaecf1' position='fixed'>
        <Flex h='100%' direction='column' justify='space-between'>
          <Flex direction='column'>
            <div>Logo</div>
            <Link to='/kandan'>
              <div>Kandan Icon</div>
            </Link>
          </Flex>
          <Flex direction='column'>
            <div>alerts</div>
            <div>avatar</div>
          </Flex>
        </Flex>
        {children}
      </Box>
  );
}

export default Navbar;
