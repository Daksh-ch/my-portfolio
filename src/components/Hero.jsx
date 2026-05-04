import React from 'react'

const Hero = ({name, role, darkMode}) => {
  return (
    <section>
        <h1>Hello {name}</h1>
        <p>{darkMode ? "Dark Theme Active" : "Light Theme Active"}</p>
        <p>{role}</p>
        <button>View Projects</button>
    </section>
  )
}

export default Hero