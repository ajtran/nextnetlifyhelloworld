import Link from 'next/link'

const sha = process.env.NEXT_PUBLIC_SHA ? process.env.NEXT_PUBLIC_SHA : 'nada'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{sha}</div>
    </div>
  )
}
