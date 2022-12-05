import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { imageSources } from 'utils/images';

const MotionImage = motion(Image);

const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { opacity: { delay: 0.5, duration: 2 } },
};

const ImagesContainer = () => (
  <Flex align="center" direction="column" justify="center" mt="30px">
    {imageSources.map((src: any) => (
      <MotionImage
        _hover={{ filter: 'drop-shadow(0 0 1.3rem deepskyblue)' }}
        borderRadius="20px"
        key={src}
        maxW="85%"
        mb="40px"
        src={src}
        width="400px"
        {...motionProps}
      />
    ))}
  </Flex>
);

export default ImagesContainer;
