---
title: Manage records
section: User Guide
index: 4
---

Yathit provide easy way to create, update, delete or search any record from any module that you have access to.

* TOC
{:toc}


## Using Sidebar to create a new Contact

{{ "create-contact-sidebar.gif" | screenshot }}

To create a new record using Sidebar, click "Create a new record" tab, {{ "plus" | svg_icon }}.

A _new record form_ will appear on the panel. The _record form_ has a _header_ and _content_. Top header has an SugarCRM _record type icon_ on the left and a hamburger menu button on the right. Record type icon has two characters symbol of the record type, in this case, "Le" with record type color for Leads. Change to Contacts record type by selecting New > Contacts menu item from the _hamburger menu_. Notice that record type icon change to Contacts.

The content panel consists input for record fields compartmentalized by their groups. If a field does not have group, it is placed under the default group. The label of a field can be seen by tooltip over the field input. Not all fields are displayed in the content panel. Field can be show or hide by changing setting in the "Fields..." menu from the hamburger menu. Some field are read only and cannot be change, but still be displayed.

{{ "show-hide-fields.gif" | screenshot }}

Edit the fields as necessary and click _submit button_, {{ "check-circle" | svg_icon }}, on the header. The submit button appears only if content value(s) is dirty (change from initial value). Clicking submit button will send a new record create request to SugarCRM backend server. If success, header and content will be update with field values received from the server. Notice that header now should record label (Contact's full name) as web link to SugarCRM record view. You may use the web link to see record in SugarCRM web app.

## Updating a record

{{ "edit-contacts.gif" | screenshot }}
Use [Sidebar](../sidebar/index.html) to update a Contacts record.


First search the record you want to edit. Click search button tab, {{ "magnifying-glass" | svg_icon }}, on the Sidebar. 

Click edit menu item from the hamburger menu, {{ "menu" | svg_icon }}, on the right of record header to edit the record.

Edit the fields in the _record content panel_ as necessary and click _submit button_, {{ "check-circle" | svg_icon }}, on the header. The submit button appears only if content value(s) is dirty (change from initial value). A message should appear to notify the record is updated. The record content panel is updated with field values received from the server.

## Deleting a record

To delete a record, search the record you want to delete. Click search button tab, {{ "magnifying-glass" | svg_icon }}, on the Sidebar. 

Click delete menu item from the hamburger menu, {{ "menu" | svg_icon }}, on the right of record header to delete the record.

A message should appear to notify the record is deleted.

## Searching Contact records

Contact records can be search on search tab, {{ "magnifying-glass" | svg_icon }}, on the Sidebar. You can search record fields by emails, name, id, description.

## Export SugarCRM Contact record to Gmail Contact entry

{% include side-image.html file="export-sugarcrm-record-to-gmail-contact.gif" %}
 You can export SugarCRM Contact record with Gmail Contact entry. Once exported these two record are synchronize with each other. Changes from one record will update to other record.

Visit to the Contact record on the Record Panel of the sidebar, that you want to export. To export Export SugarCRM Contact record to Gmail Contact entry, click menu item, 'To Gmail' on from the hamburger menu, {{ "menu" | svg_icon }}.


## Browse

❶ Click _the record browse tab_ or _the Sugar tab_, {{ "sugarcrm" | svg_icon }}, on _The Sidebar_ to browse Sugar records. 

❷ A list of modules are display initially, Click on the module you want to browse. You can also select module by the menu on the top toolbar of the browse module panel. 

Browsable module list can be configure via configuration script. There is also an option to show all module in _The Sugar setting panel_.

Record items are listed on the the panel of the selected module. List can be filtered and sorted using the menu.

To see record detail and edit it, click on the record item heading. On hovering over the record item will also show record detail on the hover popup panel.


## Search 

Yathit use both server and client side search and hence more sensitive then Sugar search provided. In client side search, Yathit is fuzzy search on name so that you can search without knowing the exact spelling. You can also search email address, phone number, record id and case number, etc. 

### In search panel

❶ Click _the search tab_, {{ "search" | svg_icon }}, on _The Sidebar_ to search Sugar records. 

❷ Enter the search query in the search input and press enter or click search button, {{ "search" | svg_icon }}.

{{ "search-panel-tab.png" | screenshot }}

Similar to browse panel, record list item are displayed as search result and can be see detail by clicking or hovering the item.

To search on specific module change module menu on the toolbar beside the search input box. When no module are selected, search result displayed from all modules. 


### In snapshot panel

_The snapshot tab_ is used to quickly search people records, i.e, any record having first and last name such as Accounts, Leads and Contacts records. Unlike search tab, snapshot tab search as you type and only record is displayed in the result panel as snapshot. 

{{ "snapshot-panel.png" | screenshot }}

Snapshot panel is designed such that it should all relevant information without additional user input requirement. 

The top parts has quick action buttons, to create Tasks, Log call or create a Cases. The created such activities are linked to the record. Brief info panel show key information commonly needed.

Quick Panels sections can show Activity, Cases and Opportunity panels. What panels can be shown are configuration in settings.

Related records panel show related with the current records and its parent records. For example a Contact record may be parent Account records. In that case related records are shown from both Contact and its Account. 

The snapshot panel is also shown in the _Context Widget_ in email message view.


## Create 

Yathit use various smart logic to pre-filled fields when creating record depending on context.

### In Sidebar

{{ "nE09-8xddHU" | youtube_popup }}

![right-float-image](https://yathit-assets.storage.googleapis.com/screenshot/module-panel-create-record.png )
 ❶ In _Sidebar_ click Sugar _Record Browser_ panel tab, {{ "sugarcrm" | svg_icon }}.

❷ In _Record Browser_, select the module you want to create. 

❸ Click **Add Record**, {{ "plus" | svg_icon }}, button to create a new record.

<div class="clearfix"></div>

❹ Fill in the record fields as needed.

{{ "record-edit-panel.png" | screenshot }}

❺ Click **Save** button to create a new record.


### In Context widget

{{ "byJT5n154xg" | youtube_popup }}

Inside email message view, a context panel is displayed on the right side of the email targeting either sender or a recipient. To change the target hover over the sender or recipient. If the target email is found in CRM (in lead, contact or account modules only), its detail is shown. If not found, buttons appear to create or merge with an existing record. The suggested existing records is search by name. 

If merge button is clicked, the sender/recipient address is added to the existing record. 

If create record is clicked, a new record is created with name, email address and other available information. You can create contact, lead or account. To change that, click the drop down arrow beside the button.


![create-record-context-widget](https://yathit-assets.storage.googleapis.com/screenshot/create-record-context-widget.png)


## Update

To update a record, search the record either by **searching** or **browsing**. Click the record item, which will bring the record into edit panel, {{ "pencil" | svg_icon }}.

Edit the fields as necessary and click _Save button_ on the header. 

The _record edit panel_ has a _header_ and _content_. Top header has an SugarCRM _record type icon_ on the left and a more menu button, {{ "more-vert" | svg_icon }},  on the right. Record type icon has two characters symbol of the record type, in this case, "Co" with record type color for _Contact_. Notice that header has as "View in CRM" web link, {{ "launch" | svg_icon }} to view the record in Sugar portal.

The content panel consists input for record fields compartmentalized by their groups. Group are Sugar meta data when defining record fields, such as 'first_name' and 'last_name' are in 'name' group. Address group has multiple fields for 'country', 'city', 'address_1', etc. 

Not all fields are displayed in the content panel, such as record 'id' fields, which is only used in referencing in programming logic. Field can be show or hide by changing setting in the "Fields..." menu from the hamburger menu. Some field are read only or computed properties and cannot be change, but can still be displayed.


## Delete 


* To delete a record, search the record you want to delete. Click search button tab, {{ "magnifying-glass" | svg_icon }}, on the Sidebar. 



* Click delete menu item from the hamburger menu, {{ "menu" | svg_icon }}, on the right of record header to delete the record.

* A message should appear to notify the record is deleted.

## Access right

Yathit Chrome Extension provides a unique and easy way to create, search, browse, edit, delete and relate any SugarCRM records, which is available in [Sugar Web Services](http://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_6.5/Application_Framework/Web_Services/) API. Yathit use both old [REST v4 API](http://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_6.5/Application_Framework/Web_Services/REST/) and new [REST v10 API](http://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_7.8/Integration/Web_Services/v10/) depending on availability. 

