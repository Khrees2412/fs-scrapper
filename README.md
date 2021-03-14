# Hi there! 👋

This ~~probably useless~~ piece of code was created as a way for me to understand and also try out the  basics of the Nodejs filesystem. 

I thought someone could benefit from it too.

> Scrapify helps you scrape the content of files in a specified directory and paste it in a 🗁 folder and file of your choice. That's all, its simple and easy. 😃 

## How to use - It's really easy!

>Install [fs-scrapper](https://npmjs.org/package/fs-scrapper)

> `npm install fs-scrapper`

Add it to your package.json like this - 

```json
"scripts": {
    "scrape": "node fs-scrapper"
  }

```

Run it on your terminal using `npm run scrape <the-directory-to-scrape-from> <the-new-directory> <the-new-file-name+extension>`


## Another way to use it

Add it to your package.json like this

```json
"scripts": {
    "scrape": "node fs-scrapper <the-directory-to-scrape-from> <the-new-directory> <the-new-file-name+extension>"
  }

```
Run it on your terminal using `npm run scrape`



**Feel free to send a PR for other possible additions.** 