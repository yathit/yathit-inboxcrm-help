---
title: Creating and updating record
section: Using InboxCRM
index: 3
---

{% include side-image.html file="create-Contacts.gif" %}
_New Record Panel_ is the second tabbed panel on [Sidebar Panel,Using Sidebar] identified by plus icon, {{ "plus" | svg_icon }}. 

A _new record form_ for Leads will appear on the panel. The _record form_ has a _header_ and _content_. Top header has an SugarCRM _record type icon_ on the left and a hamburger menu button on the right. Record type icon has two characters symbol of the record type, in this case, "Le" with record type color for Leads.

Default new record form will create a new lead record. You can change to other New menu item from the _hamburger menu_. Notice that record type icon in the header change accordingly.

The content panel consists input for record fields compartmentalized by their groups. If a field does not have group, it is placed under the default group. The label of a field can be seen by tooltip over the field input. Not all fields are displayed in the content panel. Field can be show or hide by changing setting in the "Fields..." menu from the hamburger menu. Some field are read only and cannot be change, but still be displayed.

Edit the fields as necessary and click _submit button_, {{ "check-circle" | svg_icon }}, on the header. The submit button appears only if content value(s) is dirty (change from initial value). Clicking submit button will send a new record create request to SugarCRM backend server. If success, header and content will be update with field values received from the server. Notice that header now should record label (Contact's full name) as web link to SugarCRM record view. You may use the web link to see record in SugarCRM web app.
