import React from "react";
import { Box, Heading, Stack, Card, CardBody, Text } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <Box as="section">
      <HelmetProvider>
        <title>Home page</title>
        <meta
          name="description"
          content="This is the home page for my github repositories using the github api calls"
        />
        <link rel="canonical" href="/repos" />
      </HelmetProvider>
      <Box className="home-container">
        <Heading
          size="lg"
          fontSize="30px"
          textAlign="center"
          bg="purple.600"
          borderTop="2px solid"
          color="white"
          p="80px"
          className="home--header home--title"
        >
          WELCOME TO MY GitHub REPOSITORY'S LOG
        </Heading>
        <Card
          direction={{ base: "column", lg: "row" }}
          maxW="1020px"
          margin="auto"
          mt="-50px"
          borderRadius="15px"
          overflow="hidden"
          boxShadow="0px 20px 25px -5px  rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.4)"
          className="home-card"
        >
          <img
            objectFit="cover"
            maxW={{ base: "100%", lg: "500px" }}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            src="https://avatars.githubusercontent.com/u/31227288?v=4"
            alt="avatar-image"
            className="home--image"
          />

          <Stack>
            <CardBody color="purple.600" as="b" p="40" className="home-details">
              <Text className="para" fontSize="xl">
                Name: Olakunle Hassan
              </Text>
              <Text className="para" fontSize="xl">
                Username: @kaylezy
              </Text>
              <Text className="para" fontSize="xl">
                Twitter: @iam_kaylezy
              </Text>
              <Text className="para" fontSize="xl">
                Title: Frontend Engineer
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}

export default Home;
