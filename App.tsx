import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomeScreen } from "./src/Home.screen";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar hidden />
      <HomeScreen />
    </QueryClientProvider>
  );
}
