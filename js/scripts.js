window.addEventListener('DOMContentLoaded', function () {
  // startTabs
  let tab = document.querySelectorAll('.nj-tabs__title'),
    groupTabs = document.querySelector('.nj-tabs__group-tabs'),
    tabInfo = document.querySelectorAll('.nj-tabs__info');

  function showTabInfo(item) {
    tabInfo.forEach(currentTab => currentTab
      .classList.remove('nj-tabs__info_show'));

    tabInfo.forEach(() => tabInfo[item]
      .classList.add('nj-tabs__info_show'));
      console.log(tabInfo[item]);
      
  }

  groupTabs.addEventListener('click', function (e) {
    let target = e.target,
      titleTab = target.closest('.nj-tabs__title');

    if (titleTab) {
      tab.forEach((item, idx) => {
        if (titleTab == tab[idx]) {
          tab.forEach(currentTab => currentTab
            .classList.remove('active'));

          tab[idx]
            .classList.add('active');
          showTabInfo(idx);
        }
      });
    }
  });



  // endTabs


});