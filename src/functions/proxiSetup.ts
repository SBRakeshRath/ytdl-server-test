import ytdl from "@distube/ytdl-core";
import  { HttpsProxyAgent } from 'https-proxy-agent';

const host = "proxy.toolip.io"
const port = "31113"
const username = "tl-f997b121f24707789630d449d72094f2dd3a0b376831456a6420f2108fcdfe1a-country-us-session-e301c"
const password = "wm22of5ecrn6"


const proxyUri = `http://${username}:${password}@${host}:${port}`;

const proxyAgent = ytdl.createProxyAgent({ uri: proxyUri,

    
 });

export default proxyAgent;

