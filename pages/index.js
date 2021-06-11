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
    server: {
      root: 'webpack://_N_E/./',
    },
  },
  captureUncaught: true,
  captureUnhandledRejections: true,
})

function throwError() {
  try {
    const tomato = its.a.new.error.split()
  } catch (e) {
    rollbarSingleton.error(e)
  }
}

export default function IndexPage() {
  return (
    <div>
      <h1>
        index page {process.env.NEXT_PUBLIC_SHA}
      </h1>
      <div onClick={throwError}>
        click me for an errorrrrr
      </div>
    </div>
  )
}
