import React from 'react'

// props Drilling 01
// const Header = (prop) => {
//   return (
//      <header>
//         <p>{prop.title}</p>
//       </header>
//   )
// }

// props Deconstruction 02
// const Header = ({title}) => {
//   return (
//      <header>
//         <p>{title}</p>
//       </header>
//   )
// }
// export default Header

// Default props 03
const Header = ({title}) => {
  return (
     <header>
        <p>{title}</p>
      </header>
  )
}
  Header.defaultProps = {
    title : "Main Teams"
  }
export default Header
