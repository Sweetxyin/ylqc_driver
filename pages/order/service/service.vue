<template>
	<view class="container">
		<u-gap height="10" bgColor="#efefef"></u-gap>

		<view class="illustrate">
			<u--textarea v-model="value1" border="none"  placeholder="拍照说明:" ></u--textarea>
			<view class="upload">
				<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic"
					name="1" multiple :maxCount="10"></u-upload>
			</view>
		</view>
		<view class="serviceButton">
			<u-button @click="submit" type="primary">提交</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #efefef;
		display: flex;
		flex-direction: column;
	}
	.illustrate{
		width: 94%;
		height: 370rpx;
		background-color: white;
		border-radius: 30rpx;
		margin-left: 3%;
	}
	.upload{
		padding-left: 15rpx;
	}
	.serviceButton{
		width: 60%;
		height: 100rpx;
		position:fixed;
		bottom:0;
		margin-left: 20%;
	}
</style>
