export default function GameScore({ score }) {
  var highscore = 75;
  var lowscore = 50;
  if (score > highscore) {
    return (
      <div className="relative">
        <div className="border inline-flex px-1 rounded-lg border-green-400 text-green-400 bg-green-400/[0.1] mt-1 mr-1">
          {score}
        </div>
      </div>
    );
  }
  if (score < highscore && score > lowscore) {
    return (
      <div className="relative">
        <div className="border inline-flex px-1 rounded-lg border-yellow-400 text-yellow-400 bg-yellow-400/[0.1] mt-1 mr-1">
          {score}
        </div>
      </div>
    );
  }
  if (score < lowscore) {
    return (
      <div className="relative">
        <div className="border inline-flex px-1 rounded-lg border-red-400 text-red-400 bg-red-400/[0.1] mt-1 mr-1">
          {score}
        </div>
      </div>
    );
  }
}
