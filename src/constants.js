const DEVELOPED_BASE_URL = 'netcmdb-loc.rs.ru:8082'
const BASE_URL = (() => {
    const protocol = window.location.protocol
    const hostname = window.location.hostname
    const port = window.location.port
    const developMode = hostname === 'localhost'
    return developMode ? `${protocol}//${DEVELOPED_BASE_URL}` : `${protocol}//${hostname}${port==='' ? '' : ':'}${port}`
})()
export const NET_DATA_URL = `${BASE_URL}/api/getNetData.json`
export const VRF_LIST_URL= `${BASE_URL}/api/getVrfList.json`
export const NET_SUBMIT_URL = `${BASE_URL}/api/saveNetData.json`

console.log("BASE API URL", BASE_URL)