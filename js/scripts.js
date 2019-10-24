window.addEventListener('DOMContentLoaded', function() {
  // startTabs
  let tab = document.querySelectorAll('.nj-tabs__title'),
      groupTabs = document.querySelectorAll('.nj-tabs__group-tabs')[0],
      tabInfo = document.querySelectorAll('.nj-tabs__info');

  console.log(tabInfo);

  function showTabInfo(item) {
    tabInfo.forEach(function(tab){
      tab.classList.remove('nj-tabs__info_show');
    });
    for (var i = item; i < tabInfo.length; i++) {
      tabInfo[item].classList.add('nj-tabs__info_show');
    }
    console.log(tabInfo[item]);
  }

  groupTabs.addEventListener('click', function(e) {
    let target = e.target;
    if (target.matches('div.nj-tabs__title')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          console.log(i);
          showTabInfo(i);
          break;
        }
      }
    }
  });



  // endTabs


});
