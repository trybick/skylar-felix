import { Flex, Icon, Link } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => (
  <Flex justify="center" m="10px 0 30px">
    <Link href="https://github.com/trybick/skylar-life" isExternal>
      <Icon as={VscGithub} color="skyblue" boxSize="22px" />
    </Link>
  </Flex>
);

export default Footer;
