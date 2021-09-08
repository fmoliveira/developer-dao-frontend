import Head from "next/head";
import "tailwindcss/tailwind.css";
import RequestProvider from "../components/RequestProvider";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Developer DAO</title>
				<meta
					name="description"
					content="Frontend interface for Developer DAO - Devs for Revolution."
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
				<meta name="apple-mobile-web-app-title" content="Developer DAO" />
				<meta name="application-name" content="Developer DAO" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<RequestProvider>
				<Component {...pageProps} />
			</RequestProvider>
		</>
	);
}
