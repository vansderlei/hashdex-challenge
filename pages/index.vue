<template>
	<div class="container flex flex-col mx-auto p-8">
		<Title>{{title}}</Title>
		<div class="action flex">
			<input class="border border-sky-500 px-2" type="search" placeholder="search..." autocomplete="off" name="asset-value" id="asset-value" v-model="searchValue">
			<Button :action="setNewAsset">Adicionar</Button>
		</div>
		<div class="grid grid-rows-4 grid-flow-row gap-4 grid-cols-6 max-w-screen-xl  py-8 w-full">
			<Loader v-if="isLoading"/>
			<Card v-for="asset in assets" :key="asset.asset_id" :asset="asset" :isLoading="isLoading"/>					
		</div>
	</div>
</template>

<script>
import Title from "../components/Title"
import Card from "../components/Card"
import Button from "../components/Button"
import Loader from "../components/Loader"
import { getAssets } from "../utils/assets"
export default {
	components:{
		Title, Card, Button, Loader
	},
	data(){
		return{
			title: 'Ativos',
			searchValue: '',
			refreshInterval: 30000,
			isLoading: false,
			allAssets: [],
			assets: [],
		}
	},
	async created(){
		await this.setAllAssets(true)
		if(this.allAssets.error) return alert ('ERROR: Too many requests (API)')
		this.getBitcoin()
		setInterval(async () => { await this.setAllAssets(false) }, this.refreshInterval);
	},
	methods:{
		async setAllAssets(isLoading){
			this.isLoading = isLoading
			this.allAssets = await getAssets()
			this.isLoading = false
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
			findedAsset ? this.assets.push(findedAsset) : alert("Asset not found or not a crypto")
		}
	}
}
</script>