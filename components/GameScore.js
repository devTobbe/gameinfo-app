export default function GameScore({ score }) {
  var highscore = 75;
  var lowscore = 50;
  return (
    <div className="relative">
      {score >= highscore && (
        <div className="border inline-flex px-1 rounded-lg border-green-400 text-green-400 bg-green-400/[0.1] mt-1 mr-1">
          {score}
        </div>
      )}
      {score < highscore && score > lowscore && (
        <div className="border inline-flex px-1 rounded-lg border-yellow-400 text-yellow-400 bg-yellow-400/[0.1] mt-1 mr-1">
          {score}
        </div>
      )}
      {score < lowscore && (
        <div className="border inline-flex px-1 rounded-lg border-red-400 text-red-400 bg-red-400/[0.1] mt-1 mr-1">
          {score}
        </div>
      )}
      {score < 0 && (
        <div className="border inline-flex px-1 rounded-lg border-white-400 text-white-400 bg-white-400/[0.1] mt-1 mr-1">
          ?
        </div>
      )}
    </div>
  );
}
