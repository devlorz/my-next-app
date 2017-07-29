import Link from 'next/link'

export default () => (
  <Link as={'/p/hello-nextjs'} href={'/post?title=Hello%20Next.js'}>
    <a>Hello Next.js</a>
  </Link>
)