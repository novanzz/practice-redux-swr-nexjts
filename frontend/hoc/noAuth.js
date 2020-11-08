import Redirect from '@/components/shared/Redirect';
import { getCookies } from '@/lib/middleware/CookiesManager'

const noAuth = (Component) => {
    return props => {
        if (getCookies("IFA")) {
            return <Redirect ssr to="/profile" />
        }else{
            return <Component {...props} />
        }
    }
}

export default noAuth;