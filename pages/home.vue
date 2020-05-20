<template>
  <div id="home_page">
    <!--页面组件化 PC页面比较长  -->
    <navigation_bar>
    </navigation_bar>

    <main_navigation>
    </main_navigation>

    <!-- <LouPlus>
    </LouPlus>

    <Boutique>
    </Boutique>

    <RecentlyRecommendCourse>
    </RecentlyRecommendCourse>

    <BaseCourse>
    </BaseCourse>

    <BackendCourse>
    </BackendCourse>

    <CloudComputeBigDataCourse>
    </CloudComputeBigDataCourse>

    <TrainingCourse>
    </TrainingCourse>

    <LearningPath>
    </LearningPath>

    <SiteDescription>
    </SiteDescription> -->
  </div>
</template>

<script>
// import NavigationBar from '@/components/home_page/navigation_bar.vue'
const path = require('path')  //node的模块 require是commonjs规范，不是es6规范，不过是老的方案，es6也能用
const files = require.context('@/components/home_page', false, /\.vue$/)  //引入该目录下的所有文件。 false:是否递归，文件是以.vue结尾的
const modules = {}
files.keys().forEach(key => {
  // console.log(key);
  const name = path.basename(key, '.vue')  //基础文件名
  console.log(name);
  //json object
  modules[name] = files(key).default || files(key)
});
console.log(files);

export default {
  components:modules   //modules已经是json了 不用加{ }
}
</script>

<style>

</style>