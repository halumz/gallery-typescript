import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '../state-management/gameQueryStore';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const setSearchQuery = useGameQueryStore((state) => state.setSearchQuery);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current?.value) {
      setSearchQuery(ref.current.value);
      navigate('/');
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
