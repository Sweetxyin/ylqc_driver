<template>
	<view class="container">
		
		
		<view class="setting_info">
			<view class="info_title">
				<text>基本信息</text>
			</view>
			<view class="basic_info">		
				<u-cell-group class="setting-list" :border="false">
					<u-cell class="setting-item" size="large" title="头像" isLink></u-cell>
				</u-cell-group>
				<view class="info_item">
					<text style="padding-left: 40rpx;">昵称</text>
					 <u--input class="input_right" placeholder="请输入昵称" border="none" inputAlign="right"
					    v-model="info_name" fontSize="30rpx" :disabled="inputStatus"
					  ></u--input>
				</view>
				<view class="info_item">
					<text style="padding-left: 40rpx;">真实姓名</text>
					 <u--input class="input_right" border="none" inputAlign="right"
					    v-model="user_name" fontSize="30rpx" :disabled="inputStatus"
					  ></u--input>
				</view>
				<view class="info_item">
					<text style="padding-left: 40rpx;">身份证号</text>
					 <u--input class="input_right" border="none" inputAlign="right"
					    v-model="user_id" fontSize="30rpx" :disabled="inputStatus"
					  ></u--input>
				</view>
				<view class="info_item">
					<text style="padding-left: 40rpx;">电话号码</text>
					 <u--input  class="input_right" placeholder="请输入电话号码" border="none" inputAlign="right"
					    v-model="phone" fontSize="30rpx" :disabled="inputStatus"
					  ></u--input>
				</view>
			</view>
			
			<view class="info_title">
				<text>车辆信息</text>
			</view>
			
			<view class="authentication_info">
				<view class="info_item">
					<text style="padding-left: 40rpx;">车牌</text>
					 <u--input border="none" inputAlign="right"
					    v-model="licensePlate" fontSize="30rpx" :disabled="inputStatus"  class="input_right"
					  ></u--input>
				</view>
				<view class="info_item">
					<text style="padding-left: 40rpx;">车型</text>
					 <u--input border="none" inputAlign="right"
					    v-model="vehicleModel" fontSize="30rpx" :disabled="inputStatus" class="input_right"
					  ></u--input>
				</view>
			</view>

			<view class="other_info">
				<u-cell-group class="setting-list" :border="false">
					<u-cell class="setting-item" size="large" title="关于延龙" isLink></u-cell>
				</u-cell-group>
				<u-cell-group class="setting-list" :border="false">
					<u-cell class="setting-item" size="large" title="延龙法律条规" isLink></u-cell>
				</u-cell-group>
				<u-cell-group class="setting-list" :border="false">
					<u-cell class="setting-item" size="large" title="收费标准" isLink></u-cell>
				</u-cell-group>
			</view>
			
			<view class="logout_button">
				<u-button type="error" :plain="true" text="退出登录"></u-button>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				basic_name:'',
				info_name:'',//昵称
				phone:'19956562365',//电话号码
				user_name:'小明',//真实姓名
				user_id:'56532365623',//身份证号
				licensePlate:'',//车牌
				vehicleModel:'',//车型
			}
		},
		methods: {
			//选择头像
      chooseAvatar() {
        
      },

		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		background-color: #efefef;
		flex-direction: column;	
	}
	.setting_info{
		width: 100%;
		display: flex;
		flex-direction: column;
			.basic_info{
			width:94%;
			background-color: white;
			border-radius: 30rpx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			margin-left: 3%;
		}
		.info_item{
			height: 90rpx;
			display: flex;
			align-items: center;
			margin-top: 5rpx;
			border-bottom: 2rpx solid #efefef;
		}
	}
	.setting-list{
		height: 90rpx;
	}
	.setting-item{
		height: 90rpx;
	}
	.info_title{
		height: 50rpx;
		padding-top: 15rpx;
		padding-left:35rpx;
	}
	.authentication_info{
		width:94%;
		background-color: white;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-left: 3%;
	}
	.other_info{
		width:94%;
		background-color: white;
		border-radius: 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-left: 3%;
		margin-top: 15rpx;
	}
	.logout_button{
		width: 94%;
		padding: 25rpx 0 0 3%;
	}
	.input_right{
		margin-right: 25rpx;
	}

</style>
