import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Error from '@/pages/_error';
import { Loading } from '../shared/tools';
// import { useGetUserLogin } from "@/actions/auth";

const BaseLayout = (props) => {
   const { children, error, loading, user } = props;
   // const { responData } = useGetUserLogin()
   return (
      <div>
         <Header
            user={user}
            loading={loading}
         />
         <main>
            <div className="container">
               {error &&
                  <Error error={error} />
               }

               {loading &&
                  <Loading />
               }

               {!error &&
                  children
               }
            </div>
         </main>
         <Footer />
      </div>
   )
}

export default BaseLayout;
