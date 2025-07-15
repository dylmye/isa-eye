import { Redirect } from "expo-router";
import { CURRENT_RULESET } from "@/constants/currentRuleset";

const OverviewHome = () => <Redirect href={`/overview/${CURRENT_RULESET}`} />;

export default OverviewHome;
