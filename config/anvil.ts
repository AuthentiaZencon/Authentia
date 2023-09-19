import Anvil from "@anvilco/anvil";

const apiKey = process.env.NEXT_PUBLIC_ANVIL_API_KEY;
export const anvilClient = new Anvil({ apiKey });