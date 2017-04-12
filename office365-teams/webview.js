module.exports = (Franz, options) => {
  const checkForMessages = () => {
    let unreadCount = 0;
    const titleChunks = document.title.split(' ')
    if (titleChunks[0].indexOf('(') === 0) {
      unreadCount = titleChunks[0].replace('(','').replace(')','')
    }

    Franz.setBadge(unreadCount);
  }

  Franz.loop(checkForMessages);

  
};