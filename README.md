# What is this?

Simple api wrapper for ayane.

# Installation

`npm i ayane-api --save`

Import the package by using the following line in your code

```
const { ayaneMsg } = require('ayane-api')
```

# Send Message

To send a default message to your server, use the following code

```
ayaneEmbed({
    guildSecret: "", // Get this from ayane.bitbiz.nl
    guildId: "", // This is the Discord Server's Guildid
    channelId: "", // This is the Discord Server's Channel Id
    embedTitle: "Test Title",
    embedColor: "#fff",
    embedImage: "https://bitbiz.nl/IMG/anime-cat.jpeg"
}, "Your Message!")
```

# New in this update

v2.0.0 adds the functionality to send embeds with Titles, Images, Colors and images.

More is comming in next updates.

# License

This source is licensed under the MIT license.
