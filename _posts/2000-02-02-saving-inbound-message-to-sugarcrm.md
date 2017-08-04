---
title: Archive Email
section: How To ...
index: 2
---

# Email Archive Settings

SugarCRM makes archiving of email messages easier and faster through the Yathit toolbar.

To understand how email archiving works, click the Gear {{ "settings" | svg_icon }} icon on the sidebar. 

A list will appear. In this list, select the “Email Archive Setting” option.

{% include full-screenshot.html file="archive-setting.png" %}



## Archive message content

SugarCRM can save email messages in three formats: 
* Save only email content, 
* Save the whole email content, or 
* Save just the visible content viewable in your Gmail.

Email messages are saved on SugarCRM as HTML email version and only text version. To save only the text version, select “Text only” option. By using the “Text only” option you will save space on the server.


## Outgoing email archive preference

the below archiving configurations are available:

* [Always Archived]: all your outgoing email messages from your browser are saved in the SugarCRM.

* [Archived Normally]: Archive all outgoing emails in SugarCRM. If you don't want to archive all emails, then uncheck the “archive” option in the message toolbar. 

* [Not Archived Normally]: Means your outgoing emails will not be saved in the SugarCRM.

* [Enabled for Archiving]: This is the default settings option. With this option activated, your previous email archive selection will become active.

* [Disabled for Archive]: For those who do not want to use the archive feature can select this option.


## Relationship record suggestion

With the {{ site.product }}, you can add the accounts record as a relationship along with your emails for the Contacts (email recipients). 

The available options  are:

* linked to the archived email
* suggested to add as linked to the archived email
* be ignored
* be treated as appropriate



Gmail is a necessity for anyone who uses the net, whether personal or business and the {{site.product}} Integration just enhances your experience. It is ideal for administration in search of a perfect CRM solution to save email securely out of Gmail. You can use your existing Gmail account as the address to receive emails and save them on the SugarCRM as an integrated email client.


{{site.product}} offers an easy option for saving your mails in SugarCRM. And, to do this all you have to do is click the {{ "ydn-logo-bw" | svg_icon }} icon in the Gmail message toolbar.


# Archiving Emails

{% include screenshot.html file="archive-email.gif" %}

* To archive your email, just click on the “Archive” menu and your Gmail message will be automatically get archived in the SugarCRM Email records. 

* It is easy to find the archived email in the [Sugar Email Archiving mailbox](http://support.sugarcrm.com/02_Documentation/01_Sugar_Editions/04_Sugar_Professional/Sugar_Professional_6.5/Application_Guide/23_Emails/#Sugar_Email_Archiving). 

* In case, the email has attachments, they can easily be uploaded via the Upload Attachment option.

* Messages that are already archived in the SugarCRM are accessible by clicking on the “View archive” link. 
You can also view your archived email via your SugarCRM Account's contact, leads, opportunities, or case modules and this is easily done without having you to leave your working module.

* In fact, the archiving ability of SugarCRM allows you to easily store your Gmail messages into the SugarCRM record of your account, contacts, or cases. You also get a complete record of your communication as all your Gmail attachments, images, and calendar events get updated instantly.

## Uploading Attachment

<iframe width="560" height="315" src="https://www.youtube.com/embed/4m4uhUj1iDo" frameborder="0" allowfullscreen></iframe>

You can also upload any attachment to the SugarCRM’s Documents module directly from your Gmail interface using the {{site.product}}. 

* To upload an attachment, click the Upload button {{ "cloud-upload" | svg_icon }} on the attachment. You may need to give permission to upload the document so, do not ignore it. 

* Once the document upload process starts, the cloud icon will become green. And, after the upload is finished, the cloud icon will be changed to the SugarCRM {{ "sugarcrm-bw" | svg_icon }} icon.

{% include screenshot.html file="upload-attachment.gif" %}

* In case, the attachment is already available on the SugarCRM’s Document module, you will not see the Upload button. Rather you will see the SugarCRM {{ "sugarcrm-bw" | svg_icon }} icon. Clicking this icon will provide you details about the attachment on the side panel. If you want more details, you can visit to the Record detail page in the SugarCRM.

## Archive Inbound Email

<iframe width="560" height="315" src="https://www.youtube.com/embed/TcwbeEQsId0?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU"  frameborder="0" allowfullscreen></iframe>

{{ site.product }}  provides an easy way to save or archive any email message with all attachments to Sugar, as following steps:

* Open the email which you want to save or archive

{{ "1" | step }} Click on Yathit menu, and then select Archive email. 

![archive-menu](https://yathit-assets.storage.googleapis.com/web/archive-menu.png)


The below Archive Email dialog will be displayed:

![archive-dialog](https://yathit-assets.storage.googleapis.com/web/archive-dialog.png) 


{{ site.product }}  provides the ability to add various types of related records to the archived email:

* {{ "2" | step }} The related Contacts and Account records will automatically be populated as per the sender email address

* {{ "3" | step }} Other possible suggested related record can be added easily by one click on the item

* {{ "4" | step }} Any type of records can be added as relationship (Contacts, Accounts, Cases, Meetings, Notes, Project, Tasks… etc.)

* {{ "5" | step }} To search for a specific related record, use Searchtext box then add theselected related record

* {{ "6" | step }} Click on the Attachments checkbox to archive the email attachments

* {{ "7" | step }} The archive email subject will be displayed with the ability to edit it if necessary.

Click on the Archive button to save the archive email immediately in the Sugar, or click on the Cancel button to close the Archive Email dialog and ignore the defined email archive information.


## Archiving Outbound Emails

For an easy management of Outbound emails, Yathit provides the capability to archive the Outbound emails. 

* You can do this using the Yathit toolbor, which appears below the recipients input in Gmail compose and reply panels. 

* To archive the outbound emails to SugarCRM, select the Archive checkbox in the toolbar.

* If you want to assign the archived email to a particular contact or record, then click Archive in the Yathit toolbar. It will show you the primary contact and record already assigned to the email. If you want to change it, then click Details. You will see a Lead or Contact record that exists in SugarCRM. Select them as per your requirement to save your email in any of the existing record:
 
{% include full-screenshot.html file="archiving-outbound-email.gif" %}

* After you have selected the required contact or record, send the email. When you will send the email, it will be archived, including the attachments, if selected. Archiving attachment requires additional permission for web site data access to download the attached files.


## View Archived Email

After email is archived, the archive menu label change to 'View Archive' and Yathit icon into cloud icon, {{ "cloud-done" | svg_icon}}. To view the archived email, click the View Archive menu item. The archived email will be displayed in your CRM.
