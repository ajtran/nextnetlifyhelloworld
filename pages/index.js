import Link from 'next/link'
import Rollbar from 'rollbar'

const SHA = process.env.NEXT_PUBLIC_SHA ? process.env.NEXT_PUBLIC_SHA : 'nada'

const rollbarSingleton = new Rollbar({
  accessToken: process.env.NEXT_PUBLIC_ROLLBAR_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_ROLLBAR_ENVIRONMENT,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

export default function IndexPage() {
  rollbarSingleton.info('from anthony\'s nextjs app')
  return (
    <div>
      Show me the shaaaaaa: {SHA}
    </div>
  )
}
