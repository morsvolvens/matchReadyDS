import type { PrivacyPolicySection } from '@/features/public/privacyPolicyContent';

/**
 * DRAFT — Deep South Rugby Referee Society privacy policy.
 * Adapted from the upstream MatchReadyTX policy. Items marked [TO CONFIRM]
 * need an Executive Committee decision before the pilot goes live.
 */
export const DSRRS_PRIVACY_POLICY_LAST_UPDATED = 'DRAFT: not yet adopted';

export const DSRRS_PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    title: 'Introduction',
    paragraphs: [
      'This Privacy Policy explains how the Deep South Rugby Referee Society ("DSRRS", "We", "Us" or "Our") collects, uses, and shares information when You use matchReadyDS (the "Service"), Our match scheduling and referee appointment app.',
      'DSRRS is a volunteer-led, nonprofit rugby referee society serving Louisiana, Mississippi, Alabama, and the Florida Panhandle. We operate within USA Rugby and True South Rugby Union.',
      'matchReadyDS is DSRRS’s copy of MatchReadyTX, an open-source app built by Justin X. Hale. DSRRS runs its own copy. The original developer does not operate it and does not have access to DSRRS data.',
    ],
  },
  {
    title: 'Who uses the Service',
    bullets: [
      'Referees, assistant referees, and coaches of match officials who are members of DSRRS',
      'Club contacts (team administrators) who request referees and confirm fixtures',
      'DSRRS officers, including the Assignments Officer, who schedule and appoint officials',
    ],
  },
  {
    title: 'Information We Collect',
    subsections: [
      {
        title: 'Information You give Us',
        bullets: [
          'Your name and email address (from Google or Apple sign-in and Your profile)',
          'Your phone number and home city or address. Referees and coaches of match officials must provide these so We can appoint You and work out travel distance.',
          'Optional profile details, such as a photo, referee level, kit sizes, and refereeing history',
          'Your society role, club links, and availability, plus the match requests, confirmations, and reports You submit',
        ],
      },
      {
        title: 'Information about players in match reports',
        paragraphs: [
          'When a referee records a yellow or red card, the match report includes the player’s name, jersey number, position, and what happened. Some of these players may be under 18, because DSRRS officiates youth and high school matches.',
          'Players do not have accounts and do not use the Service. Card details are visible only to the reporting referee and to DSRRS officers in the assigning, treasurer, report-review, and discipline roles. Clubs and coaches cannot see them. [TO CONFIRM: is True South or USA Rugby sent card reports for discipline? If so, name them here.]',
        ],
      },
      {
        title: 'Sign-in providers',
        paragraphs: [
          'When You sign in with Google or Apple, We receive Your basic account details from that provider, such as Your name and email address. Sign-in does not give Us access to Your Google Drive, Sheets, or any other files.',
        ],
      },
      {
        title: 'Technical information',
        paragraphs: [
          'Like most websites, the Service records basic technical information needed to run and protect it, such as Your IP address, browser type, and the pages You visit.',
        ],
      },
      {
        title: 'Match schedule',
        paragraphs: [
          'The match schedule is synced from a DSRRS-owned Google Sheet. This does not give Us access to Your personal Google account.',
        ],
      },
    ],
  },
  {
    title: 'Cookies and Local Storage',
    paragraphs: [
      'We use only the cookies and browser storage needed to keep You signed in and to remember settings such as light or dark mode. We do not use advertising or tracking cookies.',
    ],
  },
  {
    title: 'How We Use Your Information',
    bullets: [
      'To schedule matches and appoint officials. Only referees appointed through the DSRRS Assignments Officer are covered by society insurance, so appointments are recorded in the Service.',
      'To let home and away clubs confirm fixtures',
      'To send You emails about the Service, such as appointments, changes, and reminders',
      'To support referee development through coaching reports, coach feedback, and level grading',
      'To show fees and travel information for each match (display only)',
      'To keep the Service secure',
    ],
    subsections: [
      {
        title: 'What We do not do',
        bullets: [
          'We do not sell Your information',
          'We do not show advertisements',
          'We do not take or send payments through the Service. Clubs pay referees directly.',
          'We do not send marketing emails or text messages',
        ],
      },
    ],
  },
  {
    title: 'Who Can See Your Information',
    bullets: [
      'DSRRS members and officers, according to their role. For example, the member directory is visible within the society, and clubs see the crew for their matches only after the Match Official has confirmed the appointment.',
      'The companies that host and run the Service for Us: Google (Firebase sign-in, database, hosting, and security checks), Apple (Sign in with Apple), and Resend (email delivery). Each follows its own privacy policy.',
      '[TO CONFIRM: any sharing with True South Rugby Union or USA Rugby, for example for referee certification, insurance, or discipline.]',
      'Anyone else, but only where the law requires it or to protect someone’s safety',
    ],
  },
  {
    title: 'How Long We Keep Information',
    paragraphs: [
      'We keep Your information while You are an active member or club contact, and for a reasonable time afterward for society records. Match and card reports are kept as season records. [TO CONFIRM: retention period, for example 3 seasons.]',
      'You can ask Us to delete Your information at any time (see below).',
    ],
  },
  {
    title: 'Your Choices',
    paragraphs: [
      'You can update most of Your details yourself in Your profile. To see, correct, or delete what We hold about You, email Us at the address below. We may need to keep some records, such as past appointments and match reports, where We have a legitimate reason or a legal obligation.',
      'A parent or guardian can ask Us to correct or remove information about a minor player in a match report.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'We use the security features of Our hosting providers and limit access by role. No online service is perfectly secure, so We cannot guarantee absolute security.',
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'Accounts are for adults (18 and over) only. We do not knowingly let anyone under 18 create an account. Information about minor players appears only in match reports, as described above. [TO CONFIRM: does DSRRS have any referees under 18? If so, this section needs parental consent wording.]',
    ],
  },
  {
    title: 'Links to Other Websites',
    paragraphs: [
      'The Service may link to other sites, such as Google Maps directions. Those sites have their own privacy practices, and We are not responsible for them.',
    ],
  },
  {
    title: 'Changes to this Policy',
    paragraphs: [
      'If We change this policy, We will post the new version here and update the date at the top. We will tell members by email about any important changes.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'Questions or requests about this policy: deepsouthrugbyreferees@gmail.com',
    ],
  },
];
