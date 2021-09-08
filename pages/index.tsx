import CommunityLinks from "../components/CommunityLinks";
import DevelopersList from "../components/DevelopersList";

export default function Home() {
	return (
		<>
			<h1 className="text-xl font-bold my-2">Developer DAO</h1>
			<CommunityLinks />
			<DevelopersList />
		</>
	);
}
