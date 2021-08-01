import {
    Heading,
    Text,
    Box,
    Flex,
    Input,
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

export default function SubscribeSection() {
    return (
        <Flex className="subscribe-wrap">
            <Heading as="h3">Subscribe to new posts.</Heading>
            <Flex as="form" className="subscribe-form">
                <Input width="250px"
                    background="white"
                    color="black"
                    flex="1 1 auto"
                    height="inherit"
                    type="email"
                    fontFamily="two"
                    padding="0 20px"
                    borderRadius="0"
                    placeholder="Your email address"
                    aria-label="Your email address"
                    lineHeight="1"
                    boxSizing="content-box"
                    borderWidth="0"
                    isRequired
                    sx={{
                        _placeholder: {
                            color: "black"
                        }
                    }} />
                <Button
                    borderRadius="0px"
                    height="inherit"
                    color="black"
                    lineHeight="1"
                    fontFamily="two"
                    padding="0 20px"
                    background="var(--color-details)">Subscribe</Button>
            </Flex>
            <Box className="subscribe-alert">

            </Box>
        </Flex>
    );
}