<template>
	<view class="container">
		
		<view class="processing_list" v-for="(item, index) in indexList"
					:key="index">
			<view class="processing_1">
				<view class="order_status">
					<text style="font-size: 28rpx; padding-left: 15rpx; font-weight: bold;">订单</text>
					<text style="color: darkgray; font-size: 24rpx;padding-right: 16rpx;">{{item.orderType}}</text>
				</view>
				
				<view class="item1">
					<view class="order_item">
						<u-icon name="clock-fill"  size="14"></u-icon>
					    <text>订单生成时间：{{item.orderTime}}</text>
					</view>
					<text style="font-size: 22rpx; padding-right: 10rpx; ">{{item.orderStatus}}></text>
				    
				</view>
				<view class="order_item">
					<u-icon name="car-fill" color="#00cc33" size="16"></u-icon>
					<text>{{item.startAddress}}</text>
				</view>
				<view class="order_item">
					<u-icon name="car-fill" color="#dc143c" size="16"></u-icon>
					<text>{{item.endAddress}}</text>
				</view>
				<view class="item1">
					<view class="order_item">
						<text style="padding-left: 5rpx;">送达时间：{{item.deliveryTime}}</text>
					</view>
				
				<text class="order_price">{{item.price}}元</text>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"order-processing",
		data() {
			return {
				indexList: [{
					orderId:'123',//订单编号
					orderType:'任务订单',//订单类型
					orderStatus:'订单已取消',//订单状态
					orderTime:'6月20日10:12',//订单时间
					startAddress:'柳州市延龙汽车',//始发地址
					endAddress:'柳州市万象城',//收件地址
					deliveryTime:'6月20日12:10',//送达时间
					price:50,//金额
				},{
					orderId:'234',//订单编号
					orderType:'抢单订单',//订单类型
					orderStatus:'订单已取消',//订单状态
					orderTime:'2023.5.18',//订单时间
					startAddress:'柳州市阳和科三考场',//始发地址
					endAddress:'柳州市地王新天地',//收件地址
					deliveryTime:'6月20日12:10',//送达时间
					price:65,//金额
				}
				],
			};
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
	
	.processing_list{
		height:350rpx;
		width: 92%;
		background-color: white;
		border-radius: 30rpx;
		margin: 10rpx 0 0 2.5%;
		padding: 10rpx 15rpx 0 13rpx;
		font-size: 26rpx;
		display: flex;
		flex-direction: column;
		line-height: 44rpx;
	}
	.processing_1{
		border-bottom: 2rpx solid #efefef;
	}
	.order_status{
		display: flex;
		justify-content: space-between;
	}
	.order_item{
		display: flex;
		flex-direction: row;
		padding-left: 10rpx;
		padding-top: 5rpx;
	}
	.item1{
		display: flex;
		justify-content: space-between;
		
	}
	.order_price{
		color:#999999;
		font-weight: bold;
		padding-bottom: 20rpx;
	}

</style>