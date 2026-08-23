# kaia-x402-sample

x402 sample code for kaia testnet chain

## setup

```bash
pnpm i
```

```bash
cp pkgs/client/.env.example pkgs/client/.env
cp pkgs/server/.env.example pkgs/server/.env
cp pkgs/facilitator/.env.example pkgs/facilitator/.env
```

## How to work

1. start facilitator 

```bash
pnpm facilitator run dev
```

Please check it

```bash
curl http://localhost:4022/supported
```

```json
{
    "kinds": [
        {
            "x402Version": 2,
            "scheme": "exact",
            "network": "eip155:1001"
        },
        {
            "x402Version": 2,
            "scheme": "upto",
            "network": "eip155:1001",
            "extra": {
                "facilitatorAddress": "0x3e5fE9717398d98Aae8A8F435Bf8c29C5aa0d18b"
            }
        }
    ],
    "extensions": [],
    "signers": {
        "eip155:*": [
            "0x3e5fE9717398d98Aae8A8F435Bf8c29C5aa0d18b"
        ]
    }
}
```

2. x402 backend server(Resource server)

```bash
pnpm x402server run dev
```

Please check it

```bash
curl http://localhost:4021/health
```

3. run client script

```bash
pnpm x402client run dev
```

example result:

```bash
status: 200
headers: Object [AxiosHeaders] {
  'cache-control': 'private',
  'content-type': 'application/json',
  'payment-response': 'eyJzdWNjZXNzIjp0cnVlLCJwYXllciI6IjB4ZTZBQTFCNjBjNEVDNzYwNjY4ZEIzQzA2ZDdBODk0YzVGZDM5RDBhYSIsInRyYW5zYWN0aW9uIjoiMHgxMGI1Yzg4NDkwZjYyMDA3NGI0NjI1ODk1NWYzYTk1MzhkMGMzY2MwMzkyMTM1ZGY3OGI5ZjVlY2Q0MjQwZGEzIiwibmV0d29yayI6ImVpcDE1NToxMDAxIn0=',
  'content-length': '47',
  date: 'Sun, 23 Aug 2026 12:51:02 GMT',
  connection: 'keep-alive',
  'keep-alive': 'timeout=5'
}
{ report: { weather: 'sunny', temperature: 70 } }
Response: { report: { weather: 'sunny', temperature: 70 } }
Payment settled: {
  success: true,
  payer: '0xe6AA1B60c4EC760668dB3C06d7A894c5Fd39D0aa',
  transaction: '0x10b5c88490f620074b46258955f3a9538d0c3cc0392135df78b9f5ecd4240da3',
  network: 'eip155:1001'
}
```