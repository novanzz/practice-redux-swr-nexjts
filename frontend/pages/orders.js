import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import BaseApi from '@/lib/api/BaseApi';
import { useRouter } from 'next/router';
import { time, status } from '@/helpers/general_helper';
import { useState } from 'react';
import { useGetSearch } from '@/actions/order';
import { numFilter } from '@/helpers/general_helper';
// sementara
import { Loading, Modal } from "@/components/shared/tools";

const Orders = (props) => {
    const { data, errorStaticProps } = props
    const router = useRouter();
    const [getSearch] = useGetSearch()

    const [orders, setOrder] = useState(data)
    const [search, setSearch] = useState({search:""})

    //UI/UX
    const [msgResult, setMsgResult] = useState({
        loader: "overlayOff",
        overlay: "overlayOff",
        msgModal: null,
        modalTime: "overlayOff"
    })

    const listOrder = (data) => {
        return data.map((item, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td onClick={() => sendResult(item)}>
                    <a>
                        {time(item.created_at)}
                    </a>
                </td>
                <td>{item._product_id.name}</td>
                <td>{item._product_id.type}</td>
                <td>{item.phone}</td>
                <td>{item._product_id.detail.price}</td>
                <td>{item.transaction}</td>
                <td>{status(item.status)}</td>
            </tr>
        )
    }

    const sendResult = async (item) => {
        router.push('/order/[id]', `/order/${item._id}`)
    }

    const onSearch = (event) => {
        const val = numFilter(event.target.value)
        setSearch({
            ...search,
            search: val
        })
    }

    const getSearchData = (data) => {
        getSearch({ phone: data.search })
            .then((res) => {
                setOrder(res)
                setMsgResult({ loader: "overlayOff", modalTime: "overlayOff", overlay: "overlayOff" })
            })
            .catch((e) => {
                setMsgResult({ loader: "overlayOff", msgModal: "something wrong, failed transaction...!" })
            });
    }

    return (
        <BaseLayout
            error={errorStaticProps}
        >
            <BasePage>
                {orders &&
                    <div>
                        <div className="search">
                            <div className="wrap-search">
                                <input type="text" placeholder="Number.." value={search.search} onChange={event => onSearch(event)} />
                                <button onClick={() => getSearchData(search)}><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div style={{ overflowX: "auto" }}>
                            <table id="customers">
                                <tbody>
                                    <tr>
                                        <th>No</th>
                                        <th>Tanggal</th>
                                        <th>Provider</th>
                                        <th>Voucher</th>
                                        <th>No Telepon</th>
                                        <th>Harga</th>
                                        <th>Pembayaran</th>
                                        <th>status</th>
                                    </tr>
                                    {listOrder(orders.data)}
                                </tbody>
                            </table>
                        </div>
                        <Loading loading={msgResult.loader} />
                        {msgResult.msgModal &&
                            <Modal action={"overlayOn"} msgModal={msgResult.msgModal} />
                        }
                    </div>
                }
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticProps() {
    try {
        const { data } = await new BaseApi(process.env.GENERAL_TOKEN).getOrder("/api/listorder");
        return {
            props: { data },
            revalidate: 60
        }
    } catch (e) {
        return { props: { errorStaticProps: 500 } }
    }
}

export default Orders