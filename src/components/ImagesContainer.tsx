import { Flex, Image } from '@chakra-ui/react';
import { imageSources } from 'utils/images';

const ImagesContainer = () => (
  <Flex align="center" direction="column" justify="center" mt="30px">
    {imageSources.map((src) => (
      <Image
        _hover={{ filter: 'drop-shadow(0 0 1.3rem deepskyblue)' }}
        borderRadius="20px"
        key={src}
        maxW="85%"
        mb="40px"
        src={src}
        width="400px"
      />
    ))}
  </Flex>
);

export default ImagesContainer;
