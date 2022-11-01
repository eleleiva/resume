'use client';

import { MDXRemote } from 'next-mdx-remote';

function MDXRemoteWrapper(props) {
  return <MDXRemote {...props} />;
}

export { MDXRemoteWrapper };
