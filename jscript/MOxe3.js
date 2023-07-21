/*************************************

项目名称：MOZE-记账
下载地址：https://t.cn/A60ABDWL
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/MOZE.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/jizhi0520/QX/main/MOZE.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const doudou01 = {};
const doudou02 = JSON.parse(typeof $response != "undefined" && $response.body || null);const app = 'cm';const list = {'cm':{name: 'MOZE_PREMIUM_SUBSCRIPTION', id: 'MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC'}};
const data = {
	"Author": "doudou",
	"original_purchase_date": "2022-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z",
	"expires_date": "2099-12-31T09:09:09Z",
	"ownership_type": "PURCHASED"
};

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"];
	delete $request.headers["X-RevenueCat-ETag"];
	doudou01.headers = $request.headers;
} else if (doudou02 && doudou02.subscriber) {
	doudou02.subscriber.subscriptions = doudou02.subscriber.subscriptions || {};
	doudou02.subscriber.entitlement = doudou02.subscriber.entitlement || {};
     for (const i in list) {
if (new RegExp(`^${i}`, `i`).test(app)) {
	doudou02.subscriber.subscriptions[list[i].id] = data;
	doudou02.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
	doudou02.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
   doudou01.body = JSON.stringify(doudou02);
}

$done(doudou01);
