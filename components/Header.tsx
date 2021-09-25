import CommunityLinks from "./CommunityLinks";

export function Header() {
	return (
		<div className="text-center mb-8">
			<h1 className="text-3xl text-pink-400 text-center font-bold my-2">
				Developer DAO
			</h1>
			<p className="text-pink-100">
				A community of builders who believe in collective ownership of the
				internet
			</p>
			<CommunityLinks />
		</div>
	);
}
