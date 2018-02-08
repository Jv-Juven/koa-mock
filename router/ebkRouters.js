module.exports = function (router) {
    // 获取用户信息
    router.get('/ops/mock/v1/user/getUserInfo', function (ctx, next) {
        ctx.body = {
            "msgCode": 0,
            "message": "",
            "data": {
                "uid": "1",
                "account": "13652145845",
                "name": "陈世美",
                "avatar": "http://img1.imgtn.bdimg.com/it/u=1321463267,128419202&fm=27&gp=0.jpg",
                "role": "corp",
                "permissions": [26, 30, 34]
            }
        };
    });
};
