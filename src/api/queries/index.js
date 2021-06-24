import { gql } from '@apollo/client';

const initialLoad = gql`
  query InitialLoad {
    jobs {
      id
      company
      description
      end
      start
    }

    studies {
      id
      description
      end
      institute
      start
      title
    }
  }
`;

export { initialLoad };
