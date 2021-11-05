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
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { getAllPosts, urlForPost } from '../lib/posts';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: UseModalProps['onClose'];
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [inputValue, setInputValue] = useState('');
  const [errorValue, setErrorValue] = useState<String | null>(null);
  const [results, setResults] = useState<PostOrPage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  useEffect(() => {
    (async function fetchPosts() {
      setIsLoading(true);
      try {
        const posts = await getAllPosts();
        setResults(posts);
      } catch (error) {
        setErrorValue('There was an error fetching results');
      } finally {
        setIsLoading(false);
        setErrorValue(null);
      }
    })();
  }, []);

  const inputValueIsSearchable = inputValue.length >= 3;

  const filteredResults = results.filter((post) =>
    post.title?.toLocaleLowerCase()?.includes(inputValue.toLocaleLowerCase()),
  );

  useHotkeys('up', handleUpKey, {
    enableOnTags: ['INPUT'],
    enabled: isOpen,
  });

  useHotkeys('down', handleDownKey, {
    enableOnTags: ['INPUT'],
    enabled: isOpen,
  });

  useHotkeys('enter', handleEnterKey, {
    enableOnTags: ['INPUT'],
    enabled: isOpen,
  });

  function handleUpKey() {
    setActiveIndex((prevActiveIndex) => Math.max(prevActiveIndex - 1, 0));
  }

  function handleDownKey() {
    setActiveIndex((prevActiveIndex) =>
      Math.min(prevActiveIndex + 1, filteredResults.length - 1),
    );
  }

  function handleEnterKey() {
    // Be sure there's a result at activeIndex
    if (filteredResults[activeIndex] !== undefined) {
      router.push(urlForPost(filteredResults[activeIndex]));
      onClose();
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    setActiveIndex(0);
  }

  function getHelpMessage() {
    if (errorValue) {
      return errorValue;
    }
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
    return date.toLocaleString('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="calc(100% - 50px)" maxWidth="900px">
        <Box bgColor="var(--color-body)">
          <Input
            variant="unstyled"
            placeholder="Type your keywords"
            fontFamily="spartan"
            fontSize={{ sm: '15px', md: '30px' }}
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
              divider={
                <StackDivider
                  marginTop={0}
                  marginBottom={0}
                  borderColor="var(--color-three)"
                  borderStyle="dashed"
                />
              }>
              {filteredResults.map((post, index) => (
                <LinkBox
                  key={post.id}
                  padding="20px"
                  background={
                    activeIndex === index ? 'rgba(0,0,0, 0.3)' : 'transparent'
                  }
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={onClose}>
                  <NextLink href={urlForPost(post)}>
                    <LinkOverlay href={urlForPost(post)} />
                  </NextLink>
                  <Box fontFamily="mono" fontSize="small">
                    Published - {formatDate(post.published_at || '')}
                  </Box>
                  <Box fontFamily="spartan" marginTop="2">
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
    fontFamily: 'mono',
    background: 'red',
    color: 'var(--color-font-two)',
    padding: '8px 20px',
    fontSize: 'small',
  },
});
