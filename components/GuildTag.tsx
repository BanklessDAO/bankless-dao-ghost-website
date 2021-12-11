// chakra imports
import {
  Box,
  Image,
  Heading,
  useMultiStyleConfig,
  useTheme,
} from '@chakra-ui/react';

import Link from './Link';

// ghost types import
import { Tag } from '@tryghost/content-api';

// GuildTag Definition.
// tagLevel: [slug] is relative to here, not a level down
export interface GuildTagProps {
  variant: string;
  guild: Tag;
  tagLevel: boolean;
}

export default function GuildTag({
  variant,
  guild,
  tagLevel
}: GuildTagProps): JSX.Element {
  let posts = guild.count!.posts;

  let slugPath = tagLevel ? '' : 'tag/';

  const styles = useMultiStyleConfig('GuildTag', { variant });

  let showCount = posts < 0 ? false : true;

  return (
    <Box sx={styles.container}>
      <Link sx={styles.primarylink} href={slugPath + guild.slug}>
        <Image
          sx={styles.linkimage}
          src={guild.feature_image!}
          alt={guild.name}
          loading="lazy"
        />
      </Link>
      <Heading sx={styles.heading} as="h2">
        <Link className="global-underline" href={slugPath + guild.slug}>
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
