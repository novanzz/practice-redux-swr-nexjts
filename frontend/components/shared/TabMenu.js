import { useState } from 'react';
import Link from 'next/link';

const TabMenu = () => {

    //UI/UX
    const [active, setActive] = useState("");

    const hooverActive = () => {
        setActive(active => active == "active" ? active = "" : active = "active")
    }
    return (
        <div className="headTab row">
            <Link href={`/`}>
                <a className={`col-3 col-head ${active} `}><i className="fas fa-mobile-alt"></i><div>Pulsa</div></a>
            </Link>
            <Link href={`/package`}>
                <a className={`col-3 col-head ${active} `}><i className="fas fa-wifi"></i><div>Paket data</div></a>
            </Link>
            <a className={`col-3 col-head ${active} `} href="#contact"><i className="fas fa-bolt"></i><div>PLN</div></a>
            <a className={`col-3 col-head ${active} `} href="#about"><i className="fas fa-file-invoice"></i><div>Voucher</div></a>
        </div>
    )
}

export default TabMenu;