//? This is a kind of "store everything" type thing for myself only
//TODO frontend- maybe use some threejs or something for something cool, do want to make it look aesthetic as well
//TODO backend- graphql/apollo, mongodb, prisma- just to store todo things etc, might need to plan database architecture
//TODO might use NextJS as having a backend running fast would be super handy, should take that udemy course on to learn more
//TODO might set up a script so this deployed site opens every time i open up my laptop/at night before bed at specific time

//? have a side menu bar with tabs- tasks, ideas, quick notes, people details, skills to learn, books read/to read, running data
//* Tasks -  App will store stuff like a task tracker- yearly, monthly, weekly, daily and can check them off PLUS have a checked off list-- different to goals as these are the tasks eg (shredded- gym, cardio: argentina- visa, save money: skills learnt- python, blockchain courses)

//* Goals-- important to have the yearly (shredded, argentina, skills learnt)

//* Ideas-- can be a certain spot where I store ideas down for books, apps, whatver

//* Quick Notes- just general things written down that i can look at later etc--- have this always present on the site, could do some sort of script where info i put in the notes tab on my phone or something will auto go into this spot

//* People Details (Networking)-- important peoples info for stuff i need

//* Skills To Learn- programming languages, music theory etc just a list off subset skills of each of these that I need to learn, making it more objective of what I need to learn- e.g (jazz theory for music, django- frontend connection for python)

//* Books-to-read-- put the long list of books to read here so its a stable checkoff list- could connect it up to goodreads API so automatically updates

//* Running data- strava API and could have graphs etc of my running habits using a D3 library or something

// * PB page for personal best stuff

//* Can do a PB segments for strava etc and running

//* Can look at adding in apges that take data from popular apps used for all kinds of things- strava: running, myhealthapp: health, myfitnesspal: food

//* Have little widgets on the side that can be things like news (filter types- sport, economics, world), live sports (choose sports you want), stock prices (choose crypto or stock prices to be updated)

//TODO many more automation things can put in to make it easier to use for daily stats and life

//TODO can add mini picturesin for things as well or logos if want- make customizable

//TODO use the nice colours i like- light yellow, light blue, light red etc
//? kinda like this screenshot - https://bradfrost.com/blog/post/slowly-falling-in-love-with-notion/

//TODO layout like Notion

//TODO could try a social media section- use API call from instagram, facebook, twitter, linkedin and just get the top 10 posts from each one for the day and display

//TODO could have a news section where it just shows the top 10 news for the day or something-- could try filter out annoying news

//TODO could try have a github repo page where I can add ideas to each repo that I have in the form of a text file or something so when I open the repo i have the text file with description of what I want so quick add info rather than having to open the file in IDE

//TODO side bar a slightly darker light yellow and main page a very light/white yellow- add buttons light blue and delete buttons light red

//TODO could put the ascend stuff in there as well as things to buy

//TODO try a kindle API and see if can link up the daily stoic into there so whenever open the latpot theres a stoic message to read first on arrival to website

//TODO could maybe add in a free chatGPT thing if its free though in the corner so can always ask stuff

//TODO maybe a calendar main with events and then bottom corner a smaller calendar with like dots for events then can click

//TODO keep in mind this will become something I can use and update forever so making it really good will payoff super well and would look elite on a resume

//TODO link up apple watch and do a heart graph with D3 or sleeping with whoop etc API

//!!!!! can literally get API for most things and just get the data in here once "connected/authorized" and then store it in database and then can just update end of everyday or something

import Pages from "./assets/pages/Pages";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";

function App() {
  //? temporary isloggedin variable
  let isLoggedIn = false;

  return <div className="font-mono">{isLoggedIn ? <Pages /> : <Login />}</div>;
}

export default App;
