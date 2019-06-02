<template>
    <div>
        <mt-header :title="content">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button } from 'mint-ui';
    import { Header } from 'mint-ui';

    Vue.component(Header.name, Header);
    Vue.component(Button.name, Button);

    export default {
        props:{
            content:Object
        }
    }
</script>

<style lang="less" scoped>
    
</style>