import Redirect from '@/components/shared/Redirect';
import { useGetUser0 } from '@/actions/user';

const withAuth = (Component) => role => {
    return props => {
        const { responData, loadingSWR } = useGetUser0();
        if (loadingSWR) {
            return <p>Loading...</p>
        }

        if (!responData) {
            return <Redirect ssr to="/api/login" />
        } else {
            // if (role && !isAuthorized(data, role)) {
            //     return <Redirect ssr to="/api/login" />
            // }

            return <Component user={responData} loading={loadingSWR} {...props} />
        }
    }
}

export default withAuth;