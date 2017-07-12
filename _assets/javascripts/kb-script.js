

var _paq = _paq || [];
_paq.push(['setUserId', localStorage.getItem('uid') || '']);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://analytic.yathit.com/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  if (location.host === 'www.yathit.com') {
    _paq.push(['setSiteId', '1']);
    _paq.push(['setDomains', '*.yathit.com']);
  } else {
    _paq.push(['setSiteId', '2']);
  }

  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

function sendAnalytic() {
  _paq.push(Array.prototype.slice.call(arguments));
}

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


(function runForum() {

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function send(cb, mth, path, body) {
    var xhr = new XMLHttpRequest();
    xhr.open(mth || 'GET', path, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.onload = function(ev) {
      if (/json/.test(xhr.getResponseHeader('Content-Type'))) {
        if (xhr.status == 401 && /^https/.test(xhr.responseText)) {
          location.href = xhr.responseText;
        }
        cb(JSON.parse(xhr.responseText), xhr.status, xhr.responseText);
      } else {
        cb(xhr.responseText, xhr.status, xhr.responseText);
      }
    };
    var payload = body ? JSON.stringify(body) : null;
    xhr.send(payload);
  }

  function sendKb(cb, mth, path, body) {
    send(cb, mth, '/kb/' + path, body);
  }

  /**
   * patchPost({type: 'FAQ'});
   * patchPost({status: 'Completed'});
   */
  window.patchPost = function(post) {
    if (!post.id) {
      post.id = parseInt($('[data-id]').attr('data-id'), 10);
    }
    if (!post.id) {
      console.error('id');
      return;
    }
    sendKb(function(json, status) {
      console.log(json, status);
    }, 'POST', post.id + '?patch=1', post);
  };

  function search(q, done) {

      sendKb(function(json, status) {
        if (status == 200) {
          done(json);
        } else {
          console.error(json);
        }
      }, 'GET', 'search/?q=' + q);

  }
  window.search = search;

  function exeSearch(q, root) {
    search(q, function(arr) {
      root.innerHTML = '';
      var n = arr ? arr.length || 0 : 0;
      sendAnalytic('trackSiteSearch', q, 'kb', n);
      for (var i = 0; i < n; i++) {
        var json = arr[i];
        var div = document.createElement('div');
        div.innerHTML = '<h3><a href="/kb/' + json.id + '">' + json.title + '</a></h3><div class="post-content">' +
            json.content + '</div>';
        root.appendChild(div);
      }
    });
  }

  var dispSearchBox = debounce(function(q) {
    var el = document.getElementById('search-result');
    var el2 = document.getElementById('main-content');
    if (q) {
      el.style.display = '';
      el2.style.display = 'none';
      exeSearch(q, el);
    } else {
      el.style.display = 'none';
      el2.style.display = '';
    }
  }, 500);
  var $searchBox = $('.search-box INPUT');
  $searchBox.on('keyup', function(ev) {
    dispSearchBox($searchBox.val());
  });

  function renderNewPost(form) {
    if (!form) {
      return
    }
    form.onsubmit = function(ev) {
      ev.preventDefault();
      var title = form.title.value;
      var post = {
        title: title,
        content: form.content.value
      };
      if (form.id) {
        post['id'] = form.id.value;
      }
      if (form.type) {
        post['type'] = form.type.value;
      }
      sendKb(function(json, status, statusText) {
        if (status == 200 || status == 201) {
          var id = json.threadId || json.id;
          location.href = '/kb/' + id + '-' + json.title;
        } else {
          alert(statusText);
        }
      }, 'POST', '', post);
    };

    var dispSearch = debounce(function(q) {
      exeSearch(q, document.getElementById('search-result'));
    }, 500);
    var $input = $(form).find('input[name="title"]');
    $input.on('keyup', function(ev) {
      dispSearch($input.val());
    });
  }

  var path = '/rpc_login?url=' + location.href;
  send(function(login_resp) {
        const user = login_resp.User || {};

        var login_el = document.getElementById('login');
        if (user.is_login) {
          login_el.textContent = '';
          document.body.classList.add('user-login');
          login_el.textContent = 'Profile';
          login_el.href = '/kb/profile/' + user.Id.$t;
          if (user.is_admin || user.email === 'kyawtun@yathit.com') {
            document.body.classList.add('user-admin');
          }
          localStorage.setItem('uid', user.email);
        } else {
          login_el.textContent = 'Login';
          login_el.href = user.login_url;
          document.body.classList.add('user-notlogin');
        }
      }, 'GET', path);

  renderNewPost(document.querySelector('FORM.forum-post'));

  var cmt_form = document.querySelector('FORM.comment-post');
  if (cmt_form) {
    cmt_form.addEventListener('submit', function(ev) {
      ev.preventDefault();
      var btn = cmt_form.querySelector('button');
      var comment = cmt_form.comment.value;
      if (comment.length < 5) {
        alert('Please talk more');
        return;
      }
      btn.setAttribute('disabled', '');
      var id = parseInt(document.querySelector('.post-root').getAttribute('data-id'), 10);
      var data = {
        'threadId': id,
        'replyId': id,
        'content': comment
      };
      sendKb(function(json, status, msg) {
        btn.removeAttribute('disabled');
        if (status == 200 || status == 201) {
          cmt_form.comment.value = '';
          var div = document.createElement('div');
          div.innerHTML = '<div class="post-comment" data-id="${json.id}">' +
              '<DIV class="comment-header">' +
              '<span class="poster">You</span> commented <span data-date="' + json.modifiedAt + '">a moment ago</span>' +
              '<a style="" href="/kb/' + json.id + '-?edit=1"><i class="fa fa-edit edit-button"></i></a>' +
              '</DIV>' +
              '<DIV class="comment-content">' +
              json.content +
              '</DIV>' +
              '</div>';
          var root = document.querySelector('.post-comments');
          if (root.firstChild) {
            root.insertBefore(div, root.firstChild)
          } else {
            root.appendChild(div);
          }
        } else {
          alert(msg);
        }
      }, 'POST', '', data);
    }, false);
  }

  $('FORM.user-profile').on('submit', function(ev) {
    ev.preventDefault();
    var form = ev.target;
    var nickname = form.nickname.value;
    if (!nickname) {
      alert('Enter nickname');
      return;
    }
    var data = {
      nickname: nickname
    };
    sendKb(function(json, status, msg) {
      if (status == 200) {
        location.reload();
      } else {
        alert(msg);
      }
    }, 'POST', 'user/', data);
  });

  $('#upload-image').on('click', function (ev) {
    ev.preventDefault();
    $('#upload-input').click();
  });

  $('#upload-input').on('change', function(ev) {
    $btn = $('#upload-image');
    var input = $(this);
    var filename = input.val();
    var ext = filename.substr(filename.lastIndexOf('.'));
    var form = input.parents('FORM');
    var data = new FormData(form.get(0));
    $btn.attr('disabled', '1');
    $.post({
      type: 'POST',
      url: '/gcs/upload/' + filename,
      data: data,
      processData: false,
      contentType: false,
      complete: function(xhr, code) {
        if (code === 'success') {
          $btn.removeAttr('disabled');
          console.log(xhr.responseText);
          input.value = null;
        } else {
          alert(xhr.responseText, "Error submitting.");
        }
      }
    });
  });

  $('.btn-vote').on('click', function(ev) {
    var $item = $(this).parents('.post-item');
    var id = parseInt($item.attr('data-id'), 10);
    if (!id) {
      throw new Error('invalid post id ' + id + ' for ' + $item.attr('data-id') +
          '\nJava long integer not fit in javascript number? Shit, I knew this will come.');
    }
    if (document.body.classList.contains('user-notlogin')) {
      alert('Please login and vote again.');
      location.href = document.getElementById('login').href;
    }

    var vote = parseInt($(this).val(), 10) || 0;
    sendKb(function(vote, status) {
      if (status == 200) {
        $item.find('[name="vote-count"]').text(vote.total);
        $item.find('.voting-panel').get(0).className = 'voting-panel vote' + vote.mine;
        $item.find('[name="remain-vote"]').text(vote.remain);
      }
    }, 'POST', 'vote/' + id + '?vote=' + vote);
  })

})();




