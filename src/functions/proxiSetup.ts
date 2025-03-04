import ytdl from "@distube/ytdl-core";
import { HttpsProxyAgent } from "https-proxy-agent";
import cookieAgent from "./createCookieAgent.js";
import cookieData from "./createCookieAgent.js";
import { urlencoded } from "express";

const host = "brd.superproxy.io";
const port = "33335";
const username = "brd-customer-hl_a660941e-zone-isp_proxy1";
const password = "ejs8zu9hxlqc";
// console.log(cookieAgent);

const proxyUri = `http://${encodeURIComponent(username)}:${password}@${host}:${port}`;
// const proxyUri = `https://brd-customer-hl_a660941e-zone-scraping_browser1:a8wt4nmiw94d@brd.superproxy.io:9515`;

const proxyAgent = ytdl.createProxyAgent({ uri: proxyUri, ...cookieData });

export default proxyAgent;
