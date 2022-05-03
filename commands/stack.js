const axios = require("axios");
const { MessageEmbed } = require('discord.js');

module.exports = {

    category: 'Stackr',
    description: 'Get the questions from Stackoverflow (Max 8 questions)',

    maxArgs: 1,
    expectedArgs: '<flow>',

    slash: true,
    onlyTest: false,


    options: [{
        name: 'flow',
        description: 'Get the questions from Stackoverflow (Max 8 questions)',
        required: true,
        type: 'STRING',


    }, ],

    callback: async({ args }) => {

        let flow = 'https://api.stackexchange.com/2.3/search/advanced?order=asc&sort=relevance&q='

        if (args.length) {

            flow += `${args[0]}&accepted=True&answers=4&views=5000&site=stackoverflow`
        }

        const { data } = await axios.get(encodeURI(flow));
        console.log(data);
        console.log(flow);
        const json = data.items.slice(0, 8)


        const json2 = JSON.stringify(json, ['title', 'link'], '\t');

        const json3 = JSON.parse(json2);

        try {


            if (json3.length == 1) {
                const Answers = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                        name: `**1 - ${json3[0].title}**`,
                        value: `**Link: *${json3[0].link}* **`,
                    }, ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers

            } else if (json3.length == 2) {
                const Answers2 = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                            name: `**1 - ${json3[0].title}**`,
                            value: `**Link: *${json3[0].link}* **`,
                        },
                        {
                            name: `**2 - ${json3[1].title}**`,
                            value: `**Link: *${json3[1].link}* **`,
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers2
            } else if (json3.length == 3) {
                const Answers3 = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                            name: `**1 - ${json3[0].title}**`,
                            value: `**Link: *${json3[0].link}* **`,
                        },
                        {
                            name: `**2 - ${json3[1].title}**`,
                            value: `**Link: *${json3[1].link}* **`,
                        },
                        {
                            name: `**3 - ${json3[2].title}**`,
                            value: `**Link: *${json3[2].link}* **`
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers3
            } else if (json3.length == 4) {
                const Answers4 = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                            name: `**1 - ${json3[0].title}**`,
                            value: `**Link: *${json3[0].link}* **`,
                        },
                        {
                            name: `**2 - ${json3[1].title}**`,
                            value: `**Link: *${json3[1].link}* **`,
                        },
                        {
                            name: `**3 - ${json3[2].title}**`,
                            value: `**Link: *${json3[2].link}* **`
                        },
                        {
                            name: `**4 - ${json3[3].title}**`,
                            value: `**Link: *${json3[3].link}* **`
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers4
            } else if (json3.length == 5) {
                const Answers5 = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                            name: `**1 - ${json3[0].title}**`,
                            value: `**Link: *${json3[0].link}* **`,
                        },
                        {
                            name: `**2 - ${json3[1].title}**`,
                            value: `**Link: *${json3[1].link}* **`,
                        },
                        {
                            name: `**3 - ${json3[2].title}**`,
                            value: `**Link: *${json3[2].link}* **`
                        },
                        {
                            name: `**4 - ${json3[3].title}**`,
                            value: `**Link: *${json3[3].link}* **`
                        },

                        {
                            name: `**5 - ${json3[4].title}**`,
                            value: `**Link: *${json3[4].link}* **`

                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers5
            } else if (json3.length == 6) {
                const Answers6 = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                            name: `**1 - ${json3[0].title}**`,
                            value: `**Link: *${json3[0].link}* **`,
                        },
                        {
                            name: `**2 - ${json3[1].title}**`,
                            value: `**Link: *${json3[1].link}* **`,
                        },
                        {
                            name: `**3 - ${json3[2].title}**`,
                            value: `**Link: *${json3[2].link}* **`
                        },
                        {
                            name: `**4 - ${json3[3].title}**`,
                            value: `**Link: *${json3[3].link}* **`
                        },

                        {
                            name: `**5 - ${json3[4].title}**`,
                            value: `**Link: *${json3[4].link}* **`

                        },
                        {
                            name: `**6 - ${json3[5].title}**`,
                            value: `** Link: ${json3[5].link}**`
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers6
            } else if (json3.length == 7) {
                const Answers7 = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                            name: `**1 - ${json3[0].title}**`,
                            value: `**Link: *${json3[0].link}* **`,
                        },
                        {
                            name: `**2 - ${json3[1].title}**`,
                            value: `**Link: *${json3[1].link}* **`,
                        },
                        {
                            name: `**3 - ${json3[2].title}**`,
                            value: `**Link: *${json3[2].link}* **`
                        },
                        {
                            name: `**4 - ${json3[3].title}**`,
                            value: `**Link: *${json3[3].link}* **`
                        },

                        {
                            name: `**5 - ${json3[4].title}**`,
                            value: `**Link: *${json3[4].link}* **`

                        },
                        {
                            name: `**6 - ${json3[5].title}**`,
                            value: `** Link: ${json3[5].link}**`
                        },
                        {
                            name: `**7 - ${json3[6].title}**`,
                            value: `**Link: *${json3[6].link}* **`
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers7
            } else if (json3.length == 8) {
                const Answers8 = {
                    color: 0xed5e13,
                    title: 'Questions:',
                    author: {
                        name: 'See the Questions Below  🥳',
                    },
                    thumbnail: {
                        url: 'https://i.imgur.com/xebhHhm.png',
                    },
                    fields: [{
                            name: `**1 - ${json3[0].title}**`,
                            value: `**Link: *${json3[0].link}* **`,
                        },
                        {
                            name: `**2 - ${json3[1].title}**`,
                            value: `**Link: *${json3[1].link}* **`,
                        },
                        {
                            name: `**3 - ${json3[2].title}**`,
                            value: `**Link: *${json3[2].link}* **`
                        },
                        {
                            name: `**4 - ${json3[3].title}**`,
                            value: `**Link: *${json3[3].link}* **`
                        },

                        {
                            name: `**5 - ${json3[4].title}**`,
                            value: `**Link: *${json3[4].link}* **`

                        },
                        {
                            name: `**6 - ${json3[5].title}**`,
                            value: `** Link: ${json3[5].link}**`
                        },
                        {
                            name: `**7 - ${json3[6].title}**`,
                            value: `**Link: *${json3[6].link}* **`
                        },
                        {
                            name: `**8 - ${json3[7].title}**`,
                            value: `**Link: *${json3[7].link}* **`
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Stackr',
                        icon_url: 'https://i.imgur.com/xebhHhm.png',
                    },

                };
                return Answers8
            } else {
                const Error = new MessageEmbed()
                    .setTitle('See the Questions Below  🥳')
                    .addField('No Questions Found :(', 'Sorry :(', true);

                Error.color = 0xed5e13;
                return Error

            }

        } catch (error) {
            const Error = new MessageEmbed()
                .setTitle('See the Questions Below  🥳')
                .addField('No Questions Found :(', 'Sorry :(', true);

            Error.color = 0xed5e13;
            return Error


        }
    }





}