import Link from 'next/link'
import Rollbar from 'rollbar'

const rollbarSingleton = new Rollbar({
  accessToken: process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_ROLLBAR_ENVIRONMENT,
  payload: {
    client: {
      javascript: {
        code_version: process.env.NEXT_PUBLIC_SHA,
      }
    },
  },
  captureUncaught: true,
  captureUnhandledRejections: true,
})

export default function IndexPage() {
  rollbarSingleton.info('from anthony\'s nextjs app')
  return (
    <div>
      index page
    </div>
  )
}
