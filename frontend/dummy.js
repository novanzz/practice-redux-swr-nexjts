// import React, { useState } from 'react';
// import { useGetCredit, useBuyCredit } from '@/actions/credit';

// import BaseLayout from '@/components/layouts/BaseLayout';
// import BasePage from '@/components/BasePage';
// import Highlight from '@/components/shared/Highlight';
// import TabMenu from '@/components/shared/TabMenu';

// // sementara
// import Lozad from "@/components/shared/Loading";
// import Loading from "@/components/shared/Loading";

// const Home = () => {
//   // const divStyle = {
//   //   color: 'blue'
//   // };
//   const [provider, setProvider] = useState(null);
//   const [listPriceProduct, setlistPriceProduct] = useState([]);
//   const [price, setPrice] = useState(null)
//   const [phone, setPhone] = useState({ phone: "" })
//   const [chooseCard, setChooseCard] = useState(null)
//   const [result, setResult] = useState(null)
//   //UI/UX
//   const [dropShow, setDropShow] = useState("")
//   const [msgResult, setMsgResult] = useState({
//     loader: "overlayOff",
//     overlay: "overlayOff",
//     msgModal: null,
//     modalTime: "overlayOff"
//   })

//   const { responData, loadingSWR, errorSWR } = useGetCredit();
//   //like swr
//   const [buyCredit, { feedback, error, loading }] = useBuyCredit()
//   // debugger
//   const onChangeHp = (event) => {
//     setPhone({
//       ...phone,
//       phone: event.target.value
//     })
//   }

//   const choosePrice = (value, i) => {
//     setPrice({
//       price_id: value.price_id,
//       price: value.price
//     })
//     setChooseCard(i)
//   }

//   const chooseProvider = (value) => {
//     setProvider({
//       product_id: value.product_id,
//       name: value.name
//     })
//     setDropShow("")
//     setlistPriceProduct(value.pricelist)
//     setPrice(null)
//     setChooseCard(null)
//   }

//   const sendResult = async (phone, price, provider) => {
//     try {
//       const result = {
//         phone: phone.phone,
//         price: price.price,
//         provider: provider.name
//       }
//       setResult(result)
//       setMsgResult({ overlay: "overlayOn", loader: "overlayOn" })
//       const finished = await buyCredit(result);
//       if (finished) {
//         setMsgResult({ loader: "overlayOff", modalTime: "overlayOff", overlay: "overlayOff" })
//       } else {
//         setMsgResult({ loader: "overlayOff", modalTime: "overlayOff", overlay: "overlayOff" })
//       }
//     } catch {
//       console.log("Error")
//       // let timeOut = new Promise((resolve, reject) => {
//       //   let wait = setTimeout(() => {
//       //     clearTimeout(wait);
//       //     resolve('Promise A win!');
//       //   }, 2000)
//       //   setMsgResult({ modalTime: "overlayOn", msgModal: "Error", loader: "overlayOff" })
//       //   return wait;
//       // });
//       // timeOut.then(() => setMsgResult({ loader: "overlayOff", modalTime: "overlayOff", overlay: "overlayOff", msgModal: null }))
//     }
//   }

//   const renderItemProvider = (data) => {
//     return data.map((item, index) =>
//       <a key={index} target="_blank" onClick={() => chooseProvider(item)}>{item.name}</a>
//     )
//   }

//   const renderItemPrice = (data) => {
//     return data.map((item, index) =>
//       <div className="col-3 col-xs-6 menu" key={index}>
//         <div className={`hoover-card ${chooseCard == index && "hoover-choose"}`} onClick={() => choosePrice(item, index)}>
//           <div className="card">
//             <p>{item.price}</p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <BaseLayout
//       error={errorSWR}
//       loading={loadingSWR}
//     >
//       <BasePage>
//         {/* <style jsx>
//           {`
//           .customClass{
//             color : red;
//           }
//         `}
//         </style>
//         <div>
//           <div className="customClass" >Hello World!</div>
//           <div style={divStyle}>Hello World!</div>
//         </div> */}
//         <Highlight />
//         <TabMenu />
//         <h2 className="title-service"> Pulsa </h2>
//         <div className="input-number">
//           <div className="row">
//             <div className="col-9">
//               <input id="phone" type="text" placeholder="No Handphone" onChange={event => onChangeHp(event)} />
//             </div>
//             <div className="col-3">
//               <div className="dropdown">
//                 <button className="dropbtn" onClick={() => dropShow == "show" ? setDropShow("") : setDropShow("show")}>{provider !== null ? provider.name : "Provider"}</button>
//                 <div className={`dropdown-content ${dropShow}`}>
//                   {loadingSWR ? <Lozad /> : renderItemProvider(responData.data)}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {listPriceProduct !== [] && renderItemPrice(listPriceProduct)}
//           </div>
//         </div>

//         <br />
//         {price !== null &&
//           <div className="confirm-alert">
//             <div className="alert info">
//               <strong>Info!</strong> Anda Membeli Pulsa {provider.name} dengan harga {price.price} dengan Nomor {phone.phone}
//             </div>
//             <br />
//             <div className="row result-wrap">
//               <div className="col-xs-6 col-s-9">
//                 <h3>Harga :</h3>
//                 <h2>Rp {price.price}</h2>
//               </div>
//               <div className="col-xs-2 col-s-3 btn-result">
//                 <Loading loading={msgResult.loader}/>
//                 {phone.phone !== "" && <button className="button button3" onClick={() => sendResult(phone, price, provider)}> Beli </button>}
//               </div>
//             </div>
//           </div>
//         }
//       </BasePage>
//     </BaseLayout>
//   )
// }

// export default Home;