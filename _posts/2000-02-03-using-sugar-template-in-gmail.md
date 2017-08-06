---
title: Mail Merge Template 
section: User Guide
index: 3
---

* TOC
{:toc}

Discover main features into Yathit Browser Extension with your very first campaign: Email personalization, segmentation... and more. 

This article will give you an overview of what you can do with this simple but powerful mail merge tool.

## Send your first mail merge

### Create your Sugar template
To create a new Sugar template in Sugar, click on New template… menu. This will forward you to the Create New Template page in your SugarCRM portal. After finish creating new template in SugarCRM portal, click on “Refresh” button to get the Yathit templates list updated.

[Screenshots]

### Start your mail merge using Yathit

<iframe width="560" height="315" src="https://www.youtube.com/embed/ByisDh97d1E?list=PL0ZVs2MTcLP82s0qTsQ3RTZXad_dZCSbU" frameborder="0" allowfullscreen></iframe>

❶ Open your Gmail account, then click on the Compose button to create new message

❷ Fill the recipient email in the To field

{{ "template-receipent.png" | screenshot }}

* {{ site.product }} will help you search and find the email addresses from your Sugar, just click on the Search icon, {{ "search" | svg_icon }}, in right side of recipients, and select the email recipients from SugarCRM contacts list.

* Note: The email addresses from Leads, Accounts and Contacts records are suggested.

{{ "template-receipent-suggest.png" | screenshot }}

❸ To use an already defined Yathit template, click on the Template button to open the Template Menu:

* Select the template from the menu that you want to use.

* {{ site.product }} will merge dynamic fields (such as, contact name, address, related cases, etc.) in Sugar template with the given contact by its related records

* The dynamic fields can be used in both email subject and content

{{ "template-menu.png" | screenshot }}

* Template menu is also available in email reply panel:

[Screenshot]

* The following is raw template in the CRM:

{{ "raw-template.png" | screenshot }}

* {{ site.product }} automatically merges dynamic fields and compose message as follow:

{{ "filled-template.png" | screenshot }}


Congratulations! You have now successfully sent your first campaign with Yathit. Here's an example of what your recipients received in their inbox:

[Screenshot]


