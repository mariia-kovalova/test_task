import { useState } from 'react';
import PropTypes from 'prop-types';

import { Img, Wrap } from './Avatar.styled';

import fallback from 'shared/images/avatar.svg';
import { Preloader } from 'shared/components/Preloader';

export const Avatar = ({ photo, name }) => {
  const [isLoading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(photo);

  const handleOnLoad = () => {
    setLoading(false);
  };

  const handleOnError = () => {
    setImageUrl(fallback);
  };

  return (
    <>
      {isLoading && (
        <Wrap>
          <Preloader />
        </Wrap>
      )}
      <Img
        onError={handleOnError}
        onLoad={handleOnLoad}
        src={imageUrl}
        width="70"
        height="70"
        alt={name}
        loading="lazy"
      />
    </>
  );
};

Avatar.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
