import { useGetOrder } from '@/actions/order';
import { useRouter } from 'next/router';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { status } from '@/helpers/general_helper';

const Order = (props) => {
    const router = useRouter();
    const { responData, loadingSWR, errorSWR } = useGetOrder(router.query.id)
    console.log(responData)
    return (
        <BaseLayout
            error={errorSWR}
            loading={loadingSWR}
        >
            <BasePage>
                <div className="cardDetailPay">
                    <h1>Detail Pembelian</h1>
                    <div className="container">
                        {responData &&
                            <>
                                <h2>Order #{responData.data.id_payment}</h2>
                                <h2>Metode Pembayaran : {responData.data.transaction}</h2>
                                <h2>Status : {status(responData.data.status)}</h2>
                                <h2>No Telepon : {responData.data.phone}</h2>
                                <h2>Harga : {responData.data.price}</h2>
                                <h2>Pembelian : {responData.data.type} </h2>
                                <button onClick={() => router.push('/orders', `/orders`)}>Kembali</button>
                            </>
                        }
                    </div>
                </div>
            </BasePage>
        </BaseLayout>
    )
}

export default Order