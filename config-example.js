const config = {

    // If you plan on forking this bot or using it in a git environment, GITIGNORE THIS FILE.

    "token": "tokenhere",
    "prefix": "->",
    "ownerid": "IDHERE",
    // "ownerid2": "IDHERE",
    // For multiple users of a higher auth level you can keep adding IDs and then check whether a message is sent by one of them


    // You can add as many permission levels as you like, as long as you specify them under each command. 
  permLevels: [
    { level: 0,
      name: "User", 

      check: () => true
    },

    { 
      level: 10,
      name: "Owner", 

      check: (message) => message.client.config.ownerid === message.author.id 
    //   || message.client.config.ownerid2 === message.author.id  
    // Like this!
      
    },
  ]
  };

module.exports = config;