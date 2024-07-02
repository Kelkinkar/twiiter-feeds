import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp