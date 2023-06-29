import { usePagination } from 'hooks/usePagination';
import { users_link } from 'shared/constants/hyperlinks';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/components/Section';
import { Loader } from 'shared/components/Loader';
import { List, Item } from './Users.styled';
import { Card } from './components/Card';
import { PrimaryButton } from 'shared/styles/components/PrimaryButton.styled';

export const Users = () => {
  const { isLoading, showError, showList, users, showLoadMore, loadMore } =
    usePagination();

  return (
    <Container>
      <Section id={users_link} title="Working with GET request">
        {isLoading && <Loader />}
        {showError && <div>Sorry, something went wrong...</div>}
        {showList && (
          <List>
            {users.map(user => (
              <Item key={user.id}>
                <Card {...user} />
              </Item>
            ))}
          </List>
        )}
        {showLoadMore && (
          <PrimaryButton type="button" onClick={loadMore}>
            Show more
          </PrimaryButton>
        )}
      </Section>
    </Container>
  );
};
