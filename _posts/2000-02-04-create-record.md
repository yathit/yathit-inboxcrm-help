---
title: Create records
section: How To ...
index: 4
---


<iframe width="560" height="315" src="https://www.youtube.com/embed/byJT5n154xg?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU" frameborder="0" allowfullscreen></iframe>

Creating a new Lead record inside Gmail [Context Widget](../context/index.html) is a little different, more convenient and smarter. 

When a new email thread is open, Gmail show _info column_ on the right side of the main panel. The top of Gmail info column is about _the most relevant contact_ panel. If there are more contacts involved in the email, additional contact link are provided under the most relevant contact. (Sometimes it may happen that the most relevant contact is not available for some email like system generated message). Yathit InboxCRM context widget panel is injected just below the most relevant contact panel. Email address and its full name are taken to the context widget panel and retrieve from SugarCRM records. If any SugarCRM record is found matching the email address, the record is shown. Otherwise, it is hidden and only _search input_ is shown.

To create a new Lead record, you can either type email address or full name to the search input and then click search button, {{ "search" | svg_icon }}, or press enter. You may also use auto suggested list in the search input. The new Lead record form will appear below the search input box with email or full name field filled. If social add-on is available, additional contact field values will be fill up from publicly available information from multiple social networks.

Edit the fields as necessary and click _submit button_, {{ "check-circle" | svg_icon }}, on the header.




