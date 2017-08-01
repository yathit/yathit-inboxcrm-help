---
title: Sync Contact 
section: How To ...
index: 6
---

* {{ site.product }} provides a bi-directional sync of contacts between Google & Sugar.

* You can quickly and easily sync contacts from Sugar to Google Contacts and your mobile devices.

* To enable Contact Sync, click the “Contact Sync Setting” tab in the “Setting” panel. 

[Screenshot]

* Grant permissions on Google Contacts: Make sure to grant the proper permissions on Google Contacts as below:
<details>
<summary>Figure: How to grant permission</summary>
{% include full-screenshot.html file="grant-contacts-permission.gif" %}
</details>

Click 'grant' link, this will pop up a window that asks you to give {{ site.product }} access to your contacts. Scroll down and click Accept.


## Automatic Regular Sync 

To apply the automatic regular contact sync, you need to define:

❶ Sync interval in minutes

❷ Sync direction settings

The following notes should be considered when use the regular sync: 

* The sync process will be executed only when Chrome browser is running.

* Short sync interval definition might cause more load on your server.

* Only 100 records will be sync at a time, the remained records will be synced in next period.

{% include full-screenshot.html file="sync-setting-panel.png" %}


## Manual Sync 

To apply manual contact sync whenever you need, select the sync direction settings and then click on the “Sync Now” button.


## Sync Direction

* To apply sync from Sugar Contacts to Google Contacts, select “Update from Sugar” and then specify the sync records actions:

  o	Update Google Contacts
  
  o	Create Google Contacts
  
  o	Delete Google Contacts
  
* To apply sync from Google Contacts Events to Sugar Contacts, select “Update from Google” and then specify the sync records actions:

  o	Update Sugar Records
  
  o	Create Sugar Records
  
  o	Delete Sugar Records
  
* To apply bi-directional sync, select both above options.

* Contacts with same email address between Gmail and Sugar are merged.


## Sync Preview

Displays all the applied changes after the sync:

[screenshot]


## Sync History

Displays a time based history for all synced records with their previous record details and the applied changes:

[screenshot]


## Sync Backlogs

Backlogs are failed update, quarantine from synchronization. To participate in synchronization again, click release after manually inspecting each records.

[screenshot]
