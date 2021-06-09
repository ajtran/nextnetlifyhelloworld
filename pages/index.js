import Link from 'next/link'

const sha = process.env.NEXT_PUBLIC_SHA ? process.env.NEXT_PUBLIC_SHA : 'nada'

export default function IndexPage() {
  return (
    <div>
      Show me the shaaaaaa: {sha}
    </div>
  )
}
