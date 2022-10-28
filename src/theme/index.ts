import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Readex Pro, ${base.fonts?.heading}`,
    body: `Readex Pro, ${base.fonts?.body}`,
  },
});

export default theme;
