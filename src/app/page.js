import Image from 'next/image'
import Nav from './components/nav/Nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-8">
      <Nav />
    </main>
  )
}
