import { useRouter } from 'next/router';
import React from 'react';
export default function UserDetail() {
  const router = useRouter();
  React.useEffect(() => {
  }, [router.isReady, router.query]);
  return (
    <div>{`Detail User Example page - ${router.query.id}`}</div>
  )
}
