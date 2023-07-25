<template>
	<view class="container">
		<!-- 没有登录显示 -->
		<view class="nologin" v-if="!isLogin">
			<text>完成登录，可查看大量订单哦!</text>
			<view class="but">
				<u-button type="primary" :plain="true" size="small" text="去登录"></u-button>
			</view>
		</view>
		
		<view class="order_list" v-else v-for="(item,index) in orderList" :key="index">
			<view class="list_top">
				<text style=" padding-left: 15rpx; ">全程{{item.wholeCourse}}公里</text>
				<text style=" padding-right: 10rpx; ">距你{{item.distance}}公里</text>
			</view>
			<view class="order_item">
				<u-icon name="clock-fill"  size="14"></u-icon>
			    <text>订单生成时间：{{item.orderTime}}</text>
			</view>
			<view class="order_item">
				<u-icon name="car-fill" color="#00cc33" size="16"></u-icon>
				<text>{{item.startAddress}}</text>
			</view>
			<view class="order_item">
				<u-icon name="car-fill" color="#dc143c" size="16"></u-icon>
				<text>{{item.endAddress}}</text>
			</view>
			<view class="order_item">
				<text style=" padding-left:5rpx; ">货物种类：{{item.goodsType}}</text>
			</view>
			<view class="order_item">
				<text style=" padding-left:5rpx; ">送达时间：{{item.deliveryTime}}</text>
			</view>
			<view class="item_end">
				<view class="order_item">
					<text style="color:crimson; font-weight: bold; padding-top: 10rpx; font-size: 40rpx;">{{item.orderAmount}}元</text>
				</view>
			
			<view class="but">
				<u-button type="error"  size="small" text="抢单"></u-button>
			</view>
			</view>
		</view>
	</view>
</template>

<script>                                        
	export default {
		data() {
			return {
				isLogin:true,
				orderList:[{
					wholeCourse:12,//全程公里数
					distance:2,//距离司机公里数
					orderTime:'6月19日13:33',//订单生成时间
					startAddress:'柳州市延龙汽车',//始发地址
					endAddress:'柳州市万象城',//收件地址
					goodsType:'配件',//货物种类
					deliveryTime:'6月19日15:33',//送达时间
					orderAmount:70,//订单金额
				},{
					wholeCourse:8,//全程公里数
					distance:3,//距离司机公里数
					orderTime:'6月19日12:33',//订单生成时间
					startAddress:'柳州市延龙汽车',//始发地址
					endAddress:'柳州市万象城',//收件地址
					goodsType:'日用品',//货物种类
					deliveryTime:'6月19日13:33',//送达时间
					orderAmount:54,//订单金额	
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #efefef;
	}
	.nologin{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		.but{
			width: 200rpx;
			padding-top: 3%;
		}
		
	}
	.order_list{
		height:390rpx;
		width: 92%;
		background-color: white;
		border-radius: 30rpx;
		margin: 10rpx 0 0 2.5%;
		padding: 10rpx 15rpx 0 13rpx;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		line-height: 44rpx;
		.list_top{
			width: 100%;
			height: 80rpx;
			background-color: #b0e0e6;
			border-radius: 15rpx;
			font-size: 32rpx;
			color: white;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.order_item{
			display: flex;
			flex-direction: row;
			padding-left: 10rpx;
			padding-top: 5rpx;
		}
		.item_end{
			display: flex;
			justify-content: space-between;
			padding-bottom: 20rpx;
		}
	}
</style>
