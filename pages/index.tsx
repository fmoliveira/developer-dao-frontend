import { useState } from "react";
import { VStack } from "@chakra-ui/react";

import DeveloperDetails from "components/DeveloperDetails";
import DeveloperList from "components/DeveloperList";
import DeveloperSearch from "components/DeveloperSearch";
import Wallet from "components/Wallet";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Layout } from "components/Layout";

import useDeveloperSearch, {
	DEVELOPER_COLUMNS,
} from "hooks/useDeveloperSearch";
import useWallet from "hooks/useWallet";

export default function Home() {
	const {
		walletInstalled,
		walletConnected,
		networkName,
		isMainNet,
		loading,
		connectWallet,
		claimToken,
	} = useWallet();

	const { setFilter, resultList, resultCount, visibleCount } =
		useDeveloperSearch();
	const [token, selectToken] = useState(null);

	return (
		<Layout>
			<VStack gridGap={[4, 8]}>
				<Header />
				<Wallet
					walletInstalled={walletInstalled}
					walletConnected={walletConnected}
					networkName={networkName}
					isMainNet={isMainNet}
					loading={loading}
					connectWallet={connectWallet}
				/>
				<DeveloperSearch
					onChange={setFilter}
					resultCount={resultCount}
					visibleCount={visibleCount}
				/>
				<DeveloperDetails
					token={token}
					isMainNet={isMainNet}
					onClaim={claimToken}
					onClose={() => selectToken("")}
				/>
				<DeveloperList
					columns={DEVELOPER_COLUMNS}
					data={resultList}
					onClick={selectToken}
				/>
				<Footer />
			</VStack>
		</Layout>
	);
}
