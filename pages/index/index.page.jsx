import { Counter } from './Counter'
import Layout from "#c/Layout";

export const metadata = {
  title: "Home"
}

function Page() {
  return (
    <Layout>
      <h1>Welcome</h1>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </Layout>
  )
}

export { Page }