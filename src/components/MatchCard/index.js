import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeamLogo, competingTeam, matchStatus} = matchDetails

  const matchResult = matchStatus === 'Won' ? 'match-won' : 'match-lose'

  return (
    <li className="match-card-details">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-team-result">{result}</p>
      <p className={matchResult}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
