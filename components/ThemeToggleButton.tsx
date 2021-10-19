import { DarkMode, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function ThemeToggleButton() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<DarkMode>
			<IconButton
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				aria-label={`Switch to ${
					colorMode === "light" ? "dark theme" : "light theme"
				}`}
				onClick={toggleColorMode}
			/>
		</DarkMode>
	);
}
