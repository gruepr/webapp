const data = {
  rows: [
    {
      title: "How do I set the name of each team?",
      content:
        "Use the “Set team names:” Drop-down list selection on the bottom right after you load in your data to gruepr and make optimal teams! There is an option in the box to make custom team names.",
    },

    {
      title: "What if I want to make my own survey question(s)?",
      content:
        'Simply add an "Attribute" to your survey in Surveymaker! You can choose from a list of student responses as well.',
    },

    {
        title: 'Can I make changes to the teams after they’ve been created?',
        content: 'Yes! Once gruepr creates the teams, click and drag students or teams to the new position you want. A student can be moved onto another team by dragging the student\'s name onto the new team\'s name. Alternatively, two students can be swapped by dragging one student\'s name onto another student\'s name. The teams can be manually rearranged by dragging a team\'s name onto another team\'s name. ',
    },

    {
      title: "How do the weighted rules work?",
      content:
        "The gruepr algorithm first focuses on satisfying the unweighted rules (Team size, Gender, URM, required/requested teammates), then tries to satisfy the weighted rules (Attributes and meeting times).",
    },

    {
      title: "What do the Required/Incompatible Attributes mean?",
      content:
        "Use the required attributes if every single team must have this attribute at least once. Use the incompatible attributes if students with certain attributes should not be on the same team.",
    },
  ],
};
export default data;
