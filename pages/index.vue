<template>
	<div class="container flex flex-col mx-auto p-8">
		<Title>{{title}}</Title>
		<div class="action flex">
			<input class="border border-sky-500 px-2" type="search" placeholder="search..." autocomplete="off" name="asset-value" id="asset-value" v-model="searchValue">
			<Button :action="setNewAsset">Adicionar</Button>
		</div>
		<div class="grid grid-rows-4 grid-flow-row gap-4 grid-cols-6 max-w-screen-xl  py-8 w-full">
			<List  v-for="asset in assets" :key="asset.asset_id" :asset="asset"/>		
		</div>
	</div>
</template>

<script>
import Title from "../components/Title"
import List from "../components/List"
import Button from "../components/Button"
import { getAssets } from "../utils/assets"
export default {
	components:{
		Title, List, Button
	},
	data(){
		return{
			title: 'Ativos',
			searchValue: '',
			refreshInterval: 30000,
			allAssets: [],
			assets: []
		}
	},
	async created(){
		await this.setAllAssets()
		this.getBitcoin()
		setInterval(async () => { await this.setAllAssets() }, this.refreshInterval);
	},
	methods:{
		async setAllAssets(){
			this.allAssets = await getAssets()
		},
		getBitcoin(){
			this.assets.push(this.allAssets.find(asset => asset.asset_id === 'BTCS'))
		},
		setNewAsset(){
			let isAlreadyIncluded = false
			this.assets.forEach(alreadyIncludedAsset => {
				if (alreadyIncludedAsset.name.toLowerCase() === this.searchValue.toLowerCase()) isAlreadyIncluded = true
			})
			if(isAlreadyIncluded) return alert ("Asset already included")
			const findedAsset = this.allAssets.find(asset => asset.name.toLowerCase() === this.searchValue.toLowerCase() && asset.type_is_crypto === 1)
			findedAsset ? this.assets.push(findedAsset) : alert("Asset not found")
		}
	}
}
</script>