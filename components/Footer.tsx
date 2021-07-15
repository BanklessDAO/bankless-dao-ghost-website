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
    Button,
    UnorderedList
} from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import { 
    PostOrPage, 
    Author, 
    Tag 
} from '../lib/types/ghost-types';

export default function Footer() {
    return (
        <Box as="footer" className="footer-section global-footer">
            <Flex className="footer-wrap">
                <Box className="footer-data">
                    <Box className="footer-logo">
                        <Link className="is-image" href="/">
                            <Image src="bankless-logo.png" alt="Bankless DAO logo"/>
                        </Link>
                    </Box>
                    <Text className="footer-description">
                        Bankless DAO wants to teach one billion people to go bankless.
                    </Text>
                    <Box className="footer-icons">

                    </Box>
                </Box>
                <Flex className="footer-nav">
                    <Box width="150px" marginBottom="30px">
                        <UnorderedList 
                            margin="0" 
                            paddingLeft="15%"
                            fontFamily="two"
                            fontSize="13px"
                            lineHeight="2"
                            listStyleType="none"
                            >
                            <ListItem marginBottom="16px">
                                <a href="/contribute">Contribute</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/privacy">Privacy</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/contact">Contact</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/about">About this site.</a>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box width="150px" marginBottom="30px">
                        <UnorderedList 
                            margin="0" 
                            paddingLeft="15%"
                            fontFamily="two"
                            fontSize="13px"
                            lineHeight="2"
                            listStyleType="none"
                            >
                            <ListItem marginBottom="16px">
                                <a href="/contribute">Contribute</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/privacy">Privacy</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/contact">Contact</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/about">About this site.</a>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box width="150px" marginBottom="30px">
                        <UnorderedList 
                            margin="0" 
                            paddingLeft="15%"
                            fontFamily="two"
                            fontSize="13px"
                            lineHeight="2"
                            listStyleType="none"
                            >
                            <ListItem marginBottom="16px">
                                <a href="/contribute">Contribute</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/privacy">Privacy</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/contact">Contact</a>
                            </ListItem>
                            <ListItem marginBottom="16px">
                                <a href="/about">About this site.</a>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Flex>
            <Box 
                className="footer-copyright"
                height="25px"
                marginTop="30px"
                padding="0"
                fontFamily="four"
                fontSize="13px"
                >
                GoBankless &copy; 2021. All Rights Reserved. Published with <Link href="https://ghost.org" target="_blank">Ghost</Link>.
            </Box>
        </Box>
    );
}