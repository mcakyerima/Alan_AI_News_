import  { makeStyles }  from "@material-ui/core";

export default makeStyles({
    container : {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: '10px',
        color: 'white'

    },
    infoCard: {
        display: 'flex',
        flexDirection: "column",
        justifyConten: 'space-between',
        textAlign: 'center',
    }
});

let a = {
    'articles' : { " articles " : [true]}
}

// articles instances
let article = {
    "articles" : {
        "articles" : [
            {
                "author": "Luke Winkie",
                "content": "Illustration by Alex Castro / The Verge\r\n\n \n\n\n Resellers aren’t the problem — their buying bots are More than a year on, it’s still hard to buy a new PlayStation or Xbox without some help. Flippers h… [+10477 chars]",
                "description": "Why are PlayStation 5 and Xbox Series X consoles always out of stock? Don’t blame flippers; it’s the groups making AIO buying bots that enable those shortages.",
                "publishedAt": "2022-05-25T13:00:00Z",
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "title": "The unstoppable machines behind the game console shortage",
                "url": "https://www.theverge.com/2022/5/25/23137789/aio-buying-bots-ps5-xbox-series-x-console-shortage",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/KjQBk-i2h3p9g4ykvbe55LBfZhY=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23582659/acastro_5127_220519_0001.jpg"
            },
            {
                "author": "Jon Fingas",
                "content": "Sony is marking the launch of its revised PlayStation Plus by giving away one of its best-known games. The company has revealed that its free PS Plus games for June will include 2018's God of War you… [+756 chars]",
                "description": "Sony is marking the launch of its revised PlayStation Plus by giving away one of its best-known games. The company has revealed that its free PS Plus games for June will include 2018's God of War — you won't need a PlayStation 5 just to play Kratos' father-an…",
                "publishedAt": "2022-06-01T19:45:22Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "'God of War' leads final trio of free games before PlayStation Plus revamp",
                "url": "https://www.engadget.com/playstation-plus-free-games-june-2022-god-of-war-194522667.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/54ec6a30-e1db-11ec-ae7a-11e3b4f5a007"
            },
            {
                "author": "Mariella Moon",
                "content": "Sony typically follows up its PlayStation consoles with a slim version a few years later, but that time hasn't come for the PS5 yet. While we all wait for a slimmer PS5 that would fit in small spaces… [+1108 chars]",
                "description": "Sony typically follows up its PlayStation consoles with a slim version a few years later, but that time hasn't come for the PS5 yet. While we all wait for a slimmer PS5 that would fit in small spaces better, a YouTuber called DIY Perks already built one for h…",
                "publishedAt": "2022-06-21T07:03:24Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "A YouTuber built his own PS5 Slim that's less than an inch in width",
                "url": "https://www.engadget.com/youtuber-builds-his-own-ps5-slim-070324347.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/7841e3e0-f129-11ec-b27f-80e8b688b956"
            },
            {
                "author": "Kris Holt",
                "content": "One of Sony's top priorities going forward is to ramp up production for the PlayStation 5 to meet unprecedented demand for the console. In a briefing with investors (PDF), the company said that it ex… [+2064 chars]",
                "description": "One of Sony's top priorities going forward is to ramp up production for the PlayStation 5 to meet unprecedented demand for the console. In a briefing with investors (PDF), the company said that it expects to close the gap in PS4 and PS5 sales this year after …",
                "publishedAt": "2022-05-26T11:35:43Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "Sony vows to ramp up PS5 production to levels 'never achieved before'",
                "url": "https://www.engadget.com/sony-ramp-up-ps5-production-113543289.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-01/41da2410-6f98-11ec-beff-f6e5292076bb"
            },
            {
                "author": "Jon Fingas",
                "content": "No, your eyes don't deceive you Ubisoft is upgrading an older Assassin's Creed game for modern consoles. The developer has revealed that a 60 frames per second update for 2017's Assassin's Creed Orig… [+746 chars]",
                "description": "No, your eyes don't deceive you — Ubisoft is upgrading an older Assassin's Creed game for modern consoles. The developer has revealed that a 60 frames per second update for 2017's Assassin's Creed Origins is coming to PlayStation 5 and Xbox Series X/S on June…",
                "publishedAt": "2022-05-31T21:30:10Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "'Assassin's Creed Origins' is getting a 60FPS boost on PS5 and Xbox Series consoles",
                "url": "https://www.engadget.com/assassins-creed-origins-ps5-xbox-series-x-update-213010994.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/a62b2050-e120-11ec-bffe-a293fb07b29c"
            },
            {
                "author": "Mariella Moon",
                "content": "Respawn Entertainment has confirmed that Star Wars Jedi: Survivor, the sequel to Jedi: Fallen Order that it first announced earlier this year, is happening. At the Star Wars Celebration event in Anah… [+1069 chars]",
                "description": "Respawn Entertainment has confirmed that Star Wars Jedi: Survivor, the sequel to Jedi: Fallen Order that it first announced earlier this year, is happening. At the Star Wars Celebration event in Anaheim, the studio has revealed that Jedi: Survivor is a direct…",
                "publishedAt": "2022-05-28T12:00:17Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "Respawn's 'Star Wars Jedi: Survivor' arrives in 2023",
                "url": "https://www.engadget.com/respawn-star-wars-jedi-survivor-2023-120017826.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/2f2aeea0-de77-11ec-9cfb-eb69f74ced36"
            },
            {
                "author": "mshore@hotmail.co.uk (Matt Shore)",
                "content": "With the many accessories available today fighting for life on your PS4 or PS5, you'll find there just isn't enough USB ports to go around. If you want to avoid endless amounts of cable swapping, you… [+1346 chars]",
                "description": "The PS4 and PS5 are a little light on USB ports, but you don't have to play the juggling act. We've tracked down the best USB hubs to help you plug more things into your PlayStation 4 or Playstation 5.",
                "publishedAt": "2022-06-06T20:45:38Z",
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "title": "Best USB hub for PS4 and PS5 in 2022",
                "url": "https://www.androidcentral.com/best-usb-hub-playstation-4-playstation-5",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/h36mNh3UH6Y6PVbXJ2Yh2X-1200-80.jpg"
            },
            {
                "author": "Adi Robertson",
                "content": "Striking Distance Studios\r\n\n \n\n\n Everybody’s going to space Summer Game Fest host Geoff Keighley warned fans to temper their expectations for today’s livestreamed event, which kicks off several days … [+5244 chars]",
                "description": "Geoff Keighley’s Summer Game Fest 2022 livestream featured announcements for The Callisto Protocol, Call of Duty: Modern Warfare II, and The Last of Us Part I.",
                "publishedAt": "2022-06-09T21:18:20Z",
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "title": "Summer Game Fest 2022: all the news and trailers",
                "url": "https://www.theverge.com/2022/6/9/23161378/summer-game-fest-2022-news-trailers-announcements",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/1bGKQW4H195Kx5DyokbfnMzY-uA=/0x0:2280x1194/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23618142/3cf132d9_b6e7_4bfe_82a0_3944ac36e920_TCP_Screen14.jpg"
            },
            {
                "author": "Keza MacDonald",
                "content": "2013s classic horror game The Last of Us is being remade for PlayStation 5 and PC, developer Naughty Dog has announced. Retitled The Last of Us: Part I, the new version will be released on 9 Septembe… [+1599 chars]",
                "description": "Modernised version of 2013’s landmark PlayStation video game will be out in September2013’s classic horror game The Last of Us is being remade for PlayStation 5 and PC, developer Naughty Dog has announced. Retitled The Last of Us: Part I, the new version will…",
                "publishedAt": "2022-06-09T20:54:30Z",
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "title": "Horror classic The Last of Us remade for PlayStation 5 and PC",
                "url": "https://amp.theguardian.com/games/2022/jun/09/the-last-of-us-horror-playstation-5-pc",
                "urlToImage": "https://i.guim.co.uk/img/media/28c73365c0dbb7d7805ecf54d245326de088bbac/0_27_1837_1102/master/1837.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2a7dc9fcc3acdb95913ac10ed969059e"
            },
            {
                "author": "Jessica Conditt",
                "content": "Bloober Team is returning to its roots with Layers of Fears, a \"psychological horror chronicle\" heading to PlayStation 5, Xbox Series X and S, and PC in early 2023. The game is a new story chapter in… [+1479 chars]",
                "description": "Bloober Team is returning to its roots with Layers of Fears, a \"psychological horror chronicle\" heading to PlayStation 5, Xbox Series X and S, and PC in early 2023. The game is a new story chapter in the Layers of Fear universe, building on the spooky psyched…",
                "publishedAt": "2022-06-09T20:22:28Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "'Layers of Fears' from Bloober Team hits PC and consoles in 2023",
                "url": "https://www.engadget.com/layers-fears-bloober-team-horror-silent-hill-rumor-202228761.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/06a98fe0-e831-11ec-bfce-73ad92da5b05"
            },
            {
                "author": "Rachel Kaser",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nThe PlayStation 5 how … [+1459 chars]",
                "description": "The PlayStation 5 has hit the 20 million unit sales milestone, and, according to Sony, it's planning to make even more soon.",
                "publishedAt": "2022-06-03T21:02:08Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Sony has sold 20 million PlayStation 5 consoles",
                "url": "https://venturebeat.com/2022/06/03/sony-has-sold-20-million-playstation-5-consoles/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/04/ps5-product-thumbnail-01-en-14sep21.png?w=1200&strip=all"
            },
            {
                "author": "Ars Staff",
                "content": "0 with 0 posters participating\r\nIt's Memorial Day weekend, which means the time has come for another Dealmaster. Our latest roundup of good tech deals from around the web includes all the best offers… [+11237 chars]",
                "description": "Dealmaster includes MacBooks, Bose headphones, lots of PlayStation deals, and more.",
                "publishedAt": "2022-05-28T18:30:17Z",
                "source": {
                    "id": "ars-technica",
                    "name": "Ars Technica"
                },
                "title": "The best Memorial Day sales we can find on gadgets, games, and tech gear",
                "url": "https://arstechnica.com/staff/2022/05/best-memorial-day-sales-laptops-tvs-games-more-tech/",
                "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/dealmaster052822-760x380.jpg"
            },
            {
                "author": null,
                "content": "TOKYO, May 26 (Reuters) - Sony Group Corp's (6758.T) gaming chief said on Thursday that the tech conglomerate plans to ramp up production of its PlayStation 5 console as supply chain snarls ease.\r\n\"W… [+774 chars]",
                "description": "Sony Group Corp's <a href=\"https://www.reuters.com/companies/6758.T\" target=\"_blank\">(6758.T)</a> gaming chief said on Thursday that the tech conglomerate plans to ramp up production of its PlayStation 5 console as supply chain snarls ease.",
                "publishedAt": "2022-05-26T00:18:00Z",
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "title": "Sony says it plans PS5 ramp up as shortages ease - Reuters.com",
                "url": "https://www.reuters.com/technology/sony-says-it-plans-ps5-ramp-up-shortages-ease-2022-05-26/",
                "urlToImage": "https://www.reuters.com/resizer/5imX6aMfBjhY-1XC2qGrA-7W0Q8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V2E7K55DARJP5JZGYKUQDE5UAA.jpg"
            },
            {
                "author": "Mat Smith",
                "content": "Yes, Juul e-cigarettes have been banned in the US, but we talked about that yesterday. But whats like vapes? Replicants and 80s sci-fi? Maybe not, but anyway,Nightdive Studios has finally released Bl… [+3630 chars]",
                "description": "Yes, Juul e-cigarettes have been banned in the US, but we talked about that yesterday. But what’s like vapes? Replicants and ‘80s sci-fi? Maybe not, but anyway,Nightdive Studios has finally released Blade Runner: Enhanced Edition for Windows PCs (via Steam), …",
                "publishedAt": "2022-06-24T11:15:02Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "The Morning After: A remastered version of 1997's 'Blade Runner' game finally arrives",
                "url": "https://www.engadget.com/the-morning-after-a-remastered-version-of-1997-s-blade-runner-game-finally-lands-111502874.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/3e2558a0-f39e-11ec-b7da-498ba51ef54d"
            },
            {
                "author": "Ars Staff",
                "content": "0 with 0 posters participating\r\nThe time has come for another Dealmaster. Our latest roundup of the best tech deals from around the web is led by various deals on PlayStation games and gear. That's b… [+9856 chars]",
                "description": "Dealmaster also includes the MacBook Air, Jabra earbuds, and Xbox consoles.",
                "publishedAt": "2022-05-25T19:46:04Z",
                "source": {
                    "id": "ars-technica",
                    "name": "Ars Technica"
                },
                "title": "Today’s best deals: PlayStation Days of Play sale, SanDisk storage, and more",
                "url": "https://arstechnica.com/staff/2022/05/todays-best-deals-playstation-days-of-play-sale-sandisk-storage-and-more/",
                "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/dealmaster052522-760x380.jpg"
            },
            {
                "author": "Ian Walker",
                "content": "PlayStation Direct was recently (and inadvertently, it seems) updated with information on The Last of Us Part 1, a remake of the original Naughty Dog adventure game coming to PlayStation 5 on Septemb… [+885 chars]",
                "description": "This morning, the PlayStation Direct website was updated with information on The Last of Us Part 1, a remake of the original Naughty Dog adventure game from 2013 coming to PlayStation 5 on September 2. Everything is gone now, but the internet never forgets.Re…",
                "publishedAt": "2022-06-09T16:15:00Z",
                "source": {
                    "id": null,
                    "name": "Kotaku"
                },
                "title": "PlayStation Accidentally Reveals The Last Of Us PS5 Remake Coming September 2",
                "url": "https://kotaku.com/playstation-accidentally-reveals-the-last-of-us-ps5-rem-1849040365",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c5e11b4250763c22c308b02b26ed19e2.jpg"
            },
            {
                "author": "msmash",
                "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
                "description": "PlayStation's revamped version of its video game subscription service went live on Monday, giving members access to a catalog of several hundred games both new and old. From a report: PlayStation Plus, once code-named Spartacus, is Sony Group's attempt to com…",
                "publishedAt": "2022-06-13T22:15:00Z",
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "title": "PlayStation Takes On Xbox With New Subscription Service",
                "url": "https://games.slashdot.org/story/22/06/13/2214214/playstation-takes-on-xbox-with-new-subscription-service",
                "urlToImage": "https://a.fsdn.com/sd/topics/playstation_64.png"
            },
            {
                "author": "Robert Ramsey",
                "content": "Oh no, we've somehow travelled back in time to an era when wonky off-screen photos of leaked press conferences were all the rage! Actually, hold on...these tweets are dated 2022, and they're talking … [+1761 chars]",
                "description": "<ol><li>It Must Be Summer, Because Clearly Fake State of Play Leaks are Spreading on Social Media  Push Square\r\n</li><li>5 PlayStation games that are highly likely to be showcased at the State of Play event (and 5 that would be a great surprise)  Sportskeeda\r…",
                "publishedAt": "2022-05-30T13:30:00Z",
                "source": {
                    "id": null,
                    "name": "Push Square"
                },
                "title": "It Must Be Summer, Because Clearly Fake State of Play Leaks are Spreading on Social Media - Push Square",
                "url": "https://www.pushsquare.com/news/2022/05/it-must-be-summer-because-clearly-fake-state-of-play-leaks-are-spreading-on-social-media",
                "urlToImage": "https://images.pushsquare.com/c19af6082685a/1280x720.jpg"
            },
            {
                "author": "Kris Holt",
                "content": "As if official confirmation was actually needed after the leak earlier today, a remake of 2013's The Last Of Us is coming to PlayStation 5 on September 2nd. Sony put together a trailer showing some o… [+2533 chars]",
                "description": "As if official confirmation was actually needed after the leak earlier today, a remake of 2013's The Last Of Us is coming to PlayStation 5 on September 2nd. Sony put together a trailer showing some of the gorgeous visuals of The Last of Us Part I and noted th…",
                "publishedAt": "2022-06-09T20:32:43Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "Naughty Dog reveals more details about 'The Last of Us' remake for PS5 and PC",
                "url": "https://www.engadget.com/the-last-of-us-remake-show-multiplayer-game-summer-game-fest-203243783.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/df386f00-e82e-11ec-93df-f8c68599192c"
            },
            {
                "author": "Jessica Conditt",
                "content": "As cute as all of this sounds, Stray tempers the sweetness with dystopian background details. For instance, End Village is a community built on a sea of trash in an abandoned reservoir, with robots l… [+2873 chars]",
                "description": "Every gameplay mechanic and design decision in Stray is driven by a single idea: Because you’re a cat. The world of Stray is filled with anthropomorphic robots, futuristic Hong Kong-inspired streets and makeshift skyscrapers built on heaping piles of trash, a…",
                "publishedAt": "2022-06-08T16:00:25Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "'Stray' preview: Because you're a cat",
                "url": "https://www.engadget.com/stray-preview-cat-game-ps5-ps4-pc-160025422.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/3cc4cb90-e6d7-11ec-bf95-e13207e799f9"
            },
            {
                "author": "Louryn Strampe",
                "content": "There's nothing quite like the feeling of terror that ensues when a kid says that they're bored. We rustled up some discounts on various services, subscriptions, games, and tech that can help pass th… [+8726 chars]",
                "description": "School's out. Keep the kids (and yourself) entertained with these summer discounts.",
                "publishedAt": "2022-06-09T16:00:00Z",
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "title": "16 Great Deals on Gaming Hardware, Tech, and Pizza Ovens",
                "url": "https://www.wired.com/story/summer-deals-june-9-2022/",
                "urlToImage": "https://media.wired.com/photos/5f8f7297d449589759ae7884/191:100/w_1280,c_limit/Gear-Chromecast-with-remote-SOURCE-Google.jpg"
            },
            {
                "author": "Mike Minotti",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nSquare Enix gave us a … [+1078 chars]",
                "description": "We got another look at Final Fantasy XVI during today's PlayStation Showcase.",
                "publishedAt": "2022-06-02T22:28:45Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Final Fantasy XVI is releasing summer 2023",
                "url": "https://venturebeat.com/2022/06/02/final-fantasy-xvi-is-releasing-summer-2023/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2020/09/final-fantasy-xvi.png?w=1200&strip=all"
            },
            {
                "author": "Jessica Conditt",
                "content": "Its a weird year for video games. Were 19 months into a fresh console cycle and support for the PS4 and Xbox One is finally tapering off as developers shift focus to the PS5, Xbox Series X and PC clo… [+5775 chars]",
                "description": "It’s a weird year for video games. We’re 19 months into a fresh console cycle and support for the PS4 and Xbox One is finally tapering off as developers shift focus to the PS5, Xbox Series X and PC cloud gaming platforms. The pandemic slowed or paused develop…",
                "publishedAt": "2022-06-20T14:00:16Z",
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "title": "Summer Game Fest: Where did all the AAA games go?",
                "url": "https://www.engadget.com/summer-game-fest-2022-wrap-up-aaa-indie-140016202.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/9f6e29a0-ee64-11ec-b8fd-d39050e3ff6a"
            },
            {
                "author": "Mike Minotti",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nUbisoft announced Forg… [+812 chars]",
                "description": "Ubisoft announced Forgotten Saga today, a new mode that is coming to Assassin's Creed: Valhalla as a free download.",
                "publishedAt": "2022-06-14T16:10:02Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Assassin’s Creed: Valhalla is getting a free Rogue-lite mode",
                "url": "https://venturebeat.com/2022/06/14/assassins-creed-valhalla-is-getting-a-free-rogue-lite-mode/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/06/valhallaforgottensaga.png?w=1200&strip=all"
            },
            {
                "author": "Michael McWhertor",
                "content": "Image: Hello Games\r\n\n \n\n Hello Games also has a PS5 physical release coming\n \n Continue reading…",
                "description": "Hello Games is bringing No Man’s Sky to Nintendo Switch on Oct. 7, and is releasing a new physical edition for PlayStation 5 the same day.",
                "publishedAt": "2022-06-23T13:00:00Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "No Man’s Sky coming to Nintendo Switch in October",
                "url": "https://www.polygon.com/23179237/no-mans-sky-nintendo-switch-release-date-ps5-physical-edition",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/LFuq2Eg8W0t8EPh-Cl2K8mTEFcQ=/0x18:1920x1023/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23645311/No_Man_s_Sky_Switch_Screen_4.jpeg"
            },
            {
                "author": "George Yang",
                "content": "The new PlayStation Plus is a revamped subscription service that combines Sonys previous PlayStation Plus and PlayStation Now offerings to provide gamers with up to hundreds of titles for a monthly f… [+9644 chars]",
                "description": "<ol><li>PlayStation Plus review: Premium, Extra and Essential  CNN Underscored\r\n</li><li>PlayStation Plus on PC feels years behind Xbox Game Pass  Tom's Guide\r\n</li><li>Nintendo Switch Online Should Follow in PS Plus Premium's Footsteps  GameRant\r\n</li><li>Pl…",
                "publishedAt": "2022-06-21T15:58:00Z",
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "title": "PlayStation Plus review: Premium, Extra and Essential - CNN Underscored",
                "url": "https://www.cnn.com/cnn-underscored/reviews/playstation-plus",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220621100204-playstation-plus-review-lead.jpg?q=w_800,c_fill"
            },
            {
                "author": "Toussaint Egan",
                "content": "Image: Bandai Namco Entertainment America\r\n\n \n\n The game is now available to preorder digitally\n \n Continue reading…",
                "description": "The stylish 3D action fighting game JoJo’s Bizarre Adventure: All Star Battle R will launch on PlayStation 5, PlayStation 4, Xbox One, Xbox Series X, and Nintendo Switch, and Windows PC this September. This remaster of the 2013 original features over 50 playa…",
                "publishedAt": "2022-05-26T17:49:54Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "JoJo’s Bizarre Adventure fighting game remaster launches in September with a wild new roster",
                "url": "https://www.polygon.com/23143099/jojos-bizarre-adventure-all-star-battle-r-september-release-date-ps5-nintendo-switch-pc",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/lLC6vFWDW3SkSP5lsrfmqCleKog=/0x21:1088x591/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23590267/adf627f53140da20e3341ddc1ec9e7cb3f77243a.jpg"
            },
            {
                "author": "Michael McWhertor",
                "content": "Image: Sega/Bandai Namco\r\n\n \n\n Sega’s marquee fighting game goes full cosplay\n \n Continue reading…",
                "description": "Sega’s Virtua Fighter 5 for PlayStation 4 is getting a major Tekken 7 makeover, with 19 new character skins, a Tekken-style UI, and 20 soundtrack songs as part of a new DLC pack.",
                "publishedAt": "2022-05-31T15:22:39Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "Tekken 7 takes over Virtua Fighter 5 in new collaboration DLC",
                "url": "https://www.polygon.com/23148430/virtua-fighter-5-tekken-7-skins-dlc-collaboration",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/HczR6pS1GsPmGYSyVEZ4E8E46_Q=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23598501/akira_kazuya_vf5.jpg"
            },
            {
                "author": "mshore@hotmail.co.uk (Matt Shore)",
                "content": "The original Final Fantasy 7 is undoubtedly one of the most celebrated game releases ever, and Final Fantasy 7 Remake made a huge impact when it launched in 2020. It brought with it widespread praise… [+4575 chars]",
                "description": "Final Fantasy 7 Rebirth has been announced, the sequel to 2020's Final Fantasy 7 Remake and second in a planned trilogy. We'll walk you through everything you need to know.",
                "publishedAt": "2022-06-22T18:00:15Z",
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "title": "Final Fantasy 7 Rebirth for PS5: Gameplay, story, and everything you need to know",
                "url": "https://www.androidcentral.com/final-fantasy-7-rebirth",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/KJfdXMC852RM4AMxivconS-1200-80.jpg"
            },
            {
                "author": "Ari Notis",
                "content": "If you just bought Ghostwire, Deathloop, or any other big PlayStation game, I am so, so sorry. You probably couldve picked it up a lot cheaper today, as PlayStations big spring sale kicks off.\r\nAnnou… [+2022 chars]",
                "description": "If you just bought Ghostwire, Deathloop, or any other big PlayStation game, I am so, so sorry. You probably could’ve picked it up a lot cheaper today, as PlayStation’s big spring sale kicks off.Read more...",
                "publishedAt": "2022-05-25T16:00:00Z",
                "source": {
                    "id": null,
                    "name": "Kotaku"
                },
                "title": "Some Of The PS5’s Biggest Games Are On Sale ATM",
                "url": "https://kotaku.com/playstation-days-of-play-sale-ps4-ps5-ghostwire-deathlo-1848975561",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f8180f659bb9baba869fd6049c413245.jpg"
            },
            {
                "author": "Zack Zwiezen",
                "content": "In an interview published today, Bethesdas creative director Todd Howard revealed the studios future plans, explaining that after the Elder Scrolls 6 comes out, the studios next game will be Fallout … [+2847 chars]",
                "description": "In an interview published today, Bethesda’s creative director Todd Howard revealed the studio’s future plans, explaining that after the Elder Scrolls 6 comes out, the studio’s next game will be Fallout 5, the next main entry in the company’s post-apocalyptic …",
                "publishedAt": "2022-06-14T22:17:52Z",
                "source": {
                    "id": null,
                    "name": "Kotaku"
                },
                "title": "Fallout 5 Is Bethesda’s Next Game After Elder Scrolls 6, Will Probably Be Out By 2050",
                "url": "https://kotaku.com/fallout-5-v-bethesda-elder-scrolls-6-release-date-starf-1849062025",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/463f087a13d2bac3afb65dd158e79ee9.jpg"
            },
            {
                "author": "Luis Miranda",
                "content": "Top Gun es una de las películas más aclamadas de los ochenta. Al igual que ocurrió con múltiples films de la época, la cinta de Tom Cruise tuvo múltiples adaptaciones en los videojuegos, siendo la ve… [+7411 chars]",
                "description": "Top Gun es una de las películas más aclamadas de los ochenta. Al igual que ocurrió con múltiples films de la época, la cinta de Tom Cruise tuvo múltiples adaptaciones en los videojuegos, siendo la versión de Konami una de las más recordadas. ¿Cómo olvidar el …",
                "publishedAt": "2022-05-31T21:31:00Z",
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "title": "5 juegos de ‘Top Gun’ que tal vez no conocías",
                "url": "https://hipertextual.com/2022/05/top-gun-maverick-cinco-juegos-playstation-iphone-xbox",
                "urlToImage": "https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/05/topgun_cincojuegos.jpg?fit=1600%2C900&quality=50&strip=all&ssl=1"
            },
            {
                "author": "Nicole Carpenter",
                "content": "God of War Ragnarök is expected to launch in November, according to a Bloomberg report. This is despite a report published earlier this week that suggested the game had been delayed to 2023, citing s… [+1314 chars]",
                "description": "God of War Ragnarok is the next game in Sony’s Norse saga, originally planned for 2021. After reports of a delay, Bloomberg reports it’s still expected on PlayStation 5 in 2022.",
                "publishedAt": "2022-06-10T15:01:43Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "God of War Ragnarok will still come out this year, report says",
                "url": "https://www.polygon.com/23162598/god-of-war-ragnarok-release-month-bloomberg-report",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/vQJo0xi0J8v1O1IFfh83jqGEIwg=/0x0:2048x1072/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22838328/51439937017_28a550e739_k.jpg"
            },
            {
                "author": "Ebenizer Pinedo",
                "content": "Sabemos que junio suele ser un mes significativo para la industria de los videojuegos, y en 2022 no se iba a presentar una excepción. Si bien existen múltiples eventos programados para las próximas s… [+4464 chars]",
                "description": "Sabemos que junio suele ser un mes significativo para la industria de los videojuegos, y en 2022 no se iba a presentar una excepción. Si bien existen múltiples eventos programados para las próximas semanas, PlayStation ha sido la responsable de inaugurar la i…",
                "publishedAt": "2022-06-02T22:12:55Z",
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "title": "Todos los anuncios y tráilers del State of Play de PlayStation",
                "url": "https://hipertextual.com/2022/06/anuncios-trailers-state-of-play-playstation-junio-2022",
                "urlToImage": "https://hipertextual.com/wp-content/uploads/2021/03/playstation-scaled.jpeg"
            },
            {
                "author": "Ana Diaz",
                "content": "Finally, fans will be able to play more of the Persona games on non-PlayStation platforms. The beloved role-playing game franchise is heading to Xbox consoles, Atlus announced at the Xbox and Bethesd… [+1182 chars]",
                "description": "Persona, the beloved anime-inspired JRPG from Atlus is coming to the Xbox Series X and Windows PC. Atlus announced the news at the Xbox and Bethesda Games Showcase Sunday.",
                "publishedAt": "2022-06-12T18:19:05Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "The Persona series is coming to Xbox",
                "url": "https://www.polygon.com/23164804/persona-coming-to-xbox-console-jrpg-atlus",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/cZHcXgYoCzWWU0REc0g4L9FCdeE=/0x45:1920x1050/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8378545/All_Out_Attack_P5.jpg"
            },
            {
                "author": "Charlie Hall",
                "content": "On Sunday, PC Gamer held its annual PC Gaming Show event, showcasing dozens of games coming to, well, PC. In addition to heavy hitters like Paradox Interactive, there were loads of brilliant looking … [+2285 chars]",
                "description": "The PC Gaming Show was packed with interesting new titles. Here are 5 that turned our heads, including Tactical Breach Wizards and new titles from Necrosoft, 11 Bit Studios, and Klei Entertainment.",
                "publishedAt": "2022-06-14T14:40:00Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "5 cool games from the PC Gaming Show",
                "url": "https://www.polygon.com/23165930/pc-gaming-show-announcements-roundup",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/9ks1l0S_Znx7jtRS8rIkSSazJmU=/0x49:2245x1224/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23626212/demonschool.JPG"
            },
            {
                "author": "Reviewed, Jon Winkler and Elsie Boskamp, Reviewed",
                "content": "— Recommendations are independently chosen by Reviewed’s editors. Purchases you make through our links may earn us a commission.\r\nShopping for yourself and your home can get expensive. Fortunately, W… [+3999 chars]",
                "description": "Walmart's membership program gets you exclusive savings on electronics, apparel and home essentials. Find out more about the Walmart+ Weekend event.",
                "publishedAt": "2022-06-02T21:14:10Z",
                "source": {
                    "id": "usa-today",
                    "name": "USA Today"
                },
                "title": "Walmart+ Weekend is here—find out how to get exclusive access to the PlayStation 5 restock",
                "url": "https://www.usatoday.com/story/money/reviewed/2022/06/02/walmart-weekend-sale-playstation-keurig-samsung/7473017001/",
                "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/02/USAT/b9aefe9a-cc93-47da-80dc-20c1a94e5838-WalmartHero.png?auto=webp&crop=2990,1682,x5,y0&format=pjpg&width=1200"
            },
            {
                "author": "Mike Minotti",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nFinal Fantasy VII Rema… [+733 chars]",
                "description": "Final Fantasy VII Remake Intergrade is coming to Steam on June 17, and it'll be compatible with the Steam Deck.",
                "publishedAt": "2022-06-16T22:09:16Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Final Fantasy VII Remake comes to Steam on June 17",
                "url": "https://venturebeat.com/2022/06/16/final-fantasy-vii-remake-comes-to-steam-on-june-17/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2020/04/ff7remake.jpg?w=1200&strip=all"
            },
            {
                "author": "Mike Minotti",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nI grew up on the origi… [+834 chars]",
                "description": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more. I grew up on the original Sonic games. I liked them then. I like them now. I’ve als…",
                "publishedAt": "2022-06-22T18:51:18Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Sonic Origins review — way past cool",
                "url": "https://venturebeat.com/2022/06/22/sonic-origins-review-way-past-cool/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/04/Untitled-1.jpg?w=1200&strip=all"
            },
            {
                "author": "@GIGAZINE",
                "content": "GooglePlayStation VitaPlayStation Portable(PSP)TheFlowTotal_Noobtheflow0HackerOnePlayStationPlayStation 4(PS4)PlayStation 5(PS5)5\r\n#1379975 bd-j exploit chainhttps://hackerone.com/reports/1379975\r\nPl… [+498 chars]",
                "description": "Googleのセキュリティエンジニアであるアンディ・ングイェン氏は、PlayStation VitaやPlayStation Portable(PSP)のハッキングで知られる「TheFlow」や「Total_Noob」といった名義でも活躍しています。そんなングイェン氏が「theflow0」名義で、HackerOneが提供するPlayStationのバグ報酬金プログラムに参加し、PlayStation 4(PS4)とPlayStation 5(PS5)に影響のある5つの脆弱性を発見しました。続きを読む...",
                "publishedAt": "2022-06-20T08:00:00Z",
                "source": {
                    "id": null,
                    "name": "Gigazine.net"
                },
                "title": "PS4やPS5で海賊版ゲームが遊べてしまう脆弱性を発見した研究者に200万円以上の報酬金が贈られる",
                "url": "https://gigazine.net/news/20220620-ps4-ps5-vulnerabilities/",
                "urlToImage": "https://i.gzn.jp/img/2022/06/20/ps4-ps5-vulnerabilities/00_m.jpg"
            },
            {
                "author": "Ebenizer Pinedo",
                "content": "Desde el año anterior escuchamos rumores sobre un supuesto remake de The Last of Us para PS5, y ahora es oficial. Aunque el anuncio estaba preparado para el Summer Game Fest 2022, el evento de videoj… [+1750 chars]",
                "description": "Desde el año anterior escuchamos rumores sobre un supuesto remake de The Last of Us para PS5, y ahora es oficial. Aunque el anuncio estaba preparado para el Summer Game Fest 2022, el evento de videojuegos organizado por Geoff Keighley, la web de PlayStation D…",
                "publishedAt": "2022-06-09T16:20:30Z",
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "title": "El remake de ‘The Last of Us’ para PS5 ya es oficial: este es su tráiler y fecha de lanzamiento",
                "url": "https://hipertextual.com/2022/06/remake-the-last-of-us-ps5-trailer-fecha-de-lanzamiento",
                "urlToImage": "https://hipertextual.com/wp-content/uploads/2022/06/the-last-of-us.jpeg"
            },
            {
                "author": "Mike Minotti",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nBloober Team revealed … [+487 chars]",
                "description": "Bloober Team revealed Layers of Fears during today's Summer Game Fest.",
                "publishedAt": "2022-06-09T19:42:18Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Layers of Fears is coming early 2023",
                "url": "https://venturebeat.com/2022/06/09/layers-of-fears-is-coming-early-2023/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/06/layersoffears.png?w=1200&strip=all"
            },
            {
                "author": "Louryn Strampe, Gear Team",
                "content": "Memorial Day is a major shopping holiday in the US, but nobody wants to spend their long weekend scrolling through marketing emails. Let us save you the trouble. We scoured the web to find actual dea… [+15510 chars]",
                "description": "Summer is within reach. Save on WIRED-Recommended hair dryers, TVs, hot-weather essentials, and more this weekend.",
                "publishedAt": "2022-05-29T15:13:00Z",
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "title": "The 37 Best Memorial Day Deals on Tech, Gaming, Home, and More",
                "url": "https://www.wired.com/story/best-memorial-day-sales-2022-2/",
                "urlToImage": "https://media.wired.com/photos/628558af5d49787abdf7142f/191:100/w_1280,c_limit/Solo-Stove-Pi-Gear.jpg"
            },
            {
                "author": "Ryan Dinsdale",
                "content": "The PlayStation 5 has now surpassed 20 million units sold worldwide and Sony has promised to significantly increase its production efforts within the next six months.\r\nSony executive Veronica Rogers … [+1865 chars]",
                "description": "The PlayStation 5 has now surpassed 20 million units sold worldwide and Sony has promised to significantly increase its production efforts within the next six months.",
                "publishedAt": "2022-06-03T16:05:47Z",
                "source": {
                    "id": "ign",
                    "name": "IGN"
                },
                "title": "PS5 Has Passed 20 Million Units Sold, and Sony Says It Will Ramp Up Production This Year",
                "url": "https://www.ign.com/articles/ps5-passed-20-million-units-sold-sony-ramp-up-production",
                "urlToImage": "https://assets-prd.ignimgs.com/2022/06/02/ps5console-1654181215345.jpeg?width=1280"
            },
            {
                "author": "Ari Notis",
                "content": "For their latest trick, the pixel-analyzing masters at Digital Foundry picked a hot-button item: The Last of Us Part I. Though the question at the core of Part Idoes this need to exist?is still very … [+3382 chars]",
                "description": "For their latest trick, the pixel-analyzing masters at Digital Foundry picked a hot-button item: The Last of Us Part I. Though the question at the core of Part I—does this need to exist?—is still very much in play, you can’t deny a glow-up when you see one.Re…",
                "publishedAt": "2022-06-14T20:25:00Z",
                "source": {
                    "id": null,
                    "name": "Kotaku"
                },
                "title": "The Last Of Us Remake Is Extremely Detailed, But Does It Matter?",
                "url": "https://kotaku.com/the-last-of-us-part-i-part-ii-ps3-ps4-ps5-digital-found-1849061317",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/13e4d177feb39d6ed5b4568a2a4507fc.jpg"
            },
            {
                "author": "Mike Minotti",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nOne of the most elusiv… [+1131 chars]",
                "description": "One of the most elusive titles in the Final Fantasy franchise is making a comeback.",
                "publishedAt": "2022-06-16T22:16:15Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Crisis Core: Final Fantasy VII is finally free of the PSP",
                "url": "https://venturebeat.com/2022/06/16/crisis-core-final-fantasy-vii-is-finally-free-of-the-psp/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/06/crisicore.png?w=1200&strip=all"
            },
            {
                "author": "Joe Anderton",
                "content": "Final Fantasy VII's 25th anniversary livestream included a whole host of information about the future of the FFVII Remake project, including the first footage, official title and release window of Re… [+3153 chars]",
                "description": "<ol><li>FFVII Remake part 2 announced with official title and release window  Digital Spy\r\n</li><li>CRISIS CORE –FINAL FANTASY VII– REUNION Announcement Trailer - Nintendo Switch  Nintendo\r\n</li><li>When does Final Fantasy VII: Ever Crisis release?  Dot Espor…",
                "publishedAt": "2022-06-18T13:55:24Z",
                "source": {
                    "id": null,
                    "name": "digitalspy.com"
                },
                "title": "FFVII Remake part 2 announced with official title and release window - Digital Spy",
                "url": "https://www.digitalspy.com/tech/a40330210/final-fantasy-vii-remake-part-2-rebirth-crisis-core-remaster/",
                "urlToImage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/final-fantasy-vii-rebirth-cloud-and-zack-1655557892.jpg?crop=1.00xw:0.894xh;0,0&resize=1200:*"
            },
            {
                "author": "Daniel Herbig",
                "content": "Sony legt den ersten Teil von \"The Last of Us\" für die Playstation 5 neu auf. Das Remake kommt mit aufgehübschter Grafik auf die aktuelle Konsolengeneration, kündigte Sony beim Summer Game Fest an. D… [+1720 chars]",
                "description": "Der erste Teil von \"The Last of Us\" kommt auf die Playstation 5 und den PC – mit frischer Grafik. Außerdem ist ein Mehrspieler-Ableger in Arbeit.",
                "publishedAt": "2022-06-09T20:13:00Z",
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "title": "\"The Last of Us\": Teil 1 wird für Playstation 5 und PC neu aufgelegt",
                "url": "https://www.heise.de/news/The-Last-of-Us-Teil-1-wird-fuer-Playstation-5-und-PC-neu-aufgelegt-7136334.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/5/7/4/0/5/d46b8aaeda639b21852cbc12837243f23f44eb40-scaled-7add0999c1601a02.webp"
            },
            {
                "author": "Samuel Axon",
                "content": "1 with 1 posters participating\r\nIt's been quite a while since we've had a new, triple-A Lord of the Rings game, but that's going to change on September 1, according to developer and publisher Daedali… [+2600 chars]",
                "description": "It's the first triple-A video game set in Middle-earth since 2017.",
                "publishedAt": "2022-05-24T22:22:31Z",
                "source": {
                    "id": "ars-technica",
                    "name": "Ars Technica"
                },
                "title": "Big-budget The Lord of the Rings: Gollum video game gets a 2022 release date",
                "url": "https://arstechnica.com/gaming/2022/05/big-budget-the-lord-of-the-rings-gollum-video-game-gets-a-2022-release-date/",
                "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/ss_441a9b311278e61b64556c71c0faee2e892ff0fd.1920x1080-760x380.jpg"
            },
            {
                "author": "Robert Ramsey",
                "content": "Image: Push Square\r\nIt comes as absolutely no surprise, but Sony really wants to sort out these ongoing PS5 stock issues. The current-gen console is still being hamstrung by problems in the supply ch… [+1178 chars]",
                "description": "<ol><li>PS5 Supply Issues a 'Top Priority' for Sony as It Aims to Overtake PS4 Again in 2024  Push Square\r\n</li><li>Sony plans PlayStation 5 production ramp up  Reuters\r\n</li><li>Sony vows to ramp up PS5 production to levels 'never achieved before' | Engadget…",
                "publishedAt": "2022-05-26T00:15:00Z",
                "source": {
                    "id": null,
                    "name": "Push Square"
                },
                "title": "PS5 Supply Issues a 'Top Priority' for Sony as It Aims to Overtake PS4 Again in 2024 - Push Square",
                "url": "https://www.pushsquare.com/news/2022/05/ps5-supply-issues-a-top-priority-for-sony-as-it-aims-to-overtake-ps4-again-in-2024",
                "urlToImage": "https://images.pushsquare.com/e773a21c88124/1280x720.jpg"
            },
            {
                "author": "Ethan Gach",
                "content": "Microsoft laid out some of its big plans for gaming ahead of Sundays Xbox and Bethesda showcase, and those plans include a steady stream of more big exclusives, expanded Game Pass perks, and bringing… [+3005 chars]",
                "description": "Microsoft laid out some of its big plans for gaming ahead of Sunday’s Xbox and Bethesda showcase, and those plans include a steady stream of more big exclusives, expanded Game Pass perks, and bringing video game cloud streaming directly to smart TVs. Most of …",
                "publishedAt": "2022-06-09T14:50:00Z",
                "source": {
                    "id": null,
                    "name": "Kotaku"
                },
                "title": "Microsoft Promises 5 More Xbox Exclusives, Game Pass Demos In The Next Year",
                "url": "https://kotaku.com/microsoft-xbox-game-pass-samsung-streaming-demos-halo-f-1849039557",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/561767c2b9d2587ead288c8fa08ef917.jpg"
            },
            {
                "author": "Jon Bitner",
                "content": "The products discussed here were independently chosen by our editors.\r\n GameSpot may get a share of the revenue if you buy anything featured on our site.\r\nThe PlayStation Store is home to a deep libr… [+505 chars]",
                "description": "The PlayStation Store is home to a deep library of affordable games for PS5 and PS4. Titles like Horizon Forbidden West and Deathloop might dominate headlines, but you're genuinely missing out if you don't check out some of the lovable indies lurking in the b…",
                "publishedAt": "2022-06-03T15:30:00Z",
                "source": {
                    "id": null,
                    "name": "GameSpot"
                },
                "title": "Best Cheap PlayStation Games For Under $5",
                "url": "https://www.gamespot.com/gallery/best-cheap-playstation-games-for-under-5/2900-4104/",
                "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1595/15950357/3983666-gunmanclive.jpg"
            },
            {
                "author": "@GIGAZINE",
                "content": "PlayStation 54K HDRDualSense - GIGAZINE\r\nPlayStation 5(PS5) - GIGAZINE\r\nPlayStation 5(PS5) - GIGAZINE\r\nPS5 - GIGAZINE\r\nPlayStation 52000 - GIGAZINE\r\nTweet",
                "description": "累計販売台数が2000万台を突破したPlayStation 5(PS5)は、発売前から「史上最大サイズの家庭用ゲーム機」であることが話題を呼んでいました。そんなあまりにデカすぎるPS5を1インチ(2.54cm)未満のスリムボディに改造してしまった猛者が登場しています。続きを読む...",
                "publishedAt": "2022-06-21T05:00:00Z",
                "source": {
                    "id": null,
                    "name": "Gigazine.net"
                },
                "title": "ゲーム機史上最大級にデカいPS5を2cm未満の超スリムに改造してしまった猛者が登場",
                "url": "https://gigazine.net/news/20220621-youtuber-rebuilds-ps5-slim/",
                "urlToImage": "https://i.gzn.jp/img/2022/06/21/youtuber-rebuilds-ps5-slim/00.jpg"
            },
            {
                "author": "Joe Rossignol",
                "content": "While not advertised on Apple's website, it has been discovered that iOS 16 adds support for the Nintendo Switch's Joy-Cons and Pro Controller. The feature was highlighted on Twitter by Riley Testut,… [+898 chars]",
                "description": "While not advertised on Apple's website, it has been discovered that iOS 16 adds support for the Nintendo Switch's Joy-Cons and Pro Controller. The feature was highlighted on Twitter by Riley Testut, the developer behind iOS video game emulator Delta.\n\n\n\n\n\nIn…",
                "publishedAt": "2022-06-07T01:18:21Z",
                "source": {
                    "id": null,
                    "name": "MacRumors"
                },
                "title": "iOS 16 Adds Support for Nintendo Switch's Joy-Cons and Pro Controller",
                "url": "https://www.macrumors.com/2022/06/06/ios-16-supports-nintendo-joy-cons/",
                "urlToImage": "https://images.macrumors.com/t/iXMATIp85-ALibN22_NUU7JAmPs=/1860x/article-new/2022/06/nintendo-joy-cons.jpg"
            },
            {
                "author": "Alberto Martín",
                "content": "Una de las grandes quejas de los usuarios de PlayStation es que la consola de Sony no tiene un mando Pro oficial. Si bien hay alternativas como el increíble SCUF Reflex, no hay nada oficial similar a… [+2177 chars]",
                "description": "Una de las grandes quejas de los usuarios de PlayStation es que la consola de Sony no tiene un mando Pro oficial. Si bien hay alternativas como el increíble SCUF Reflex, no hay nada oficial similar al Xbox Elite oficial de Xbox. En PS4 había mandos licenciado…",
                "publishedAt": "2022-06-16T14:45:12Z",
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "title": "Sony está trabajando en un mando «DualSense Pro» para PS5 que se anunciaría el próximo mes",
                "url": "https://hipertextual.com/2022/06/dualsense-pro-mando-ps5",
                "urlToImage": "https://hipertextual.com/wp-content/uploads/2020/04/hipertextual-luce-dualsense-playstation-5-otros-colores-2020373639.jpg"
            },
            {
                "author": "Michael McWhertor",
                "content": "Square Enixs updated remake of Final Fantasy 7 is coming to Steam on June 17, the publisher announced Thursday during a livestream celebrating the original games 25th anniversary. Final Fantasy 7 Rem… [+703 chars]",
                "description": "Square Enix’s FF7 Remake on PC has been exclusive to the Epic Games Store, but a Steam version is coming June 17 — with Steam Deck support.",
                "publishedAt": "2022-06-16T22:11:41Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "Final Fantasy 7 Remake Intergrade coming to Steam",
                "url": "https://www.polygon.com/23171809/final-fantasy-7-remake-pc-steam-release-date",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/KJQQAf7g8pkboPOuLFzJkUPEPzw=/0x0:3840x2010/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23634122/FF7R_Intergrade_PC_Cloud___Small_JPEG.jpg"
            },
            {
                "author": "Peter Steinlechner",
                "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]",
                "description": "568 Tage nach dem Verkaufsstart meldet Sony den Verkauf von 20 Millionen Playstation 5. Bei der PS4 ging das viel schneller. (Playstation 5, Sony)",
                "publishedAt": "2022-06-07T09:43:02Z",
                "source": {
                    "id": null,
                    "name": "Golem.de"
                },
                "title": "Sony: Mehr als 20 Millionen Playstation 5 abgesetzt",
                "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fsony-mehr-als-20-millionen-playstation-5-abgesetzt-2206-165904-rss.html&referer=https%3A%2F%2Ft.co%2F51da3eeb4a",
                "urlToImage": null
            },
            {
                "author": "Oliver Nickel",
                "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]",
                "description": "Der Youtuber DIY Perks hat seine eigene dünne Playstation 5 gebaut. Die Wasserkühlung ist effizient, allerdings war der Bauweg steinig. (Playstation 5, Sony)",
                "publishedAt": "2022-06-20T14:11:02Z",
                "source": {
                    "id": null,
                    "name": "Golem.de"
                },
                "title": "Bastelprojekt: 2 Zentimeter dicke Playstation 5 ist wassergekühlt",
                "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fbastelprojekt-2-zentimeter-dicke-playstation-5-ist-wassergekuehlt-2206-166270-rss.html&referer=https%3A%2F%2Ft.co%2Fed2017bbb3",
                "urlToImage": null
            },
            {
                "author": "Graham Smith",
                "content": "The Last Of Us: Part One is heading to PC. The news leaked out earlier this evening but was then officially announced as part of the Summer Games Fest. The good news is that our favoured platform wil… [+1828 chars]",
                "description": "The Last Of Us: Part One is heading to PC. The news leaked out earlier this evening but was then officially announced as part of the Summer Games Fest. The good news is that our favoured platform will receive the same fancified version as is being developed f…",
                "publishedAt": "2022-06-09T20:19:17Z",
                "source": {
                    "id": null,
                    "name": "Rock Paper Shotgun"
                },
                "title": "The Last Of Us: Part 1 is headed to PC, but there's no release date yet",
                "url": "https://www.rockpapershotgun.com/the-last-of-us-part-1-is-headed-to-pc-but-theres-no-release-date-yet",
                "urlToImage": "https://assets2.rockpapershotgun.com/last-of-us-part-1.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/last-of-us-part-1.jpg"
            },
            {
                "author": "BeauHD",
                "content": "From now on, Russian and Belarusian entities can only buy CPUs operating at below 25 MHz and offering performance of up to 5 GFLOPS from Taiwanese companies. This essentially excludes all modern tech… [+1664 chars]",
                "description": "An anonymous reader quotes a report from Tom's Hardware: From now on, Russian and Belarusian entities can only buy CPUs operating at below 25 MHz and offering performance of up to 5 GFLOPS from Taiwanese companies. This essentially excludes all modern technol…",
                "publishedAt": "2022-06-01T22:00:00Z",
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "title": "Taiwan Restricts Russia, Belarus To CPUs Under 25 MHz Frequency",
                "url": "https://hardware.slashdot.org/story/22/06/01/2057218/taiwan-restricts-russia-belarus-to-cpus-under-25-mhz-frequency",
                "urlToImage": "https://a.fsdn.com/sd/topics/hardware_64.png"
            },
            {
                "author": "Thomas Estimbre",
                "content": "La PlayStation 5 de Sony dispose dun mode repos pour réduire la consommation électrique. Malheureusement, il semble causer plus de problèmes quil nen résout. Explications.Depuis sa commercialisation … [+2519 chars]",
                "description": "La PlayStation 5 de Sony dispose d’un mode repos pour réduire la consommation électrique. Malheureusement, il semble causer plus de problèmes qu’il n’en résout. Explications.\nPlayStation 5 : voici pourquoi vous devriez arrêter d’utiliser le mode repos",
                "publishedAt": "2022-06-13T07:30:20Z",
                "source": {
                    "id": null,
                    "name": "Journal du geek"
                },
                "title": "PlayStation 5 : voici pourquoi vous devriez arrêter d’utiliser le mode repos",
                "url": "https://www.journaldugeek.com/2022/06/13/playstation-5-voici-pourquoi-vous-devriez-arreter-dutiliser-le-mode-repos/",
                "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/09/ps5.jpg"
            },
            {
                "author": null,
                "content": "Undertale and Deltarune developer Toby Fox has announced that he is composing some of the music for the upcoming Pokémon Scarlet and Violet games. \r\nFox made the announcement yesterday (June 1) along… [+1551 chars]",
                "description": "<ol><li>'Undertale''s Toby Fox is doing music for 'Pokémon Scarlet and Violet'  NME\r\n</li><li>5 Big Things You May Have Missed In The Pokémon Scarlet And Violet Trailer  Kotaku\r\n</li><li>Pokemon Fans Are Already Drawing Saucy Fanart Of Pokemon's New Professor…",
                "publishedAt": "2022-06-02T09:30:21Z",
                "source": {
                    "id": null,
                    "name": "NME"
                },
                "title": "'Undertale''s Toby Fox is doing music for 'Pokémon Scarlet and Violet' - NME",
                "url": "https://www.nme.com/news/gaming-news/undertales-toby-fox-is-doing-music-for-pokemon-scarlet-and-violet-3238843",
                "urlToImage": "https://www.nme.com/wp-content/uploads/2022/03/Pokemon-Scarlet-and-Violet-header-3.jpg"
            },
            {
                "author": "Isaiah Colbert",
                "content": "While many in the fighting game community were happy to finally see Street Fighter6 in action during last weeks PlayStation State of Play, a very vocal majority of FGC connoisseurs who enjoy the game… [+3908 chars]",
                "description": "While many in the fighting game community were happy to finally see Street Fighter 6 in action during last week’s PlayStation State of Play, a very vocal majority of FGC connoisseurs who enjoy the games for their, err, riveting storylines have been absolutely…",
                "publishedAt": "2022-06-06T18:20:00Z",
                "source": {
                    "id": null,
                    "name": "Kotaku"
                },
                "title": "Street Fighter's Ken Has Fallen On Hard Times (And Fans Are Laughing)",
                "url": "https://kotaku.com/ken-masters-street-fighter-6-memes-divorce-eliza-shoryu-1849024285",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4bbfae74f72c7463915b63356723b800.jpg"
            },
            {
                "author": "Daniel Herbig",
                "content": "Ab dem 23. Juni bietet Sony sein Spieleabonnement Playstation Plus an. Dahinter steckt der Versuch, Microsofts längst etabliertem Game Pass ein Playstation-Pendant entgegenzusetzen. Wie auch beim Gam… [+8256 chars]",
                "description": "Microsofts Game Pass hat es vorgemacht, nun bietet auch Sony ein eigenes Abo an. Was taugt das neue Playstation Plus und welche Stufe ist die richtige?",
                "publishedAt": "2022-06-23T08:05:00Z",
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "title": "Playstation Plus: Das steckt in Sonys Spieleabo",
                "url": "https://www.heise.de/hintergrund/Playstation-Plus-Das-steckt-in-Sonys-Spieleabo-7147997.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/6/3/5/0/6/2363d070f57dd67cecf522da0c71e282ad9e9c2b-scaled-9a5b7149d856eba3.webp"
            },
            {
                "author": "Sarang Sheth",
                "content": "Not everyone seems to like the PlayStation 5 design. It’s either too alien-looking, or too large for people (even though it’s the most popular gaming console in the world)… so engineer and YouTuber D… [+3347 chars]",
                "description": "World’s First PlayStation 5 ‘Slim’ is a water-cooled gaming console that’s less than an inch thickNot everyone seems to like the PlayStation 5 design. It’s either too alien-looking, or too large for people (even though it’s the most popular gaming...",
                "publishedAt": "2022-06-23T22:30:17Z",
                "source": {
                    "id": null,
                    "name": "Yanko Design"
                },
                "title": "World’s First PlayStation 5 ‘Slim’ is a water-cooled gaming console that’s less than an inch thick",
                "url": "https://www.yankodesign.com/2022/06/23/worlds-first-playstation-5-slim-is-a-water-cooled-gaming-console-thats-less-than-an-inch-thick/",
                "urlToImage": "https://www.yankodesign.com/images/design_news/2022/06/worlds-first-playstation-5-slim-is-a-water-cooled-gaming-console-thats-just-half-an-inch-thick/ps5_slim_layout.jpg"
            },
            {
                "author": "George Yang",
                "content": "During today’s PlayStation State of Play presentation, Capcom revealed Resident Evil 4 remake and that it will launch on March 23, 2023. The title will also get PlayStation VR2 content.\r\nThe first tr… [+569 chars]",
                "description": "Capcom revealed the Resident Evil 4 remake along with PlayStation VR2 content for both it and Resident Evil Village.",
                "publishedAt": "2022-06-02T22:28:47Z",
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "title": "Resident Evil 4 gets the remake treatment next March",
                "url": "https://www.digitaltrends.com/gaming/resident-evil-4-remake-announcement/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/re4.jpg?p=1"
            },
            {
                "author": "Daniel Noel",
                "content": "Calling all PlayStation players! The sequel to 2019s blockbuster Call of Duty: Modern Warfare is almost here. Call of Duty: Modern Warfare II will kick off a new era for the franchise when it release… [+7277 chars]",
                "description": "Calling all PlayStation players! The sequel to 2019’s blockbuster Call of Duty: Modern Warfare is almost here. Call of Duty: Modern Warfare II will kick off a new era for the franchise when it releases worldwide on October 28 for PlayStation 5 and PlayStation…",
                "publishedAt": "2022-06-08T17:15:14Z",
                "source": {
                    "id": null,
                    "name": "Playstation.com"
                },
                "title": "Call of Duty: Modern Warfare II comes to PS5 & PS4 October 28",
                "url": "https://blog.playstation.com/2022/06/08/call-of-duty-modern-warfare-ii-comes-to-ps5-ps4-october-28/",
                "urlToImage": "https://blog.playstation.com/tachyon/2022/06/1b718e8c85e1bc1b2c076461d66833ed7d685174.jpg"
            },
            {
                "author": "George Yang",
                "content": "Sony Santa Monica’s God of War Ragnarok is reportedly being targeted for a November 2022 release.\r\nAccording to a report from Bloomberg, PlayStation is expected to announce the precise release date l… [+1670 chars]",
                "description": "It looks like God of War Ragnarok is looking at a November release window, despite some other reports saying that it could be delayed to 2023.",
                "publishedAt": "2022-06-10T15:20:11Z",
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "title": "God of War Ragnarok is reportedly releasing in November",
                "url": "https://www.digitaltrends.com/gaming/god-of-war-potential-november-release/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2021/10/god-of-war-ragnarok.jpg?p=1"
            },
            {
                "author": "Sean Ingle",
                "content": "When Reece Prescod turned up at the UK Athletics trials last year, he was 8kg overweight after bingeing on fast food and cake from Deliveroo while enjoying epic eight-hour Call of Duty sessions deep … [+3958 chars]",
                "description": "Sprinter accepts his lifestyle was holding his huge talent back but now he eyes the world championships and British 100m recordWhen Reece Prescod turned up at the UK Athletics trials last year, he was 8kg overweight after bingeing on fast food and cake from D…",
                "publishedAt": "2022-06-23T16:00:02Z",
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "title": "‘This is a reset’: Reece Prescod roars into form after giving up gaming",
                "url": "https://amp.theguardian.com/sport/2022/jun/23/reece-prescod-roars-into-form-after-giving-up-gaming-athletics",
                "urlToImage": "https://i.guim.co.uk/img/media/eea0a1f6707e5f0218dd8bf41dfafdc073029b3c/1256_178_2155_1293/master/2155.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0b295105f7e4f81bd42a983e9adf6358"
            },
            {
                "author": "Billy Givens",
                "content": "Sony has announced its PlayStation Plus lineup for June, and it includes God of War, Naruto to Boruto: Shinobi Striker, and Nickelodeon All-Star Brawl.\r\nFor some, God of War may feel like an odd choi… [+1560 chars]",
                "description": "God of War, Naruto to Boruto: Shinobi Striker, and Nickelodeon All-Star Brawl are this month's free games.",
                "publishedAt": "2022-06-02T16:06:40Z",
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "title": "PlayStation Plus adds God of War and more ahead of revamp",
                "url": "https://www.digitaltrends.com/gaming/ps-plus-june-2022-god-of-war-naruto-nickelodeon/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/04/god-of-war-2018-kratos-atreus.jpg?p=1"
            },
            {
                "author": "Ana Diaz",
                "content": "Blizzard announced a start date for the Overwatch 2 beta on Tuesday. The beta will start on June 28 and will be available to both Windows PC and console players. Sign-ups and more details will come o… [+870 chars]",
                "description": "The Overwatch 2 beta will begin on June 16, Blizzard announced on Tuesday. The beta will come to Windows PC and console users and the company says fans can expect sign-ups and more details on Thursday.",
                "publishedAt": "2022-06-14T17:41:12Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "Overwatch 2 beta comes this month and will include console players",
                "url": "https://www.polygon.com/23167668/overwatch-2-beta-release-date-pc-console",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/P6vdGSi4R4IBM-GkHnbm3KoM9IU=/0x0:1280x670/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23621581/ow2_jq_ult.jpg"
            },
            {
                "author": "Jea Yu",
                "content": "Video game maker Take-Two Interactive Software (NASDAQ: TTWO)stock has rallied off its lows of $101.85 but still trades down (-28%) on the year. The publisher of the infamous Grand Theft Auto series … [+5103 chars]",
                "description": "Video game maker Take-Two Interactive Software (NASDAQ: TTWO) stock has rallied off its lows of $101.85 but still trades down (-28%) on the year.",
                "publishedAt": "2022-06-08T07:00:00Z",
                "source": {
                    "id": null,
                    "name": "Entrepreneur"
                },
                "title": "Time to Buy Take-Two Interactive Stock",
                "url": "https://www.entrepreneur.com/article/429086",
                "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-429086.jpeg"
            },
            {
                "author": "Jose García",
                "content": "Pues ya está aquí. Tras ser anunciado hace algunos meses y haber llegado paulatinamente a varias regiones, el nuevo PlayStation Plusya está disponible en España para todos. Como ya sabíamos, el nuevo… [+30695 chars]",
                "description": "Pues ya está aquí. Tras ser anunciado hace algunos meses y haber llegado paulatinamente a varias regiones, el nuevo PlayStation Plus ya está disponible en España para todos. Como ya sabíamos, el nuevo PlayStation Plus combina la suscripción PS Plus y  PS Now …",
                "publishedAt": "2022-06-23T08:19:24Z",
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "title": "El nuevo PlayStation Plus llega a España: comparativa de suscripciones, precios y todos los juegos disponibles",
                "url": "https://www.xataka.com/servicios/nuevo-playstation-plus-llega-a-espana-comparativa-suscripciones-precios-todos-juegos-disponibles",
                "urlToImage": "https://i.blogs.es/af90f5/1366_2000/840_560.jpeg"
            },
            {
                "author": "George Yang",
                "content": "PlayStation announced that its next State of Play presentation will air at 3 p.m. PT on June 2. It’ll last for about 30 minutes and focus on third-party games and PlayStation VR2 titles.\r\nWhen announ… [+2035 chars]",
                "description": "PlayStation's upcoming game showcase will feature content from third-party developers, as well as titles for PSVR2.",
                "publishedAt": "2022-05-27T15:07:35Z",
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "title": "A PlayStation VR2-focused State of Play is coming next week",
                "url": "https://www.digitaltrends.com/gaming/playstation-state-of-play-june-2/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/02/screenshotter-youtube-horizonforbiddenwest-storytrailerps5ps4-230.jpg?p=1"
            },
            {
                "author": "Erick Tay",
                "content": "Customize your fighters with 19 characters costumes from the TEKKEN 7 series! Along with new character costumes, players will be able to enjoy 20 BGM tracks from TEKKEN 7 as they compete to become th… [+102 chars]",
                "description": "The TEKKEN 7 Collaboration Pack is available on June 1st, 2022, on PlayStation®4!",
                "publishedAt": "2022-05-31T16:42:00Z",
                "source": {
                    "id": null,
                    "name": "GameSpot"
                },
                "title": "Virtua Fighter 5 Ultimate Showdown x TEKKEN 7 Collaboration Pack",
                "url": "https://www.gamespot.com/videos/virtua-fighter-5-ultimate-showdown-x-tekken-7-collaboration-pack/2300-6458358/",
                "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1352/13527689/3983537-virtua_fighter_x_tekken.mp4.00_00_36_20.still002.jpg"
            },
            {
                "author": "Javier Marquez",
                "content": "El último State of Play nos ha dejado un buen puñado de novedades. Desde el remake de 'Resident Evil 4' hasta el primer gameplay de 'Street Fighter 6'. Y Sony también se ha encargado de mostrarnos un… [+1431 chars]",
                "description": "El último State of Play nos ha dejado un buen puñado de novedades. Desde el remake de 'Resident Evil 4' hasta el primer gameplay de 'Street Fighter 6'. Y Sony también se ha encargado de mostrarnos un tráiler de 'The Callisto Protocol' y poner fecha para su la…",
                "publishedAt": "2022-06-03T14:15:48Z",
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "title": "'The Callisto Protocol' es el aterrador y genuino heredero del horror en atmósfera cero de 'Dead Space'",
                "url": "https://www.xataka.com/videojuegos/the-callisto-protocol-aterrador-genuino-heredero-horror-atmosfera-cero-dead-space",
                "urlToImage": "https://i.blogs.es/584510/the-callisto-protocol_12/840_560.png"
            },
            {
                "author": "Andreas Wilkens",
                "content": "Honda und Sony haben nun letztgültig vereinbart, noch in diesem Jahr in einem Joint Venture gemeinsame Geschäfte aufzunehmen. Der Autohersteller Honda ist für Mobilitätsentwicklung und Fahrzeugkaross… [+1899 chars]",
                "description": "Honda und Sony wollen bis 2025 gemeinsam Elektroautos auf den Markt bringen. Sony will darin unter anderem seine Unterhaltungselektronik unterbringen.",
                "publishedAt": "2022-06-17T11:21:00Z",
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "title": "Elektroauto-Ehe \"Sony Honda Mobility\": Auf zur Playstation auf Rädern",
                "url": "https://www.heise.de/news/Elektroauto-Ehe-Sony-Honda-Mobility-Auf-zur-Playstation-auf-Raedern-7143859.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/6/1/3/5/6/exterior1-3cf799d4514c39d5.jpg"
            },
            {
                "author": "@GIGAZINE",
                "content": "PlayStation(SIE)20221PlayStation 5(PS5)VRPlayStation VR2(PS VR2)2PS VR2202215020231\r\n(1/5)My latest supply chain check suggests that the assembler and several component providers of PS VR2 will start… [+1251 chars]",
                "description": "PlayStationブランドの開発・販売を担当するソニー・インタラクティブエンタテインメント(SIE)は2022年1月にPlayStation 5(PS5)向けの次世代VRシステム「PlayStation VR2(PS VR2)」を発表し、2月には最終デザインイメージを公開しています。香港に拠点を置くサプライチェーンアナリストのミンチー・クオ氏は、PS VR2は2022年下半期に約150万台が量産され、2023年第1四半期ごろの発売になると予想を報告しています。続きを読む...",
                "publishedAt": "2022-06-01T04:00:00Z",
                "source": {
                    "id": null,
                    "name": "Gigazine.net"
                },
                "title": "PS5向け新VR「PlayStation VR2」は年内に量産開始して2023年初頭に発売すると有名アナリストが分析",
                "url": "https://gigazine.net/news/20220601-playstation-vr2-1q23/",
                "urlToImage": "https://i.gzn.jp/img/2022/06/01/playstation-vr2-1q23/00_m.jpg"
            },
            {
                "author": "Sheena Vasani",
                "content": "Plus, Amazons 55-inch 4K Omni Fire TV is just $300\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nThe Govee DreamView G1 Pro Gaming Light is on s… [+6167 chars]",
                "description": "Govee’s DreamView G1 Pro gaming lights are on sale for cheaper than ever right now, as are various sizes of Amazon’s 4K Omni Fire TV. Elsewhere, you can pick up Jabra’s noise-canceling Elite 85t for just under $140.",
                "publishedAt": "2022-06-22T13:46:18Z",
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "title": "Govee’s DreamView G1 Pro gaming lights are discounted for the first time",
                "url": "https://www.theverge.com/good-deals/2022/6/22/23176769/govee-dreamview-g1-pro-lights-amazon-omni-fire-tv-jabra-elite-85t-earbuds-arlo-pro-3-deal-sale",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/YRsJ7DelS5yRFBQ5t146typYcWQ=/0x147:2040x1215/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23418377/adibenedetto_220424_5164_0015.jpg"
            },
            {
                "author": "Mike Minotti",
                "content": "Interested in learning what's next for the gaming industry? Join gaming executives to discuss emerging parts of the industry this October at GamesBeat Summit Next. Learn more.\r\nSquare Enix announced … [+855 chars]",
                "description": "Square Enix announced Final Fantasy VII Rebirth during today's 25th Anniversary Celebration event.",
                "publishedAt": "2022-06-16T22:20:18Z",
                "source": {
                    "id": null,
                    "name": "VentureBeat"
                },
                "title": "Final Fantasy VII Rebirth continues Remake’s story next winter",
                "url": "https://venturebeat.com/2022/06/16/final-fantasy-vii-rebirth-continues-remakes-story-next-winter/",
                "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/06/ff7rebirth.png?w=1200&strip=all"
            },
            {
                "author": "George Yang",
                "content": "During Square Enix’s Final Fantasy VII 25th anniversary stream, the company revealed Final Fantasy VII Rebirth. It’s the second part of the remake series, and it’ll launch next winter for PlayStation… [+1519 chars]",
                "description": "Final Fantasy VII Rebirth, Crisis Core -Final Fantasy VII- Reunion, and more were shown during Square Enix's latest Final Fantasy VII livestream.",
                "publishedAt": "2022-06-16T22:49:12Z",
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "title": "Final Fantasy VII Rebirth and Crisis Core expand the remake universe",
                "url": "https://www.digitaltrends.com/gaming/final-fantasy-vii-remake-part-2/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/rebirth-1.jpg?p=1"
            },
            {
                "author": "Charlie Hall",
                "content": "Marvels Midnight Suns, the next turn-based game from the team behind XCOM, revealed a host of new characters on Thursday. Chief among them is Peter Parker himself. Spider-Man is confirmed for this XC… [+1487 chars]",
                "description": "Marvel’s Midnight Suns new gameplay trailer introduces Spider-Man and Venom to its hero-heavy lineup. The new trailer from Summer Game Fest shows off a lavish new CGI trailer. This ain’t your father’s XCOM clone.",
                "publishedAt": "2022-06-09T19:04:37Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "Marvel’s Midnight Suns introduces Spider-Man and Venom to its hero-heavy lineup",
                "url": "https://www.polygon.com/23160437/marvels-midnight-suns-spider-man-venom-hulk-trailer-summer-game-fest",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/Q8yj_rFUg81m1h_DBapDNKeuG4U=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23617671/vlcsnap_2022_06_09_14h59m06s428.png"
            },
            {
                "author": "Ana Diaz",
                "content": "Nickelodeon All-Star Brawl is about to become a lot more lively. Developers Ludosity and Fair Play Labs announced that the game is getting a free new update that will add voice acting on Monday. The … [+1497 chars]",
                "description": "Nickelodeon All-Star Brawl got a free update on Monday that brings voice acting to the game. Characters like SpongeBob SquarePants and Patrick Star will be played by the original voice actors from the television show.",
                "publishedAt": "2022-06-06T20:29:14Z",
                "source": {
                    "id": "polygon",
                    "name": "Polygon"
                },
                "title": "Nickelodeon All-Star Brawl just got voice acting",
                "url": "https://www.polygon.com/23156943/nickelodeon-all-star-brawl-just-got-voice-acting",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/4qn_N0ZZt1DYivM3z7UFX6H0_YU=/0x0:3840x2010/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23611065/patrickstar.jpeg"
            },
            {
                "author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
                "content": "The SonyPlayStation 5 is getting a restock this June.\r\nRetail giant Walmart has confirmed that they will be restocking its PlayStation 5 consoles this coming Thursday, June 2, at 12 PM PT. The restoc… [+464 chars]",
                "description": "The Sony PlayStation 5 is getting a restock this June.Retail giant Walmart has confirmed that they will be restocking its PlayStation 5 consoles this coming Thursday, June 2, at 12 PM PT. The restock will only be available online through Walmart's website and…",
                "publishedAt": "2022-05-31T09:36:30Z",
                "source": {
                    "id": null,
                    "name": "HYPEBEAST"
                },
                "title": "Walmart Is Restocking the PlayStation 5 This June",
                "url": "https://hypebeast.com/2022/5/walmart-playstation-5-ps5-restock-june-2022",
                "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Ftw-walmart-will-restock-ps5-this-thursday-walmart-is-restocking-its-supply-of-playstation-5-for-certain-customers-on-thursday-sony-recently-revealed-that-the-shortage-of-playstation-5-consoles-might.jpg?w=960&cbr=1&q=90&fit=max"
            },
            {
                "author": "Joanna Partridge",
                "content": "MPs have launched an inquiry into the strengths and weaknesses of the UK semiconductor industry and its supply chain, after months of global shortages and disruption that have hit production of cars,… [+2687 chars]",
                "description": "The industry has not been able to manufacture enough to keep pace with rocketing demandMPs have launched an inquiry into the strengths and weaknesses of the UK semiconductor industry and its supply chain, after months of global shortages and disruption that h…",
                "publishedAt": "2022-05-25T15:42:30Z",
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "title": "MPs launch inquiry into UK semiconductor industry amid global shortages",
                "url": "https://amp.theguardian.com/business/2022/may/25/mps-inquiry-uk-semiconductor-industry-global-shortages",
                "urlToImage": "https://i.guim.co.uk/img/media/33b15478787dec56f3b23b7a3e3f1892d1bd5c31/0_179_5361_3217/master/5361.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=914afa5d8c6cbdfb484e2027e3c60ba5"
            },
            {
                "author": "岡本玄介",
                "content": "PS5SlimPlayStation 5 slim\r\nYouTubeDIY Perks2cm\r\nVideo: DIY Perks/YouTube\r\n2cm32\r\nPlayStation 5 slim \r\nPlayStation 5 slim\r\nSource: YouTube via HACKADAYReference: XTECH",
                "description": "初期型はブ厚くてデカくとも、数年後には薄型が登場するプレイステーション。巨大で置き場所を選ぶ「PS5」も「Slim」化が待ち望まれる昨今ですが、魔改造で「PlayStation 5 slim」を自作する猛者が現れました。",
                "publishedAt": "2022-06-21T14:30:00Z",
                "source": {
                    "id": null,
                    "name": "Gizmodo.jp"
                },
                "title": "薄さ2cm！魔改造でぺったんこになった水冷式「PlayStation 5 slim」",
                "url": "https://www.gizmodo.jp/2022/06/playstation-5-slim.html",
                "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/06/21/220622_ps5slim-w960.jpg"
            },
            {
                "author": "Guillermo Kurten",
                "content": "Jurassic World Dominionis out to close the six-movie storyline that began with Steven Spielberg’s all-time classic, but there are other ways for fans to satiate their appetite for dinosaur-themed con… [+5207 chars]",
                "description": "Jurassic World Dominion brings the six-movie storyline to a close, but there are a handful of dinosaur-themed video games to play if you liked the movie.",
                "publishedAt": "2022-06-14T14:01:23Z",
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "title": "5 games to play if you liked Jurassic World Dominion",
                "url": "https://www.digitaltrends.com/movies/dinosaur-video-games-to-play-jurassic-world-dominion/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/jurassic-world-evolution-2-beta-gameplay-screenshot.jpg?p=1"
            },
            {
                "author": "Malindy Hetfeld",
                "content": "In a scene familiar to anyone who has ever watched a horror film, two young people are driving down a road at night, affectionately bickering about being lost. Were the L word, Laura (Siobhan William… [+3862 chars]",
                "description": "PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One; 2K Games/Supermassive GamesThe makers of Until Dawn return with a cinematic and satisfyingly tropey teen horror that’s tense, fun and simple to playIn a scene familiar to anyone who has ever watched…",
                "publishedAt": "2022-06-08T14:46:31Z",
                "source": {
                    "id": null,
                    "name": "The Guardian"
                },
                "title": "The Quarry review – engrossing buffet of horror staples",
                "url": "https://amp.theguardian.com/games/2022/jun/08/the-quarry-review-review-playstation-xbox-pc-supermassive-games",
                "urlToImage": "https://i.guim.co.uk/img/media/a1baf00ff861e205e1cb7e464360931fb7e82fdb/368_1280_1392_835/master/1392.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=8f29dc5799e47acf826403e930f3f1ff"
            },
            {
                "author": "Frank Schräer",
                "content": "Da die Spielemesse E3 wieder einmal abgesagt wurde, gibt es eine ganze Reihe von Streaming-Events der Spieleentwickler und Konsolenanbieter. Den Anfang macht Sony, das etliche neue und speziell für V… [+3315 chars]",
                "description": "Sony mit aufwendigen Playstation-Spielen + Googles Marken-Wirrwarr + Satelliten für selbstfahrende Autos + US-Militär hilft Ukraine + Wärmepumpen überwiegen",
                "publishedAt": "2022-06-03T04:30:00Z",
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "title": "Freitag: Sony spielt mit Virtual Reality, Google vereint Duo und Meet",
                "url": "https://www.heise.de/news/Freitag-Sony-spielt-mit-Virtual-Reality-Google-vereint-Duo-und-Meet-7130873.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/5/4/5/3/5/friday-475f95eac9f4e99a.webp"
            },
            {
                "author": "Jessica Howard",
                "content": "The Last of Us is making the jump to a third generation of PlayStation consoles and coming to PlayStation 5. The announcement comes after Twitter user Wario64 noticed a PlayStation 5 listing of the g… [+535 chars]",
                "description": "The Last of Us is making the jump to a third generation of PlayStation consoles and coming to PlayStation 5. The announcement comes after Twitter user Wario64 noticed a PlayStation 5 listing of the game earlier today. According to the PlayStation store listin…",
                "publishedAt": "2022-06-09T16:09:00Z",
                "source": {
                    "id": null,
                    "name": "GameSpot"
                },
                "title": "The Last Of Us PS5 Remaster Leaks With September Release Date",
                "url": "https://www.gamespot.com/articles/the-last-of-us-ps5-remaster-leaks-with-september-release-date/1100-6504343/",
                "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1639/16394322/3988101-2127501-169_lastofus_vr_ps3_060413_80.jpeg"
            },
            {
                "author": "Daniel Herbig",
                "content": "Activision Blizzard hat neue Spielszenen von \"Diablo 4\" gezeigt und die fünfte Klasse vorgestellt: Der Necromancer soll mit den anderen Klassen ab 2023 spielbar sein. In einem Gameplay-Video sind auß… [+1740 chars]",
                "description": "Activision hat neue Spielszenen zu \"Diablo 4\" gezeigt, die auch die neue Necromancer-Klasse umfassen. \"Overwatch 2\" wird kostenfrei spielbar.",
                "publishedAt": "2022-06-12T18:18:00Z",
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "title": "\"Diablo 4\": Blizzard zeigt Necromancer im Gameplay-Video",
                "url": "https://www.heise.de/news/Diablo-4-Blizzard-zeigt-Necromancer-im-Gameplay-Video-7138193.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/5/8/3/9/6/World06-Fractured_Peaks-Large-64fa4edeec366696.webp"
            },
            {
                "author": "Erick Tay",
                "content": "The acclaimed horror survival RPG, Walking Dead: Saints &amp; Sinners - Chapter 2: Retribution is coming to PlayStation 5's PSVR2.\r\nBy \r\n Erick Tay\r\n on June 2, 2022 at 5:33PM PDT",
                "description": "The acclaimed horror survival RPG, Walking Dead: Saints & Sinners  - Chapter 2: Retribution is coming to PlayStation 5's PSVR2.",
                "publishedAt": "2022-06-03T00:27:00Z",
                "source": {
                    "id": null,
                    "name": "GameSpot"
                },
                "title": "Walking Dead: Saints and Sinners - Retribution PSVR2 Trailer | Sony State of Play June 2022",
                "url": "https://www.gamespot.com/videos/walking-dead-saints-and-sinners-retribution-psvr2-trailer-sony-state-of-play-june-2022/2300-6458405/",
                "urlToImage": "https://www.gamespot.com/a/uploads/original/1352/13527689/3985353-thewalkingdead_saintsandsinnersch2-stateofplayjune2022announcetrailer_psvr2games.mp4.00_00_12_00.still001.jpg"
            },
            {
                "author": "John Tones",
                "content": "Este título independiente de los polacos Flying Wild Hog, creadores de 'Evil West' y la saga 'Shadow Warrior' es absolutamente fascinante desde el punto de vista visual. Aunque este 'Trek to Yomi' ha… [+1449 chars]",
                "description": "Este título independiente de los polacos Flying Wild Hog, creadores de 'Evil West' y la saga 'Shadow Warrior' es absolutamente fascinante desde el punto de vista visual. Aunque este 'Trek to Yomi' ha sido criticado por las limitaciones de su sistema de combat…",
                "publishedAt": "2022-05-31T14:53:31Z",
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "title": "Esta mezcla de 'Prince of Persia' y película de samuráis es uno de los secretos mejor guardados de Game Pass",
                "url": "https://www.xataka.com/videojuegos/esta-mezcla-prince-of-persia-pelicula-samurais-uno-secretos-mejor-guardados-game-pass",
                "urlToImage": "https://i.blogs.es/51010d/1650268221_305_trek-to-yomi-15-fonctionnalites-que-vous-devez-savoir./840_560.jpeg"
            },
            {
                "author": "George Yang",
                "content": "We could be hearing more about God of War Ragnarok‘s release date soon. The game was rated by South Korea’s Game Rating and Administration Committee.\r\nAccording to the rating, the applicant is Sony I… [+1458 chars]",
                "description": "God of War Ragnarok was rated by South Korea's game rating committee, and that suggests that we could be seeing a release date for the game soon.",
                "publishedAt": "2022-05-26T15:40:05Z",
                "source": {
                    "id": null,
                    "name": "Digital Trends"
                },
                "title": "God of War Ragnarok rating signals imminent release date",
                "url": "https://www.digitaltrends.com/gaming/god-of-war-ragnarok-release-date/",
                "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/05/god-of-war.jpeg?p=1"
            },
            {
                "author": "Jan Wöbbeking",
                "content": "Auf eine E3 müssen wir in diesem Jahr bekanntlich verzichten. Nichtsdestotrotz eröffnete Sony in der vergangenen Nacht die Saison der großen Streaming-Events. Überraschungen gab es im \"State of Play\"… [+4401 chars]",
                "description": "Auf der \"State of Play\" präsentierte Sony grafisch aufwendige PSVR2-Spielen sowie neue Szenen aus Titeln wie \"Final Fantasy 16\" oder \"The Callisto Protocol\".",
                "publishedAt": "2022-06-03T01:57:00Z",
                "source": {
                    "id": null,
                    "name": "heise online"
                },
                "title": "Sony zeigt PSVR2-Szenen, \"Resident Evil 4\"-Remake und \"Final Fantasy XVI\"",
                "url": "https://www.heise.de/news/Sony-zeigt-PSVR2-Szenen-Resident-Evil-4-Remake-und-Final-Fantasy-XVI-7130865.html",
                "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/5/4/5/3/1/Resident_Evil_Village-5d36b3fb0fa0b5b7.webp"
            },
            {
                "author": "Tsuyoshi Kanda",
                "content": "The PlayStation 5 version of the award-winning Resident Evil Village is coming to PlayStation VR2! Development is currently underway to bring the story campaign in its entirety to be playable in VR.\r… [+1526 chars]",
                "description": "The PlayStation 5 version of the award-winning Resident Evil Village is coming to PlayStation VR2! Development is currently underway to bring the story campaign in its entirety to be playable in VR. The PS VR2 system is currently in development, and Resident …",
                "publishedAt": "2022-06-02T22:13:18Z",
                "source": {
                    "id": null,
                    "name": "Playstation.com"
                },
                "title": "Resident Evil Village is coming to PSVR2",
                "url": "https://blog.playstation.com/2022/06/02/resident-evil-village-is-coming-to-psvr2/",
                "urlToImage": "https://blog.playstation.com/tachyon/2022/06/0ac8fedc7efd5e87894a2fed30f5bf4c3ffd4da7.jpg"
            },
            {
                "author": "Hipertextual (Redacción)",
                "content": "Obi-Wan Kenobi, la nueva serie de Disney+ ya está disponible. Y para aprovechar el estreno más esperado del año, junto con todo lo que llegará en los próximos meses y que se anunció ayer en la Star W… [+3086 chars]",
                "description": "Obi-Wan Kenobi, la nueva serie de Disney+ ya está disponible. Y para aprovechar el estreno más esperado del año, junto con todo lo que llegará en los próximos meses y que se anunció ayer en la Star Wars Celebration, aprovecha la oferta de Disney+ y ahórrate d…",
                "publishedAt": "2022-05-27T07:33:52Z",
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "title": "Aprovecha el estreno de ‘Obi-Wan Kenobi’ y ahórrate dos meses de suscripción a Disney+",
                "url": "https://hipertextual.com/2022/05/como-tener-disney-gratis",
                "urlToImage": "https://hipertextual.com/wp-content/uploads/2022/05/wallpapersden.com_obi-wan-kenobi-hd-star-wars_2560x1440-1.jpg"
            },
            {
                "author": "Андрей Ставицкий",
                "content": "Sony Returnal . VGC.\r\nSteamDB. Oregon, , Returnal, rogue-like, sci-fi bullet hell. Sony , .\r\n , PlayStation 5 2021 Returnal Housemarque. Sony. , Returnal PS5, .\r\n , PS Sony. PlayStation , .\r\nReturnal… [+94 chars]",
                "description": "Sony собирается выпустить игру Returnal на компьютерах. Упоминание новой игры обнаружили в базе SteamDB. Близкий к Sony источник подтвердил, что компания может работать над портированием игры для пользователей ПК. Выпущенный для PlayStation 5 в апреле 2021 го…",
                "publishedAt": "2022-05-27T09:01:58Z",
                "source": {
                    "id": "lenta",
                    "name": "Lenta"
                },
                "title": "Раскрыт первый эксклюзив PlayStation 5 на ПК",
                "url": "https://lenta.ru/news/2022/05/27/returnal/",
                "urlToImage": "https://icdn.lenta.ru/images/2022/05/26/17/20220526175652821/share_463d00c995ddd094e5bddea2df877364.jpeg"
            },
            {
                "author": "Ari Notis",
                "content": "News of a video game remake is always the bellwether to a hurricane of discourse. Has it really been that long? Does this game really deserve a remake? This week, the eye of the storm is The Last of … [+4118 chars]",
                "description": "News of a video game remake is always the bellwether to a hurricane of discourse. Has it really been that long? Does this game really deserve a remake? This week, the eye of the storm is The Last of Us, as fans debate whether or not the visuals in the just-un…",
                "publishedAt": "2022-06-10T17:50:00Z",
                "source": {
                    "id": null,
                    "name": "Kotaku"
                },
                "title": "The Last Of Us Fans Debate PS5 Remake’s Graphics",
                "url": "https://kotaku.com/the-last-of-us-part-one-ps5-remake-graphic-comparison-p-1849046449",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/21c1db2f79c9c764d951a787560c1985.jpg"
            },
            {
                "author": "Rebekah Valentine",
                "content": "We already have a release window for Final Fantasy 16: Summer 2023 for PlayStation 5 and PC. \r\nRevealed at today's Sony State of Play event, Final Fantasy 16 also got a new trailer, the first look at… [+1418 chars]",
                "description": "",
                "publishedAt": "2022-06-02T22:32:11Z",
                "source": {
                    "id": "ign",
                    "name": "IGN"
                },
                "title": "Final Fantasy 16 Gets Gameplay Trailer, Release Window Announced",
                "url": "https://www.ign.com/articles/final-fantasy-16-release-window-trailer",
                "urlToImage": "https://assets-prd.ignimgs.com/2022/06/02/screen-shot-2022-06-02-at-6-26-36-pm-1654208941284.png?width=1280"
            }
        ],
        "status": "ok",
        "totalResults": 8564
    },
    "command": "newHeadlines"
}