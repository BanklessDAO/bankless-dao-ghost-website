import Head from 'next/head';
import {
    chakra,
    FormLabel,
    Input,
    Button,
    Link
} from '@chakra-ui/react';
import { PostOrPage, Tag, Author } from '../lib/types/ghost-types';

type HomeProps = {
    featuredPages: PostOrPage[],
    featuredPosts: PostOrPage[],
    pages: PostOrPage[],
    posts: PostOrPage[]
};

export default function Signup(): JSX.Element {
    return (
        <>
            <Head>
                <title>Bankless DAO - Sign up</title>
                <meta name="description" content="Bankless DAO community site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <chakra.div className="custom-container">
                <chakra.div className="custom-logo">

                </chakra.div>
                <chakra.div className="custom-content">
                    <chakra.form data-members-form="signup">
                        <FormLabel htmlFor="fname">Your name</FormLabel>
                        <Input data-members-name id="fname" type="text" name="fname" isRequired fontFamily="four" />
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input data-members-email id="signup" type="email" name="email" isRequired />
                        <Button type="submit" className="global-button">Continue</Button>
                        <chakra.small>
                            Already have an account?
                            <Link href="signin">Sign in</Link>
                        </chakra.small>
                    </chakra.form>
                </chakra.div>
            </chakra.div>
        </>
    )
}