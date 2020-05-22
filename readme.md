This repository contains all that is needed to fully generate the [Knowledge Base](https://www.yathit.com/sugarcrm-gmail/) for [Yathit InboxCRM](https://www.yathit.com).

For this opensource Knowledge Base web site generator, please see : [Lessons Learned Building a Git-Based Knowledge Base for my SaaS product](https://www.wisecashhq.com/blog/lessons-learned-creating-a-git-based-knowledge-base-for-my-saas-product).


## How to run locally

* Clone this repository to your machine.
* Make sure to have Ruby installed (tested fine on Ruby 2.4.x).
* Install required dependencies with `bundle install`
* Run 

    jekyll serve
    
* Go to [http://localhost:4000/sugarcrm-gmail/(http://localhost:4000/sugarcrm-gmail/)

## Uploading screenshot

Resize image with 400px width in Ubuntu.  
  
    convert Screenshot_1538703449.png -resize 400 sm-sugar-setting-page-2.png
    
    gsutil -m rsync -r ~/screenshot gs://yathit-assets/screenshot 
    
    gsutil cp ~/Desktop/yathit-about-panel.png gs://yathit-assets/screenshot/
    
List files

    gsutil ls gs://yathit-assets/screenshot   
    
## CSS

Image in css

    ![centered-image](https://yathit-assets.storage.googleapis.com/screenshot/intstall-permission-collabspot.png)
    

    {{ "sidebar-login-button.png" | screenshot }}         

## Updating tutorial list

To update [tutorial video list](https://www.yathit.com/sugarcrm-gmail/tutorial-videos.html) go to [video data page](http://127.0.0.1:4000/sugarcrm-gmail/video-data.html). Authorize if necessary and copy data in chrome console by `copy(JSON.stringify(data, null, 2))`. Paste data to `_data\playlistTutorial.json`.

## How to build in production

This is mostly:

    ant
    
To build the site    

    bundle exec jekyll build --destination ~/gae/yathit-app/src/main/webapp/static/sugarcrm-gmail
   
Then replace token on forum.html 

    ant forum

In windows, use bash for ubuntu to build the site

    cd //mnt/c/Users/mbikyaw/WebstormProjects/yathit-inboxcrm-help
    jekyll build 
       
Then go back to PowerShell to copy files to destination folder
     
    ant copy
