import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={6}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={6}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box py={6}>
        <VStack spacing={8} align="stretch">
          {/* Top Stories */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="sm">Top Story 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="sm">Top Story 2</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </VStack>
          </Box>

          <Divider />

          {/* Latest News */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Latest News</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="sm">Latest News 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="sm">Latest News 2</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </VStack>
          </Box>

          <Divider />

          {/* Featured Articles */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Featured Articles</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="sm">Featured Article 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="sm">Featured Article 2</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={6}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={6}>
            <Link href="#" color="white">About</Link>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;