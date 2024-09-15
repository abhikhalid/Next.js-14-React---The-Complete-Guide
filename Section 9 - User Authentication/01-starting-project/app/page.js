import AuthForm from '@/components/auth-form';

//searchParams is a special prop that is added to all page components in Next.js application.
export default async function Home({ searchParams }) {
  const formMode = searchParams.mode || 'login';

  return <AuthForm mode={formMode} />;
}
