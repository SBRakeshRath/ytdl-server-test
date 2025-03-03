process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

import axios, { AxiosProxyConfig } from 'axios';

async function testProxy(proxy:AxiosProxyConfig) {
    console.log('Testing proxy %O', proxy);
    try {
        const response = await axios.get("https://postman-echo.com/ip", {
            proxy,
        });
        if (response.status === 200) {
            console.log(response.data)
            console.log(`Proxy %O is working. Your IP: ${response.data.origin}`, proxy);
        } else {
            console.log(`Proxy %O returned status code ${response.status}`, proxy);
        }
    } catch (error) {
        console.log(error)
        console.log(`Error occurred while testing proxy %O: ${error.message}`, proxy);
    }
}

async function main() {
    const proxy = {
        host: 'proxy.toolip.io',
        port: 31113,
        auth: {username: 'tl-f997b121f24707789630d449d72094f2dd3a0b376831456a6420f2108fcdfe1a-country-us-session-e301c', password: 'wm22of5ecrn6'},
    };
    await testProxy(proxy);
}

main();

const username = 'tl-f997b121f24707789630d449d72094f2dd3a0b376831456a6420f2108fcdfe1a-country-us-session-e301c';
const password = 'wm22of5ecrn6';
const host = 'proxy.toolip.io';
const port = 31113;

const encodedUsername = encodeURIComponent(username);
const encodedPassword = encodeURIComponent(password);

const proxyUrl = `http://${encodedUsername}:${encodedPassword}@${host}:${port}`;

console.log(proxyUrl);