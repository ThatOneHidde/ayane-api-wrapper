const axios = require('axios').default;
function ayaneEmbed(options, message) {

    guildSecret = options.guildSecret
    guildId = options.guildId
    channelId = options.channelId
    embedTitle = options.embedTitle
    embedColor = options.embedColor
    image = options.embedImage
    message = message

    axios.post('https://ayane.bitbiz.nl/api/msg', {
            guild: guildId,
            channel: channelId,
            secret: guildSecret,
            title: embedTitle,
            color: embedColor,
            content: message,
            image: image

            })
            .then(function (response) {
                console.log({ "status": response.status, "statusText": response.statusText });
            })
            .catch(function (error) {
                console.log(error);
            });
}

module.exports.ayaneEmbed = ayaneEmbed;