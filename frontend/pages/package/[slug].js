import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { status } from '@/helpers/general_helper';

import BaseLayout from '@/components/layouts/BaseLayout'
import * as actionCreators from '@/store/actions/index'

const Detail = (props) => {
    const { purchase, ctr } = props
    const router = useRouter();
    useEffect(() => {
        !props.purchase ? router.push('/package', `/package`) : ''
    });
    return (
        <>
            {props.purchase !== null &&
                <BaseLayout>
                    <div className="cardDetailPay">
                        <h1>Detail Pembelian</h1>
                        <div className="container">
                        <h2>Order #{props.purchase.id_payment}</h2>
                            <h2>Metode Pembayaran : {props.purchase.transaction}</h2>
                            <h2>Status : {status(props.purchase.status)}</h2>
                            <h2>No Telepon : {purchase.phone}</h2>
                            <h2>Harga : {props.purchase.price}</h2>
                            <h2>Pembelian : {props.purchase.type} {props.purchase.provider_name} {props.purchase.product_name}</h2>
                            <button onClick={()=>router.push('/package', `/package`)}>Kembali</button>
                        </div>
                    </div>
                    {/* <button onClick={() => props.onStoreResult("maksud")}>Add</button>
                        <button onClick={() => props.onIncrement("testessr")}>increment</button> */}
                </BaseLayout>
            }
        </>

    )
}

const mapStateToProps = state => {
    return {
        purchase: state.purchase.result,
        ctr: state.ctr.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreResult: (result) => dispatch(actionCreators.savePayment(result)),
        onIncrement: (result) => dispatch(actionCreators.increment(result))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail)