import * as React from "react";

// 1. import `ChakraProvider` component
import {
  ChakraProvider,
  Center,
  Collapse,
  IconButton,
  ScaleFade,
  Icon,
  Button,
  HStack,
  Image,
  Text,
  Container,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  VStack,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdHome,
  MdOutlineImportantDevices,
  MdOutlinePermIdentity,
  MdOutlineContactPage,
} from "react-icons/md";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { useState } from "react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <NavBar />
      <AboutMe />
    </ChakraProvider>
  );
}

function HouseIcon() {
  return <Icon boxSize={5} as={MdHome} />;
}

function ProjectIcon() {
  return <Icon boxSize={5} as={MdOutlineImportantDevices} />;
}

function ContactIcon() {
  return <Icon boxSize={5} as={MdOutlinePermIdentity} />;
}

function ResumeIcon() {
  return <Icon boxSize={5} as={MdOutlineContactPage} />;
}

function NavBar() {
  // return (
  //   <Flex>
  //     <HouseIcon />
  //     {/* <Box w="70px" h="10" bg="red.500" /> */}
  //     <Spacer />
  //     {/* <Box w="170px" h="10" bg="red.500" /> */}
  //     <ProjectIcon />
  //     <Spacer />
  //     {/* <Box w="180px" h="10" bg="red.500" /> */}
  //     <ContactIcon />
  //   </Flex>
  // );

  return (
    <Center backgroundColor="#2c3e50" h="44px" minH="5vh">
      {/* <ButtonGroup size="md"> */}
      <Button
        aria-label="Home"
        leftIcon={<HouseIcon />}
        // colorScheme="blue"
        backgroundColor="#2c3e50"
        textColor="#ecf0f1"
        // borderWidth="1px"
        _hover={{ backgroundColor: "#2ecc71" }}
        // isRound={true}
      >
        Home
      </Button>
      <Button
        aria-label="Projects"
        leftIcon={<ProjectIcon />}
        backgroundColor="#2c3e50"
        textColor="#ecf0f1"
        _hover={{ backgroundColor: "#2ecc71" }}

        // colorScheme="rgba(22, 22, 23, .8)"
      >
        Projects
      </Button>
      <Button
        aria-label="Contact me"
        leftIcon={<ContactIcon />}
        backgroundColor="#2c3e50"
        textColor="#ecf0f1"
        _hover={{ backgroundColor: "#2ecc71" }}

        // isRound={true}
        // colorScheme="rgba(22, 22, 23, .8)"
      >
        Contact
      </Button>
      {/* </ButtonGroup> */}
    </Center>
  );
}

function AboutMe() {
  return (
    // <Box backgroundColor="black" h="500px">
    <Center
      // backgroundColor="#272829"
      backgroundColor="#f8f8f8"
      minH="95vh"
      w="100%"
      // color="white"
      fontFamily="Roboto"
    >
      <VStack>
        <HStack borderWidth="1px" shadow="md" p={5} m={3}>
          <Image
            borderRadius="full"
            boxSize={100}
            src={require("./images/gojo.jpeg")}
            mr={3}
          />
          <Heading
            fontSize="5xl"
            fontWeight="bold"
            fontFamily="Montserrat"
            textColor=" #3498db"
          >
            JUSTIN CAI
          </Heading>
        </HStack>
        <ViewCV />
      </VStack>
    </Center>
    // </Box>
  );
}

function ViewCV() {
  const { isOpen, onToggle } = useDisclosure();
  let [aboutOpen, setToggle] = useState(false);

  return (
    <>
      <HStack>
        <Button
          backgroundColor="#2ecc71"
          textColor="#333"
          size="sm"
          leftIcon={<ResumeIcon />}
          _hover={{ backgroundColor: "#27ae60" }}
          onClick={() => {
            if (!isOpen) {
              setToggle(!aboutOpen);
            }
          }}
        >
          About me
        </Button>
        <Button
          backgroundColor="#2ecc71"
          textColor="#333"
          size="sm"
          leftIcon={<ResumeIcon />}
          _hover={{ backgroundColor: "#27ae60" }}
          onClick={() => {
            if (!aboutOpen) {
              onToggle();
            }
          }}
        >
          View CV
        </Button>
      </HStack>

      <ScaleFade in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {/* <Lorem count={1} /> */}
        </Box>
      </ScaleFade>

      <ScaleFade in={aboutOpen} animateOpacity>
        <Box p="40px" color="white" mt="4" bg="red" rounded="md" shadow="md">
          {/* <Lorem count={1} /> */}
        </Box>
      </ScaleFade>
    </>
  );
}

export default App;
