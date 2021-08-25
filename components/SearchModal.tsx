import {
  Box,
  Center,
  chakra,
  Input,
  LinkBox,
  LinkOverlay,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  StackDivider,
  UseModalProps,
  VStack,
} from '@chakra-ui/react';
import { PostOrPage } from '@tryghost/content-api';
import NextLink from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { getAllPosts } from '../lib/posts';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: UseModalProps['onClose'];
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState<PostOrPage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchPosts() {
      setIsLoading(true);
      const posts = await getAllPosts();
      console.log(posts);
      setResults(posts);
      setIsLoading(false);
    })();
    //   setIsLoading(true);
    //   fetch('https://api.example.com/items')
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setIsLoaded(true);
    //       setItems(result);
    //     })
    //     .catch((error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     });
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  const inputValueIsSearchable = inputValue.length >= 3;

  const filteredResults = results.filter((post) =>
    post.title?.toLocaleLowerCase()?.includes(inputValue.toLocaleLowerCase()),
  );

  function getHelpMessage() {
    if (!inputValueIsSearchable) {
      return 'Please enter at least 3 characters';
    }
    if (isLoading) {
      return 'Loading results...';
    }
    if (!filteredResults.length) {
      return 'No results found';
    }
    if (filteredResults.length === 1) {
      return '1 result found';
    }
    if (filteredResults.length > 1) {
      return `${filteredResults.length} results found`;
    }
    return '...';
  }

  function formatDate(d: string) {
    if (!d.length) {
      return '';
    }
    const date = new Date(d);
    return date.toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="calc(100% - 50px)" maxWidth="900px">
        <Box bgColor="var(--color-body)">
          <Input
            variant="unstyled"
            placeholder="Type your keywords"
            fontFamily="two"
            fontSize="30px"
            display="block"
            color="white"
            height="auto"
            padding="25px 20px"
            value={inputValue}
            onChange={handleInputChange}
          />

          <HelpBox>{getHelpMessage()}</HelpBox>
          {!filteredResults.length && isLoading && inputValueIsSearchable && (
            <Center justifyContent="center" padding="25px 20px">
              <Spinner color="red" />
            </Center>
          )}
          {inputValueIsSearchable && Boolean(filteredResults.length) && (
            <VStack
              alignItems="stretch"
              divider={<StackDivider borderColor="var(--color-three)" borderStyle="dashed" />}
            >
              {filteredResults.map((post) => (
                <LinkBox key={post.id} padding="20px">
                  <NextLink href={post.slug}>
                    <LinkOverlay href={post.slug} />
                  </NextLink>
                  <Box fontFamily="four" fontSize="small">
                    Published - {formatDate(post.published_at || '')}
                  </Box>
                  <Box fontFamily="two" marginTop="2">
                    {post.title}
                  </Box>
                </LinkBox>
              ))}
            </VStack>
          )}
        </Box>
      </ModalContent>
    </Modal>
  );
}

const HelpBox = chakra(Box, {
  baseStyle: {
    fontFamily: 'four',
    background: 'red',
    color: 'var(--color-font-two)',
    padding: '8px 20px',
    fontSize: 'small',
  },
});
