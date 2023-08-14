<template lang="pug">
#app
	el-container(style="height: 100vh;")
		el-aside(style='width: 200px;')
			v-aside
		el-container
			el-header
				vHeader
			el-main
				nuxt
</template>

<script>
import vHeader from 'public/components/Header.vue'
import vAside from 'public/components/aside.vue'

export default {
  components: {
    vHeader,
    vAside
  }
}
</script>

<style lang='sass'>
.el-main
	padding: 30px
	background-color: #fafafa
.el-header 
	color: #151567
	.el-dropdown
		color: #151567
.avatar-uploader 
	.el-upload
		border: 1px dashed #F2F6FC
		border-radius: 6px
		cursor: pointer
		position: relative
		overflow: hidden
		background: #F2F6FC
		&:hover 
    	border-color: #409EFF
.avatar-uploader-icon
  font-size: 28px
  color: #8c939d
  width: 100px
  height: 100px
  line-height: 100px
  text-align: center
.avatar 
  height: 100px
  display: block
.el-table
	background: transparent
	color: #151567
	th
		color: #151567
.ql-snow 
  .ql-picker
    height: 40px
  .ql-editor
    height: 300px
.editor
  min-height: 200px
  margin-bottom: 60px
.el-form-item__label
	color: #151567
.el-pagination
	&.is-background 
		.el-pager 
			li:not(.disabled)
				&.active
					background-color: #151567
</style>