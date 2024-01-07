import { Flex, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Flex
        width="100%"
        height="80vh"
        flexDir="column"
        alignItems="center"
        justify="center"
      >
        <Heading paddingBottom="1rem">OOps ...</Heading>
        <Text fontSize="2rem">
          {isRouteErrorResponse(error)
            ? 'Page Not found'
            : 'Something went wrong'}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
