const Page = ({pathname, query}) => (
  <div>
    <pre>{JSON.stringify(pathname)}</pre>
    <pre>{JSON.stringify(query)}</pre>
  </div>
)

Page.getInitialProps = async ({pathname, query}) => {
  return {
    pathname,
    query
  }
}

export default Page