---
title: Setup
section: Getting Started
index: 1
---


## Install


Install Yathit InboxCRM for SugarCRM by clicking the following button:

<div class="centered">
    <a id="install-sugarcrm" class="button--primary themed">Add to Chrome</a>
</div>

This will prompt permission grant dialog as follow:

{% include screenshot.html file="install-permission.jpg" %}

Click "Add" to grant permission and install the extension.

Then visit to [Gmail](https://mail.google.com), you should see Yathit InboxCRM sidebar panel tab appear on right side of Gmail website. Click the button for setting up account.

You can find installed extensions in [Chrome Extension Page](chrome://extensions/) ([screenshoot](/imgs/sugarcrm/chrome-extensions-page.tiff)). Extension page is used to uninstall the extension, force updating, view given permissions and visit to extension option page. For developer, there is a link to view browser console to debug extension background page.

Extension has a background page. It runs only when browser is opening [Gmail](https://mail.google.com) or SugarCRM website. The background page will inject InboxCRM sidebar and context panel using extension [content script](https://developer.chrome.com/extensions/content_scripts) technology.

## Login to Yathit server

Yathit InboxCRM extension connect to Yathit server for accessing [Google services authorization tokens](https://developers.google.com/accounts/docs/OAuth2) and account auditing purposes. Yathit server uses Google account. You should login with same account as your Gmail account.

After login to the server, provide your Google Contact, Calender and Task data to Yathit server by clicking 'Grant.

If you sign in with [multiple accounts](https://support.google.com/accounts/answer/1721977) to Gmail, only the account that login to Yathit server will be active. You can change login user in [Options panel](chrome-extension://iccdnijlhdogaccaiafdpjmbakdcdakk/option-page.html).

Login registration to Yathit server is free. You can use Yathit InboxCRM extension for free, but functionality will be limited.

## Setting SugarCRM

Bring up [Setup wizard page](chrome-extension://{{ site.sugarcrm.extension_id }}/setup.html). The link is also available in extension sidebar and option page.

{% include screenshot.html file="sugarcrm-setup.gif" %}


Enter SugarCRM website URL, username and password in Section 3: SugarCRM login.

It will as to grant host access to your SugarCRM domain. Click 'Allow' to accept the requested permission.

The extension will synchronize (download) your SugarCRM data to the extension in background page. It will take a while to complete the database synchronization. During the time you can start using it.

