<template>
    <div>
        <div class="header">
            <h1>闻道有先后，术业有专攻</h1>
        </div>
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <a href="">
                        <img src="/src/assets/1.png" alt="">
                        <span>banner1</span>
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="">
                        <img src="/src/assets/2.png" alt="">
                        <span>banner1</span>
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="">
                        <img src="/src/assets/3.png" alt="">
                        <span>banner1</span>
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <!-- 分类 -->
        <section class="category">
            <div>
                <img src="/src/assets/category/1.png" alt="">
                <span>英语口语</span>
            </div>
            <div>
                <img src="/src/assets/category/1.png" alt="">
                <span>英语考试</span>
            </div>
            <div>
                <img src="/src/assets/category/1.png" alt="">
                <span>初中数学</span>
            </div>
            <div>
                <img src="/src/assets/category/1.png" alt="">
                <span>高中数学</span>
            </div>
            <div>
                <img src="/src/assets/category/1.png" alt="">
                <span>英语口语</span>
            </div>
            <div>
                <img src="/src/assets/category/2.png" alt="">
                <span>英语考试</span>
            </div>
            <div>
                <img src="/src/assets/category/1.png" alt="">
                <span>初中数学</span>
            </div>
            <div>
                <img src="/src/assets/category/2.png" alt="">
                <span>高中数学</span>
            </div>
        </section>

        <!-- 英语课程列表 -->
        <section class="course">
            <h3>英语课程</h3>
            <div class="course-list">
                <ul>
                    <li @click="courseDetail(1)">
                        <div class="course-main">
                            <div class="course-img">
                                <img src="/src/assets/course/1.jpg" alt="">
                            </div>
                            <div class="course-content">
                                <p>2020英语专业八级全程班</p>
                                <p>现价:<em>￥780.00</em></p>
                            </div>
                        </div>
                    </li>
                    <li @click="courseDetail(2)">
                        <div class="course-main">
                            <div class="course-img">
                                <img src="/src/assets/course/2.jpg" alt="">
                            </div>
                            <div class="course-content">
                                <p>2020英语专业四级全程班</p>
                                <p>现价:<em>￥780.00</em></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 数学课程列表 -->
        <section class="course">
            <h3>数学课程</h3>
            <div class="course-list">
                <ul>
                    <li>
                        <div class="course-main">
                            <div class="course-img">
                                <img src="/src/assets/course/2.jpg" alt="">
                            </div>
                            <div class="course-content">
                                <p>2020英语专业四级全程班</p>
                                <p>现价:<em>￥780.00</em></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="course-main">
                            <div class="course-img">
                                <img src="/src/assets/course/2.jpg" alt="">
                            </div>
                            <div class="course-content">
                                <p>2020英语专业四级全程班</p>
                                <p>现价:<em>￥780.00</em></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 最新资讯 -->
        <section class="hot-news">
            <h3>最新资讯</h3>
            <div class="news-list">
                <ul>
                    <li v-for="(item,index) in newsList" :key="index" @click="newsDetail(index)">
                        <p class="news-title">新概念英语最美最经典的50句</p>
                        <p class="news-detail">2019年05月09日 11:35</p>
                    </li>
                    
                </ul>
            </div>
        </section>

    </div>    
</template>   

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'mint-ui';
    import 'mint-ui/lib/style.css'
    import 'mint-ui/lib/index.js'

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    export default {
        data(){
            return{
                newsList:[1,3,5]
            }
        },
        methods:{
            courseDetail(type){
                this.$router.push({path:'/course',query:{type}});
            },

            //最新资讯
            newsDetail(index){
                this.$router.push({path:'/news',query:{index}});
            }
        }
    }
</script>

<style lang="less" scoped>
    a{
        text-decoration: none;
        color: #494949;
    }
    .header{
        height: 48px;
        background-color: #26a2ff;
        color: #fff;
        padding: 0 10px;
        border-bottom: 1px solid #ddd;
        font-size: 20px;
        line-height: 48px;
        font-weight: 300;
    }
    .banner{
        height: 200px;

        img{
            width:100%;
            height:100% ;
        }
    }
    .category{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 20px;
        div{
            
            width:25%;
            text-align:center;
        }
        span{
            font-size: .3125rem;
            display: block;
            
        }
        img{
            width: 1.85166875rem;
            height: 1.623375rem;
            margin-bottom: .125rem;
        }
    }

    .course,.hot-news{
        h3{
            line-height: 45px;
            background-color: #f5f5f5;
            padding: 0 15px;
            font-size: 16px;
        }
        li{
            padding: 20px 0;
            border-bottom: 1px solid #ededed;
        }
        .course-main{
            display: flex;
            background: #fff;
            padding: 0 15px;
            
            .course-img{
                width:105px;
                margin-right:12px;
                img{
                    width: 100%;
                }                
            }
            .course-content{
                p{
                    font-size: 14px;
                    line-height: 20px;
                    color: #3a3a3a;
                    margin-bottom: 6px;
                    word-wrap: break-word;
                    word-break: break-all;
                }
            }
        }
    }
    .hot-news{
        font-size: 14px;
        .news-list{
            padding: 0 15px;
        }
        li{
            padding: 17px 0;
        }
        
        p{
            padding-bottom: 15px;
            width: auto;
            color: #3a3a3a;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    

</style>