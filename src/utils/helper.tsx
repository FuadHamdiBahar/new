export function getBaseUrl() {
    if (process.env.NODE_ENV == "production") {
        return process.env.API_URL_PROD;
    } else {
        return 'https://apis.sipakamaseta.com/api/v1';
    }
}

