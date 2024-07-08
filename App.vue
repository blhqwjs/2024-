<script>
  import config from './config'
  import store from '@/store'
  import { getToken } from '@/utils/auth'

  export default {
	  globalData: {
	  	Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImI2MGE5YmIxLTFjODEtNDYwYy05NDU3LWU2MDViM2U5OTcyOSJ9.Zun_3SfIfTwoicjPLlzSYbuAMY1pTgBmUOXZigP_ZHWLPLeeBfFegQPR_VqklqsiACXV_i-RGYnINjnnybmcQA"
	  },
	  
    onLaunch: function() {
      this.initApp()
    },
    methods: {
      // 初始化应用
      initApp() {
        // 初始化应用配置
        this.initConfig()
        // 检查用户登录状态
        //#ifdef H5
        // this.checkLogin()
        //#endif
      },
      initConfig() {
        this.globalData.config = config
      },
      // checkLogin() {
      //   if (!getToken()) {
      //     this.$tab.reLaunch('/pages/login') 
      //   }
      // }
    }
  }
</script>

<style lang="scss">
  @import '@/static/scss/index.scss'
</style>
