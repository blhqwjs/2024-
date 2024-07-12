<script>
  import config from './config'
  import store from '@/store'
  import { getToken } from '@/utils/auth'

  export default {
	  globalData: {
	  	user_id:0,
		Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImJmMjg5MjcwLWQ5N2EtNDNmOC1hZTUwLTQ3MmI2ZDE0ZjE5NSJ9.FsUVDTVFlDcxU-sCr2xBr3VDeyP4rmhfBzoURJbe4zNORMl3ZNggyTpnMZqJBQk-oqueiQRkg55ObXC2FLOr6g"
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
