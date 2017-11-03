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
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": [{
                "brandId": 1,
                "hotelId": "H123",
                "hotelName": "xxxx",
                "coverUrl": "http://xxx.com/ss",
                "cityCode": "",
                "cityName": "广州市",
                "lowestRate": 12800
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
                "hotelName": "",
                "shortDesc": "",
                "address": "",
                "openingDate": "",
                "lastFitmentDate": "",
                "starLevel": 3,
                "hotelType": 2,
                "tel": "",
                "serviceTel": "",
                "settlementCurrency": "",
                "localCurrency": "",
                "payMethods": "",
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
                "images": [{
                    "category": 1,
                    "url": "",
                    "cover": false
                }],
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
                "hotelName": "",
                "description": "",
                "address": "",
                "openingDate": "",
                "lastFitmentDate": "",
                "starLevel": 3,
                "hotelType": 2,
                "tel": "",
                "serviceTel": "",
                "payMethods": "",
                "checkin": "",
                "checkout": "",
                "bookingPolicy": "",
                "residencePolicy": "",
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
                    "images": ["http://aaaa.com/a.jpg", ""],
                    "rates": [{
                        "rateCode": "",
                        "date": "2017-10-17",
                        "rateName": "xxxxxx",
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
                    }]
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
                "hotelName": "xxxxx",
                "roomType": {
                    "roomTypeCode": "aaa",
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
                    "images": ["http://aaaa.com/a.jpg", ""],
                    "rateDetail": {
                        "roomTypeCode": "aaa",
                        "date": "",
                        "rateCode": "",
                        "rateName": "xxxxxx",
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
                "sn": "afdfdsffdfdsfdsfdfd"
            }
        };
    });
    // 下单接口
    router.get('/crs/dsl/order/book', function (ctx, next) {
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
                "corpId": 1,
                "brandId": 1,
                "hotelId": 1,
                "hotelName": "",
                "roomTypeName": "",
                "roomTypeCode": "",
                "timeZone": "",
                "rateCode": "",
                "bkMemberId": 1,
                "bkMemberClass": "",
                "bkMemberName": "",
                "bkMemberMobile": "",
                "bkMemberEmail": "",
                "contact": "",
                "contactPhone": "",
                "contactEmail": "",
                "guaranteeCode": "",
                "cancelCode": "",
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
                "holdTime": "18:00",
                "bookingRemark": "",
                "cancelRemark": "",
                "paymentTimeout": true,
                "roomRates": [{
                    "date": 20171012,
                    "rate": 234.00
                }],
                "guests": [{
                    "name": "",
                    "gender": "",
                    "certificateType": 1,
                    "certificateNo": "",
                    "mobile": "",
                    "tel": "",
                    "email": "",
                    "guestMemberId": 1,
                    "countryCode": "",
                    "lastName": "",
                    "firstName": "",
                    "age": "",
                    "isAdult": true,
                }],
                "createdTime": 12345,
                "updatedTime": 12345
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
            "data": {
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
}