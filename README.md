## Table of Contents

- [What's Happening Here?](#whats-up)
- [Next Steps](#next-steps)
- [Firebase and Deployment](#firebase-and-deployment)
- [About Me](#about-me)
- [Create React App](#create-react-app)


## What's Happening Here?

[MUSE](https://url-muse.firebaseapp.com/) is a small, phishing-aware, single-page url-shortening app.
It uses a React/redux/node.js stack built on the Firebase database and cloud function hosting.

If you click [here](https://url-muse.firebaseapp.com/), it will take you to a Firebase hosted deployment
of the app, where you can submit a url and receive a (...relatively) shortened link in return.

The app also uses Phishtank's API to check to see if the link you are trying to shorten is a common phishing
scam link, and won't let you use the service to do such terrible, terrible things (and won't forget that you tried).

After verification, you'll receive your new link as well as some handy formats to copy straight to your clipboard.

Enjoy!

---
**NOTE**

There is now a node back-end version of this project available [here](https://github.com/rhythmsection/muse-express). But all the testing and other neat stuff is here ;) 

---

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

Since it's deployed, the easiest way to access a production copy is [here](https://url-muse.firebaseapp.com/).

If you'd like to run a copy of this app yourself, you'll need a couple of things, mostly centered around Firebase.

-**Clone the Project:** `git clone git@github.com:rhythmsection/muse.git`

-**Firebase Account && Project:** Because I'm using Firebase, my server's included in the production environment. It's pretty
neat that there's one source of truth for my database, whether I'm in development or production, but produces a scenario that's
a little harder to reproduce. You can jump on [Firebase](https://firebase.google.com/) and get started with any Google account.
  - After a quick project set-up, you'll be directed to a console where you'll be given the option to "Add Firebase to your web app". Clicking on that will enable a pop-up that will give you personal credentials. Per the format of this app, you'll want to store them as an exportable in an un-tracked file called `fire.js` in src. It'll look something like this:
  ```
  import firebase from 'firebase'

  var config = {
    <<YOUR CONFIG INFO>>
  }

  const fire = firebase.initializeApp(config)

  export const auth = firebase.auth()

  export default fire
  ```

  - You'll also want to make sure to change any of the links referencing my deployment to yours. They're usually tagged as `shortUrl`.

  - The Firebase database doesn't need any further set-up, as there's no seeding to be done, and it sets up its collections automatically on initial submission.

  - In your local directory that you've cloned into, you'll want to run `firebase login` followed by `firebase init`, choosing to set up *hosting*, the *database* and *cloud functions*.

  - **IMPORTANT:** Because the **Phishtank API** exists outside the Google ecosystem, you *must* upgrade to a paid tier plan on Firebase to make it accessible via request. With the **Blaze** pricing plan, though, you only pay what you consume, so the cost should be very low unless this is run aggressively. Alternatively, you can *download and import a JSON file of server data from Phishtank* instead and change your connection to your Firebase database instead of the API. This is much slower, however.


-**Phishtank API Registration:** Register for a [Phishtank](https://www.phishtank.com/api_info.php) account and store your `api_key` as an exportable in a file called `phish.js` in src. It'll simply be this:
```
export default <<YOUR API KEY>>
```

-**Install Dependencies:** `npm install`

-**Run It Locally:** `npm start`

-**Test It:** `npm test`

-**Deploy It:** `npm run build && firebase deploy`

## About Me

I'm K. McClure and you can find out more about me [here](http://www.kxmcclure.com).


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent development guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
