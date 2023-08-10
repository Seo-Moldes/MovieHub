
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Auth0Provider } from '@auth0/auth0-react'

const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: clientId } = import.meta.env
const redirectUri = window.location.origin + "/profile"

ReactDOM.createRoot(document.getElementById('root')!).render(

    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: redirectUri
        }}
    >
        <App />
    </Auth0Provider>

)
