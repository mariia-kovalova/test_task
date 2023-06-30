import { Form } from 'components/Form';
import { RegisterSuccess } from 'components/Form/components/RegisterSuccess';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero';
import { Users } from 'components/Users';
import { useUser } from 'hooks/useUser';

export const App = () => {
  const { userId } = useUser();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Users />
        {!userId && <Form />}
        {userId && <RegisterSuccess />}
      </main>
    </>
  );
};
