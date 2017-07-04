---
title: Sync Calendar
section: Tutorials
index: 5
---

{{ site.product }} provides a bi-directional sync of events between Google & Sugar. Events created and edited in either platform will automatically sync to the other hourly. And with {{ site.product }} you have the only solution that automatically syncs events to corresponding attendee records in Sugar.

To enable Calendar Sync, click the gear icon, {{ "settings" | svg_icon }}, on the sidebar and then click "Calendar Sync Setting". 

You will have to grant Google Calendar permission, if you have not granted so. See detail process in [Contact Sync]. 

Only upcoming Meetings records that you participated in are sync.

## Automatic sync

Sync process can be configured very detail according to your need. The first option is whether to sync in regular interval or not. You can sync manually by clicking "Sync Now" button. If you choose to sync regularly, you can set sync interval in minutes. Sync happen only when you are running Chrome browser. Note: too frequent sync interval increase your server load.

Sync operation are performance in batch in each sync period. Only 100 records will be sync at a time. The remaining records will be sync in next period.

{% include full-screenshot.html file="calendar-sync-setting.png" %}


## Sync direction

You can choose one way sync from Sugar Meetings to Google Calendar Events by checking "Update from Sugar", or Google Calendar Events to Sugar Meetings by checking "Update from Google" or check both options for bi-directional sync.

You can also choose to do not not to do 1) Create, 2) Update 3) Delete on each sync direction. 


## Preview, History and Backlog

You can check preview if you want to see what changes will be make after the sync.

You can also see history of sync records with their previous record details and change made.

Backlogs are failed update, quarantine from synchronization. To participate in synchronization again, click release after manually inspecting each records.