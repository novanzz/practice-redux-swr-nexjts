import { useState } from 'react';
import Link from 'next/link';

const TabMenuUser = () => {

    //UI/UX
    const [active, setActive] = useState("");

    const hooverActive = () => {
        setActive(active => active == "active" ? active = "" : active = "active")
    }

    return (
        <div className="headTabUser headTab row">
            <Link href={`/profile`}>
                <a className={`col-3 col-head ${active} `}><i className="fas fa-user"/> <div>Profile</div></a>
            </Link>
            <Link href={`/deposit`}>
                <a className={`col-3 col-head ${active} `}><i className="fas fa-money-bill-alt"></i> <div>Riwayat Deposit</div></a>
            </Link>
            <Link href={`/mutasi`}>
                <a className={`col-3 col-head ${active} `}><i className="fas fa-money-bill-alt">  </i><div>Mutasi Saldo</div></a>
            </Link>
            <Link href={`/transaction`}>
                <a className={`col-3 col-head ${active} `}><i className="fas fa-sync"> </i><div>Riwayat Transaksi</div></a>
            </Link>
        </div>
    )
}

export default TabMenuUser;