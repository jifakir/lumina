import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-primary font-primary">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
