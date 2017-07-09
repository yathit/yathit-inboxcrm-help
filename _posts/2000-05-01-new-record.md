---
title: Managing records
section: User Guide
index: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/nE09-8xddHU?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU" frameborder="0" allowfullscreen></iframe>

A _new record form_ for Leads will appear on the panel. The _record form_ has a _header_ and _content_. Top header has an SugarCRM _record type icon_ on the left and a hamburger menu button on the right. Record type icon has two characters symbol of the record type, in this case, "Le" with record type color for Leads.

Default new record form will create a new lead record. You can change to other New menu item from the _hamburger menu_. Notice that record type icon in the header change accordingly.

The content panel consists input for record fields compartmentalized by their groups. If a field does not have group, it is placed under the default group. The label of a field can be seen by tooltip over the field input. Not all fields are displayed in the content panel. Field can be show or hide by changing setting in the "Fields..." menu from the hamburger menu. Some field are read only and cannot be change, but still be displayed.

Edit the fields as necessary and click _submit button_, {{ "check-circle" | svg_icon }}, on the header. The submit button appears only if content value(s) is dirty (change from initial value). Clicking submit button will send a new record create request to SugarCRM backend server. If success, header and content will be update with field values received from the server. Notice that header now should record label (Contact's full name) as web link to SugarCRM record view. You may use the web link to see record in SugarCRM web app.


### Using Context widget to create a new record


<iframe width="560" height="315" src="https://www.youtube.com/embed/byJT5n154xg?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU" frameborder="0" allowfullscreen></iframe>

Creating a new Lead record inside Gmail [Context Widget](../context/index.html) is a little different, more convenient and smarter. 

When a new email thread is open, Gmail show _info column_ on the right side of the main panel. The top of Gmail info column is about _the most relevant contact_ panel. If there are more contacts involved in the email, additional contact link are provided under the most relevant contact. (Sometimes it may happen that the most relevant contact is not available for some email like system generated message). Yathit InboxCRM context widget panel is injected just below the most relevant contact panel. Email address and its full name are taken to the context widget panel and retrieve from SugarCRM records. If any SugarCRM record is found matching the email address, the record is shown. Otherwise, it is hidden and only _search input_ is shown.

To create a new Lead record, you can either type email address or full name to the search input and then click search button, {{ "search" | svg_icon }}, or press enter. You may also use auto suggested list in the search input. The new Lead record form will appear below the search input box with email or full name field filled. If social add-on is available, additional contact field values will be fill up from publicly available information from multiple social networks.

Edit the fields as necessary and click _submit button_, {{ "check-circle" | svg_icon }}, on the header.


## Deleting

To delete a record, search the record you want to delete. Click search button tab, {{ "magnifying-glass" | svg_icon }}, on the Sidebar. 

{% include side-image.html file="delete-Leads.gif" %}

Click delete menu item from the hamburger menu, {{ "menu" | svg_icon }}, on the right of record header to delete the record.

A message should appear to notify the record is deleted.




