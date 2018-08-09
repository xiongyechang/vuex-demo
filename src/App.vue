<template>
  <div id="app">
    <div class="left">
      <ul>
        <li v-for="(item,index) in resources" :key="index">
          <p>{{item.id}}</p>
          <p>{{item.type}}</p>
          <p>{{item.name}}</p>
          <a :href="item.link">链接</a>
          <p>{{item.code}}</p>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="(item,index) in apps" :key="index">
          <p>{{item.id}}</p>
          <p>{{item.name}}</p>
          <a :href="item.link">链接</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  mounted(){
    this.$store.dispatch('Resources/getResources');
    this.$store.dispatch('Apps/getApps');
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      "resources":"Resources/resources",
      "apps":"Apps/apps"
      })
  }
}
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.left{
  width: 50%;
  background-color: pink;
}
.right{
  width: 50%;
  background-color: lightgreen;
}
</style>
