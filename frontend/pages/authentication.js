import GoogleLogin, { GoogleLogout } from 'react-google-login';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useLogin } from '@/actions/auth';
import { setCookies } from '@/lib/middleware/CookiesManager'
import { useRouter } from 'next/router'
import noAuth from '@/hoc/noAuth';

const Login = () => {
    const [login] = useLogin();
    const router = useRouter();

    const responseGoogle = async (res) => {
        const dataUser = res.profileObj
        await login(dataUser)
            .then((res) => {
                setCookies(res.token, "IFA")
                setCookies(res.usrid, "usrid")
                setCookies(res.username,"usrnm")
                router.push('/profile')
            })
            .catch((e) => console.log(e))
    }

    return (
        <BaseLayout>
            <BasePage>
                <div>
                    <div className="txtLgn">
                        {/* Login User÷ */}
                    </div>
                    <div className="wrapLogin">
                        <GoogleLogin
                            clientId="521456251795-2jo7gjbfkl9of9hnk0t1ciq9uj2n2nm8.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={(res) => responseGoogle(res)}
                            onFailure={(res) => responseGoogle(res)}
                            // cookiePolicy={'single_host_origin'}
                            className="loginBtn"
                        />
                    </div>
                    {/* :
                        <div className="wrapLogin">
                            <GoogleLogout
                                clientId="521456251795-2jo7gjbfkl9of9hnk0t1ciq9uj2n2nm8.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={() => setUserData()}
                                onLogoutFailure={err => console.log(err)}
                                className="loginBtn"
                            />
                            <h3>name : {userData && userData.name}</h3>
                        </div>
                    } */}
                </div>
            </BasePage>
        </BaseLayout>
    )
}

export default noAuth(Login);