import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"
import logo from "../images/logo.png"

const Links = () => (
  <StaticQuery
    query={graphql`
      {
        navigationJson {
          logo {
            alt
          }
          links {
            link
            label
          }
        }
      }
    `}

    render={data => (
      <>
        <Link className="text-lg font-bold" to="/">
          <img src={logo} alt={data.navigationJson.logo.alt} className="max-h-11" />
        </Link>
        {data.navigationJson.links.map(link => (
          <Link className="w-max text-lg rounded-full px-4 py-1 transition duration-150 ease-in-out hover:shadow" activeClassName="bg-secondary" to={link.link} key={link.label}>{link.label}</Link>
        ))}
      </>
    )}
  />
)

const Header = () => (
  <header className="flex flex-row items-center overflow-x-auto mx-auto py-4 shadow-sm">
    <nav className="flex flex-row flex-grow items-center space-x-6 pl-8">
      <Links />
    </nav>
    <aside className="flex flex-row-reverse pr-8">
      <Link className="button" to="/contact">Contact</Link>
    </aside>
  </header>
)

export default Header
