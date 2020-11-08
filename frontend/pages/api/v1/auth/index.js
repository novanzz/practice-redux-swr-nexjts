export default async (req, res) => {
    try {
        // var IFA = req.headers.cookie.split("; ").find(c => c.trim().startsWith("IFA="))
        // IFA ? IFA = IFA.replace("IFA=",""):IFA
        // var usrid = req.headers.cookie.split("; ").find(c => c.trim().startsWith("usrid="))
        // usrid ? usrid = usrid.replace("usrid=",""):usrid
        var cookie = req.headers.cookie
        var usrnm = null
        if (cookie) {
            usrnm = req.headers.cookie.split("; ").find(c => c.trim().startsWith("usrnm="))
            usrnm ? usrnm = usrnm.replace("usrnm=", "").replace("%20", " ") : usrnm = null
        }
        // const user = {
        //     token: IFA,
        //     usrid: usrid,
        //     username: usrnm
        // }
        res.status(200).json(usrnm);
    } catch (e) {
        res.status(e.status || 400).json({ message: 'Api error' });
    }
}