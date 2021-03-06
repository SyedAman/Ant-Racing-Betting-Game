# Ant Win Likelihood

Hello! We want to get a sense of how you solve problems in the front-end, and to do so we ask that you complete this take-home coding challenge.

The challenge is to build a very special app for purveyors of the competitive ant racing scene, who wish to view statistics related to competing ants before races take place.

Here are the specifications provided by our stakeholders:

- Information about competing ants must be acquired from a GraphQL API located at the following endpoint: <https://antserver-blocjgjbpw.now.sh/graphql> (if this link is down for some reason, there is a backup at <https://guarded-shore-81814.herokuapp.com/graphql>)
- All available information on the ants should be displayed in a pleasing UI designed at your discretion.
- You must provide a way for users to calculate the odds of each ant winning.

  - We have provided the function which provides the means to calculate the likelihood of an ant winning below (see 'Ant-win likelihood algorithm'), which you must use as-is.
  - Users must be able to begin running calculations on all ants simultaneously.
  - The UI must reflect the state of each ant's win likelihood calculation (not yet run, in progress, calculated, etc.)
  - In addition, the UI must display the state of _all_ tests together (not yet run, in progress, all calculated).
  - As the results come in, ants must be ordered by their calculated likelihood of winning.

- The app should be written in Javascript, but how you implement the app is up to your discretion.

- When you're done, please send us a link to your submission's GitHub repo, and instructions on how to run it.
- The app should be written in Javascript

## Ant-win likelihood algorithm

```javascript
function generateAntWinLikelihoodCalculator() {
  var delay = 7000 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}
```

## Mockups

![](https://user-images.githubusercontent.com/11065634/32199941-00d9dd36-bd9d-11e7-86e5-7fd4dbb97ab0.png) ![](https://user-images.githubusercontent.com/11065634/32199938-fd60d5b0-bd9c-11e7-87b7-ce0f0b3f13cb.png) ![](https://user-images.githubusercontent.com/11065634/32199941-00d9dd36-bd9d-11e7-86e5-7fd4dbb97ab0.png)
