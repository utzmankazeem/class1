import React from 'react'

const Footer = ({length}) => {
    let tDay = new Date();
  return (
    <footer>
      <p>
        No. of teams is {length}|copyright &copy; {tDay.getFullYear()}
      </p>  
    </footer>
        
  )
}

export default Footer