export const getAssets = async () =>{
    const config = {
        //More Keys: ["A5584394-66BF-4C8B-BEA8-D9E050202B82", "C01C3C4A-BB60-4BCC-B76F-75690A5B314D"]
        "headers": { "X-CoinAPI-Key": '2DCECD1C-2D2E-4430-B4EF-9EB108179F1D' }
    }
    try {
        const response = await fetch("https://rest.coinapi.io/v1/assets",  config );
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
        return []
    }
     
}