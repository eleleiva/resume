import { serialize } from 'next-mdx-remote/serialize';

import { CMSClient, queries } from 'api/CMSClient';
import { Home } from 'components/Home';

const serializeByKeyInMap = (key) => async (item) => {
  const serializedValue = await serialize(item[key]);

  return {
    ...item,
    [key]: serializedValue,
  };
};

function HomePage({ jobs, studies }) {
  return <Home jobs={jobs} studies={studies} />;
}

export async function getStaticProps() {
  const { data } = await CMSClient.query({
    query: queries.initialLoad,
  });

  const jobs = await Promise.all(
    data.allJobs.map(serializeByKeyInMap('description'))
  );

  const studies = await Promise.all(
    data.allStudies.map(serializeByKeyInMap('description'))
  );

  return {
    props: {
      jobs,
      studies,
    },
  };
}

export default HomePage;
