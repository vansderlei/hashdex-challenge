<template>
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="flex space-x-4">
            <div class="flex-1 py-1">
                <div class="rounded">{{asset.name}}</div>
                <div class="font-bold rounded col-span-1">{{asset.asset_id}}</div>
                <div class="asset-price rounded">USD: {{asset.price_usd ? String(asset.price_usd).slice(0,9) : "--"}}</div>
            </div>
        </div>
    </div>     
</template>

<script>

export default {
    name: 'Card',
    props:{
        asset:{},
        isLoading: {}
    }
}
</script>