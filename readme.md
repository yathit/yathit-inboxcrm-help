This repository contains all that is needed to fully generate the [Knowledge Base](https://www.yathit.com/sugarcrm-gmail/) for [Yathit InboxCRM](https://www.yathit.com).

For this opensource Knowledge Base web site generator, please see : [Lessons Learned Building a Git-Based Knowledge Base for my SaaS product](https://www.wisecashhq.com/blog/lessons-learned-creating-a-git-based-knowledge-base-for-my-saas-product).


## How to run locally

* Clone this repository to your machine.
* Make sure to have Ruby installed (tested fine on Ruby 2.1.x).
* Install required dependencies with `bundle install`
* Run `jekyll serve`
* Go to [http://localhost:4000/sugarcrm-gmail/(http://localhost:4000/sugarcrm-gmail/)

## How to build in production

This is mostly:


    bundle exec jekyll build --destination ~/gae/yathit-app/src/main/webapp/static/sugarcrm-gmail


