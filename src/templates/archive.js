import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const ArchivePage = ({ pageContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pageContext
  const previousNum = index - 1 === 1 ? "" : (index - 1).toString()
  const previousUrl = `${pathPrefix}/${previousNum}`
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`

  return (
    <Layout location={`/archive`} title={`Archive`}>
      <Bio />

      <div>
        {group.map(({ node }) => (
          <div
            key={node.id}
            className="blogListing"
            style={{
              marginBottom: rhythm(1 / 2),
            }}
          >
            <Link className="blogUrl" to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </div>
        ))}

        <h4>{pageCount} Pages</h4>
        <div className="previousLink">
          <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        </div>
        <div className="nextLink">
          <NavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    </Layout>
  )
}
export default ArchivePage
