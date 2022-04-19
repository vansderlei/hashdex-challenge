import { apiKey } from "../data/apiKeys";


const config = { "headers": { "X-CoinAPI-Key": apiKey } }

export const getAllAssets = async () =>{
    try {
        const response = await fetch("https://rest.coinapi.io/v1/assets",  config );
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
        return []
    }
     
}
export const getFilteredAsset = async (assetId) =>{
    try {
        const response = await fetch(`https://rest.coinapi.io/v1/assets?filter_asset_id=${assetId}`,  config );
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
        return []
    }
     
}