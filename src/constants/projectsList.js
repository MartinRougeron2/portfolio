let projects = [
  {
    name: `Babel`,
    description: `How to recreate Skype in C++ with Qt & Portaudio`,
    image_url: `https://www.tomsguide.fr/content/uploads/sites/2/2019/02/skype-enregistrer-appel-3.png`,
    link_url: `babel`,
    text1: `With 3 of my friends, we recreate a Skype with 2 main libs: Qt (graphical part) & Portaudio (audio part).`,
    text2: `We create each part of the project: audio capture, audio compression & audio server.`,
    features: [
      {text: `The first step was to create a TCP server & client for user management.`,
      },
      {
        text: `The second one, was to create an UDP server which take a packet in hub to send it to other clients connected to the hub.`,
      },
      {text: `Then, we create a acquisition sound system thanks to Portaudio.`},
      {
        text: `The last part was to connect every part to have a sound transmission system.`,
      },
      {
        text: `In bonus, we added a graphic interface with Qt`,
      },
    ]
  },
  {
    name: `Redditech`,
    description: `With Reddit API, I recreate my own Reddit App.`,
    image_url: `/redditech.png`,
    link_url: `redditech`,
    text1: `With reddit's API, I recreate my own UX/UI to display `,
    text2: `It's my first mobile App, and I did it in flutter.`,
    features: [
      {text: `The main goal was to understand the flutter philosphy. And my first week was dedicaded to experiment and create small pages.`,},
      {
        text: `With my one week training, I was able to create the main page: Home page. <br/>
        In Reddit the home page display posts from all subscribed subreddits.
        The most difficult part was to add the upvote part, because it was link to the API : `,
        image_url: '/redditech.png'
      },
      {
        text: `When my Home page was created and displays all the information we needed, I create the search page, it was quite easy because all the components I used were already in Flutter.`,
        image_url: '/search.png'
    },
      {
        text: `So, when the search page was finished, I create the sub Page, It was exatcly ike Home page but with 2 more things: <br/> The abblity to subscribe to it and see the description.`,
        image_url: '/sub.png'
      },
      {
        text: `The last page to create was the profile one. As the search page, all I need was already in my code or flutter so it was very easy. But display and modify settings was a tough task for many reasons.`,
        image_url: '/profile.png'
      },
      {
        text: `In bonus, I add a splash screen and I modify the icon to make it a bit more "professional"`,
        image_url: '/splash.png'
      },
    ]
  },
  {
    name: `Dashboard`,
    description: `With a friend, we create a dashboard.`,
    image_url: `/dashboard.png`,
    link_url: `dashboard`,
    text1: `The goal was to create a dashboard, but what is a dashboard ? A dashboard is a website where you can see all the informations you need.`,
    text2: `We create 3 servicies: a food service with Spoonacular API, a music one with Spotify and a photo service with Unsplash API.`,
    features: [
      {
        text: `The first step was to create a backend for user management. It includes user creation & login, Google Authentification and a JWT authentification system.`,
        image_url: '/login.png'
      },
      {
        text: `In the same time we create the home page with a bottom slider which allows the user to add Widgets to his dashboard.`,
        image_url: '/bottom.png'
      },
      {
        image_url: '/bottom_hover.png'
      },
      {
        text: `The second part was the most complicated, create a data model to store Widgets and to be enough free to let us create diffrent widgets.
        <br/> When we finished, we create 6 widgets :`,
        image_url: '/dashboard.png'
      },
      {
        image_url: '/dashboard_2.png'
      },
      {
        text: `Then, we added a system to login to Spotify & Unsplash to permit the user to have his account linked to those services.`,
        image_url: '/spotify_login.png'
      },
    ]
  },
  {
    name: `my_RPG`,
    description: `I create my own RPG w/ my 3 friends for a school project`,
    image_url: `https://camo.githubusercontent.com/8ec620767c42e957a476a6f585c188005992f3db8801396848fd720827f1ae66/68747470733a2f2f706f7274666f6c696f2d6d617274696e2d726f756765726f6e2e6e65746c6966792e6170702f496c6c757374726174696f6e2f7270672e706e67`,
    link_url: `rpg`,
    text1: `The goal was simple: create your own RPG in C using SFML graphic library. It was the biggest project in first year and we had a month with my 3 classmates to do it.`,
    text2: `It's a rpg game were you're a soldier in a fantasy world. Your goal: kill the 2 bosses.
        You are a soldier and a magician, thanks to the skill tree, you can learn skill and improve your soldier or your magician side.
        `,
    features: [
      {text: `This game has a large map:`, image_url: 'Illustration/Rpg/minimap.png'},
      {
        text: `It also has a dual combat system with a magic system & a melee system.`,
        image_url: 'Illustration/Rpg/fireball.png'
      },
      {text: ``, image_url: 'Illustration/Rpg/attack_melee.png'},
      {
        text: `The main menu allows you to load your game or customize your character if you're new.`,
        image_url: 'Illustration/Rpg/menu.png'
      },
      {
        text: `Also, Ghost of Lies has an inventory & a skill tree to improve your abilities.`,
        image_url: 'Illustration/Rpg/skill%20tree.png'
      },
      {text: ``, image_url: 'Illustration/Rpg/Inventroy.png'},
      {text: `The story is told through main quests. A quest have always 3 parts:`, image_url: ''},
      {text: `Talk to pnj to get the quest to get it`, image_url: 'Illustration/Rpg/Talk%20to%20pnjs.png'},
      {text: `Do the quest`, image_url: 'Illustration/Rpg/quest.png'},
      {text: ``, image_url: 'Illustration/Rpg/takedamage.png'},
      {text: `Receive the quest's item or skill`, image_url: 'Illustration/Rpg/reward.png'},
      {text: `To have a game with life we add 4 types of PNJs`, image_url: ''},
      {text: `Quest PNJ`, image_url: 'Illustration/Rpg/Talk%20to%20pnjs.png'},
      {text: `Shop PNJ`, image_url: 'Illustration/Rpg/shop.png'},
      {text: `Save pnj`, image_url: 'Illustration/Rpg/save.png'},
      {text: `Useless PNJ, his role is just to speak`, image_url: 'Illustration/Rpg/useless.png'},
      {text: `The game has 2 main parts which are the 2 bosses`, image_url: ''},
      {text: `Triviatant which is a bullet hell boss`, image_url: 'Illustration/Rpg/TRiviatant.png'},
      {text: `Sahrotarh which is a new type of boss`, image_url: 'Illustration/Rpg/Boss2.png'},
      {text: `We also add a weather system`, image_url: 'Illustration/Rpg/wheather.png'},
    ]
  },
]

export {projects}
