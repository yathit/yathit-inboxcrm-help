---
title: How email tracking works
section: Email Tracking
index: 3
---



Yathit email tracker uses the same pixel-beacon approach that many newsletter services use, applied to one-to-one communication. When you send an email using Yathit tracking, a pixel is embedded in your message. Once the recipient's email client or application loads the image, Yathit’s server gets pinged with the IP address, providing you with relevant information about where, when, and on what device your email was opened.

Transparent one pixel gif image with unique URL is added to email content body just before sending to Google email server.Your recipient will sees exactly the email sent from you. Your recipient might see a message such as "Load images from this user?" depending on the email client.

Since all image URL are unique, Yathit server knows which email belong to when the image is accessed. When browser or email client request the image, it send usual IP address of the client. The IP address is used for location of email reader.

If email message is opened by sender oneself, the image will also be acquired from Yathit server. Such self open access is recorded as _self open_ by sending additional request from the extension.

## When email tracking does not work

Email tracking work only when the image is accessed. Some email client does not display images embedded in the email body for security and privacy reason. In Gmail, [embedded images are displayed](http://gmailblog.blogspot.sg/2013/12/images-now-showing.html) by default, but accessed via Google [image proxy sever](https://support.google.com/mail/answer/145919?p=display_images&rd=1). It means, Yathit will not able to trace IP address of email reader. However the time of access can still be recorded and considered as intended reader read the email.

## How link tracking works

In addition to email tracking, Yathit email tracker also track links. Link tracking creates a proxy link to any link in your email body. When the link is click, Yathit server record link access and redirect to original link. The original look of the link does not change. Link tracking is very reliable as compare to email tracking.


