<script>
  import config from './config'
  import store from '@/store'
  import { getToken } from '@/utils/auth'

  export default {
	  globalData: {
	  	Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjczZDQwMzUwLTRhZjgtNGI1Yi05YzBjLTBiZjBhZGVmNmU2MSJ9.Zz5ohvbqxyihiUsik-ehB72F3eubJ7lK18H8JUFF6MZUk0ppfStWuJ9HjN_XneKfX-R-_XzTzVtNMUhy6l8KdQ"
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
