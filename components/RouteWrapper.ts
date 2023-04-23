import { useRouter } from 'next/router';

const RouterWrapper = ({ children }) => {
  const router = useRouter();

  // add any global router logic here

  return children;
};

export default RouterWrapper;