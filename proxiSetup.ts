process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Use with caution!

import axios, { AxiosProxyConfig } from "axios";

async function testProxiy2(proxy: AxiosProxyConfig) {
  try {
    const response = await axios.get("https://www.google.com/", {
      proxy,
      
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const proxy = {
    host: "p.webshare.io",
    port: 80, 
    prortocol:"http",
    auth: {
      username: "vogavapt-rotate",
      password: "zeq7mo6c9jq2",
    },
  };
  await testProxiy2(proxy);
}

main();