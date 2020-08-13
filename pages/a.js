import { useRouter } from 'next/router';
import Link from 'next/link';


 function A({name}) {
  const router = useRouter();
  return (
    <Link href="#">
      <a>{router.query.name}------{name}</a>
    </Link>
  );
}

A.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '2222anke222222'
      })
    }, 1000)
  })

  return await promise
}

export default A;

