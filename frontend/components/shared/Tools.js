import { useState } from 'react';

export const Loading = (props) => {
    const { loading } = props
    return (
        <div className={`overlayLoad ${loading ? loading : "overlayOn"}`}>
            <div className={`loader ${loading ? loading : "overlayOn"}`}>
                
            </div>
        </div>
    )
}

export const Modal = (props) => {
    const { action, msgModal } = props
    const [close, setClose] = useState(action)
    return (
        <div className={`overlayLoad ${close}`}>
            <div className="modal-content">
                <span className="close" onClick={()=>setClose("overlayOff")}>&times;</span>
                <p>{msgModal}</p>
            </div>
        </div>
    )
}