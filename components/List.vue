<template>
    <div class="list bg-sky-500/100 p-4 rounded-lg">
        <div class="info">
            <div class="name flex text-white text-lg">
                <span>{{asset.name}}</span>
                <div class="asset-id">
                    <small class="text-white font-bold px-2">{{asset.asset_id}}</small>
                </div>
            </div>
            <div class="price">
                <span class="text-white">US$: {{asset.price_usd || 1}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Assets',
    props:{
        asset:{}
    }
}
</script>