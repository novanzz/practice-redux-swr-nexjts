import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import BaseApi from '@/lib/api/BaseApi';
import { useRouter } from 'next/router';
import { time, status } from '@/helpers/general_helper';

const Orders = (props) => {
    const { data, errorStaticProps } = props
    const router = useRouter();


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

    return (
        <BaseLayout
            error={errorStaticProps}
        >
            <BasePage>
                {data &&
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
                                {listOrder(data.data)}
                            </tbody>
                        </table>
                    </div>

                }
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticProps() {
    try {
        const { data } = await new BaseApi().getOrder("/api/listorder");
        return {
            props: { data },
            revalidate: 60
        }
    } catch (e) {
        return { props: { errorStaticProps: 500 } }
    }
}

export default Orders