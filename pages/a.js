import { useRouter } from 'next/router';
import Link from 'next/link';

const color = '#57f908';

const A = ({ router, name }) => (
  <>
    <Link href="#aaa">
      <a className="link">A AAAAAAAAAAA</a>
    </Link>
    <style jsx>{`
       a {
         color: blue;
       }
       .link {
         color: ${color};
       }
    `}</style>
  </>
)

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
