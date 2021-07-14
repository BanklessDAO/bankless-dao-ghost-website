import { 
    Heading, 
    Text, 
    Box, 
    Flex, 
    Link, 
    Image, 
    ListItem,
    ListIcon, 
    List,
    Button
} from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import { 
    PostOrPage, 
    Author, 
    Tag 
} from '../lib/types/ghost-types';

export default function Navbar() {
    return (
        <Box as="header" width="100%" color="white">
            <Flex 
                className="headerWrap" 
                marginTop="30px" 
                marginBottom="30px" 
                position="relative" 
                alignItems="center"
                >
                <Box 
                    className="headerLogo"
                    flexBasis="50%"
                    lineHeight="0"
                    display="inline-block"
                    wordBreak="normal"
                    flex="1 0 auto"
                    textAlign={{
                        base: "left",
                        md: "center",
                        lg: "center"
                    }}
                    position={{
                        lg: "absolute",
                    }}
                    left={{
                        lg: "calc(50% - 150px)"
                    }}
                    top={{
                        lg: "0"
                    }}
                    width={{
                        lg: "300px"
                    }}
                    >
                    <Heading 
                        as="h1" 
                        margin="0"
                        lineHeight="0"
                        >
                        <Link 
                            display="inline-block"
                            >
                            <Image src="bankless-logo.png" alt="Bankless" maxW="300px" maxH="60px"/>
                        </Link>
                    </Heading>
                </Box>
                <Box 
                    className="headerNav"
                    position="relative"
                    zIndex="99"
                    flex="0 1 100%"
                    >
                    <Flex 
                        as="nav"
                        width="100%"
                        padding="0"
                        >
                        <List 
                            flexGrow={1}
                            zIndex={1}
                            margin="0"
                            padding="0"
                            listStyleType="none"
                            wordBreak="normal"
                            >
                            <ListItem display="inline-block">
                                <Link href="/" marginRight="18px">Home</Link>
                            </ListItem>
                            <ListItem display="inline-block">
                                <Link href="/features" marginRight="18px">Features</Link>
                            </ListItem>
                            <ListItem display="inline-block">
                                <Link href="/authors" marginRight="18px">Authors</Link>
                            </ListItem>
                        </List>
                        <List 
                            display="flex"
                            flex="0 0 auto"
                            alignItems="center">
                            <ListItem marginRight="18px">Register for Free!</ListItem>
                            <ListItem marginRight="18px">Sign In</ListItem>
                            <ListItem marginRight="18px">
                                <ListIcon as={Search2Icon} color="white"/>
                            </ListItem>
                        </List>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}