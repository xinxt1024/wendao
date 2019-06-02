<template>
    <div class="lesson-content">
        <div class="lesson-catalogue">
            <i></i>
            <span>课程目录</span>
        </div>
        <div class="lesson-list">
            <ul>
                <li>
                    <div class="lesson-title">
                        <i class="icon-expand"></i>
                        <span>新概念精讲 2册</span>
                    </div>
                    <ul class="sub">
                        <li>
                            <div @click="isshow = !isshow">
                                <i class="icon-collapse"></i>
                                <span>Lesson 1 A private conversation</span>
                            </div>
                            <ul class="sub" v-show="isshow">
                                <li>
                                    <span class="num">1</span>
                                    <span>Lesson 1 单词讲解</span>
                                    <!-- <span>试听</span> -->
                                </li>
                                <li>
                                    <span class="num">2</span>
                                    <span>Lesson 1 课文语法讲解</span>
                                    <!-- <span>试听</span> -->
                                </li>
                                <li>
                                    <span class="num">3</span>
                                    <span>Lesson 1 同步练习</span>
                                    <!-- <span>试听</span> -->
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div @click="isshow = !isshow">
                                <i class="icon-collapse"></i>
                                <span>Lesson 1 A private conversation</span>
                            </div>
                            <ul class="sub" v-show="isshow">
                                <li>
                                    <span class="num">1</span>
                                    <span>Lesson 1 单词讲解</span>
                                    <!-- <span>试听</span> -->
                                </li>
                                <li>
                                    <span class="num">2</span>
                                    <span>Lesson 1 课文语法讲解</span>
                                    <!-- <span>试听</span> -->
                                </li>
                                <li>
                                    <span class="num">3</span>
                                    <span>Lesson 1 同步练习</span>
                                    <!-- <span>试听</span> -->
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isshow:false
            }
        }     
    }
</script>

<style lang="less" scoped>
    .lesson-catalogue{
        border: 1px solid #cad4da;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        color: #6e6e6e;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        padding: 0 18px;
        i{
            display: inline-block;
            width: 14px;
            height: 14px;
            vertical-align: middle;
            background: url(/src/assets/course/view.png) no-repeat;
            background-size: 30px 15px;
        }
    }
    .lesson-list{
        .lesson-title{
            padding: 20px;
            display:flex;            
            color: #575757;           
            background: #fff;
            border-bottom: 1px solid #ececec;
            span{
                padding-left: 15px;
            }
        }
        span{
            font-size: 14px;
            color: #686868;
            display: inline-block;
            vertical-align: middle;            
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        i{
            display: inline-block;
            width:14px;
            height:14px;
        }
        .icon-collapse{
            background: url("/src/assets/course/plus-square.png") no-repeat;
            background-size:100% 100%;
            width:17px;
            height:17px;
        }
        .icon-expand{
            background: url("/src/assets/course/minus-square.png") no-repeat;
            background-size:100% 100%;
        }
        .sub{
            .sub{
                padding-left: 60px;
            }
            div{
                padding: 10px 32px;
                display:flex;            
                color: #575757;           
                background: #fff;
                span{
                    padding-left: 15px;
                }
            }
            .num{
                display: inline-block;
                color: #fff;
                background-color: #8c9da7;
                height: 16px;
                line-height: 16px;
                width: 30px;
                border-radius: 15px;
                text-align: center;
                font-size:12px;
                margin-right:15px;
            }

        }
    }
</style>