import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { useBuyCredit } from '@/actions/credit';
import CelluarApi from '@/lib/api/celullar';
import * as actionCreators from "@/store/actions/index";
import { slug,numFilter } from '@/helpers/general_helper';
import { useGetUser0 } from '@/actions/user';

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Highlight from '@/components/shared/Highlight';
import TabMenu from '@/components/shared/TabMenu';

// sementara
import { Loading, Modal } from "@/components/shared/tools";
import { user } from '../store/actions';

const Home = (props) => {
  const { providerPrice, errorStaticProps } = props
  const router = useRouter();
  const [buyCredit] = useBuyCredit()
  
  //auth0
  const {responData, loadingSWR} = useGetUser0()

  //dummy
  const metodTf = [{name:"ovo"}, {name:"gopay"}, {name:"bri"},{name:"bca"},{name:"mandiri"}]

  const [provider, setProvider] = useState(null);
  const [listPriceProduct, setlistPriceProduct] = useState([]);
  const [price, setPrice] = useState(null)
  const [transfer, setTransfer] = useState(null)
  const [phone, setPhone] = useState({ phone: "" })
  const [chooseCard, setChooseCard] = useState(null)

  //UI/UX
  const [dropShow, setDropShow] = useState({ provider: "", transfer: "" })
  const [msgResult, setMsgResult] = useState({
    loader: "overlayOff",
    overlay: "overlayOff",
    msgModal: null,
    modalTime: "overlayOff"
  })

  const onChangeHp = (event) => {
    const val = numFilter(event.target.value)
    setPhone({
      ...phone,
      phone: val
    })
  }

  const choosePrice = (value, i) => {
    setPrice({
      id: value._id,
      price: value.price
    })
    setChooseCard(i)
  }

  const chooseProvider = (value) => {
    setProvider({
      name: value.name
    })
    setDropShow("")
    setlistPriceProduct(value.detail)
    setPrice(null)
    setChooseCard(null)
  }

  const chooseTransfer = (value) => {
    setTransfer({
      name: value.name
    })
    setDropShow("")
  }
  const sendResult = async (phone, price, provider,transfer) => {
    const result = {
      provider_name: provider.name,
      phone: phone.phone,
      product_id: price.id,
      price: price.price,
      transaction: transfer.name,
      member_id : props.user && props.user.sub
    }
    setMsgResult({ overlay: "overlayOn", loader: "overlayOn" })
    await buyCredit(result)
      .then((res) => {
        props.onStoreResult(res)
        setMsgResult({ loader: "overlayOff", modalTime: "overlayOff", overlay: "overlayOff" })
        router.push('/credit/[slug]', `/credit/order-credit-${slug(result.provider_name)}`)
      })
      .catch((e) => {
        setMsgResult({ loader: "overlayOff", msgModal: "something wrong, failed transaction...!" })
      });
  }

  const renderItemProvider = (data) => {
    return data.map((item, index) =>
      <a key={index} target="_blank" onClick={() => chooseProvider(item)}>{item.name}</a>
    )
  }

  const renderItemTransfer = (data) => {
    return data.map((item, index) =>
      <a key={index} target="_blank" onClick={() => chooseTransfer(item)}>{item.name}</a>
    )
  }

  const renderItemPrice = (data) => {
    return data.map((item, index) =>
      <div className="col-3 col-xs-6 menu" key={index}>
        <div className={`hoover-card ${chooseCard == index && "hoover-choose"}`} onClick={() => choosePrice(item, index)}>
          <div className="card">
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <BaseLayout
      error={errorStaticProps}
      // user={responData}
      // loading={loadingSWR}
    >
      <BasePage>
        <Highlight />
        <TabMenu />
        {!errorStaticProps &&
          <>
            <h2 className="title-service"> Pulsa </h2>
            <div className="input-number">
              <div className="row">
                <div className="col-9">
                  <input id="phone" type="text" placeholder="No Handphone" value={phone.phone} onChange={event => onChangeHp(event)} />
                </div>
                <div className="col-3">
                  <div className="dropdown">
                    <button className="dropbtn" onClick={() => dropShow.provider == "show" ? setDropShow({ provider: "" }) : setDropShow({ provider: "show" })}>{provider !== null ? provider.name : "Provider"}</button>
                    <div className={`dropdown-content ${dropShow.provider}`}>
                      {renderItemProvider(providerPrice)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {listPriceProduct !== [] && renderItemPrice(listPriceProduct)}
              </div>
            </div>
            <br />
            {price !== null &&
              <div className="confirm-alert">
                <div className="alert info">
                  <strong>Info!</strong> Anda Membeli Pulsa {provider.name} dengan harga {price.price} dengan Nomor {phone.phone}
                </div>
                <br />
                <div className="row result-wrap">
                  <div className="col-xs-6 col-s-9">
                    <h3>Harga :</h3>
                    <h2>Rp {price.price}</h2>
                  </div>
                  <div className="col-xs-2 col-s-3 btn-result">
                    <Loading loading={msgResult.loader} />
                    {msgResult.msgModal &&
                      <Modal action={"overlayOn"} msgModal={msgResult.msgModal} />
                    }
                    <div className="dropdown-small">
                      <button className="button button3 btn-tf" onClick={() => dropShow.transfer == "show" ? setDropShow({ transfer: "" }) : setDropShow({ transfer: "show" })}>{transfer !== null ? transfer.name : "Pembayaran"}</button>
                      <div className={`dropdown-content-small ${dropShow.transfer}`} style={{ overflowY: "auto" }}>
                        {renderItemTransfer(metodTf)}
                      </div>
                    </div>
                    {transfer && phone.phone !== "" && <button className="button button3 btn-rs" onClick={() => sendResult(phone, price, provider,transfer)}> Beli </button>}
                  </div>
                </div>
              </div>
            }
          </>
        }
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  try {
    let providerPrice = [];
    const { data } = await new CelluarApi(process.env.GENERAL_TOKEN).getProvider();
    providerPrice = data.data
    return {
      props: { providerPrice },
      revalidate: 60
    }
  } catch (e) {
    console.error(e)
    return { props: { errorStaticProps: 500 } }
  }
}

export const mapStateToProps = state => {
  return {
    purchase: state.purchase.result,
    user:state.user.result
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    onStoreResult: (result) => dispatch(actionCreators.savePayment(result))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);