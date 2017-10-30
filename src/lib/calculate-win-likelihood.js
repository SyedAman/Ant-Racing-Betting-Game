/**
 * An algorithm that calculates the likelihood of an ant winning a racing
 * competition.
 * @method generateAntWinLikelihoodCalculator
 * @return {Function} - An async function that calculates the likelihood of an
 * ant winning after a certain delay.
 */
function generateAntWinLikelihoodCalculator() {
  var delay = 7000 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

export default generateAntWinLikelihoodCalculator
