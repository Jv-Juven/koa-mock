const Mock = require('mockjs');
module.exports = function (router) {
    // 酒店列表接口
    router.get('/v1/hotels', function (ctx, next) {
        ctx.body = Mock.mock({
            // 'code|1': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 400, 506, 600, 601, 615, 660],
            code: 0,
            msg: '',
            data: {
                'title': '奥园家酒店公寓',
                'list|1-10': [{
                    'hid': /[1-9]/,
                    'title|1': ['新奥', 'Lic', 'Ay', 'Chrismas', '煜煜', '希尔端焕鹏'],
                    'name|1': ['奥园高尔夫酒店', '奥园足球酒店', '奥园度假酒店', '新奥园舒适酒店', '奥园精品酒店', '豪华奥园酒店'],
                    'city': '广州市',
                    'bottomPrice|100-1000': 0,
                    'img': '@image("750x300",,,, @cword())'
                }]
            }
        });
        next();
    });
    // 酒店详情
    router.get('/v1/hotel', function (ctx, next) {
        ctx.body = Mock.mock({
            code: 0,
            msg: '',
            data: {
                'hid': /[1-9]/,
                'name|1': ['奥园高尔夫酒店', '奥园足球酒店', '奥园度假酒店', '新奥园舒适酒店', '奥园精品酒店', '豪华奥园酒店'],
                'address|1': ['广州市珠江东路100号', '广东省中南部,珠三角北部', '广州市革新路124号', '广州市城启天鹅湾38号'],
                'introduction': '@csentence(8, 300)',
                'images|0-20': [
                    {
                        'title': '@ctitle',
                        'url': '@image("160x100",,,,@cword(3))'
                    }
                ]
            }
        });
    });
    // 房型详情
    router.get('/v1/roomtype', function (ctx, next) {
        ctx.body = Mock.mock({
            code: 0,
            msg: '',
            data: {
                'hid': /[1-9]/,
                'roomCode|100-500': 0,
                'roomName|1': ['亲子大床房', '温馨大床房', '兄弟双床房', '经济大床房', '亲子双床房'],
                'images|0-9': ['@image("160x100",,,,@cword(6))'],
                'window|1': ['有窗', '无窗', '飞窗'],
                'bed|1': ['大床1.8m', '1.2米', '床宽1米'],
                'breakfast|1': ['含早', '双早', '三早', '无早'],
                'floor': function () {
                    let floors = [];
                    floors.push(1 + parseInt(Math.random() * 20));
                    floors.push(1 + parseInt(Math.random() * 20));
                    if (floors[0] < floors[1]) {
                        return `${floors[0]}-${floors[1]}层`;
                    } else if(floors[0] > floors[1]) {
                        return `${floors[1]}-${floors[0]}层`;
                    } else {
                        return `${floors[0]}层`;
                    }
                },
                'network': '全部房间WIFI,有线宽带免费',
                'facilities': function () {
                    let total = parseInt(Math.random() * 7);
                    let tpl = ['电视', '电话', '游泳池', '空调', '洗衣机', '健身房', '桌球', '会议室', '游戏机'];
                    let result = [];
                    for (let i = 0; i < total; i++) {
                        let length = tpl.length;
                        let randomIndex = parseInt(Math.random() * length) % length;
                        let unit = tpl.splice(randomIndex, randomIndex + 1);
                        result.push(unit[0]);
                    }
                    return result;
                },
                'area': function () {
                    let area = [];
                    area.push(15 + parseInt(Math.random() * 5));
                    area.push(15 + parseInt(Math.random() * 5));
                    if (area[0] < area[1]) {
                        return `${area[0]}-${area[1]}平方米`;
                    } else if (area[0] > area[1]) {
                        return `${area[1]}-${area[0]}平方米`;
                    } else {
                        return `${area[0]}平方米`;
                    }
                },
                'occupancy': /[1-6]/
            }
        });
    });
    // 获取酒店房态
    router.get('/v1/rates', function (ctx, next) {
        ctx.body = Mock.mock({
            code: 0,
            msg: '',
            data: {
                'hid': /[1-9]/,
                'date': '2017-10-01',
                'days|1-4': 0,
                'rooms': [
                    {
                        'roomCode|100-500': 0,
                        'roomName|1': ['亲子大床房', '温馨大床房', '兄弟双床房', '经济大床房', '亲子双床房'],
                        'img|0-9': ['@image("160x100",,,,@cword(6))'],
                        'window|1': ['有窗', '无窗', '飞窗'],
                        'bed|1': ['大床1.8m', '1.2米', '床宽1米'],
                        'breakfast|1': ['含早', '双早', '三早', '无早'],
                        'area': function () {
                            let area = [];
                            area.push(15 + parseInt(Math.random() * 5));
                            area.push(15 + parseInt(Math.random() * 5));
                            if (area[0] < area[1]) {
                                return `${area[0]}-${area[1]}平方米`;
                            } else if (area[0] > area[1]) {
                                return `${area[1]}-${area[0]}平方米`;
                            } else {
                                return `${area[0]}平方米`;
                            }
                        },
                        'bottomPrice|100-1000': 0,
                        'rackPrice': `@bottomPrice + ${parseInt(Math.random() * 80)}`
                    }
                ],
                "rates": {
                    "220": [{
                        "rateCode": "R001",
                        "rateName|1": ["限时特惠", "预付房", "到付房", "冰点钜惠", "特价房"],
                        "price|100-1000": 0,
                        "rateStatus": "0",
                        "details": [
                            {
                                "day": "2017-10-01",
                                "quota": 10,
                                "price": 350
                            },
                            {
                                "day": "2017-10-02",
                                "quota": 10,
                                "price": 350
                            },
                            {
                                "day": "2017-10-03",
                                "quota": 10,
                                "price": 350
                            }
                        ]
                    },
                    {
                        "rateCode": "R002",
                        "rateName": "预付特惠",
                        "price": 310,
                        "rateStatus": "0",
                        "details": [
                            {
                                "day": "2017-10-01",
                                "quota": 10,
                                "price": 350
                            },
                            {
                                "day": "2017-10-02",
                                "quota": 10,
                                "price": 350
                            },
                            {
                                "day": "2017-10-03",
                                "quota": 10,
                                "price": 350
                            }
                        ]
                    }]
                }
            }
        });
    });
    // 下单
    router.post('/v1/order/create', function (ctx, next) {
        ctx.body = Mock.mock({
            "code": 0,
            "msg": "sucess",
            "data": ""
        });
    });
    // 订单查询(需登录态)
    router.get('/v1/user/orders', function (ctx, next) {
        ctx.body = Mock.mock({
            "code": 0,
            "msg": "",
            "data": {
                "orders": [
                    {
                        "id": "201709190016",
                        "orderState": "1",
                        "hotelName": "xxx公寓酒店",
                        "roomType": "商务房",
                        "checkInDate": "2017-10-08",
                        "checkOutDate": "2017-10-09",
                        "paymentAmount": "198",
                        "roomAmount": 1
                    }
                ]
            }
        });
    });
    // 发送验证码到手机
    router.post('/v1/veriCode/send', function (ctx, next) {
        ctx.body =  Mock.mock({
            "code": 0,
            "msg": "success",
            "data": null
        });
    });
    // 手机验证码验证
    router.post('/v1/veriCode/validate', function (ctx, next) {
        ctx.body = Mock.mock({
            "code": 0,
            "msg": "success",
            "data": {}
        });
    });
};
