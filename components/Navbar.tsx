import { 
    Heading, 
    Text, 
    Box, 
    Flex, 
    Link, 
    Image, 
    ListItem, 
    List
} from "@chakra-ui/react";
import { 
    PostOrPage, 
    Author, 
    Tag 
} from '../lib/types/ghost-types';

export default function Navbar(props) {
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
                    >
                    <Heading 
                        as="h1" 
                        margin="0"
                        lineHeight="0"
                        >
                        <Link href="/">
                            <Image src="bankless-logo.png" alt="Bankless" maxW="300px" maxH="60px"/>
                        </Link>
                    </Heading>
                </Box>
                <Box 
                    className="headerNav"
                    lineHeight="1.5"
                    textAlign="right"
                    flexBasis="50%"
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
                            <ListItem>
                                <Link>Home</Link>
                            </ListItem>
                            <ListItem>
                                <Link>Features</Link>
                            </ListItem>
                            <ListItem>
                                <Link>Authors</Link>
                            </ListItem>
                            <ListItem>
                                <Link>Tags</Link>
                            </ListItem>
                        </List>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}