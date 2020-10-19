import Head from 'next/head';

const BasePage = props => {
  const {
    children 
  } = props;

  return (
    <>
      <Head>
        <title>Counter Pulsa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" key="description"/>
        <meta name="title" key="title" content="title" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
        {children}
      </React.Fragment>
    </>
  )
}

export default BasePage;