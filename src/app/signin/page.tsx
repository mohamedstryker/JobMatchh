import { Metadata } from 'next';
import SignInViewPage from '@/features/auth/components/sigin-view';

export const metadata: Metadata = {
  title: 'JobMatch | Sign In',
  description: 'Sign In page for JobMatch.'
};

export default async function Page() {
  return <SignInViewPage />;
}
