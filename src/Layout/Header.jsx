import React from 'react'
import { Link } from 'react-router-dom'
import {useOidcUser} from '@axa-fr/react-oidc';


const Header = () => {
const {oidcUser} = useOidcUser();
  return (
    <header style={{display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 1px gray'}}>
        APP 

        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
        </nav>

        {oidcUser && <div style={{display: 'flex', justifyContent: 'space-between'}}> {oidcUser.name} </div> }
    </header>
  )
}

export default Header