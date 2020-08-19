import { withRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Comp = dynamic(import('../components/comp'));

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

const color = '#57f908';

const A = ({ router, name, time }) => (
  <>
    <Title>{time}</Title>
    <Comp />
    <Link href="#aaa">
      <a className="link">
        {name} {router.query.id}
      </a>
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
);

A.getInitialProps = async () => {
  const moment = await import('moment');
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '2222anke222222',
        time: moment.default(Date.now() - 60 * 1000).fromNow(),
      });
    }, 1000);
  });

  return await promise;
};

export default withRouter(A);
