import Link from 'next/link'

const SHA = process.env.NEXT_PUBLIC_SHA ? process.env.NEXT_PUBLIC_SHA.slice(0, 6) : 'nada'

export default function IndexPage() {
  return (
    <div>
      Show me the shaaaaaa: {SHA}
    </div>
  )
}
