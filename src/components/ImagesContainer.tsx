import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import imageSources from '../utils/images';

const MotionImage = motion(Image);

const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { opacity: { delay: 0.3, duration: 3 } },
};

const ImagesContainer = () => (
  <Flex direction="column" align="center" justify="center" mt="30px">
    {imageSources.map((src) => (
      <MotionImage
        key={src}
        mb="30px"
        borderRadius="14px"
        src={src}
        width="300px"
        {...motionProps}
      />
    ))}
  </Flex>
);

export default ImagesContainer;
