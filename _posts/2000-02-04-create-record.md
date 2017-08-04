---
title: Manage records
section: How To ...
index: 4
---

* TOC
{:toc}

Yathit Chrome Extension provides a unique and easy way to create, search, browse, edit, delete and relate any SugarCRM records, which is available in [Sugar Web Services](http://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_6.5/Application_Framework/Web_Services/) API. Yathit use both old [REST v4 API](http://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_6.5/Application_Framework/Web_Services/REST/) and new [REST v10 API](http://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_7.8/Integration/Web_Services/v10/) depending on availability. 

## Browsing records

* Click _the record browse tab_ or _the Sugar tab_, {{ "sugarcrm" | svg_icon }}, on _The Sidebar_ to browse Sugar records. 

* A list of modules are display initially, Click on the module you want to browse. 

* You can also select module by the menu on the top toolbar of the browse module panel. 

* Browsable module list can be configure via configuration script. 

* There is also an option to show all module in _The Sugar setting panel_.

![record-browse-panel](https://yathit-assets.storage.googleapis.com/screenshot/record-browser-with-popup.png) 

* Record items are listed on the the panel of the selected module. List can be filtered and sorted using the menu.

* To see record detail and edit it, click on the record item heading. On hovering over the record item will also show record detail on the hover popup panel.


## Searching records

* Click _the search tab_, {{ "search" | svg_icon }}, on _The Sidebar_ to search Sugar records. 

![search-panel](https://yathit-assets.storage.googleapis.com/screenshot/search-panel-tab.png) 

* Similar to browse panel, record list item are displayed as search result and can be see detail by clicking or hovering the item.

* To search on specific module change module menu on the toolbar beside the search input box. When no module are selected, search result displayed from all modules. 

* Full text search is used so that in-exact phase or phonetic synonym or similar word can be used to query.


## Searching people with snapshot result

* _The snapshot tab_ is used to quickly search people records, i.e, any record having first and last name such as Accounts, Leads and Contacts records. 

* Unlike search tab, snapshot tab search as you type and only record is displayed in the result panel as snapshot.

![snapshot-panel](https://yathit-assets.storage.googleapis.com/screenshot/snapshot-panel.png) 

* Snapshot panel is designed and configurable such that it should all relevant information without additional user input requirement. 

* The top parts has quick action buttons, to create Tasks, Log call or create a Cases. The created such activities are linked to the record. 

* Brief info panel show key information commonly needed.

* Quick Panels sections can show Activity, Cases and Opportunity panels. What panels can be shown are configuration in settings.

* Related records panel show related with the current records and its parent records. For example a Contact record may be parent Account records. In that case related records are shown from both Contact and its Account. 

* The snapshot panel is also shown in the _Email Context Panel_.


## Creating a record  

* On the browse record panel, click plus icon, {{ "plus" | svg_icon }}, on the toolbar to create a new record which bring to _record edit panel_. 

![create-new-record](https://yathit-assets.storage.googleapis.com/screenshot/create-new-record.gif) 

* The _record form_ has a _header_ and _content_. Top header has an SugarCRM _record type icon_ on the left and a more menu button, {{ "more-vert" | svg_icon }},  on the right. 

* Record type icon has two characters symbol of the record type, in this case, "Co" with record type color for _Contact_. To change type of record to be created, use the menu to change it.

* The content panel consists input for record fields compartmentalized by their groups. 

  o	If a field does not have group, it is placed under the default group. 
  
  o	The label of a field can be seen by tooltip over the field input. 
  
  o	Not all fields are displayed in the content panel. 
  
  o	Field can be show or hide by changing setting in the "Fields..." menu from the hamburger menu. 
  
  o	Some field are read only and cannot be change, but still be displayed.

* Edit the fields as necessary and click _Save button_ on the header. 

* The submit button appears automatically if content value(s) is dirty (change from initial value). Clicking submit button will send a new record create request to SugarCRM backend server. If success, header and content will be update with field values received from the server. 

* Notice that header now should record label (Contact's full name) as web link to SugarCRM record view. You may use the web link to see record in SugarCRM web app.


## Using Context widget to create a new record

<iframe width="560" height="315" src="https://www.youtube.com/embed/byJT5n154xg?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU" frameborder="0" allowfullscreen></iframe>

* Creating a new Lead record inside Gmail [Context Widget](../context/index.html) is a little different, more convenient and smarter. 

* When open a new email thread, Gmail shows _info column_ on the right side of the main panel. The top of Gmail info column is about _the most relevant contact_ panel. If there are more contacts involved in the email, additional contact link are provided under the most relevant contact. (Sometimes it may happen that the most relevant contact is not available for some email like system generated message). 

* Yathit InboxCRM context widget panel is injected just below the most relevant contact panel. Email address and its full name are taken to the context widget panel and retrieve from SugarCRM records. If any SugarCRM record is found matching the email address, the record is shown. Otherwise, it is hidden and only _search input_ is shown.

* To create a new Lead record, you can either type email address or full name to the search input and then click search button, {{ "search" | svg_icon }}, or press enter. You may also use auto suggested list in the search input. The new Lead record form will appear below the search input box with email or full name field filled. If social add-on is available, additional contact field values will be fill up from publicly available information from multiple social networks.

* Edit the fields as necessary and click _submit button_, {{ "check-circle" | svg_icon }}, on the header.


## Deleting

* To delete a record, search the record you want to delete. Click search button tab, {{ "magnifying-glass" | svg_icon }}, on the Sidebar. 

{% include side-image.html file="delete-Leads.gif" %}

* Click delete menu item from the hamburger menu, {{ "menu" | svg_icon }}, on the right of record header to delete the record.

* A message should appear to notify the record is deleted.


## Create Records
<iframe width="560" height="315" src="https://www.youtube.com/embed/byJT5n154xg?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU" frameborder="0" allowfullscreen></iframe>

Yathit provides a unique way to define and manage SugarCRM records inside Gmail _Context Widget_ with more convenient and smarter fashion.

### Create new SugarCRM records inside Gmail message view with Context Widget

* In the Gmail message view, Yathit extension will lookup/filter the sender and recipients email addresses to your CRM, and the info column on the right side of the main panel will be displayed:

![hover-to-view-context-widget](https://yathit-assets.storage.googleapis.com/screenshot/hover-to-view-context-widget.png)

Hover over to sender or recipient name in Gmail that you are interested in. Context Widget will display it accordingly. 

* In case the email address is new, Yathit will enable you to create a new lead, contact, or account record by click on the add button at the right panel:

![create-record-context-widget](https://yathit-assets.storage.googleapis.com/screenshot/create-record-context-widget.png)

### Create new SugarCRM records with Sidebar

<iframe width="560" height="315" src="https://www.youtube.com/embed/nE09-8xddHU?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU" frameborder="0" allowfullscreen></iframe>

❶ In _Sidebar_ click Sugar _Record Browser_ panel tab, {{ "sugarcrm" | svg_icon }}.

❷ In _Record Browser_, select the module you want to create. 

![module-panel-create-record](https://yathit-assets.storage.googleapis.com/screenshot/module-panel-create-record.png )

❸ Click _Add Record_, {{ "plus" | svg_icon }}, button to create a new record.

❹ Fill in the record fields as needed and click _Save_ button to create a new record.

![record-edit-panel](https://yathit-assets.storage.googleapis.com/screenshot/record-edit-panel.png )



