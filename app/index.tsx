import { Redirect } from "expo-router";
import { CURRENT_RULESET } from "@/constants/currentRuleset";

const Home = () => <Redirect href={`/overview/${CURRENT_RULESET}`} />;

export default Home;
