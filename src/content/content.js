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

    10.71: {
      header: "10.7.1",
      text: `increased max number of students to 500; works fast enough with 500 students, though it does get pretty slow when class size is very large and Required Teammates or Non-Teammates are used
      adjusted scoring when team has more-than-desired schedule overlap to prevent runaway scores with high overlap
      when a student has misspelled another student's name that they've given in their survey response as a preferred teammate or non-teammate, the select-matching-name-dialogue now includes the requesting student's name
      improved the graph of optimization progress--now colors plot blue/pink when there is/is not at least one genome that meets all the rules
      improved UI in start window, with message confirming user has the latest version and is registered`,
    },

    10.7: {
      header: "10.7",
      text: `now only asks for the class's base timezone if the students were asked for their home timezone AND for their schedule
      significantly expanded the algorithm that recognizes timezone data in the survey
      Bugfix - now correctly displays at full width the UI elements in the teamset tabs
      updated C++ code standard to C++17, removing several deprecated QT elements in the process`,
    },

    10.61: {
      header: "10.6.1",
      text: `Bugfix - fixed crash on mac when changing the matched name in the select-matching-name dialog
      Bugfix - now correctly handles sub-version numbers when checking for new versions on startup`,
    },

    10.6: {
      header: "10.6",
      text: `upon opening gruepr, an online check of the latest downloadable version is made, offering to load gruepr homepage if a newer version is available
      the count of how many students gave each response now updates in the attributeTabs when changing the section being placed on teams
      an indicator of the maximum value of schedule and attribute weights has been added
      Bugfix - attribute tabs in gruepr now show at proper width
      `,
    },

    10.5: {
      header: "10.5",
      text: `much better UI with the attribute tabs in both gruepr and surveymaker
      in gruepr, the attribute tabs now show a count of how many students gave each of the responses
      in gruepr, when the attribute is home timezone, the offset from GMT is shown instead of a letter as the response value
      in surveymaker, tabs can now be moved or closed in order to quickly rearrange or remove attribute questions in the survey
      Bugfix - adding a new student now correctly sets their schedule as ambiguous
      Bugfix - action menu in required / prevented / requested teammates dialog correctly begins the correct action
      Bugfix - saving and loading a survey in surveymaker now remembers attributes that allow multiple response options
      `,
    },

    10.4: {
      header: "10.4",
      text: `Major feature - now each time you create teams, a brand new Teams Tab opens to show the team set created
      multiple team sets can be viewed simultaneously on different tabs. This can be used to compare easily the teams you get using different teaming options, or perhaps you'd like to create the teams for a few different sections and keep them all open before saving / printing them.
      now can load Prevented Teammates directly from an open Teams Tab. This can be used so that multiple team sets can be created with the same students and same teaming options, but where everyone gets all new teammates in each team set.
      Bugfix - team scores were miscalculated in certain rare cases
      the "actions" in the required / prevented / requested teammates dialog now only get applied to the students listed in the table (i.e., the students in the section being considered) as suggested by the wording
      as always, internal code cleanup and modernization--optimization might be slightly faster
      `,
    },

    10.3: {
      header: "10.3",
      text: `Bugfix - prevent crash when loading a survey without timestamp, first name, last name, and/or email address
      Bugfix - prevent crash when using the edit/add student dialog with certain attribute data
      Bugfix - improved handling of accented characters in student names and other survey data
      added new select-multiple-options type of attribute:
      added as option in SurveyMaker, adjusting the output accordingly in the Google Form or textfile survey
      added display in gruepr when loading survey data with an attribute question that allowed multiple responses
      updated handling of attribute data throughout gruepr to accommodate multiple response values
      much better UI in attribute questions within the edit/add student dialog
      improved handling of the minimum and desired numbers of meeting times:
      values can now be equal
      meeting block size of 3 hours now possible
      the maximum values now adjust for the number of possible meeting times, given the survey data and meeting block size
      `,
    },

    10.2: {
      header: "10.2",
      text: `Bugfix - editing a student's record no longer erases the notes field
      Bugfix - removing a student record no longer messes up all of the previously entered required / prevented / requested teammates
      Bugfix - now correctly implements required / incompatible attributes with value of "unknown / not set"
      when comparing student list to roster file, now uses both name and email address to find a match; eliminated the choice of whether to use roster or survey email address when they match
      csv files can now be header-row-free
      teaming options files now include the required attribute responses
      added randomize team names function
      better UI in required / incompatible attributes dialog
      removed "OK" button from small "setting up printer/pdfwriter" dialog
      sets/resets background color of teams in table after swapping or moving students
      organized code into dialogs and widgets subfolders
      changed the internal ID assigned to each studentRecord to be a permanent value set according to a dataOption counter that increments each time a student is added
      `,
    },

    10.1: {
      header: "10.1",
      text: `Added a "Required Attribute" feature, which ensures each team has at least one student with a particular attribute value
      Teams with less than a 0 compatibility score now indicated with highlight color and Tooltip
      Continuing behind-the-scenes code reorganization
      `,
    },

    10.06: {
      header: "10.0.6",
      text: `Improved functionality and much better UI in the Compare To Roster feature
      Continuing behind-the-scenes code reorganization
      
      `,
    },

    10.05: {
      header: "10.0.5",
      text: `Bugfix - students with ambiguous schedules were not being correctly accounted in the schedule score

      
      `,
    },

    10.04: {
      header: "10.0.4",
      text: `Bugfix - student schedules were shifting even when a time zone was specified for the schedule
      better display of time zones in student & team info tables
      minor code reorganization
      `,
    },

    10.03: {
      header: "10.0.3",
      text: `Bugfix - prevent crash when loading a survey file that doesn't have at least one schedule or attribute question
      `,
    },

    10.02: {
      header: "10.0.2",
      text: `Bugfix - crash on loading saved teaming options
      `,
    },

    10.01: {
      header: "10.0.1",
      text: `Added to the help menu an option to submit a bug report (using BitBucket Issues tracker)
      `,
    },

    10.0: {
      header: "10.0",
      text: `New Features

      can now ask students in the survey for names of preferred teammates and / or non-teammates, and can import those in gruepr as required/requested/prevented
      new "load roster" option to compare against survey data, updating email addresses and offering to add missing students and remove extra students
      added timezone functionality to survey: this includes allowing students to fill out survey schedule in their own timezone and then correct/shift into the "class timezone" each after collecting the results
      can now now prevent isolating nonbinary students, with distinction between students who are nonbinary vs. those whose gender is not known
      Better Data Handling
      
      expansion of what gets recognized for gender response: woman OR female -> woman; man OR male -> man; anything that includes "trans", "queer", or any combination of "non" and "binary" -> nonbinary
      doesn't mark students as duplicate just because they both have blank email adresses
      use a survey import dialog box so the user can select the meaning of each question
      allow for section question later in the "additional questions"
      change incompatible response dialog / behavior to add incompatible same responses (e.g., 1 with 1)
      add a penalty point for each incompatible attribute pair found on a team
      improved scoring of teams with one student
      Bug Fixes
      
      newlines within a csv field are now handled properly
      re-saving a survey file after adding or editing a student mishandled the attribute values
      the dialog box to choose which race/ethnicity to consider as URM crashed in certain cases
      starting the optimization crashed upon first updating the progress values whenever optimization was too quick
      Better User Interface
      
      add/edit student info dialog much improved; attribute response texts now always show in attribute value selection box
      changed display of team info to be always on, but bold and with colored background
      put attribute questions in a tab-style display for both surveymaker and gruepr
      Behind the Scenes Improvements
      
      made interface work much better with dark mode / dark color schemes
      LOTS of code modernization and organization
      moved code to Qt v5.15 standards
      
      `,
    },

    9.131: {
      header: "9.13.1",
      text: `Reverted genetic algorithm mutation behavior, as it works much better for large genomes
      Code cleanup
      Moved macOS binaries to use Qt version 5.15; now compatible with macOS 11 (Big Sur)
      `,
    },

    9.13: {
      header: "9.13",
      text: `Made progress dialog modal
      Adjusted genetic algorithm such that check for mutation to occur happens with low probability per gene site, instead of high probability per genome with iteration
      `,
    },

    9.121: {
      header: "9.12.1",
      text: `Lots of code modernization and some bugfixes

      `,
    },

    9.12: {
      header: "9.12",
      text: `Bugfix and improvements in handling when students have ambiguous schedules (all times checked or all unchecked)

      `,
    },

    9.11: {
      header: "9.11",
      text: `Vastly more quick and efficient handling of data in the team info display
      Other UI improvements throughout
      `,
    },

    9.1: {
      header: "9.10",
      text: `Internal code modernization and optimization
      `,
    },

    9.9: {
      header: "9.9",
      text: `Much improved drag-and-drop functionality to modify teams after creation
      Updated UI on custom teamsizes, custom teamnames, and URMselection dialog boxes      
      `,
    },

    9.83: {
      header: "9.8.3",
      text: `Fixed Print Teams dialog crash
      Still more code modernization and optimization    `,
    },

    9.82: {
      header: "9.8.2",
      text: `Fixed crash when all students on a team have a value of "unknown" for an attribute
      Fixed crash when changing the desired team size after forming teams and then re-displaying the team info
      Further code modernization and optimization `,
    },

    9.81: {
      header: "9.8.1",
      text: `Fixed a few small bugs related to attribute values
      Allowed that the current teaming options are saved as new default values every time the program exit, without the popup window `,
    },

    9.8: {
      header: "9.8",
      text: `Significantly improved speed of optimization through better coding :)
      Made more flexible the recognition of schedule questions in the survey header
      Fixed bug in recognizing attribute response values that are categorical yet begin with a decimal value (e.g., GPA)
      Further modernizing of code
      `,
    },

    9.71: {
      header: "9.7.1",
      text: `Further cleaned up UI
      Fixed bug that prevented macOS version from running in certain cases    `,
    },

    9.7: {
      header: "9.7",
      text: `The schedule question can now be phrased so that it asks students when they are free OR when they are busy (SurveyMaker can create the question either way and the data is correctly interpreted in gruepr).
      Cleaned up UI somewhat, and menu bar added.
      Cleaned up and simplified the optimization and genetic algorithm code   `,
    },

    9.61: {
      header: "9.6.1",
      text: `
      Incompatible Attributes are now active even if that attribute has a weight of 0.
      Minor UI improvements to the Incompatible Attributes dialog.
      `,
    },

    9.6: {
      header: "9.6",
      text: `
      added external window display of optimization progress and cleaned up UI
      made the section question of the survey to be more specific
      increased the max # of attribute questions to 15
      initial order of students on each team is now alphabetical by name, and initial order of teams is by name of first student in team; click on name column gets back to this order
      add option to save surveymaker output to textfile/csv file instead of Google Form
      moved the "clear all teammates" command in the prevented/required/requested teammates window to less error-prone location
      added command to save/load CSV of prevented/required/requested teammates, using levenshtein::distance to match names
      fixed bug with multiple notes columns in survey data
      now saves/loads teaming options into a file instead of registry
      now auto-stops optimization on timer after outcome is stable
      modernize rand() and other code clean up / modernization
      `,
    },

    9.5: {
      header: "9.5",
      text: `
      Incompatible Attributes are now active even if that attribute has a weight of 0.
      Minor UI improvements to the Incompatible Attributes dialog.
      `,
    },

    9.4: {
      header: "9.4",
      text: `
      Treatment of race/ethnicity is now more inclusive. The survey question (if included) now asks students to self-identify their racial/ethnic/cultural heritage, and then allows the instructor to select later which of the responses should be considered an underrepresented minority group.
      `,
    },

    9.32: {
      header: "9.3.2",
      text: `Bugfix: crash when optimizing a dataset with all survey responses giving the same value for one or more attributes (e.g., all surveys answer "2" for the first attribute question)
      Generalized the Incompatible Responses feature so that each attribute has a list of incompatible pairs
      Continuing code modernization/cleanup
      
      `,
    },

    9.31: {
      header: "9.3.1",
      text: `Minor bugfixes: greupr failing when reading in a blank value in the csv datafile, surveymaker loading incorrect attribute response options from a saved survey file    `,
    },

    9.3: {
      header: "9.3",
      text: `Added option for Incompatible Responses to each attribute
      `,
    },

    9.2: {
      header: "9.2",
      text: `When adding Prevented Teammates, can now load a spreadsheet file from previous teaming in order to give all students new teammates
      Can now save (or overwrite) a survey file from within gruepr after adding, editing, or removing a student from the dataset
      Fixed bug in removing a single required/prevented/requested teammate
      New splashscreen during app startup
      `,
    },

    9.1: {
      header: "9.1",
      text: `Reorganized the "save/print teams" dialog box
      Added teaming info to the instructor's file
      `,
    },

    9.0: {
      header: "9.0 - MAJOR UPDATE",
      text: `Merged gruepr and SurveyMaker into a single app. On program startup, a window asks which to run.

      `,
    },

    8.17: {
      header: "8.17",
      text: `Much better handling of purely categorical (i.e., non-numerical or ordered) attributes, such as academic major.
      SurveyMaker now uses local day names, instead of defaulting to English names
      `,
    },

    8.161: {
      header: "8.16.1",
      text: `Critical bugfixes and improvements to the required/prevented/requested teammates feature.
      Improved flexibility to alternative date and time formats and character sets.
      Parallel processing during optimization brought to macOS; optimization now much faster on multi-core CPUs.
      `,
    },

    8.16: {
      header: "8.16",
      text: `
      Tables displaying student and team info are smarter in how they display information--columns can be sorted by clicking on the top of the column.
      A number of internal changes to the code to improve efficiency.
      `,
    },

    8.15: {
      header: "8.15",
      text: `
      
SurveyMaker can now save surveys to the harddrive for later editing or reuse.
Attribute questions can now have >9 response options, and the options do not need to be numbered.
Optimization is now significantly faster on a Windows machine with a modern (multi-core) CPU through use of parallel processing; maximum number of students has been accordingly increased to 300.

      `,
    },

    8.14: {
      header: "8.14",
      text: `
      There's now a simpler way in gruepr to add a student, plus a way to edit an existing student's information.`,
    },
  },
};
