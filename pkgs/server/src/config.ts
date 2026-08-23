import { declareDiscoveryExtension } from "@x402/extensions/bazaar";
import "dotenv/config";

// chain id
export const CHAIN_ID = "eip155:1001" as `${string}:${string}`

// x402に関する設定
export const x402Config = {
  "GET /weather": {
    accepts: [
      {
        scheme: "exact",
        price: {
          amount: "10000000000000000000",
          asset: "0xE7C3D8C9a439feDe00D2600032D5dB0Be71C3c29" as `0x${string}`, // JPYC
          extra: {
            name: "JPY Coin",
            version: "1",
          },
        },
        network: CHAIN_ID as `${string}:${string}`, // Worldchain Sepolia
        payTo: process.env.EVM_ADDRESS as `0x${string}`,
      },
    ],
    description:
      "Get real-time weather data including temperature, conditions, and humidity",
    mimeType: "application/json",
    extensions: {
      ...declareDiscoveryExtension({
        input: { city: "San Francisco" },
        inputSchema: {
          properties: { city: { type: "string", description: "City name" } },
          required: ["city"],
        },
      }),
    },
  },
};
