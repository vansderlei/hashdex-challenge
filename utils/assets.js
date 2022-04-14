export const getAssets = async () =>{
    const config = {
        "headers": { "X-CoinAPI-Key": 'A5584394-66BF-4C8B-BEA8-D9E050202B82' }
    }
    try {
        const response = await fetch("https://rest.coinapi.io/v1/assets",  config );
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
     
}