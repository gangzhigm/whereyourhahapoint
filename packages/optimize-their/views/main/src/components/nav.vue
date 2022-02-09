<template>
  <div class="nav">
    <span
      class="nav-item"
      v-for="route in routeTree"
      :key="route.id"
      @click="navigateTo(route.name)"
      >{{ route.title }}</span
    >
  </div>
</template>
<script>
import routes from "@/router/routeTree";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Nav",
  setup() {
    // 配置路由跳转功能
    const router = useRouter();
    /*
        配置路由列表
        数据来源自vue路由树本身
        即，在路由中定义新页面，自动生成对应的导航按钮
    */
    const routeTree = ref(
      routes.map(item =>
        Object.assign({
          name: item.name,
          title: item.mate.title,
          id: item.name
        })
      )
    );
    /**
     * 触发跳转功能
     * @param name <string> 路由名称 来源路由表文件内单路由id
     */
    function navigateTo(name) {
      router.push({ name: `${name}` });
    }
    return {
      routeTree,
      navigateTo
    };
  }
};
</script>

<style scoped lang="less">
.nav {
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: bold;
  border-bottom: 1px dotted snow;
  box-sizing: border-box;
  .nav-item {
    &:hover {
      cursor: pointer;
      color: red;
      filter: drop-shadow(0px 0px 1px red);
      animation: helloone 4s linear 0s infinite normal forwards;
    }
    @keyframes helloone {
      7% {
        color: red;
        filter: drop-shadow(0px 0px 1px red);
      }
      14% {
        color: orange;
        filter: drop-shadow(0px 0px 2px orange);
      }
      21% {
        color: yellow;
        filter: drop-shadow(0px 0px 3px yellow);
      }
      28% {
        color: green;
        filter: drop-shadow(0px 0px 4px green);
      }
      35% {
        color: blue;
        filter: drop-shadow(0px 0px 5px blue);
      }
      42% {
        color: skyblue;
        filter: drop-shadow(0px 0px 6px skyblue);
      }
      49% {
        color: slateblue;
        filter: drop-shadow(0px 0px 7px slateblue);
      }
      56% {
        color: slateblue;
        filter: drop-shadow(0px 0px 7px slateblue);
      }
      63% {
        color: skyblue;
        filter: drop-shadow(0px 0px 6px skyblue);
      }
      70% {
        color: blue;
        filter: drop-shadow(0px 0px 5px blue);
      }
      77% {
        color: green;
        filter: drop-shadow(0px 0px 4px green);
      }
      84% {
        color: yellow;
        filter: drop-shadow(0px 0px 3px yellow);
      }
      91% {
        color: orange;
        filter: drop-shadow(0px 0px 2px orange);
      }
      100% {
        color: red;
        filter: drop-shadow(0px 0px 1px red);
      }
    }
  }
}
</style>
