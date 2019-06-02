const https = require('https');
const querystring = require('querystring');
import { PROXY_IP, BASE_URL } from '../utils/index'
interface RequestParams {
    method?: string,
    url: string,
    headers?: object,
    data?: object | number | string
}
interface ReauestFunc {
    (opt: RequestParams): Promise<Function>;
}
interface Data {
    code: string | number,
    message: string | undefined,
    data: object
}
const request: ReauestFunc = function ({ method = 'GET', url, headers, data }: RequestParams): Promise<Function> {
    return new Promise((resolve, reject) => {
        const contents = querystring.stringify(data)
        const options = {
            timeout: 30000,
            hostname: PROXY_IP,
            port: 443,
            path: BASE_URL + url,
            method,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': contents.length,
                ...headers
            }
        }
        const req = https.request(options,
            (res: any) => {
                let body: string = '';
                res.setEncoding('utf8');
                res.on('data', (chunk: string) => {
                    body += chunk
                });
                res.on('error', (e: Error) => {
                    reject(e)
                    console.log('请求错误' + e)
                });
                res.on('end', () => {
                    const json:Data = JSON.parse(body)
                    resolve(()=>json)
                    // console.log(body)
                    console.log('响应中已无数据')
                });
            }
        )
        // req.write(contents);
        req.end();
    })

}

export default request