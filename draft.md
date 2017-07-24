![crm-super](https://yathit-assets.storage.googleapis.com/upload/crm-powered.jpg)

Many salespeople hate dealing with CRM software. It is often slow to retrieve important customer information and difficult to navigate. The sales personnel has to deal with a multitude of links and buttons, prompting the users to click in excess and being unable to retrieve important client info [1]. Unlike installed software, browser based apps process the information that is heavily dependent on URL-enabled links. In addition, the client application has to process large volumes of data received from the server.
            
About a decade ago, Google succeeded as a major Web platform, the company developed a number of apps by heavily relying on client’s processing ability or browser’s ability to process a large amount of data. Modern app developers continue chasing the web app technology magic, but neglect browser database technology [2] that powers such popular Google apps as Gmail, Google Docs, Google Sheets, Photo, etc.

Browser database technology was first introduced [3] during Google Summer of Code in 2008  – ’09 for Webkit browser engine, which powered Safari and Chrome at the time. It was a major development as the Web application could now be enabled offline and significant amount of data could be queried relatively quickly without sending requests to the Web server. Google internal code that enables Google gear is API, which is a quick solution for utilizing [SQLite technology](https://www.sqlite.org/). Matching SQL technology to various browser standards and specifications was not an easy task [4]. 

It took years for browser vendors to come to specification agreements. Micron Technology came up with a new standard – WebSimple DB specification [5], which was incorporated into all popular browsers and eventually became Indexed Database standard [6]. However, Apple did not incorporate Indexed DB and WebSQL was used in Apple devices until 2017, when all major browsers including Safari started to support Indexed DB. Microsoft struggled to continue modernizing its Web technology and started to support Indexed DB in its Edge browser with few limitations [7].

Another important issue we should mention – Indexed DB remains [controversial](http://blog.harritronics.com/2011/04/more-thoughts-on-indexeddb-and-web-sql.html) due to issues resulting from the asynchronous API. Unlike a more familiar WebSQL, Indexed DB is more difficult, which makes it [unpopular among web developers](https://news.ycombinator.com/item?id=9978540). Another major difficulty the developers often encounter when using browser databases, is inability to cache large amounts of data. This is one of the reasons why CRMs are rarely implemented together with browser databases. On the bright side, Indexed DBs are faster than relationship databases and able to process large volumes of data. Indexed database is also harder to understand if you have been dealing solely with relational databases. However, in addition to asynchronous API and ability to run Java Script, Indexed DB offers fast indexing, efficient data management and ability to work offline. 
 
Yathit project initially started as a cross-platform JavaScript browser library [8] and eventually contributed to the development of Indexed DB API in order [to support more complex queries](https://www.w3.org/Bugs/Public/show_bug.cgi?id=20257). Currently, the open source Yathit database library is widely used in CRM and other enterprise Web applications. Unfortunately, a browser-based platform like SugarCRM is very far from using browser database and missing a lot of good user experience. We can clearly identify the following advantages offered by Yathit when it is combined with SugarCRM:

* **Full text search support**: If a user cannot remember spelling of a name, but remembers what the name sounds like, Yathit is able to pull the record by fuzzy search or phonetic synonyms [9].
* **Quick retrieval**: Yathit is able to display customer records very quickly such as when a user hovers a cursor above a customer name in the email. These simple features save users lots of time, add convenience and improve overall user experience.
* **Caching**: Customer records search is not required as records are quickly displayed and most of the data is cached. This works especially well with Chrome browser, which has capability to cache large amounts of data in comparison with other browsers
* **Low memory usage**: Last but not least - unlike other Chrome extensions, Yathit does not need a lot of memory to run and conduct its functions.

How great it would be if your CRM was as fast and responsive as Google apps! As browser platforms become more powerful in the near future, we will see a wider use of browser-based databases along with CRM software. Yathit extension will complement CRM software and add valuable features, making the browser software more competitive and reliable. Yathit is a sure bet for the future!

**References:**

1. [The state of CRM adoption by the financial services in the UK: an empirical investigation](http://www.sciencedirect.com/science/article/pii/S0378720604001296)
2. [Lovefield javascript library](https://google.github.io/lovefield/)
3. [Google Gear](http://gearsblog.blogspot.sg/2010/02/hello-html5.html)
4. [Web SQL Database: In Memoriam](https://nolanlawson.com/2014/04/26/web-sql-database-in-memoriam/)
5. [WebSimpleDB gets thumbs up from major browser vendors](https://o-micron.com/2011/11/05/websimpledb-gets-thumbs-up-from-major-browser-vendors/)
6. [Indexed Database API](https://www.w3.org/TR/IndexedDB/)
7. [Indexed Database browser support](http://caniuse.com/#feat=indexeddb)
8. [YDN-DB](https://github.com/yathit/ydn-db)
9. [Yathit Full Text search javascript library](https://github.com/yathit/ydn-db-fulltext)
