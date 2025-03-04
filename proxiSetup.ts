process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Use with caution!

import axios, { AxiosProxyConfig } from "axios";

async function testProxiy2(proxy: AxiosProxyConfig) {
  try {
    const response = await axios.get("https://www.youtube.com/", {
      proxy
      
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log(error.message)
  }
}

async function main() {
  const proxy = {
    host: "brd.superproxy.io",
    port: 33335, 
    prortocol:"http",
    auth: {
      username: "brd-customer-hl_a660941e-zone-isp_proxy1",
      password: "ejs8zu9hxlqc",
    },
  };
  await testProxiy2(proxy);
}

main();

// https://brd-customer-hl_a660941e-zone-scraping_browser1:a8wt4nmiw94d@brd.superproxy.io:9515