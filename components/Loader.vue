<template>
    <!-- <svg class="animate-spin h-5 w-5 mr-3 fill-blue-500 stroke-cyan-500" viewBox="0 0 24 24"></svg> -->
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Loader',
    props:{
        isLoading: {}
    }
}
</script>