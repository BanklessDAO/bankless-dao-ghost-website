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
                            <Image
                                src="bankless-logo.png"
                                alt="Bankless DAO logo" />
                        </Link>
                    </Box>
                    <Text className="footer-description">
                        Bankless DAO wants to teach one billion people to go bankless.
                    </Text>
                    <Box className="footer-icons">

                    </Box>
                </Box>
                <Flex className="footer-nav">
                    <Box className="footer-nav-column">
                        <UnorderedList>
                            <ListItem>
                                <Link href="/contribute">Contribute</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/privacy">Privacy</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/contact">Contact</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/about">About this site.</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box className="footer-nav-column">
                        <UnorderedList>
                            <ListItem>
                                <Link href="/contribute">Contribute</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/privacy">Privacy</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/contact">Contact</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/about">About this site.</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box className="footer-nav-column">
                        <UnorderedList>
                            <ListItem>
                                <Link href="/contribute">Contribute</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/privacy">Privacy</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/contact">Contact</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/about">About this site.</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Flex>
            <Box className="footer-copyright">
                GoBankless &copy; 2021. All Rights Reserved. Published with <Link href="https://ghost.org" target="_blank">Ghost</Link>.
            </Box>
        </Box>
    );
}