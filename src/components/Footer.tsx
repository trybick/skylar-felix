import { Flex, Icon, Link } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => (
  <Flex justify="center" m="10px 0 20px">
    <Link href="https://github.com/trybick/skylar-life" isExternal>
      <Icon as={VscGithub} boxSize="22px" color="skyblue" />
    </Link>
  </Flex>
);

export default Footer;
