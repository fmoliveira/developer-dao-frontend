import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

type Props = {
	children: ReactNode;
};

export default function RequestProvider({ children }: Props) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
