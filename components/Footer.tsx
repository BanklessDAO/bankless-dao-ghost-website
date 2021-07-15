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
                        Bankless DAO wants to take one billion people take control of their finances and go bankless.
                    </Text>
                    <Box className="footer-icons">

                    </Box>
                </Box>
                <Flex className="footer-nav">
                    
                </Flex>
            </Flex>
            <Box className="footer-copyright">

            </Box>
        </Box>
    );
}