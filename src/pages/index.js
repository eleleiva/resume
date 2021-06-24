import { ApiClient, queries } from 'api';
import { App } from 'components/App';

function MainPage({ jobs, studies }) {
  return <App jobs={jobs} studies={studies} />;
}

export async function getStaticProps() {
  const { data } = await ApiClient.query({
    query: queries.initialLoad,
  });

  return {
    props: {
      jobs: data.jobs,
      studies: data.studies,
    },
  };
}

export default MainPage;
