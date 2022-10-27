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

async function HomePage() {
  const { jobs, studies } = await getData();

  return <Home jobs={jobs} studies={studies} />;
}

async function getData() {
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
    jobs,
    studies,
  };
}

export default HomePage;
