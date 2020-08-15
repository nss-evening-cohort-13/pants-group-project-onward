Link to Figma: https://www.figma.com/file/0KkXdUtpuKgvOddaJa5x6O/The-Jort-Port?node-id=0%3A1
Link to Style Guide: https://docs.google.com/document/d/1a4K46QNeE-BT47A8HkkEbmKiyTQxNvcO3TCBnmB_qEE/edit



# Week 5 - PANTS GROUP PROJECT

# Foundations Group Project - Pants Website
As a team, build the web site for the pants type your team has decided on. The team gets to decide how you interpret your pants type. Be creative and have fun.  Let's keep it PG13 - if you are not sure and idea you have is appropriate, err on the side of caution and ask an instructor.

#### Examples:
- Jeans
- Culocks
- Shorts
- Bell Bottoms

## Requirements

### Theme
Pick a theme that the team likes. A good place for inspiration is the [Wordpress themes](https://wordpress.org/themes/) site. Do not purchase, or copy the theme code, just browse them for inspiration. Everyone should agree on a theme and ensure that each page is consistent with the colors, fonts, and/or images chosen.

### Wireframes
Your teams needs to create wireframes for every page that you decide to create on your site. Every team member should have a page that is their own responsibility.

* Your team can only have 1 CSS and 1 JS file
* Vanilla HTML, CSS, and JS only
* Your team should be using bootstrap - at minimum use the grid system

### Pages
Each team member is going to be responsible for the content of a different page, so decide on the name and content for each of those pages. Some possible options are:

1. Home page
1. About the pants
1. Upcoming Pants Fashion Shows
1. Available Versions
1. Buy various pants of this type

### Teamwork
Create a Project board for your site and make the columns for 'Backlog', 'Todo', 'Doing', 'Code Review', 'Done'. Create notes for different units of work, make the notes into issues, and assign it to the team members doing to work. When you are assigned to an issue, make sure that you are moving it over to the right column on the board.

### Planning
Your team **MUST** use github projects to track tickets and progress on tickets.  We expect to see detailed wireframes for all different views in your project. These wireframes should be included in the appropriate ticket.

### Git
Your team is going to learn how to use git to enable good teamwork when building a software product.

1. Follow the instructons in class to clone down the repo
1. `cd` into the directory that got created.
1. Before anyone on the team writes a single line of code, the team will decide on a branch naming strategy. Branches should be descriptive of the work that is going to be done on that branch. Some teams also decide to add the developer's information to the branch name, such as initials. For example, a developer named Jasmine Sheboygen is going to work on the navbar for the web site. A good name for the branch would be `js-navbar`.
1. Your team already has a README.md file so there is no reason anyone should push to the master branch - LIKE EVER.  Also at some point there should probably exist a good, proper readme with screenshots

Now everyone will work on their page on those individual branches. Once a teammates feels that their work is complete, the teammate will push up their branch to Github and create a pull request. Decide as group your standard for reviewing and approving pull requests, for example, you may decide that each PR needs one thumbs up from another teammate, you may decide that everyone in the group needs to give it a thumbs up, etc. At the very least, one of the other teammates must review the pull request and give a thumbs up (Just type :+1 in the comment box).
```bash
# Check to make sure that your working tree is clean. Add and commit all that you need to.
git checkout master
git fetch
git branch -al
# ^ The code above shows you all active branches that are available to you on GitHub.
git checkout your-teammates-branch-name
# Test test test
```

Once the PR gets a thumbs up, the teammates should merge the current version of master (the one with all their teammate's fancy additions) to their current working branch by following this process:

```bash
# Check to make sure that your working tree is clean. Add and commit all that you need to.
git checkout master
git pull origin master
git checkout your-branch-name
git merge master
# Fix any merge conflicts, if you have them
# git add and git commit any files affected by the merge conflict.
```

Now you have all of your work, plus all of your teammate's approved work on one branch. :cool:

### Javascript
* EVERY SINGE PAGE must include a JS loop of some kind
* Your team can only have 1 JS file - main.js
* All your JS should be written in functions.  Wherever possible reuseable functions.

**:warning:** DO NOT start coding until an instructor has looked at your github project and Figma wireframes.

### Twists
Your project must include each of the following:
* **Complex Data** - At lease 1 of your pages should use a more complex data structure.  This means that one of your arrays should have an array inside each object.  For examle:  your pants could have an array of fits and each of your fits could have an array called sizes in it.  You then would have to figure out how to display all the fits and their sizes in the domString
* **Dynamic Buttons** - somewhere in your project there should be some dynamically created buttons - clicking each button should perform some sort of action
* **Form** - Your project should have at least 1 form.  Submitting that form via a button click should do something.

