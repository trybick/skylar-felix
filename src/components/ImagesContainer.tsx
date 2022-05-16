import { Flex, Image } from '@chakra-ui/react';
import imageSources from '../utils/images';

const ImagesContainer = () => (
  <Flex direction="column" align="center" justify="center" mt="30px">
    {imageSources.map((src) => (
      <Image key={src} mb="30px" borderRadius="14px" src={src} width="300px" />
    ))}
  </Flex>
);

export default ImagesContainer;
