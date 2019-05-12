//整个项目所需数据请求   get  post 

class Ajax {
    get(url, options, call) {
        if (call) {
            const data = {
                status: 0,
                data: [{
                    "username": "15994",
                    "user_id": 28970,
                    "id": 28970,
                    "city": "杭州",
                    "registe_time": "2019-05-12 12:27",
                    "column_desc": {
                        "gift_mall_desc": "0元好物在这里",
                        "game_link": "https://gamecenter.faas.ele.me",
                        "game_is_show": 1,
                        "game_image_hash": "05f108ca4e0c543488799f0c7c708cb1jpeg",
                        "game_desc": "玩游戏领红包"
                    },
                    "point": 0,
                    "mobile": "",
                    "is_mobile_valid": true,
                    "is_email_valid": false,
                    "is_active": 1,
                    "gift_amount": 3,
                    "email": "",
                    "delivery_card_expire_days": 0,
                    "current_invoice_id": 0,
                    "current_address_id": 0,
                    "brand_member_new": 0,
                    "balance": 0,
                    "avatar": "default.jpg",
                    "__v": 0
                },
                {
                    "username": "yangfeilongzaixian",
                    "user_id": 28969,
                    "id": 28969,
                    "city": "西安",
                    "registe_time": "2019-05-12 12:26",
                    "column_desc": {
                        "gift_mall_desc": "0元好物在这里",
                        "game_link": "https://gamecenter.faas.ele.me",
                        "game_is_show": 1,
                        "game_image_hash": "05f108ca4e0c543488799f0c7c708cb1jpeg",
                        "game_desc": "玩游戏领红包"
                    },
                    "point": 0,
                    "mobile": "",
                    "is_mobile_valid": true,
                    "is_email_valid": false,
                    "is_active": 1,
                    "gift_amount": 3,
                    "email": "",
                    "delivery_card_expire_days": 0,
                    "current_invoice_id": 0,
                    "current_address_id": 0,
                    "brand_member_new": 0,
                    "balance": 0,
                    "avatar": "default.jpg",
                    "__v": 0
                },
                ]
            }
            call(data);
        }
    }
}

export default new Ajax();
