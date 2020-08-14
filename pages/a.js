import { useRouter } from 'next/router';
import Link from 'next/link';

function A({ router, name }) {
  <>
    <Link href="#aaa">
      <a>A </a>
    </Link>
    <style jex>{`
       a {
         color: blue;
       }
    `}</style>
  </>;
}

A.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '2222anke222222',
      });
    }, 1000);
  });

  return await promise;
};

export default A;
