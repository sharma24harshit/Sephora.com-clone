import "./navbar.css";
import { Flex ,Box,Heading,Spacer,ButtonGroup,Button ,
  Popover,
PopoverTrigger,
PopoverContent,
PopoverHeader,
PopoverBody,
PopoverFooter,
PopoverArrow,
PopoverCloseButton,Input,IconButton ,
Portal} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";
//import {useState} from "react";
function Home (){


return (
    <Flex 
    minWidth="max-content" alignItems="center" gap="2" bg="gray.300" p="2"
    >
        <Box p="2" >
            <Heading size="md" >Allure(Logo)</Heading>
        </Box>
        <Spacer/>
        <IconButton aria-label='Search database' icon={<SearchIcon />} />
        <Input placeholder='Search' size='sm'  borderRadius="18px" width="400px" />
{/* ------------------------------------------------------------------------------ */}
<Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <div style={{display:"none"}} >
  <Portal >
    <PopoverContent className="content" >
      <PopoverArrow />
      <PopoverHeader>Header</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <Button colorScheme='blue'>Button</Button>
      </PopoverBody>
      <PopoverFooter>This is the footer</PopoverFooter>
    </PopoverContent>
  </Portal>
  </div>
</Popover>
{/* ------------------------------------------------------------------------------ */}
       <Spacer/>
        <ButtonGroup gap="2" >
            <Button colorScheme="teal" variant="outline" >Sign up</Button>
            <Button colorScheme="teal" >Log in</Button>
        </ButtonGroup>
    </Flex>
);
}

export default Home