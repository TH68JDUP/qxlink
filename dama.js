[MITM]
hostname = sdk.yunduoketang.com
[Script]
http-response http://sdk.yunduoketang.com/appApi/course/liveAndFace/list requires-body=1,script-path= https://raw.githubusercontent.com/sngxpro/QuantumultX/master/dama/dama.js
