import React, { useState, useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import TabMenu from '@/components/shared/TabMenuUser';
// import { useGetUser } from "@/actions/user";
import withAuth0 from '@/hoc/withAuth0';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { GoogleLogout } from 'react-google-login';
// import { delCookies } from '@/lib/middleware/CookiesManager'

const Profile = (props) => {
  // const [getUser] = useGetUser()
  // const [user, setUser] = useState(null)
  // const router = useRouter()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = {
  //         usrid: props.user.usrid,
  //         token: props.user.token
  //       }
  //       const result = await getUser(data)
  //       setUser(result.data);
  //     } catch (e) {
  //       if (e.status == 401) {
  //         router.push("/")
  //       }
  //     }
  //   };
  //   fetchData();
  // }, []);

  //   const logout = props => {
  //     delCookies("IFA")
  //     delCookies("usrid")
  //     delCookies("usrnm")
  //     router.push('/authentication')
  // }


  return (
    // <>
    //   {
    //     user ?
    <BaseLayout
      user={props.user}
    >
      <BasePage>
        <TabMenu />
        <h2>
          Nama : {props.user.name}
        </h2>
        <Link href='/api/logout'>
          <a>Logout</a>
        </Link>
        {/* <div className="containerUser">
              <h1>
                {user.name}
              </h1>
              <div className="wrapLogin">
                <GoogleLogout
                  clientId="521456251795-2jo7gjbfkl9of9hnk0t1ciq9uj2n2nm8.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={(res) => logout(res)}
                  onLogoutFailure={err => console.log(err)}
                  className="loginBtn"
                />
              </div>
            </div> */}
      </BasePage>
    </BaseLayout>
    //       : ""
    //   }
    // </>

  )
}

export default withAuth0(Profile)("user");