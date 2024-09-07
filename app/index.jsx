import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function App() {
	return (
		<View className="flex-1 items-center justify-center">
			<Text className="text-3xl text-center p-4">Bidding Card Game!</Text>
			<StatusBar style="auto" />
			<Link className="text-blue-500" href="/game">
				Go to game!
			</Link>
		</View>
	);
}
