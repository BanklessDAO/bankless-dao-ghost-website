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
import { ChangeEvent, FormEvent, useState } from "react";

export default function SubscribeSection() {

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = 'https://gobankless.ghost.io/members/api/send-magic-link'

        const values = {
            email,
            emailType: `subscribe`,
            labels: [],
        };

        try {

            console.log('submitting email');
            setMessage(`loading`);
            await fetch(url, {
                method: `POST`,
                mode: `cors`,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
        } catch (e) {
            setMessage(`error`);
        }

        setMessage(`success`)
    };

    return (
        <chakra.div className="subscribe-section">
            <Flex className="subscribe-wrap">
                <Heading as="h3">Subscribe to new posts.</Heading>
                <chakra.form as="form" className="subscribe-form" onSubmit={ev => handleSubmit(ev)}>
                    <Input
                        type="email"
                        placeholder="Your email address"
                        aria-label="Your email address"
                        value={email}
                        onChange={handleChange}
                        isRequired
                    />
                    <Button className="global-button" type="submit">Subscribe</Button>
                    <Box className={['subscribe-message', message ? message : ''].join(' ')}>
                        <chakra.small className="alert-loading">Processing your application</chakra.small>
                        <chakra.small className="alert-success">Great! Check your inbox and confirm your subscription</chakra.small>
                        <chakra.small className="alert-error">There was an error sending the email.</chakra.small>
                    </Box>
                </chakra.form>
            </Flex>
        </chakra.div>
    );
}