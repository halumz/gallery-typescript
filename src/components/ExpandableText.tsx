import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const MAX_LENGTH = 200;

interface ExpandableTextProps {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({
  children,
  maxLength = MAX_LENGTH,
}: ExpandableTextProps) => {
  if (!children || children.length <= maxLength) {
    return <Text>{children}</Text>;
  }

  const [expanded, setExpanded] = useState(false);
  const currentText = expanded
    ? children
    : `${children.slice(0, maxLength)}...`;
  return (
    <Text>
      {currentText}
      <Button
        onClick={() => setExpanded(!expanded)}
        marginLeft=".6rem"
        size="sm"
        _hover={{ background: '#ffff00', color: '#000' }}
      >
        {expanded ? 'Show less' : 'Show more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
