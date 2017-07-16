One of the common problems that SugarCRM shares with other PHP-based applications is a vulnerability to Cross-site Scripting [1]. The fact that cross-site scripting, which is also known as XSS is a common attack, similar to SQL injection, does not make it less dangerous. A malicious script injected via XSS can potentially compromise all aspects of our business information security – confidentiality, integrity and availability of information we rely on. A SugarCRM professional may simply refer to a button that says "Remove XSS" [2] on the admin portal. Unfortunately, if it sounds too good to be true, it probably is!

![Remove XSS Joke](https://yathit-assets.storage.googleapis.com/upload/sugarcrm-remove-xss-joke.jpg)

There is little explanation in regards to when to click the “Remove XSS” button. How often should we do it? Most SugarCRM admins have limited knowledge of script-related security solutions and not everyone can afford an advice of security consultants. Do not despair! There is a way to resolve XSS threats to SugarCRM by utilizing Content Security Policy [3] or CSP. Hailed as a holy grail of security policies, CSP came standard with all major browsers [4]. It serves as additional level of security for browsers and is designed to mitigate XSS and sniffing attacks.

CSP is easy to implement by adding HTTP header in your Apache web server configuration [as advised in SugarCRM support](http://support.sugarcrm.com/Documentation/Sugar_Developer/Sugar_Developer_Guide_7.7/Security/Web_Server_Configuration/ ) by deploying `.htaccess` or `VirtualHost` file as follows:

    Header always set Content-Security-Policy "default-src 'self'; script-src 'self';"

There is a number of security policies available, but first, we would like to concentrate on “script-src” attribute. If your SugarCRM add-on module has an access to external websites using Javascript, you would have to relax the CSP by adding permission to access the target domain. For example: `script-src: thirdparty.com 'self'`. You might ask, “How come we need to relax the CSP and issue more permissions and tighten security in the same time?” This is a fair question to ask. Fortunately, CSP with certain permissions provides more security than no CSP at all. However, this procedure may not lower XSS threat to acceptable level, specifically when inline javascript is used, such as:

    'validation' =>  array (
        'type' => 'callback', 
        'callback' => 'function() {return false;}'
     ),

An relaxing inline javascript with `unsafe-inline` render CSP useless against XSS and other injection attacks. Other improper uses of CSP are all too common and Google security researchers conclude: [“CSP is dead!”](https://research.google.com/pubs/pub45542.html). We can go a different route to solve the inline script issues and improve browser security by utilizing [CSP Level 2](https://blog.mozilla.org/security/2014/10/04/csp-for-the-web-we-have/). This improved layer of protection can be very effective in combating XSS and similar threats. 

CSP 2 combats these threats by adding support for hashes and nonces for style resources and scripts. (Nonces are cryptographically strong random values generated on each page load). Nonce usage can also help minimize a list of allowed source URL values. This does not make CSP2 a perfect solution, but it helps us adjust `script_src` attribute without weakening it to `unsafe_inline`, which would be unacceptable.  

A very good example of a company implementing CSP into their product is Google. The company went extra mile to secure its Chrome browser extension by implementing the most stringent CSP as default configuration. [Google advises](https://youtu.be/GBxv8SaX0gg?t=46m10s) against relaxing CSP settings for Chrome extensions. Our Yathit extension has the strictest and most effective CSP. It has `script-src` attribute without relaxation of the extension’s security settings. Yathit has superior security features than the other SugarCRM extension on the browser end. These specific features stand out when it comes to email and client information management. We highly recommend our users to experiment with CSP deployment, and Yathit security features.   

##### References

[1]: https://www.owasp.org/index.php/Cross-site_Scripting_(XSS) 
Cross-site Scripting (XSS) *Article from https://www.owasp.org*
[1]

[2]: https://support.sugarcrm.com/Documentation/Sugar_Versions/7.7/Ent/Administration_Guide/System/Repair/index.html#Remove_XSS
Remove XSS *SugarCRM Documentation*
[2]

[3]: https://www.w3.org/TR/CSP1/ 
Content Security Policy
[3]

[4]: http://caniuse.com/#feat=contentsecuritypolicy 
Can I Use: Content Security Policy
[4]
