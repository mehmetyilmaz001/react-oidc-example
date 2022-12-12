import React from 'react'
import Layout from '../Layout'
import { OidcSecure } from '@axa-fr/react-oidc';

const Admin = () => {
    
    return (
        <OidcSecure>
            <Layout>
                <h1>Admin</h1>
            </Layout>
        </OidcSecure>
    )
}

export default Admin