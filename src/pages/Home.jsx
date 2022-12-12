import { useOidc, useOidcIdToken } from '@axa-fr/react-oidc'
import React from 'react'
import Layout from '../Layout'

const Home = () => {
    const { login, logout, isAuthenticated } = useOidc()
    const { idToken, idTokenPayload } = useOidcIdToken();

    return (
        <Layout>
            {!isAuthenticated && <button onClick={() => login('/admin')}>Login</button>}

            {isAuthenticated &&
                <button onClick={() => logout()}>Logout</button>
            }

            {/* {idToken && 
                <p>
                    <div className="card-body">
                        <h5 className="card-title">ID Token</h5>
                        {<p className="card-text">{JSON.stringify(idToken)}</p>}
                        {idTokenPayload != null && <p className="card-text">{JSON.stringify(idTokenPayload)}</p>}
                    </div>
                </p>
            } */}
        </Layout>
    )
}

export default Home