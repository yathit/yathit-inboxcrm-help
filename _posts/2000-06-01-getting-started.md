---
title: Setup
section: Setup
index: 1
---


## Install


Install Yathit InboxCRM for SugarCRM by clicking the following button:

<div class="centered">
    <a id="install-sugarcrm" class="button--primary themed">Add to Chrome</a>
</div>

This will prompt permission grant dialog as follow:

{% include full-screenshot.html file="add-to-chrome.gif" %}

Click "Add" to grant permission and install the extension.

Then visit to [Gmail](https://mail.google.com), you should see Yathit InboxCRM sidebar panel tab appear on right side of Gmail website. Click the button for setting up account.

You can find installed extensions in [Chrome Extension Page](chrome://extensions/) ([screenshoot]({{ 'chrome-extensions-page.tiff' | asset_path }})). Extension page is used to uninstall the extension, force updating, view given permissions and visit to extension option page. For developer, there is a link to view browser console to debug extension background page.

Extension has a background page. It runs only when browser is opening [Gmail](https://mail.google.com) or SugarCRM website. The background page will inject InboxCRM sidebar and context panel using extension [content script](https://developer.chrome.com/extensions/content_scripts) technique.

## Login

You must login to the extension with Google account before you use it. You can either '[sign in to Chrome](https://support.google.com/chrome/answer/185277)' or Login to Yathit server.

To login with Chrome sign in, simply click the Login button on the extension panel.

{% include full-screenshot.html file="sigin-to-chrome.gif" %}

To login with Chrome sign in, click the Login button while holding SHIFT key.

{% include full-screenshot.html file="login-to-yathit.gif" %}

You should login with same account as your Gmail account.

Login registration to Yathit server is free. You can use Yathit InboxCRM extension for free, but functionality will be limited.

## Setting SugarCRM

Click the setup link in the extension sidebar home panel or in Setting > Sugar Setting panel to bring up Sugar login form.

{% include full-screenshot.html file="sugarcrm-login.gif" %}

Enter SugarCRM website URL, username and password.

It will as to grant host access to your SugarCRM domain. Click 'Allow' to accept the requested permission. Your SugarCRM username and password are NOT sent to any server except your SugarCRM server. Your SugarCRM username and password are stored in the browser.

The extension will download your SugarCRM meta data and compute sensible default. It will take a while to complete the database synchronization. 

