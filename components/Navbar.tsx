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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    chakra,
    IconButton
} from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import {
    PostOrPage,
    Author,
    Tag
} from '../lib/types/ghost-types';

export default function Navbar() {
    return (
        <Box as="header" width="100%" color="white" overflowY="visible">
            <Flex className="header-wrap">
                <Box className="header-logo">
                    <Heading as="h1" margin="0" lineHeight="0">
                        <Link href="/" display="inline-block">
                            <Image src="bankless-logo.png" alt="Bankless" maxW="300px" maxH="60px" />
                        </Link>
                    </Heading>
                </Box>
                <Box className="header-nav">
                    <Flex as="nav" justifyContent="flex-end" display={{ base: "flex", xl: "none" }}>
                        <Menu>
                            <MenuButton as={IconButton} aria-label="site navigation menu" icon={<HamburgerIcon />} fontSize="32px" backgroundColor="transparent" sx={{ _hover: { background: "transparent" }, _active: { background: "transparent" } }} />
                            <MenuList zIndex={1} borderRadius={0} background="var(--bg-nav)" border="none" fontSize="14px" width="200px">
                                <MenuItem justifyContent="flex-end">Home</MenuItem>
                                <MenuItem justifyContent="flex-end">Authors</MenuItem>
                                <MenuItem justifyContent="flex-end">Register for Free!</MenuItem>
                                <MenuItem justifyContent="flex-end">Sign In</MenuItem>
                                <MenuItem justifyContent="flex-end" color="var(--bg-nav)" background="var(--color-details)">
                                    Search<ListIcon as={Search2Icon} color="var(--bg-nav)" marginLeft="10px" />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Flex as="nav" width="100%" padding="0">
                        <List
                            display={{
                                base: "none",
                                xl: "block"
                            }}
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
                            display={{
                                base: "none",
                                xl: "block"
                            }}
                            flex="0 0 auto"
                            alignItems="center">
                            <ListItem marginRight="18px">Register for Free!</ListItem>
                            <ListItem marginRight="18px">Sign In</ListItem>
                            <ListItem marginRight="18px">
                                <ListIcon as={Search2Icon} color="white" />
                            </ListItem>
                        </List>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}