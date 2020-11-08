import Redirect from '@/components/shared/Redirect';
import { getCookies } from '@/lib/middleware/CookiesManager'
// import { useGetUserLogin } from "@/actions/auth";
const withAuth = (Component) => role => {
    return props => {
        // const { responData, loadingSWR, errorSWR } = useGetUserLogin()
        // if (loadingSWR) {
        //     return <p>Loading...</p>
        // }
        if (role && !getCookies("IFA")) {
            return <Redirect ssr to="/" />
        } else {
            const data = {
                token: getCookies("IFA"),
                usrid: getCookies('usrid'),
                username: getCookies('usrnm')
            }
            return <Component user={data} {...props} />
        }
    }
}

export default withAuth;