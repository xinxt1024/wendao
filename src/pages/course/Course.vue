<template>
    <div>
        <course-top :content="content"></course-top>
        <section class="video">
            <video controls src="../../assets/course/video.mp4" poster="/src/assets/course/video.jpg"></video>
        </section>
        <!-- 课程详情 -->
        <nav class="course-detail">
            <ul>
                <li @click="current = 'course-list'">课程表</li>
                <li @click="current = 'course-note'">课程笔记</li>
                <li @click="current = 'teacher-info'">名师简介</li>
            </ul>
        </nav>
        <component :is="current"></component>
    </div>
</template>

<script>
    import Top from '../components/Top'
    import CourseList from './CourseList'
    import CourseNote from './CourseNote'
    import TeacherInfo from './TeacherInfo'
   
    export default {
        data(){
            return {
                content:"新概念英语",
                current:"course-list"
            }
        },
        components:{
            'course-top': Top,
            'course-list':CourseList,
            'course-note':CourseNote,
            'teacher-info':TeacherInfo
        }
    }
</script>

<style lang="less" scoped>
    .video{
       width: 100%;
       height: 200px;
       overflow: hidden;
       object-fit:fill;
       video{
            width:100%;
            object-fit:cover;
            height: 100%;            
       }
    }
    .course-detail{
        height: 47px;
        background: #fff;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                line-height: 47px;
                font-size: 17px;
                color: #575757;
                border-right: 1px solid #dce1e4;
                border-bottom: 1px solid #dce1e4;
                &:last-child{
                    border-right: none;
                }
            }
        }
    }
</style>
