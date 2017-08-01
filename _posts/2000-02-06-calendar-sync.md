---
title: Sync Calendar
section: How To ...
index: 7
---

•	{{ site.product }} provides a bi-directional sync of events between Google & Sugar.

•	Events created and edited in either platform will automatically be synced to the other hourly. 

•	With YathitInboxCRM you have the only solution that automatically syncs events to corresponding attendee records in Sugar.

•	Only upcoming Meetings records that you participated in are sync.

•	To enable Calendar Sync, click the gear icon, {{ "settings" | svg_icon }}, on the sidebar and then click "Calendar Sync Setting". 

[screenshot]

•	Grant permissions on Google Calendar: Make sure to grant the proper permissions on Google Calendar as below:

[screenshot]

Click Grant link, to open popup window that allow you to give YathitInboxCRM access to your calendar. Scroll down and click Accept.


## Automatic Regular Sync 
To apply the automatic regular calendar sync, you need to define:

 1-	Sync interval in minutes

 2-	Sync direction settings

The following notes should be considered when use the regular sync: 

 •	The sync process will be executed only when Chrome browser is running.

 •	Short sync interval definition might cause more load on your server.

 •	Only 100 records will be sync at a time, the remained records will be synced in next period.


{% include full-screenshot.html file="calendar-sync-setting.png" %}


## Manual Sync
 To apply manual calendar sync whenever you need, select the sync direction settings and then click on the “Sync Now” button.
 
 
## Sync Direction

•	To apply sync from Sugar Meetings to Google Calendar Events , select “Update from Sugar” and then specify the sync records actions:
  o	Update Google Events
  o	Create Google Events
  o	Delete Google Events
•	To apply sync from Google Calendar Events to Sugar Meetings, select “Update from Google” and then specify the sync records actions:
  o	Update Sugar Records
  o	Create Sugar Records
  o	Delete Sugar Records
•	To apply bi-directional sync, select both above options.


## Sync Preview
Displays all the applied changes after the sync:
[screenshot]


## Sync History
Displays a time based history for all synced records with their previous record details and the applied changes:
[screenshot]


## Sync Backlogs
Backlogs are failed update, quarantine from synchronization. To participate in synchronization again, click release after manually inspecting each records.
[screenshot]
