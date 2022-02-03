import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>
          <a href="/">Tailwindcss-React </a>
        </h1>
      </div>
      <ul>
        <li>
          <a href="/">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/food">
            <span>Food</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
