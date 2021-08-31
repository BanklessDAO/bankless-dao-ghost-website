// next imports
import Head from 'next/head';


// chakra imports
import {
	chakra,
	Container,
	Box,
	Flex,
	Link,
	Image,
	Heading,
	Text
} from '@chakra-ui/react';

// component imports
import Navbar from './Navbar';
import Footer from './Footer';

// Component definition.
export default function Page({ cmsData }: any): JSX.Element {

	const { page } = cmsData;

	return (
		<>
			<Head>
				<title>{ page.title }</title>
				<meta name="description" content={page.excerpt} />
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Container maxW="100%" px="6%" className="test" overflow="auto">
  			    <Navbar />
				<chakra.article maxW="1200px" mx="auto">
		          <Box
		            className="post-header item is-hero is-image"
		            flexBasis="100%"
		            maxWidth="100%"
		            padding="50px 0"
		            minHeight="45vh"
		            marginTop="10vh"
		            marginBottom="8vh"
		            position="relative">
		            <Flex sx={{
		              _before: {
		                base: {
		                  ".item.is-hero.is-image &": {
		                    maxW: "491px"
		                  },
		                  ".item.is-hero &": {
		                    position: "absolute",
		                    width: "100%",
		                    content: "''",
		                    zIndex: "-2",
		                    top: "-6vh",
		                    right: "0",
		                    bottom: "-4vh",
		                    maxW: "59.7%",
		                    background: "radial-gradient(white 6%, transparent 0)",
		                    backgroundSize: "28px 28px"
		                  }
		                }
		              },
		              _after: {
		                base: {
		                  content: '""',
		                  background: "#ff4a97",
		                  width: "100%",
		                  position: "absolute",
		                  ".item.is-hero &": {
		                    zIndex: "-3",
		                    top: "-7vh",
		                    right: "70px",
		                    bottom: "4vh",
		                    maxW: "calc(59.7% - 65px)"
		                  },
		                  ".item.is-hero.is-image &": {
		                    maxW: "427px"
		                  }
		                }
		              }
		            }}
		              className="item-container global-color"
		            >
		              <Box className="item-image global-image global-color">
		                <Image src={page.feature_image} alt="image of publishing options" />
		              </Box>
		              <Box
		                className=".item-content"
		                transform={{
		                  base: "translateY(0)",
		                  sm: "translateY(-4vh)"
		                }}
		                padding={{
		                  base: "0",
		                }}
		                paddingRight="5%"
		                width="100%"
		              >
		                <Heading
		                  as="h1"
		                  fontSize={{
		                    base: "30px",
		                    lg: "65px",
		                    xl: "23px"
		                  }}
		                  lineHeight="1.3"
		                  maxW="1000px"
		                  margin={{
		                    base: "0 0 2vh -2px"
		                  }}
		                  marginTop="0px"
		                  marginLeft="-4px"
		                  letterSpacing="-.5px">{page.title}</Heading>
		                <Text className="item-excerpt">{page.excerpt}</Text>
		              </Box>
		            </Flex>
		          </Box>
		          <Box
		            className="postContent"
		            dangerouslySetInnerHTML={{ __html: page.html }}
		            maxW="700px"
		            margin="0 auto"
		          />
	        	</chakra.article>
        		<Footer />
      		</Container>
		</>
	)
}