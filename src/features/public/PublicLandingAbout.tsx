import { APP_NAME, IS_DSRRS } from '@/config/brand';

/** Expandable “about” copy on the public home / sign-in page (OAuth homepage). */
export function PublicLandingAbout() {
  return (
    <section className="rs-public__expandables" aria-label={`About ${APP_NAME}`}>
      <details className="rs-detail-tools rs-public__details">
        <summary>What this app is for</summary>
        <div className="rs-public__details-body">
          {IS_DSRRS ? (
            <>
              <p>
                {APP_NAME} is the Deep South Rugby Referee Society’s app for
                requesting referees, confirming fixtures, and appointing match
                officials across Louisiana, Mississippi, Alabama, and the
                Florida Panhandle.
              </p>
              <p>
                Clubs request referees and confirm their fixtures here instead
                of by email. Home and away clubs agree on date, time, and venue
                before the Assignments Officer appoints a crew. Only referees
                appointed through the Assignments Officer are covered by society
                insurance.
              </p>
              <p>
                Referees see their appointments, accept assignments, and file
                match, card, and coaching reports in one place. Sign-in is
                required to see society data; this page is public so you can
                learn what the app does first.
              </p>
            </>
          ) : (
            <>
          <p>
            MatchReadyTX helps referee societies run match week more smoothly.
            Schedulers can keep the official schedule in Google Sheets while
            referees, coaching match officials, and team administrators use a
            mobile-friendly app for confirmations, assignments, and reports.
          </p>
          <p>
            Home and away teams confirm fixtures and agree on date, time, and
            venue before crews are finalized. Officials see appointments, accept
            assignments, and file match reports in one place.
          </p>
          <p>
            The app is in active use with the Lonestar Group in Texas and is open
            source so other societies can adapt it. Sign-in is required to access
            society data; this page is public so you can learn what the service
            does before you sign in.
          </p>
            </>
          )}
        </div>
      </details>

      <details className="rs-detail-tools rs-public__details">
        <summary>What you can do after sign-in</summary>
        <div className="rs-public__details-body">
          <ul className="rs-public__bullets">
            <li>View and manage match assignments and availability</li>
            <li>
              Confirm fixtures and propose schedule changes as a team admin
            </li>
            <li>
              {IS_DSRRS
                ? 'Request referees for your club’s matches'
                : 'Run scheduler queues, crew assignment, and sheet sync'}
            </li>
            <li>Submit match, card, and coaching reports</li>
            <li>
              Browse schedules, standings, and teams (where your role allows)
            </li>
          </ul>
        </div>
      </details>
    </section>
  );
}
