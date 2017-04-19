module.exports = (Franz, options) => {
  const checkForMessages = () => {
    let unreadCount = document.querySelectorAll('#column-one > div.yj-left-nav-backbone > div > div.yj-nav-menu--fixed-content > div.yj-nav-menu--groups > div > div.yj-scroller-viewport.yj-nav-menu--scroller-viewport.yj-scroller-can-scroll.yj-scroller-at-top > div.yj-scroller > div > div > div > div.yj-nav-menu--headed-group-list > ul .yj-unseen-count-badge--count').length

    Franz.setBadge(unreadCount);  
  }

  Franz.loop(checkForMessages);

  
};