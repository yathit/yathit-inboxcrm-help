


(function() {

  var updateChromeAppInstallButton = function(app_id, el_id) {
    var sugarcrm_install_url = 'https://chrome.google.com/webstore/detail/' + app_id;
    var app_home = 'chrome-extension://' + app_id + '/option-page.html';
    var install_btn = document.getElementById(el_id);
    if (install_btn) {
      if (window.chrome) {
        if (chrome.app.isInstalled) {
          if (el_id.substr(0, 4) != 'link') {
            install_btn.textContent = 'Installed Already';
          }
          install_btn.href = app_home;
          install_btn.setAttribute('title', 'You have already installed, visit extension page.');
        } else {
          if (!install_btn.href) {
            install_btn.href = sugarcrm_install_url;
          }
          install_btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            chrome.webstore.install(sugarcrm_install_url, function successCallback(opt) {
              if (chrome.app.isInstalled) {
                install_btn.textContent = 'Setup';
                install_btn.href = app_home;
                install_btn.setAttribute('title', 'Installed, visit extension page to get started.');
              }
            }, function failureCallback(e) {
              window.console.error(e);
              var a = document.querySelector('.alternative-install');
              if (a) {
                a.style.display = '';
              }
            });
          }
        }
      } else {
        if (el_id.substr(0, 4) != 'link') {
          install_btn.textContent = 'Install on Chrome';
        }
        install_btn.href = sugarcrm_install_url;
      }
    }
  };
  updateChromeAppInstallButton('iccdnijlhdogaccaiafdpjmbakdcdakk', 'install-sugarcrm');
  updateChromeAppInstallButton('iccdnijlhdogaccaiafdpjmbakdcdakk', 'link-install-sugarcrm');
  updateChromeAppInstallButton('ldikiokclnbceabnlbkabmcacpiednop', 'install-gmail-tracking');
  updateChromeAppInstallButton('ldikiokclnbceabnlbkabmcacpiednop', 'link-install-gmail-tracking');



})();
