import { gql } from '@apollo/client';

const initialLoad = gql`
  query InitialLoad {
    allJobs(orderBy: start_DESC) {
      id
      company
      description
      end
      start
    }

    allStudies(orderBy: start_DESC) {
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
