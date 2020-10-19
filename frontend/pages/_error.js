import BaseLayout from "@/components/layouts/BaseLayout"

const Error = (props, { statusCode }) => {
    return (
        <>
            { statusCode || props.error  ?
                <div className="err-container">
                    <div className="center-content">
                        <i className="fas fa-exclamation-circle fa-10x" style={{ color: "#3498db" }}></i>
                        <h3>Sorry, the page you visited something wrong...!</h3>
                    </div>
                </div>:
                <BaseLayout>
                    <div className="err-container">
                        <div className="center-content">
                            <i className="fas fa-exclamation-circle fa-10x" style={{ color: "#3498db" }}></i>
                            <h3>Sorry, the page you visited does not exist.</h3>
                        </div>
                    </div>
                </BaseLayout>
            }
        </>
    )
}

Error.getInitialProps = (props, { res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error