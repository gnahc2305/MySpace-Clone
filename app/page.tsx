import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default function Home() {
  const session = getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div>
      <h1>Welcome to NextSpace!</h1>
      <p>
        A next-gen social media app to connect with frens inspired by MySpace
      </p>
      <p>To get started, sign up for an account</p>
    </div>
  )
}
