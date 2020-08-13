import { useRouter } from 'next/router';

export default function B () {
  const router = useRouter();
  return (
    <span>{router.query.id}</span>
  )
}