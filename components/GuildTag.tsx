// chakra imports
import {
  Box,
  Link,
  Image,
  Heading,
  useMultiStyleConfig,
  useTheme,
} from '@chakra-ui/react';

// ghost types import
import { Tag } from '@tryghost/content-api';

// GuildTag Definition.
export interface GuildTagProps {
  variant: string;
  guild: Tag;
}

export default function GuildTag({
  variant,
  guild,
}: GuildTagProps): JSX.Element {
  let posts = guild.count!.posts;

  const styles = useMultiStyleConfig('GuildTag', { variant });

  let showCount = posts < 0 ? false : true;

  return (
    <Box sx={styles.container}>
      <Link sx={styles.primarylink} href={`tag/${guild.slug}`}>
        <Image
          sx={styles.linkimage}
          src={guild.feature_image!}
          alt={guild.name}
          loading="lazy"
        />
      </Link>
      <Heading sx={styles.heading} as="h2">
        <Link className="global-underline" href={`tag/${guild.slug}`}>
          #{guild.name}
        </Link>
      </Heading>
      {showCount && (
        <Box sx={styles.postcount} as="span">
          {posts} {posts > 1 ? 'posts' : 'post'}
        </Box>
      )}
    </Box>
  );
}
