import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {
  onSearchQuery: (search: string) => void;
}

const SearchInput = ({ onSearchQuery }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current?.value) {
      onSearchQuery(ref.current.value);
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
