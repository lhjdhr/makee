<template>
    <div id="app">
        <HeaderGuide v-show="!$route.meta.showHeader"/>
        <router-view/>
        <FooterGuide v-show="!$route.meta.showFooter"/>
    </div>
</template>

<style>
    body{
        overflow-x: hidden;
    }
</style>


<script>
    import HeaderGuide from './components/HeaderGuide.vue'
    import FooterGuide from './components/FooterGuide.vue'

    import 'font-awesome/css/font-awesome.min.css'
    
    export default {
        name: 'App' ,
        components: {
            FooterGuide,
            HeaderGuide
        }
    }
</script>
