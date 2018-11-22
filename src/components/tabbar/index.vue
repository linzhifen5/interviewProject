<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="icofont icon-home">
        <span>首页</span>
      </i>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="icofont icon-category">
        <span>分类页</span>
      </i>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="icofont icon-cart">
        <span>购物车</span>
      </i>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="icofont icon-personal">
        <span>个人中心</span>
      </i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CTabbar'
  }
</script>
