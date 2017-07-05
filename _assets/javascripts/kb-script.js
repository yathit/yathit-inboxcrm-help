


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


/* Garlicjs dist/garlic.min.js build version 1.2.3 http://garlicjs.org */
!function(b){var h=function(a){this.defined="undefined"!==typeof localStorage};h.prototype={constructor:h,get:function(a,b){return localStorage.getItem(a)?localStorage.getItem(a):"undefined"!==typeof b?b:null},has:function(a){return localStorage.getItem(a)?!0:!1},set:function(a,b,d){"string"===typeof b&&(""===b?this.destroy(a):localStorage.setItem(a,b));return"function"===typeof d?d():!0},destroy:function(a,b){localStorage.removeItem(a);return"function"===typeof b?b():!0},clean:function(a){for(var b=
    localStorage.length-1;0<=b;b--)"undefined"===typeof Array.indexOf&&-1!==localStorage.key(b).indexOf("garlic:")&&localStorage.removeItem(localStorage.key(b));return"function"===typeof a?a():!0},clear:function(a){localStorage.clear();return"function"===typeof a?a():!0}};var k=function(a,b,d){this.init("garlic",a,b,d)};k.prototype={constructor:k,init:function(a,c,d,e){this.type=a;this.$element=b(c);this.options=this.getOptions(e);this.storage=d;this.path=this.options.getPath(this.$element)||this.getPath();
  this.parentForm=this.$element.closest("form");this.$element.addClass("garlic-auto-save");this.expiresFlag=!this.options.expires?!1:(this.$element.data("expires")?this.path:this.getPath(this.parentForm))+"_flag";this.$element.on(this.options.events.join("."+this.type+" "),!1,b.proxy(this.persist,this));if(this.options.destroy)b(this.parentForm).on("submit reset",!1,b.proxy(this.destroy,this));this.retrieve()},getOptions:function(a){return b.extend({},b.fn[this.type].defaults,a,this.$element.data())},
  persist:function(){this.val!==this.getVal()&&(this.val=this.getVal(),this.options.expires&&this.storage.set(this.expiresFlag,((new Date).getTime()+1E3*this.options.expires).toString()),this.storage.set(this.path,this.getVal()),this.options.onPersist(this.$element,this.getVal()))},getVal:function(){return!this.$element.is("input[type=checkbox]")?this.$element.val():this.$element.prop("checked")?"checked":"unchecked"},retrieve:function(){if(this.storage.has(this.path)){if(this.options.expires){var a=
      (new Date).getTime();if(this.storage.get(this.expiresFlag)<a.toString()){this.storage.destroy(this.path);return}this.$element.attr("expires-in",Math.floor((parseInt(this.storage.get(this.expiresFlag))-a)/1E3))}a=this.storage.get(this.path);if(this.options.conflictManager.enabled&&this.detectConflict())return this.conflictManager();if(this.$element.is("input[type=radio], input[type=checkbox]")){if("checked"===a||this.$element.val()===a)return this.$element.attr("checked",!0);"unchecked"===a&&this.$element.attr("checked",
      !1)}else this.$element.val(a),this.$element.trigger("input"),this.options.onRetrieve(this.$element,a)}},detectConflict:function(){var a=this;if(this.$element.is("input[type=checkbox], input[type=radio]"))return!1;if(this.$element.val()&&this.storage.get(this.path)!==this.$element.val()){if(this.$element.is("select")){var c=!1;this.$element.find("option").each(function(){0!==b(this).index()&&(b(this).attr("selected")&&b(this).val()!==a.storage.get(this.path))&&(c=!0)});return c}return!0}return!1},
  conflictManager:function(){if("function"===typeof this.options.conflictManager.onConflictDetected&&!this.options.conflictManager.onConflictDetected(this.$element,this.storage.get(this.path)))return!1;this.options.conflictManager.garlicPriority?(this.$element.data("swap-data",this.$element.val()),this.$element.data("swap-state","garlic"),this.$element.val(this.storage.get(this.path))):(this.$element.data("swap-data",this.storage.get(this.path)),this.$element.data("swap-state","default"));this.swapHandler();
    this.$element.addClass("garlic-conflict-detected");this.$element.closest("input[type=submit]").attr("disabled",!0)},swapHandler:function(){var a=b(this.options.conflictManager.template);this.$element.after(a.text(this.options.conflictManager.message));a.on("click",!1,b.proxy(this.swap,this))},swap:function(){var a=this.$element.data("swap-data");this.$element.data("swap-state","garlic"===this.$element.data("swap-state")?"default":"garlic");this.$element.data("swap-data",this.$element.val());b(this.$element).val(a)},
  destroy:function(){this.storage.destroy(this.path)},remove:function(){this.remove();this.$element.is("input[type=radio], input[type=checkbox]")?b(this.$element).prop("checked",!1):this.$element.val("")},getPath:function(a){"undefined"===typeof a&&(a=this.$element);if(this.options.getPath(a))return this.options.getPath(a);if(1!=a.length)return!1;for(var c="",d=a.is("input[type=checkbox]"),e=a;e.length;){a=e[0];var f=a.nodeName;if(!f)break;var f=f.toLowerCase(),e=e.parent(),g=e.children(f);if(b(a).is("form, input, select, textarea")||
      d)if(f+=b(a).attr("name")?"."+b(a).attr("name"):"",1<g.length&&!b(a).is("input[type=radio]")&&(f+=":eq("+g.index(a)+")"),c=f+(c?">"+c:""),"form"==a.nodeName.toLowerCase())break}return"garlic:"+document.domain+(this.options.domain?"*":window.location.pathname)+">"+c},getStorage:function(){return this.storage}};b.fn.garlic=function(a,c){function d(c){var d=b(c),g=d.data("garlic"),h=b.extend({},e,d.data());if(("undefined"===typeof h.storage||h.storage)&&"password"!==b(c).attr("type"))if(g||d.data("garlic",
        g=new k(c,f,h)),"string"===typeof a&&"function"===typeof g[a])return g[a]()}var e=b.extend(!0,{},b.fn.garlic.defaults,a,this.data()),f=new h,g=!1;if(!f.defined)return!1;this.each(function(){b(this).is("form")?b(this).find(e.inputs).each(function(){b(this).is(e.excluded)||(g=d(b(this)))}):b(this).is(e.inputs)&&!b(this).is(e.excluded)&&(g=d(b(this)))});return"function"===typeof c?c():g};b.fn.garlic.Constructor=k;b.fn.garlic.defaults={destroy:!0,inputs:"input, textarea, select",excluded:'input[type="file"], input[type="hidden"]',
  events:"DOMAttrModified textInput input change click keypress paste focus".split(" "),domain:!1,expires:!1,conflictManager:{enabled:!1,garlicPriority:!0,template:'<span class="garlic-swap"></span>',message:"This is your saved data. Click here to see default one",onConflictDetected:function(a,b){return!0}},getPath:function(a){},onRetrieve:function(a,b){},onPersist:function(a,b){}};b(window).on("load",function(){b('[data-persist="garlic"]').each(function(){b(this).garlic()})})}(window.jQuery||window.Zepto);


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
      for (var i = 0; arr && i < arr.length; i++) {
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
            var type = document.querySelector('INPUT[name=type][type="hidden"]');
            if (type) {
              type.type = 'text';
              type.style.width = '6em';
              var list = document.createElement('datalist');
              list.id = 'posttype';
              list.innerHTML = '<option value="FAQ"><option value="Idea"><option value="Question">';
              document.body.appendChild(list);
              type.setAttribute('list', 'posttype');
            }
          }
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
      btn.setAttribute('disabled', '');
      var comment = cmt_form.comment.value;
      if (comment.length < 5) {
        alert('Please talk more');
        return;
      }
      var id = parseInt(document.querySelector('.forum-post').getAttribute('data-id'), 10);
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

})();




