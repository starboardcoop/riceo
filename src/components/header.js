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
        <Link to="/">
          <img src={logo} alt={data.navigationJson.logo.alt} className="max-h-11" />
        </Link>
        {data.navigationJson.links.map(link => (
          <Link className="w-max text-lg rounded-full px-4 py-1 transition hover:bg-secondary hover:bg-opacity-40" activeClassName="bg-secondary" to={link.link} key={link.label}>{link.label}</Link>
        ))}
      </>
    )}
  />
)

const Header = () => (
  <header className="bg-white flex flex-row items-center space-x-6 overflow-x-auto mx-auto px-4 md:px-8 py-4 shadow-sm">
    <nav className="flex flex-row items-center space-x-6">
      <Links />
    </nav>
    <div className="flex flex-row flex-grow justify-end items-center space-x-6">
      <Link className="button" to="/contact">Contact</Link>
    </div>
  </header>
)

export default Header
