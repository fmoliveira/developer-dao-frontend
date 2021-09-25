import { useState } from "react";

import DeveloperDetails from "components/DeveloperDetails";
import DeveloperList from "components/DeveloperList";
import DeveloperSearch from "components/DeveloperSearch";
import { Header } from "components/Header";

import useDeveloperSearch, {
	DEVELOPER_COLUMNS,
} from "hooks/useDeveloperSearch";
import useWallet from "hooks/useWallet";
import Wallet from "components/Wallet";

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
		<>
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
			<DeveloperList
				columns={DEVELOPER_COLUMNS}
				data={resultList}
				onClick={selectToken}
			/>
			{token && (
				<DeveloperDetails
					token={token}
					isMainNet={isMainNet}
					onClaim={claimToken}
					onClose={() => selectToken("")}
				/>
			)}
		</>
	);
}
