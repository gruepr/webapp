// all of the text content for the website

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  emailText: "info@gruepr.com",

  // ----- Navigation bar ----- //
  navbar: {
    home: "Home",
    faq: "FAQs",
    about: "About Us",
    downloadButton: "Download",
  },

  // ----- Footer ----- //
  footer: {
    howItWorks: "How It Works",
    faq: "FAQs",
    makeSurvey: "Make a Survey",
    privacyPolicy: "Privacy Policy",
  },

  // ----- Home page ----- //
  home: {
    hero: {
      header: "Sort your students into the most optimal groups",
      text: `Use our survey maker to collect information from your students, upload to gruepr, and our 
      algorithm will find you the best set of teams.`,
      button: "Download gruepr",
    },

    whyGruepr: {
      header: "Why gruepr?",

      flexibleHeader: "gruepr is flexible",
      flexibleText: `Instructors can include whatever questions they would like to use to help form teams, 
      and the algorithm can use the survey data in a variety of instructor-chosen ways.`,

      privacyHeader: "gruepr keeps your data private",
      privacyText: `We never collect your data. The survey is typically a Google Form that lives on your 
      own Google Drive, but could also be performed using any survey instrument you prefer. `,

      forEducatorsHeader:
        "gruepr was created by an educator for fellow educators",
      forEducatorsText:
        "It will remain always free of cost, free from ads, and free from selling of any data.",
    },

    features: {
      createSurveyHeader: "Create custom surveys",
      createSurveyText: `Fill out our form building questionaire to create the perfect survey for your class.
     Select the types of questions and responses you want to include in your survey and let gruepr do the rest!`,

      teamCompatibilityHeader: "Maximize team compatibility",
      teamCompatibilityText: `Upload your .csv, select your parameters, and have the gruepings appear right before your eyes!
      We help to maximize team productivity by pairing students with similar goals and skill sets.`,

      freeOpenSourceHeader: "Free and open source, always",
      freeOpenSourceText:
        "Our powerful genetic matching algorithm is available to instructors, completely free and open source.",
    },

    // Trusted section
    trustedHeader: "Trusted by 35+ schools",
  },

  // ----- FAQ page ----- //
  faq: {
    howGrueprWorks: {
      header: "How gruepr works",
      appOverview: "Full App Overview",
      surveyMakerOverview: "SurveyMaker Overview",
      grueprOverview: "gruepr Overview",
      surveyMakerAttributes: "SurveyMaker Attributes",
      surveyMakerTimezoneSched: "SurveyMaker Timezone & Schedule",
    },

    faqQuestions: {
      header: "FAQ",
      setName: "How do I set the name of each team?",
      makeSurvey: "What if I want to make my own survey question(s)?",
      changeTeams:
        "Can I make changes to the teams after they've been created?",
      weightedRules: "How do the weighted rules work?",
      attributes: "What do the Required/Incompatible Attributes mean?",
    },

    legal: {
      header: "The Legal Side",
      text: `This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
      without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. \n
      No personal data about or from gruepr's users will ever be intentionally shared. 
      For more information, we have a complete privacy policy. \n
      gruepr incorporates code from the open source Qt libraries, using version 5.15. These can be freely downloaded from Qt. \n
      Icons used in gruepr were originally created by Icons8. 
      These icons have been made available under the creative commons license: Attribution-NoDerivs 3.0 Unported (CC BY-ND 3.0). \n
      An embedded font is used in gruepr, mostly for pdf and printer output: 
      Oxygen Mono, Copyright (C) 2012, Vernon Adams (vern@newtypography.co.uk) released under SIL OPEN FONT LICENSE V1.1. `,
    },
  },

  // ----- About Us page ----- //
  aboutUs: {
    backstory: {
      header: "The gruepr backstory",
      text: `As an educator, I want my students to have the best possible experience during group work. 
      I created gruepr because I was spending too much time assembling teams that accounted for my students' 
      individual schedules and past experiences. I wanted a tool that could help me, and I wanted to keep it always 
      free and open source for my fellow educators. The first version of the app was named "grouper," and that 
      inspired my scuba-diving colleage to give me a fish logo. The name later changed to "gruepr" because the challenges 
      of developing my first app reminded me of trying to avoid the fictional monster 
      that haunts the dark in the first computer game I remember ever playing.`,
    },

    contact: {
      header: "Contact",
      submitIssue: "Locate the issue tracker to submit a new issue here:  ",
      issueTracker: "Issue Tracker",
      bugsOrImprove:
        "If you find bugs or have ideas about how to improve gruepr, please contact Joshua Hertz at info@gruepr.com.",
    },
  },

  // ----- Download page ----- //
  downloadPage: {
    header: "Download and Installation",

    // Beginning section
    version: "The most recent version is 11.1, dated 18 November 2022. ",
    changelog: "Changelog.",

    downloadGruepr: "Download gruepr",

    windows: "Windows:",
    windowsInstall: `To install, download the file linked above and double-click to begin the installation. You may need to 
    enable Administrator privileges and click past security warnings during both the installation and when gruepr 
    is run for the first time. `,

    mac: "MacOS:",
    macInstall: `To install, download the dmg file, open the downloaded file, then drag the program to the Applications 
    folder to complete installation. You may need to temporarily override your Mac security settings during the first time 
    you run the program. To do this, Control-click the app, choose Open from the menu, and in the dialog that appears, 
    click Open.`,

    trySample: `If you would like a sample set of data to evaluate gruepr, you can download that here:`,
    downloadData: `Download data`,
  },

  // ----- Privacy Policy page ----- //
  privacyPolicy: {
    header: "Privacy Policy",

    // Beginning section
    beginningP1: `This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without 
    even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. No personal data about or 
    from gruepr's users will ever be intentionally shared. For more information, we have a complete privacy policy.
    \n
    gruepr incorporates code from the open source Qt libraries, using version 5.15. These can be freely downloaded from Qt. `,
    beginningP2: `Icons used in gruepr were originally created by Icons8. These icons have been made available under the creative 
    commons license: Attribution-NoDerivs 3.0 Unported (CC BY-ND 3.0). An embedded font is used in gruepr, mostly for pdf 
    and printer output: Oxygen Mono, Copyright (C) 2012, Vernon Adams (vern@newtypography.co.uk) released under SIL OPEN 
    FONT LICENSE V1.1.`,
    beginningP3: `I, Joshua Hertz, built gruepr as an Open Source app. This SERVICE is provided at no cost and is intended for use as 
    is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal 
    Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection 
    and use of information in relation to this policy. The Personal Information that I collect is used only for providing 
    and improving the Service. I will not use your information except as described in this Privacy Policy. I will NOT 
    share your information with anyone. `,
    beginningP4: `Information Collection and Use: For a better experience, while using our Service, I may ask you to voluntarily 
    provide me with certain personally identifiable information, including but not limited to Name, Email Address, 
    and Institution. Information you share with me will NOT be shared, given, or sold to anyone else. `,
    beginningP5: `Cookies: Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. 
    These are sent to your browser from the websites that you visit and are stored on your device's internal memory. 
    This Service does not use “cookies” directly. However, you may choose to use this Service in conjunction with Google, 
    Canvas, or other external services, and they might use “cookies” to collect information and improve their services. 
    You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. 
    If you choose to refuse these cookies, you may not be able to use those external portions of this Service. `,
    beginningP6: `Service Providers: You may choose to use Google, Canvas, or other service providers in conjunction with this Service. 
    These service providers are used due to the following reasons: To facilitate our Service; To provide the Service on 
    our behalf; or To perform Service-related services. I want to inform users of this Service that these third parties 
    have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, 
    they are obligated not to disclose or use the information for any other purpose.`,

    // Security
    securityHeader: "Security",
    securityText: `I value your trust in providing us your Personal Information, thus we are striving to use commercially 
    acceptable means of protecting it. The information you share is stored using Google data services. But remember that 
    no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I 
    cannot guarantee its absolute security.`,

    // Links to Other Sites
    linksHeader: "Links to Other Sites",
    linksText: `This Service may contain links to other sites. If you click on a third-party link, you will be 
    directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise 
    you to review the Privacy Policy of these websites. I have no control over and assume no responsibility 
    for the content, privacy policies, or practices of any third-party sites or services.`,

    // Children's Privacy
    childrensPrivHeader: "Children's Privacy",
    childrensPrivText: `These Services do not address anyone under the age of 13. I do not knowingly collect personally 
    identifiable information from children under 13. In the case I discover that a child under 13 has provided me with 
    personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware 
    that your child has provided us with personal information, please contact me so that I will be able to do necessary 
    actions.`,

    // Changes to This Privacy Policy
    changesHeader: "Changes to This Privacy Policy",
    changesText: `I may update our Privacy Policy from time to time. Thus, you are advised to review this page 
    periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. 
    These changes are effective immediately after they are posted on this page.`,

    // Contact Me
    contactHeader: "Contact Me",
    contactText: `If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at info@gruepr.com. 
    \n
    This privacy policy page was created at privacypolicytemplate.net and modified/generated by App Privacy Policy Generator.`,
  },

  // Change Log
  changeLog: {
    title: {
      header: "Change Log",
      text: `Updated 2022-06-07.`,
    },

    11: {
      header: "11.0 - MAJOR UPDATE",
      text: `fully integrated SurveyMaker and gruepr with Canvas and Google (NOTE: Canvas in beta--for now uses a user-generated token instead of OAuth token)
      moved all https calls to be direct from program instead of thru browser, removing all use of browser except OAuth login as needed
      create Canvas survey (quiz) and Google Form directly from surveymaker
      download results of Canvas survey and Google Form directly from gruepr
      upload created teams to Canvas
      saves and uses refresh tokens to reduce need for re-authorization every time
      moved Windows binary to non-static build with OpenSSL
      implemented an installation program for Windows now that non-static build
      enable custom attribute response options from within SurveyMaker
      when adjusting schedules to class timezone, now uses the same style of time name (e.g., "1:00pm" vs "13:00") from the survey within the UI
      improved/corrected display timezone in tooltips and table displays, especially when the value is unknown
      now correctly handles attributes that are both ordered and multi-valued ("multiordered")`,
    },

    10.9: {
      header: "10.9",
      text: `gender categories can now be based on biological sex (e.g., female), adult gender (e.g., woman), child gender (e.g., girl), or pronouns (e.g., she-her)`,
    },

    10.8: {
      header: "10.8",
      text: `windows and macOS binaries are now code-signed, which increases security and should reduce warnings on installation
      now can undo/redo when manually adjusting the teams using drag-and-drop
      behind-the-scenes code reorganization for future integration with Canvas and more direct Google integration`,
    },


    10.7: {
      header: "10.7.1",
      text: `increased max number of students to 500; works fast enough with 500 students, though it does get pretty slow when class size is very large and Required Teammates or Non-Teammates are used
      adjusted scoring when team has more-than-desired schedule overlap to prevent runaway scores with high overlap
      when a student has misspelled another student's name that they've given in their survey response as a preferred teammate or non-teammate, the select-matching-name-dialogue now includes the requesting student's name
      improved the graph of optimization progress--now colors plot blue/pink when there is/is not at least one genome that meets all the rules
      improved UI in start window, with message confirming user has the latest version and is registered`,
    },
  },
};
