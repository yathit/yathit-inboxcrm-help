---
title: Gmail Add-on
section: Admin Guide
index: 21
---

To integrate CRM and Gmail, we and others provide a solution using Chrome Extension (or Web Extension in general). It works, but Chrome Extensions are kind of force attempt to patch the two seperate thing. There is seam visible differing the two UI. The more troublesome is security issue associate with Extension permission model and privacy issue. Access right permission are not grandular to enforce security and privacy. Now Google is start offering  [Gmail Add-on](https://developers.google.com/gmail/add-ons/), which is secure, access right are restricted and UI are seamless and co-operative between Gmail and Add-on. 
 

Customization are limited, but all key features are possible in Gmail Add-on.


The more important is, it works for Gmail Mobile App as well. User interface are very similar on web browser and mobile app. In web browser, add-on are appear on right side bar. In mobile app, add-on are shown at the bottom of the message.

### Create Record  

Inside Gmail message, Yathit For Sugar Gmail Add-on will popup. If recipient or sender of the email is not in the CRM, an option to create Account, Lead or Contact will popup. 

{{ "gam-no-record.png width320" | screenshot }}

You can quickly create a record with name and email filled.

{{ "gam-create-lead.mp4" | screenshot }}

### View Record Detail

If recipient or sender of the email is in the CRM, its detail along with related records are shown in the panel.

{{ "ga-view-lead.png width320" | screenshot }}

### Edit Record

You can also edit the record, similar to creating a record. 

You can also

### Save Email Message

You can save email in one click.

{{ "gam-mobile-archive-email.mp4" | screenshot }}
 