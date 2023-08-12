<template lang="pug">
.content
  el-row(type='flex')
    el-button(type='primary', round, @click='createUser', style='margin-right: 10px;') 添加
    //- el-button(type='primary' v-on:click='importData()' round='') 导入数据
    el-col(:span='6')
      el-input(placeholder='输入用户昵称' suffix-icon='el-icon-search' v-model='name', @input='handleSearch')
  el-divider
  el-table(:data='users', style='width: 100%')
    el-table-column(type='index', width='50')
    el-table-column(label='头像')
      template(slot-scope='scope')
        img.header-img(:src='scope.row.headimgurl' width="100")
    el-table-column(prop='email', label='电子邮件')
    el-table-column(prop='name', label='姓名')
    el-table-column(prop='sex', label='性别')
    el-table-column(prop='address', label='地址')
    el-table-column(prop='info', label='信息')
    el-table-column(prop='date', label='出生日期')
      template(slot-scope='scope')
        span {{scope.row.birthday | dateformat}}
    el-table-column(label='编辑')
      template(slot-scope='scope')
        el-button(size='mini', @click='editUser(scope.row)', style='margin-right: 10px;') 编辑
  el-dialog(title='用户管理', :visible.sync="editing", width='50%')
    el-form.demo-ruleForm(label-width='100px')
      el-form-item(label='姓名', prop='name')
        el-input(v-model='edited.name' placeholder='请输入姓名')
      el-form-item(label='性别', prop='type')
        el-select(v-model='edited.sex' placeholder='请选择', style='width: 100%;')
          el-option(v-for='item in ["male", "female"]' :key='item' :label='item' :value='item')
      el-form-item(label='头像', prop='headimgurl')
        el-input(v-model='edited.headimgurl' placeholder='')
      el-form-item(label='电子邮件', prop='email')
        el-input(v-model='edited.email' placeholder='')
      el-form-item(label='电话', prop='phone')
        el-input(v-model='edited.phone' placeholder='')
      el-form-item(label='出生日期', prop='birthday')
        el-date-picker(v-model="edited.birthday", type="date", placeholder="选择日期")
      el-form-item(label='地址', prop='address')
        el-input(v-model='edited.address' placeholder='')
      el-form-item(label='自我介绍', prop='info')
        el-input(v-model='edited.info' type="textarea" placeholder='')
    span.dialog-footer(slot='footer')
      el-button(@click='editing = false') 取 消
      el-button(type='primary', @click='saveEdited' v-if = 'isUser') 修改
      el-button(type='primary', @click='saveEdited' v-if = '!isUser') 新建
  div(style='text-align: center;margin-top: 30px;')
    el-pagination(
      background='', 
      layout='prev, pager, next', 
      :total='total',
      :page-size="pagesize"
      @current-change="handleCurrentChange"
    )
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
import axios from 'axios'
import moment from 'moment'

export default {
  middleware: 'auth',
  layout: 'admin',
  head () {
    return {
      title: '用户管理'
    }
  },

  data () {
    return {
      editing: false,
      isUser: false,
      edited: {},
      total: 0,
      pagesize: 20,
      currentPage: 1,
      search: '',
      users: [],
      role: '',
      name: ''
    }
  },

  created () {
    this.fetchUsers()
  },

  computed: mapState([
    'imageCDN'
  ]),

  methods: {
    async handleSearch () {
      this.page = 1
      this.fetchUsers()
    },

    async handleCurrentChange(val) {
      this.currentPage = val
      this.fetchUsers()
    },

    editUser (item) {
      console.log(item)
      this.edited = item
      this.isUser = true
      this.editing = true
    },

    createUser () {
      this.edited = {}
      this.isUser = false
      this.editing = true
    },

    async saveEdited () {
      if (!this.isUser) {
        const res = await axios({
          method: 'post',
          url: '/user/save',
          data: this.edited
        })
        if (res.data.success) {
          this.visible = false
        } else {
          this.$message({
            message: res.data.err,
            type: 'error'
          })
        }
      } else {
        const res = await axios({
          method: 'put',
          url: '/user/update',
          data: this.edited
        })
        if (res.data.success) {
          this.visible = false
        } else {
          this.$message({
            message: res.data.err,
            type: 'error'
          })
        }
      }
      
      this.fetchUsers()
      
      this.isUser = false
      this.editing = false
    },

    async fetchUsers () {
      const res = await axios({
        url: '/user/list',
        method: 'GET',
        params: {
          page: this.currentPage,
          limit: this.pagesize,
          role: this.role,
          nickname: this.nickname
        }
      })
      if (res.data.success) {
        this.users = res.data.data
        this.total = res.data.total
      }
    },

    async deleteUser (item) {
      await this.$store.dispatch('deleteUser', item)
    },

    async importData () {
      try {
        await axios.get('/user/import/data')
      } catch (error) {
        console.log(error)
      }
    }    
  },

  filters: {
    dateformat: function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
			return moment(dataStr).format(pattern)
    }
	},

  components: {
  }
}
</script>

<style lang="sass" scoped>
.header-img
  width: 100px
.inputs
  .el-input
    width: 180px
    margin-right: 10px
    margin-bottom: 10px
</style>