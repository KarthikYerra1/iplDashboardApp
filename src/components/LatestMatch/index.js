import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details

  return (
    <div className="latest-match-details-container">
      <div className="team-details-image-container">
        <div className="team-details-container">
          <p className="competing-team-details-text">{competingTeam}</p>
          <p className="date competing-team-details-text">{date}</p>
          <p className="p-text competing-team-details-text">{venue}</p>
          <p className="p-text competing-team-details-text">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team"
        />
      </div>
      <div className="match-inning-details-container">
        <h3>First Innings</h3>
        <p>{firstInnings}</p>
        <h3>Second Innings</h3>
        <p>{secondInnings}</p>
        <h3>Man of the Match</h3>
        <p>{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
