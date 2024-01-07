import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';

import Platform from '../entities/Platform';

interface PlatformListProps {
  platforms: Platform[];
}
const PlatformList = ({ platforms = [] }: PlatformListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: FaGlobe,
  };

  if (!platforms.length) {
    return null;
  }

  return (
    <HStack marginY=".7rem">
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformList;
