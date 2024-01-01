import { Image } from '@chakra-ui/react';

import Meh from '../assets/meh.webp';
import ThumbsUp from '../assets/thumbs-up.webp';
import BullsEye from '../assets//bulls-eye.webp';

interface EmojiProps {
  rating: number;
}

const Emojis = ({ rating }: EmojiProps) => {
  if (!rating) {
    return null;
  }
  const imageSrc = rating >= 5 ? Meh : rating >= 4 ? ThumbsUp : BullsEye;
  const imageAlt =
    rating >= 5 ? 'meh' : rating >= 4 ? 'thumbs up' : 'bulls eye';
  return (
    <Image marginTop="1rem" boxSize="2rem" src={imageSrc} alt={imageAlt} />
  );
};

export default Emojis;
