import { useMemo } from "react";

export default function useDeveloperMap(developerList: any[]) {
	return useMemo(() => {
		const map = new Map<string, any>();

		developerList.forEach((developer) => {
			map.set(developer.id, developer);
		});

		return map;
	}, [developerList]);
}
