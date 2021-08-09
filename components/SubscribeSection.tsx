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
    Button,
    chakra
} from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import {
    PostOrPage,
    Author,
    Tag
} from '../lib/types/ghost-types';

export default function SubscribeSection() {
    return (
        <chakra.div className="subscribe-section">
            <Flex className="subscribe-wrap">
                <Heading as="h3">Subscribe to new posts.</Heading>
                <Flex as="form" className="subscribe-form">
                    <Input
                        type="email"
                        placeholder="Your email address"
                        aria-label="Your email address"
                        isRequired
                    />
                    <Button className="global-button" type="submit">Subscribe</Button>
                    <Box className="subscribe-alert">
                        <chakra.small className="alert-loading"></chakra.small>
                        <chakra.small className="alert-success"></chakra.small>
                        <chakra.small className="alert-error"></chakra.small>
                    </Box>
                </Flex>
            </Flex>
        </chakra.div>
    );
}