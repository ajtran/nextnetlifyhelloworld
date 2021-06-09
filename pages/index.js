import Link from 'next/link'

const SHA = process.env.NEXT_PUBLIC_SHA ? process.env.NEXT_PUBLIC_SHA.slice(0, 6) : 'nada'

console.log(SHA)

export default function IndexPage() {
  const shaString = 'what is ' + SHA
  return (
    <div>
      Show me the shaaaaaa: {shaString}
    </div>
  )
}
