import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '../state-management/gameQueryStore';

const SearchInput = () => {
  const setSearchQury = useGameQueryStore((state) => state.setSearchQuery);
  const ref = useRef<HTMLInputElement>(null);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current?.value) {
      setSearchQury(ref.current.value);
    }
  };

  return (
    <form style={{ width: '100%' }} onSubmit={onFormSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search..."
          borderRadius={10}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
