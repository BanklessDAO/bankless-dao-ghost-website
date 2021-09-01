// chakra imports
import {
  Box,
  Link,
  Image,
  Heading,
  useMultiStyleConfig
} from '@chakra-ui/react';

// ghost types import
import { Tags } from '@tryghost/content-api';

// GuildTag Definition.
export interface GuildTagProps {
  size: string,
  variant: string,
  guild: Tags[],
}

export default function GuildTag({
  size,
  variant,
  guild,
}): JSX.Element {

  const styles = useMultiStyleConfig("GuildTag", { size, variant });

  console.log(styles);

  return (
    <Box __css={styles.container}>
        <Link __css={styles.primarylink} href={`tag/${guild.slug}`}>
          <Image __css={styles.linkimage} src={guild.feature_image} alt={guild.name} loading="lazy"/>
        </Link>
        <Heading __css={styles.heading} as="h2">
          <Link className="global-underline" href={`tag/${guild.slug}`}>#{guild.name}</Link>
        </Heading>
        { (variant == "primary") && (<Box as="span">{ count, (count.posts > 1) ? "posts" : "post" }</Box>) }
    </Box>
  );
}
