const https = require('http');
const querystring = require('querystring');
import { PROXY_IP,PROXY_PORT, BASE_URL } from '@/utils/const'
interface RequestParams {
    method?: string,
    url: string,
    headers?: object,
    data?: object | number | string,
    params?: object | number | string
}
interface ReauestFunc {
    (opt: RequestParams): any;
}
interface Data {
    code: string | number,
    message: string | undefined,
    data: object
}
const request: ReauestFunc = function ({ method = 'GET', url, headers, data ,params}: RequestParams): Promise<Function> {
    return new Promise((resolve, reject) => {
        const query = querystring.stringify(params)
        const contents = JSON.stringify(data)
        const path = BASE_URL + url +(params?'?'+query:'')
        const options = {
            timeout: 30000,
            hostname: PROXY_IP,
            port: PROXY_PORT,
            path,
            method,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': contents ? contents.length : 0,
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
                    const json: Data = JSON.parse(body)
                    resolve(() => json)
                });
            }
        )
        contents&&req.write(contents);
        req.end();
    }).then((func: Function) => {
        return func()
    })

}

export default request