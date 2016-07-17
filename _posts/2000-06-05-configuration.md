---
title: Configuration
section: Customerization
index: 3
---

## Overview

Yathit InboxCRM Chrome Extension can be pre-configured through Enterprise Configuration file. The configuration file is uploaded in [License Management](/portal/index.html) portal. All users using the license are pre-configured using the configuration.

Here is an example configuration file, which disable Snapshot panel in the extension.

    {
      "Sugar": {
        "SnapshotSetting": {
          "disabledPanel": true
        }
      }
    }

## Root configuration keys

There are three root configuration keys in the configuration file 1) Sugar, 2) EmailTracking and 2) GoogleApps.

### Sugar configuration key

The following section explain several configuration keys under root `Sugar` configuration key.

#### LoginInfo

Change current user login info. For example, the following configuration changes default currency of the login user.

    {
      "Sugar": {
        "LoginInfo": {
          "user_currency_name": "THB"
        }
      }
    }

### ModuleSetting

The following configuration remove Module Setting panel from the extension sidebar.

    {
      "Sugar": {
        "ModuleSetting": {
          "disabledPanel": true
        }
      }
    }

To change specific property, use `Modules` key. The following setting make `id` fields visible in the record edit panel for Account record type. By default `id` fields is hidden in the panel.

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

Where "Accounts" is module name. To apply all modules, use `*`. The following configuration make Assign User fields visible to all modules.

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

`ModuleFields` is used to adjust Sugar CRM meta data as return by REST API method `get_module_fields`.

The following configuration adjust correct grouping for `campaing_name` fields. (Note: incorrect spelling).

### EmailTracking configuration key

Currently the only supported key under `EmailTracking` configuration key is `disable` key with valid values are either `true` or `false`.

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

The following configuration change menu items in the Record Browser panel and Record search panel.

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

Note that, by doing so, the two modules "Bugs" and "Campaigns", which is not display by default, are shown in the browser panel and editable. Any module can be add there.

### GoogleApps configuration key

`GoogleApps` configuration key configure Google Apps.

### Contacts

The following configuration disable Contact sync.

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

The following configuration disable Calendar sync.

    {
      "GoogleApps": {
        "Calendar": {
          "Sync": {
            "disabled": true
          }
        }
      }
    }
