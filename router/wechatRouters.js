const Mock = require('mockjs');
module.exports = function (router) {
    // 首页
    router.get('/crs/dsl/homePage', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "corpId": 1,
                "corpName": "xxxx公司",
                "logoUrl": "http://xxx.com/ss",
                "title": "xxxx"
            }
        };
    });
    // 获取品牌列表
    router.get('/crs/dsl/brand/brandList', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": [{
                "brandId": 1,
                "corpId": 1,
                "brandName": "xxxx品牌",
                "description": "",
                "logoUrl": "http://xxx.com/ss",
                "establishDate": "2017-09-12",
                "tel": "020-12345678",
                "fax": "020-12345678",
                "email": "master@abcd.com"
            }]
        };
    });
    // 搜索酒店
    router.get('/crs/dsl/hotel/search', function (ctx, next) {
        // console.log('ctx', ctx.query);
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": [{
                "brandId": 1,
                "hotelId": "H123",
                "hotelName": "长隆欢乐度假村屋",
                "coverUrl": "http://images.plateno.com/images/inn/173jOwoxzr/320",
                "cityCode": "CA00252",
                "cityName": "广州市",
                "bottomRate": 32900
            }]
        };
    });
    // 获取酒店信息
    router.get('/crs/dsl/hotel/hotelInfo', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": [{
                "hotelId": 1,
                "brandId": 1,
                "corpId": 1,
                "hotelName": "7天广州琶洲店",
                "shortDesc": "这是一个简单的介绍",
                "address": "广州市海珠区琶洲展区B区西北1.2km西片房第123号",
                "openingDate": "2017-11-20",
                "lastFitmentDate": "2017-12-03",
                "starLevel": 3,
                "hotelType": 2,
                "tel": "020-86772913",
                "serviceTel": "4006733623",
                "settlementCurrency": "CNY",
                "localCurrency": "CNY",
                "payMethods": "3",
                "extraBed": true,
                "extraBedRate": 33.00,
                "extraBreakfast": true,
                "breakfastPrice": 22.00,
                "nonSmokingHotel": true,
                "receiveForeigner": true,
                "invoiceFlag": true,
                "allowPet": true,
                "allowJuveniles": true,
                "checkin": "",
                "checkout": "",
                "latestCheckin": "",
                "holdTime": "",
                "cityCode": "",
                "timezone": "",
                "gaodeLng": 1.22555,
                "gaodeLat": 1.22555,
                "googleLng": 1.22555,
                "googleLat": 1.22555,
                "bookingPolicy": "",
                "residencePolicy": "",
                "images": [
                    {
                        "category": 1,
                        "url": "http://trip-pic1.plateno.com/images/temp/index/swiper1.jpg?version=1.1.2",
                        "cover": true
                    },
                    {
                        "category": 1,
                        "url": "http://trip-pic1.plateno.com/images/temp/index/swiper2.jpg?version=1.1.2",
                        "cover": true
                    },
                    {
                        "category": 1,
                        "url": "http://trip-pic1.plateno.com/images/temp/index/swiper3.jpg?version=1.1.2",
                        "cover": true
                    }
                ],
                facilities: [{
                    "facilityId": 2,
                    "category": 2,
                    "facCode": "X",
                    "facName": ""
                }]
            }]
        };
    });
    // 酒店介绍
    router.get('/crs/dsl/hotel/hotelIntro', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": [{
                "hotelId": 1,
                "hotelName": "7天广州琶洲店",
                "description": "7天连锁酒店（广州客村地铁站二店）位于海珠区新市头路，邻近城市新中轴广州塔，与海心沙岛（亚运开闭幕会场）及珠江新城隔江相望，步行3分钟即达“地铁轴心”客村站，乘坐地铁8号线可便捷前往琶洲国际会展中心，简洁舒适的客房里配设空调、国内长途电话、24小时热水淋浴等设施，无线网络让你工作、休闲两不误。酒店正在按照7天优品标准升级设施中，愿给客人带来更加舒适的入住体验。",
                "address": "广州市海珠区琶洲展区A区452号",
                "openingDate": "",
                "lastFitmentDate": "",
                "starLevel": 3,
                "hotelType": 2,
                "tel": "020-88837664",
                "serviceTel": "",
                "payMethods": "",
                "checkin": "12:00",
                "checkout": "14:00",
                "bookingPolicy": "因酒店客房数量有限，广交会期间酒店房态（房间预订）相对紧张，为了减少noshow（未入住），保证客人的正常入住，酒店自有散客及酒店各网络合作伙伴（包括Booking.com订房网）商旅客人预订酒店客房时均需提供信用卡担保，届时客人按预订入住后担保将会自动解除，房费由客人于酒店前台支付。",
                "residencePolicy": "客人预订日期因在广州秋交会期间，属于酒店全额担保范围，客人预订客房时也了解酒店相关订房政策及担保条款（需全额担保，且预订一经确认后不可取消及更改）,并提供了信用卡担保。",
                facilities: [{
                    "facilityId": 2,
                    "category": 2,
                    "facCode": "X",
                    "facName": ""
                }]
            }]
        };
    });
    // 商品报价列表
    router.get('/crs/dsl/product/list', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "hotelId": 1,
                "roomTypes": [{
                    "roomTypeCode": "aaa",
                    "roomTypeName": "豪华大床房",
                    "area": "20-35m²",
                    "floor": "M1-13层",
                    "bedType": "大床",
                    "beds": 1,
                    "bedWidth": "1.8米",
                    "maxOccupancy": 2,
                    "extraBed": true,
                    "noSmoking": true,
                    "maxExtraBeds": 1,
                    "extraBedPrice": 18.00,
                    "windowType": "有窗",
                    "wlannet": "全部免费",
                    facilities: [{
                        "facilityId": 2,
                        "facCode": "X",
                        "facName": ""
                    }],
                    "images": [
                        "http://images.plateno.com/images/inn/177X38RJkh"
                    ],
                    "rates": [{
                        "rateCode": "",
                        "date": "2017-10-17",
                        "rateName": "限时特惠价",
                        "roomStatus": 1, // 1 正常，2 部分满房，全部满房
                        "currencyCode": "CNY",
                        "rackRate": 180.00,
                        "sellingRate": 150.00,
                        "breakfastCount": 1,
                        "breakfastPrice": 38.00,
                        "minAdvanceDays": 3,
                        "minStayDays": 1,
                        "maxStayDays": 15,
                        "guaranteeType": 1, // 1 无须担保(到付), 2 首晚担保(预付), 3 全额担保(预付)
                        "payType": "prepay", // prepay预付，cash到付
                        "holdTime": "12:00", // 保留时间
                        "payOverdue": true, // (到付)过了保留时间是否要预付
                        "cxlType": 1, // 1 免费取消，2 限时取消，3 有偿取消，4 不可取消
                        "penaltyType": "", // 罚金类型, night房晚, perc百分比 flatRate固定值
                        "penaltyVal": 1, //
                        "freeCxlEndTime": "2017-10-25 12:00:00",
                        "penaltyCxlEndTime": "2017-10-25 18:00:00"
                    }],
                    "rackRate": 980,
                    "bottomRate": 300
                }]
            }
        };
    });
    // 商品报价详情
    router.get('/crs/dsl/product/detail', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "hotelId": 1,
                "hotelName": "广发联谊大酒店",
                "roomType": {
                    "roomTypeCode": "a89",
                    "roomTypeName": "豪华大床房",
                    "area": "20-35m²",
                    "floor": "M1-13层",
                    "bedType": "大床",
                    "beds": 1,
                    "bedWidth": "1.8米",
                    "maxOccupancy": 2,
                    "extraBed": true,
                    "allowSmoking": true,
                    "maxExtraBeds": 1,
                    "extraBedPrice": 18.00,
                    "windowType": "有窗",
                    "wlannet": "全部免费",
                    facilities: [{
                        "facilityId": 2,
                        "facCode": "X",
                        "facName": ""
                    }],
                    "images": [
                        'http://trip-pic1.plateno.com/images/temp/index/swiper1.jpg?version=1.1.2',
                        'http://trip-pic1.plateno.com/images/temp/index/swiper2.jpg?version=1.1.2',
                        'http://trip-pic1.plateno.com/images/temp/index/swiper3.jpg?version=1.1.2'
                    ],
                    "rateDetail": {
                        "roomTypeCode": "A89",
                        "date": "",
                        "rateCode": "CG889",
                        "rateName": "特惠房",
                        "roomStatus": 1, // 1 正常，2 部分满房，全部满房
                        "currencyCode": "CNY",
                        "rackRate": 180.00,
                        "breakfastCount": 1,
                        "breakfastPrice": 38.00,
                        "minAdvanceDays": 3,
                        "minStayDays": 1,
                        "maxStayDays": 15,
                        "guaranteeType": 1, // 1 无须担保(到付), 2 首晚担保(预付), 3 全额担保(预付)
                        "payType": "prepay", // prepay预付，cash到付
                        "holdTime": "12:00", // 保留时间
                        arriveTimes: [
                            '2017-10-25 12:00',
                            '2017-10-25 13:00',
                            '2017-10-25 14:00',
                            '2017-10-25 15:00',
                            '2017-10-25 16:00',
                            '2017-10-25 17:00',
                            '2017-10-25 18:00'
                        ],
                        "payOverdue": true, // (到付)过了保留时间是否要预付
                        "cxlType": 1, // 1 免费取消，2 限时取消，3 有偿取消，4 不可取消
                        "penaltyType": "", // 罚金类型, night房晚, perc百分比 flatRate固定值
                        "penaltyVal": 1, //
                        "freeCxlEndTime": "2017-10-25 12:00:00",
                        "penaltyCxlEndTime": "2017-10-25 18:00:00",
                        "dailyRates": [{
                            "date": "2017-10-17",
                            "rate": 150.00,
                        }, {
                            "date": "2017-10-18",
                            "rate": 150.00,
                        }]
                    }
                }
            }
        };
    });
    // 获取交易凭证sn
    router.get('/crs/dsl/order/sn', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "sn": "fSDknkkF=LNFOI/QNGI889NfjkKNF3"
            }
        };
    });
    // 下单接口
    router.post('/crs/dsl/order/book', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "hotelId": 1,
                "orderCode": "1001R00001"
            }
        };
    });
    // 订单详情
    router.get('/crs/dsl/order/detail', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "channelCode": "",
                "category": "",
                "orderCode": "",
                "corpId": 1,
                "brandId": 1,
                "hotelId": 1,
                "hotelName": "7天长沙定王台",
                "roomTypeName": "景致大床房",
                "roomTypeCode": "DC546548",
                "timeZone": "GMT+8",
                "rateCode": "KK12354",
                "bkMemberId": 1,
                "bkMemberClass": "",
                "bkMemberName": "李天王",
                "bkMemberMobile": "15866423516",
                "bkMemberEmail": "879346749@qq.com",
                "contactName": "李天王",
                "contactPhone": "15866423516",
                "contactEmail": "879346749@qq.com",
                "guaranteeCode": "",
                "cancelCode": "",
                "status": "confirmed",
                "arriveTime": "",
                "payType": "",
                "payStatus": "",
                "totalAmount": 1,
                "discountAmount": 1,
                "payAmount": 265.00,
                "payTaxes": 1,
                "refundedAmount": 1,
                "penaltyAmount": 1,
                "currencyCode": "",
                "bkCheckinDate": "2017-10-11",
                "bkCheckoutDate": "2017-10-13",
                "checkinTime": "14:00",
                "checkoutTime": "12:00",
                "nights": 1,
                "rooms": 1,
                "canCancel": true,
                "freeCxlEndTime": "2017-10-13 12:00:00",
                "hasPenalty": true,
                "penaltyCxlEndTime": "2017-10-13 18:00:00",
                "penaltyUnit": "night",
                "penaltyVal": 1,
                "holdTime": "18:00",
                "bookingRemark": "",
                "paymentTimeout": true,
                "guestNames": "",
                "createdTime": 12345,
                "paymentDetail": {
                    "amount": 3.22,
                    "time": 3335552,
                    "payChannel": "",
                },
                "refundDetail": {
                    "amount": 3.22,
                    "time": 3335552,
                    "payChannel": "",
                }
            }
        };
    });
    // 取消订单
    router.get('/crs/dsl/order/cancel', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": null
        };
    });
    // 删除订单
    router.get('/crs/dsl/order/delete', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": null
        };
    });
    // 查询支付结果
    router.get('/crs/dsl/order/payResult', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "payStatus": "paid"
            }
        };
    });
    // 订单列表
    router.get('/crs/dsl/order/list', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": [
                {
                    "channelCode": "",
                    "corpId": 1,
                    "brandId": 1,
                    "hotelId": 1,
                    "hotelName": "7天长沙定王台",
                    "roomTypeName": "景致大床房",
                    "roomTypeCode": "DC22578",
                    "timeZone": "GMT+8",
                    "rateCode": "KK2258",
                    "bkMemberId": 1,
                    "guaranteeCode": "",
                    "cxlCode": "",
                    "status": "",
                    "arriveTime": "",
                    "guaranteeType": 1,
                    "payType": "",
                    "payStatus": "",
                    "totalAmount": 1,
                    "discountAmount": 1,
                    "payAmount": 1,
                    "payTaxes": 1,
                    "refundedAmount": 1,
                    "penaltyAmount": 1,
                    "currencyCode": "",
                    "bkCheckinDate": "2017-10-11",
                    "bkCheckoutDate": "2017-10-13",
                    "actualCheckoutDate": "2017-10-13",
                    "nights": 1,
                    "guests": 1,
                    "rooms": 1,
                    "canCancel": true,
                    "freeCxlEndTime": "2017-10-13 12:00:00",
                    "penaltyCxlEndTime": "2017-10-13 18:00:00",
                    "holdTime": "",
                    "paymentTimeout": true,
                    "createdTime": 12345
                }, {
                    "channelCode": "",
                    "corpId": 1,
                    "brandId": 1,
                    "hotelId": 1,
                    "hotelName": "",
                    "roomTypeName": "",
                    "roomTypeCode": "",
                    "timeZone": "",
                    "rateCode": "",
                    "bkMemberId": 1,
                    "guaranteeCode": "",
                    "cxlCode": "",
                    "status": "",
                    "arriveTime": "",
                    "guaranteeType": 1,
                    "payType": "",
                    "payStatus": "",
                    "totalAmount": 1,
                    "discountAmount": 1,
                    "payAmount": 1,
                    "payTaxes": 1,
                    "refundedAmount": 1,
                    "penaltyAmount": 1,
                    "currencyCode": "",
                    "bkCheckinDate": "2017-10-11",
                    "bkCheckoutDate": "2017-10-13",
                    "actualCheckoutDate": "2017-10-13",
                    "nights": 1,
                    "guests": 1,
                    "rooms": 1,
                    "canCancel": true,
                    "freeCxlEndTime": "2017-10-13 12:00:00",
                    "penaltyCxlEndTime": "2017-10-13 18:00:00",
                    "holdTime": "",
                    "paymentTimeout": true,
                    "createdTime": 12345
                }, {
                    "channelCode": "",
                    "corpId": 1,
                    "brandId": 1,
                    "hotelId": 1,
                    "hotelName": "",
                    "roomTypeName": "",
                    "roomTypeCode": "",
                    "timeZone": "",
                    "rateCode": "",
                    "bkMemberId": 1,
                    "guaranteeCode": "",
                    "cxlCode": "",
                    "status": "",
                    "arriveTime": "",
                    "guaranteeType": 1,
                    "payType": "",
                    "payStatus": "",
                    "totalAmount": 1,
                    "discountAmount": 1,
                    "payAmount": 1,
                    "payTaxes": 1,
                    "refundedAmount": 1,
                    "penaltyAmount": 1,
                    "currencyCode": "",
                    "bkCheckinDate": "2017-10-11",
                    "bkCheckoutDate": "2017-10-13",
                    "actualCheckoutDate": "2017-10-13",
                    "nights": 1,
                    "guests": 1,
                    "rooms": 1,
                    "canCancel": true,
                    "freeCxlEndTime": "2017-10-13 12:00:00",
                    "penaltyCxlEndTime": "2017-10-13 18:00:00",
                    "holdTime": "",
                    "paymentTimeout": true,
                    "createdTime": 12345
                }
            ]
        };
    });
    // 接受支付/退款通知接口
    router.get('/crs/internal/order/payNotify', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": null
        };
    });
    // 获取会员基础信息
    router.get('/v1/member/basicInfo', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "成功",
            "data": {
                "avatarUrl": "http://img3.imgtn.bdimg.com/it/u=2777008330,1289798081&fm=27&gp=0.jpg", //头像
                "birthday": "2017-10-10", //生日
                "city": "广州",
                "country": "中国",
                "email": "123@123.com",//邮箱
                "gender": "男", //性别
                "id": 1,
                "identityNo": "438992198907048739", //身份证号
                "level": 1, //会员等级
                "name": "王隔壁", //真实姓名
                "nickName": "隔壁老王", //昵称
                "phone": "13518955678", //手机号
                "province": "广东",
                "status": 1// 状态 1：可用  2：锁定
            }
        };
    });
    // 获取支付参数
    router.post('/v1/wxpay/createMpPay', function (ctx, next) {
        ctx.body = {
            "code": 0,
            "msg": "success",
            "data": {
                "timestamp": 0,  // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                "nonceStr": '', // 支付签名随机串，不长于 32 位
                "package": '',  // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                "signType": '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                "paySign": ''   // 支付签名
            }
        };
    });
    // 获取支付信息
    router.get('/crs/dsl/order/payInfo', function (ctx, next) {
        ctx.body = {
            msgCode: 0,
            message: '成功',
            data: {
                channelCode: '001',
                orderCode: '12345645644545',
                corpId: 1,
                hotelName: '丽枫广东财经大学店',
                roomTypeName: '鸳鸯双飞房',
                bkMemberId: 12548,
                guestNames: '张大龙,仇美娟',
                contactPhone: '13522495478',
                payAmount: 236.00,
                payTaxes: 0.00,
                bkCheckinDate: '2017-12-06',
                bkCheckoutDate: '2017-12-07',
                nights: 1,
                rooms: 1,
                paymentTimeout: false
            }
        };
    });
}