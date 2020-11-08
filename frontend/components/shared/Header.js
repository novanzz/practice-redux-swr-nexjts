import { useState, useEffect } from "react"
import Link from 'next/link';
import { useGetUser0 } from '@/actions/user';
import * as actionCreators from "@/store/actions/index";
import { connect } from 'react-redux';

const Header = (props) => {
  // const { user, loading } = props
  //auth0
  const { responData, loadingSWR } = useGetUser0()

  //UI/UX
  const [toggle, setToggle] = useState("")
  const onToggle = () => {
    setToggle(toggle => toggle == "responsive" ? toggle = "" : toggle = "responsive")
  }

  const Login = () => {
    return (
      <Link href='/authentication'>
        <a>Akun</a>
      </Link>
    )
  }

  useEffect(() => {
    props.onGetUser(responData);
  }, [responData]);

  return (
    <div className="header" id="myLinks">
      <Link href='/'>
        <a className="logo">Juragan Kuota</a>
      </Link>
      <a className="icon" onClick={() => onToggle()}>
        <i className="fa fa-bars"></i>
      </a>
      <div className={`header-right ${toggle} `}>
        <Link href='/'>
          <a >Home</a>
        </Link>
        <a href="#contact">Contact</a>
        <Link href='/orders'>
          <a>Orderan</a>
        </Link>
        {/* {
          user &&
          <Link href='/profile'>
            <a>{user}</a>
          </Link>
        }
        {
          !user &&
          <Login />
        } */}
        {
          responData &&
          <Link href='/profile'>
            <a>{responData.name}</a>
          </Link>
        }
        {
          !responData &&
          <Link href='/api/login'>
            <a>Login</a>
          </Link>
        }


      </div>
    </div>
  )
}

export const mapStateToProps = state => {
  return {
    user: state.user.result
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    onGetUser: (result) => dispatch(actionCreators.user(result))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);