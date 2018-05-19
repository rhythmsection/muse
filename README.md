## Table of Contents

- [What's Happening Here?](#whats-up)
- [Rationale](#rationale)
- [Next Steps](#next-steps)
- [Firebase and Deployment](#firebase-and-deployment)
- [About Me](#about-me)
- [Create React App](#create-react-app)


## What's Happening Here?

[MUSE](https://url-muse.firebaseapp.com/) is a small, phishing-aware, single-page url-shortening app.
It uses a React/redux/node.js stack built on the Firebase database and cloud function hosting.

If you click [here](https://url-muse.firebaseapp.com/), it will take you to a Firebase hosted deployment
of the app, where you can submit a url and receive a (...relatively) shortened link in return.

The app also uses phishtank's API to check to see if the link you are trying to shorten is a common phishing
scam link, and won't let you use the service to do such terrible, terrible things (and won't forget that you tried).

After verification, you'll receive your new link as well as some handy formats to copy straight to your clipboard.

Enjoy!

## Rationale

Here's where I tell you why I chose to do what I did. I'll fill this in after I do a bit of testing. 

## Next Steps

[CopyToClipboard](https://www.npmjs.com/package/react-copy-to-clipboard) is a neat react npm module, but a little clumsy.
In a longer project, I would love to build this implementation myself with more extensibility.

I also would like to add statistics for phishing links submitted. The database is prepped (stores this info),
and could make an interesting visualization on larger usage. (e.g. what links/domains get submitted most often?)

Persistent users would also be a great nice-to-have -- especially when you need to go back and recall these random links.

Finally, I'd also consider deleting older urls from my database. Perhaps after a month or two. This would keep the database
from growing unwieldy and help avoid alias duplication in the far, far future. The database currently stores created_at
data with that future functionality in mind.

## Firebase and Deployment

If you'd like to run a copy of this app yourself, you'll need a couple of things, mostly centered around Firebase.


## About Me

I'm K. McClure and you can find out more about me [here](http://www.koorogi.com).


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent development guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
