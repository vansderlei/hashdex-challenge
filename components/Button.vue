<template>
    <div class="button bg-blue-500 hover:bg-blue-400 text-white mx-6 font-semibold ring-2 ring-gray-200 px-8">
        <button @click="action">
            <slot>{{title}}</slot>
        </button>
    </div>
</template>

<script>

export default {
    name: 'Button',
    props:["action", "title"]
}
</script>