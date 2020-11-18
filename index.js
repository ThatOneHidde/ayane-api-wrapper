const axios = require('axios').default;
function ayaneMsg(options, message) {

    guildSecret = options.guildSecret
    guildId = options.guildId
    channelId = options.channelId
    message = message

    const msg = axios.get('https://ayane.bitbiz.nl/api/msg?secret=' + guildSecret + '&guild=' + guildId + '&channel=' + channelId + '&msg=' + message + '')
                .then(function (response) {
                    console.log("Message Sent.")
                    return response;
                }).catch(function (error) {
                    // handle error
                    console.log(error);
                })

    return msg
}

module.exports.ayaneMsg = ayaneMsg;