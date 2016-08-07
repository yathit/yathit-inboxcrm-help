---
title: Setting
section: Archive Email
index: 3
---


To get more control how email archiving work, click the gear icon, {{ "settings" | svg_icon }}, on the sidebar and then click "Email Archive Setting". 

{% include full-screenshot.html file="archive-setting.png" %}

## Archive message content

When saving email message to Sugar, you can either save only email content, whole email thread or the visible content you are seeing in Gmail.

When saving email message to Sugar, the extension will upload both HTML email version and text only version. If you just need text, you can check 'Text only' option to save storage space on server.

## Outgoing email archive preference

You can configure such that all outgoing email message from your browser are save to SugarCRM. In this case, select 'always archived' option.

'archived normally' option will save all your outgoing email to SugarCRM unless you uncheck 'archive' option in the message toolbar. The opposite of this option is 'not archived normally'.

The default setting is 'enabled for archiving' option. This option will use your previous email archive selection.

If you do not want to use archiving feature, select 'disabled for archiving' option.

## Relationship record suggestion

{{ site.product }} suggest to add Accounts record as relationship with the email for Contacts email recipients. The available options are:

* linked to the archived email
* suggested to add as linked to the archived email
* be ignored
* be treated as appropriate

