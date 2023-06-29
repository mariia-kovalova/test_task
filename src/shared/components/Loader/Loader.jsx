import { Overlay } from 'shared/styles/components/Overlay.styled';
import { Preloader } from '../Preloader';

export const Loader = () => {
  return (
    <Overlay>
      <Preloader />
    </Overlay>
  );
};

// https://10015.io/tools/css-loader-generator
