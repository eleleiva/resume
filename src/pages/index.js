import { CMSClient, queries } from 'api/CMSClient';
import { App } from 'components/App';

function MainPage({ jobs, studies }) {
  return <App jobs={jobs} studies={studies} />;
}

export async function getStaticProps() {
  const { data } = await CMSClient.query({
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
