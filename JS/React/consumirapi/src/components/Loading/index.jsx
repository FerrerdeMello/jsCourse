import PropTypes from 'prop-types';
import { ContainerLoading } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <ContainerLoading>
      <div />
      <span>Loading...</span>
    </ContainerLoading>
  );
}

Loading.deafultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.boll,
};
