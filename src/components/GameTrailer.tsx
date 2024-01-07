import useTrailers from '../hooks/useTrailers';

interface GameTrailerProps {
  id: number;
}

const GameTrailer = ({ id }: GameTrailerProps) => {
  const { data, isLoading, isRefetchError } = useTrailers(id);
  if (isLoading || isRefetchError || !data) {
    return null;
  }
  const firstTrailer = data.results[0];

  if (!firstTrailer) {
    return null;
  }
  return (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  );
};

export default GameTrailer;
