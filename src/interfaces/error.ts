export interface AxiosErrorConfig {
    transitional: {
        silentJSONParsing: boolean;
        forcedJSONParsing: boolean;
        clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    baseURL: string;
    method: string;
    url: string;
    data: string;
}

export interface AxiosError {
    message: string;
    name: string;
    stack: string;
    config: AxiosErrorConfig;
    code: string;
    status: number;
}

const axiosError: AxiosError = {
    message: "Request failed with status code 400",
    name: "AxiosError",
    stack: "AxiosError: Request failed with status code 400\n    at settle (webpack-internal:///./node_modules/axios/lib/core/settle.js:24:12)\n    at XMLHttpRequest.onloadend (webpack-internal:///./node_modules/axios/lib/adapters/xhr.js:121:66)",
    config: {
        transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false
        },
        adapter: [
            "xhr",
            "http"
        ],
        transformRequest: [
            null
        ],
        transformResponse: [
            null
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        baseURL: "http://localhost:3001/",
        method: "post",
        url: "/contracts",
        data: "{\"number\":\"113\",\"retirada\":\"2023-07-31\",\"devolucao\":\"2023-08-23\",\"observacao\":\"Sem Observação\",\"tipo\":\"primeiro\",\"status\":\"Aberto\",\"pagamento\":2,\"client\":{},\"products\":[]}"
    },
    code: "ERR_BAD_REQUEST",
    status: 400
};
