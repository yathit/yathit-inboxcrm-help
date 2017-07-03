---
title: Sync Contact 
section: Tutorial
index: 4
---

{{ site.product }} brings you bi-drectional Sugar Contact Sync with Gmail Contacts. You can quickly and easily sync contacts from Sugar to Google Contacts and your mobile devices.

Click "Contact Sync Setting" tab in "Setting" panel to begin Contact sync configuration. The first step is to grant Google Contacts permission, if you have not grant so. 


<details>
<summary>Figure: How to grant permission</summary>
{% include full-screenshot.html file="grant-contacts-permission.gif" %}
</details>

Click 'grant' link, this will pop up a window that asks you to give {{ site.product }} access to your contacts. Scroll down and click Accept.

## Automatic sync

Sync process can be configured very detail according to your need. The first option is whether to sync in regular interval or not. You can sync manually by clicking "Sync Now" button. If you choose to sync regularily, you can set sync interval in minutes. Sync happen only when you are running Chrome browser. Note: too frequent sync interval increase your server load.

Sync operation are performance in batch in each sync period. Only 100 records will be sync at a time. The remaining records will be sync in next period.

{% include full-screenshot.html file="sync-setting-panel.png" %}

## Sync direction

You can choose one way sync from Sugar Contacts to Google Contacts by checking "Update from Sugar", or Google Contacts to Sugar Contacts by checking "Update from Google" or check both options for bi-directional sync.

You can also choose to do not not to do 1) Create, 2) Update 3) Delete on each sync direction. 

Contacts with same email address between Gmail and Sugar are merged.

## Preview, History and Backlog

You can check preview if you want to see what changes will be make after the sync.

You can also see history of sync records with their previous record details and change made.

Backlogs are failed update, quarantine from synchronization. To participate in synchronization again, click release after manually inspecting each records.