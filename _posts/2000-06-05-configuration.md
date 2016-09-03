---
title: Configuration
section: Setup
index: 5
---

## Overview

You can pre-reconfigure the Yathit InboxCRM Chrome Extension directly from Enterprise Configuration File, which is available in the [License Management](/portal/index.html) Portal. The configuration provides the capability to pre-configure all licensed users.

In the example given below, you can see the configuration for disabling snapshot panel in the extension.

    {
      "Sugar": {
        "SnapshotSetting": {
          "disabledPanel": true
        }
      }
    }

## Root configuration keys

The configuration file has three root configuration keys:
1) Sugar
2) Email Tracking
3) Google Apps

### Sugar configuration key

The following section explains many configuration keys available under the root `Sugar` configuration key. 

#### LoginInfo

By using simple configuration, you can change the current user login info.; for example, the below configuration will change the default currency of the login user.

    {
      "Sugar": {
        "LoginInfo": {
          "user_currency_name": "THB"
        }
      }
    }

### ModuleSetting

Remove the Module Setting Panel from the extension sidebar by using the configuration given below.

    {
      "Sugar": {
        "ModuleSetting": {
          "disabledPanel": true
        }
      }
    }

Not only you can remove the module setting but also make changes in a specific property. To do this, you can use the `Modules` key. The following settings will make the `id` fields visible in the record edit panel for Account record types. The `id` field in the panel is hidden by default.

     {
       "Sugar": {
         "ModuleSetting": {
           "Modules": {
             "Accounts": {
               "Fields": {
                 "id": {
                   "normallyHide": false
                 }
               }
             }
           }
         }
       }
     }

In the above settings, the module name is "Account." To apply the same changes to all modules, use the * sign instead of the module name. This configuration given below will make the Assign user fields visible to all the modules.

     {
       "Sugar": {
         "ModuleSetting": {
           "Modules": {
             "*": {
               "Groups": {
                 "assigned_user_name": {
                   "normallyHide": false
                 }
               }
             }
           }
         }
       }
     }

### ModuleFields

Adjust the SugarCRM meta data as a result with the REST API method named `get_module_fields` using `ModuleFields`.

The following configuration adjusts the correct grouping for the `campaing_name` fields. (Note: incorrect spelling).

### EmailTracking configuration key

Currently the `disable` key is the only supported key under the `EmailTracking` configuration key. It supports only `true` or `false` values.

     {
       "Sugar": {
         "ModuleSetting": {
           "Modules": {
             "Accounts": {
               "module_fields": {
                 "campaing_name": {
                   "group": "campaign"
                 }
               }
             },
           }
         }
       }
     }

### RecordBrowsePanel

The following configuration changes the menu item in the Record search panel and the Record Browser panel. 

     {
       "Sugar": {
         "RecordBrowsePanel": {
           "modules": [
              "Contacts",
              "Cases",
              "Opportunities",
              "Leads",
              "Accounts",
              "Bugs",
              "Campaigns",
              "Documents",
              "Notes",
              "Tasks",
              "Calls",
              "Users"
           ]
         }
       }
     }

By following the above configuration, the two modules "Bugs" and "Campaign" are visible in the browser panel and are editable. These modules are not visible by default. You can add any module in the browser panel by adding its name in the configuration given above.

### GoogleApps configuration key

The `GoogleApps` configuration key configures all Google Apps.

### Contacts

Follow this configuration to disable the contact sync.

    {
      "GoogleApps": {
        "Contacts": {
          "Sync": {
            "disabled": true
          }
        }
      }
    }

### Calendar

To disable the calendar sync, follow this configuration.

    {
      "GoogleApps": {
        "Calendar": {
          "Sync": {
            "disabled": true
          }
        }
      }
    }
