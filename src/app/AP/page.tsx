import Layout from '@/app/layout'
'use client';
import React, { useState } from 'react';
import Question from './question';
//import { promises as fs } from 'fs';

/*export type QuestionWithAnswers = {
  question: string;
  choices: string[]; 
  answer: string;
};*/

/*const questionsData = { [subject: string]: QuestionsWithAnswers[]} = {
  "ap-biology": [
    { question: "Which macromolecule is the main component of the cell membrane?", choices: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"], answer: "Lipids" },
    { question: "What is the primary function of DNA?", choices: ["Storing energy", "Transmitting signals", "Storing genetic information", "Digesting food"], answer: "Storing genetic information" },
    { question: "In cellular respiration, glucose is broken down into what molecule?", choices: ["Carbon dioxide", "Oxygen", "Water", "ATP"], answer: "Carbon dioxide" },
    { question: "What process do plants use to convert sunlight into energy?", choices: ["Glycolysis", "Fermentation", "Photosynthesis", "Respiration"], answer: "Photosynthesis" },
    { question: "What type of cell lacks a nucleus?", choices: ["Eukaryotic", "Prokaryotic", "Plant", "Animal"], answer: "Prokaryotic" }
  ],
  "ap-calculus-ab": [
    { question: "What is the derivative of x^3?", choices: ["3x^2", "x^2", "3x", "x^3"], answer: "3x^2" },
    { question: "What is the integral of 2x?", choices: ["x^2 + C", "2x^2", "x^2", "x + C"], answer: "x^2 + C" },
    { question: "What is the limit of sin(x)/x as x approaches 0?", choices: ["0", "1", "Infinity", "Undefined"], answer: "1" },
    { question: "What is the derivative of e^x?", choices: ["e^x", "x", "x^2", "1"], answer: "e^x" },
    { question: "What is the area under a curve from a to b?", choices: ["Derivative", "Integral", "Slope", "Limit"], answer: "Integral" }
  ],
  "ap-calculus-bc": [
    { question: "What is the Maclaurin series expansion of e^x?", choices: ["1 + x + x^2/2! + x^3/3! + ...", "1 - x + x^2 - x^3 + ...", "ln(x)", "x + 1/x"], answer: "1 + x + x^2/2! + x^3/3! + ..." },
    { question: "What is the radius of convergence?", choices: ["The distance within which a series converges", "A rule in geometry", "A limit property", "A type of polynomial"], answer: "The distance within which a series converges" },
    { question: "What is the Taylor series for cos(x)?", choices: ["1 - x^2/2! + x^4/4! - ...", "1 + x + x^2 + ...", "x^2 + 2x + 1", "1 - x + x^2 - ..."], answer: "1 - x^2/2! + x^4/4! - ..." },
    { question: "What is L'Hôpital's rule used for?", choices: ["Solving limits of indeterminate forms", "Finding derivatives", "Calculating integrals", "Evaluating continuity"], answer: "Solving limits of indeterminate forms" },
    { question: "How do you find the length of a curve on an interval?", choices: ["Using an arc length integral", "Using a derivative", "Using a Taylor series", "Using a Riemann sum"], answer: "Using an arc length integral" }
  ],
  "ap-chemistry": [
    { question: "What is the atomic number of oxygen?", choices: ["6", "8", "12", "16"], answer: "8" },
    { question: "What is the pH of a neutral solution?", choices: ["0", "7", "14", "10"], answer: "7" },
    { question: "Which of the following is a strong acid?", choices: ["HCl", "CH3COOH", "NH3", "H2O"], answer: "HCl" },
    { question: "What is Avogadro's number?", choices: ["6.022 x 10^23", "3.14", "2.718", "1.6 x 10^-19"], answer: "6.022 x 10^23" },
    { question: "What is the molar mass of NaCl?", choices: ["23 g/mol", "35.5 g/mol", "58.5 g/mol", "60 g/mol"], answer: "58.5 g/mol" }
  ],
  "ap-comparative-government-politics": [
    { question: "Which country operates a parliamentary system?", choices: ["United States", "United Kingdom", "China", "Brazil"], answer: "United Kingdom" },
    { question: "What is a characteristic of authoritarian regimes?", choices: ["Free elections", "Centralized control", "Open press", "Independent judiciary"], answer: "Centralized control" },
    { question: "What is the purpose of a constitution?", choices: ["To limit government powers", "To increase government control", "To determine economic policy", "To regulate trade"], answer: "To limit government powers" },
    { question: "Which country is a federal republic?", choices: ["United Kingdom", "China", "Russia", "France"], answer: "Russia" },
    { question: "What system combines the executive and legislative branches?", choices: ["Parliamentary", "Presidential", "Confederal", "Federal"], answer: "Parliamentary" }
  ],
  "ap-computer-science-a": [
    { question: "What is a class in Java?", choices: ["A template for creating objects", "A type of variable", "An operator", "A method"], answer: "A template for creating objects" },
    { question: "Which keyword is used to create an instance of a class?", choices: ["new", "class", "public", "return"], answer: "new" },
    { question: "What is inheritance in Java?", choices: ["A way to create subclasses", "Creating multiple variables", "An arithmetic operation", "A type of loop"], answer: "A way to create subclasses" },
    { question: "Which keyword is used for inheritance in Java?", choices: ["extends", "implements", "inherits", "super"], answer: "extends" },
    { question: "What is polymorphism?", choices: ["A class having multiple methods with the same name", "A way to define constants", "A type of data structure", "A looping structure"], answer: "A class having multiple methods with the same name" }
  ],
  "ap-computer-science-principles": [
    { question: "What is an algorithm?", choices: ["A step-by-step procedure", "A type of data structure", "A programming language", "A computer virus"], answer: "A step-by-step procedure" },
    { question: "What is the primary function of a CPU?", choices: ["Process instructions", "Store data", "Connect devices", "Transmit data"], answer: "Process instructions" },
    { question: "What is binary?", choices: ["A base-2 number system", "A base-10 number system", "An encryption method", "A file format"], answer: "A base-2 number system" },
    { question: "What is the Internet?", choices: ["A network of networks", "A single large computer", "A type of software", "A programming language"], answer: "A network of networks" },
    { question: "What is abstraction?", choices: ["Simplifying complex systems", "Making code faster", "Increasing file size", "A data type"], answer: "Simplifying complex systems" }
  ],
  "ap-english-language-composition": [
    { question: "What is the purpose of a thesis statement?", choices: ["To state the main argument", "To introduce the conclusion", "To summarize evidence", "To provide background information"], answer: "To state the main argument" },
    { question: "What is ethos?", choices: ["Appeal to ethics", "Appeal to emotion", "Appeal to logic", "A type of narrative"], answer: "Appeal to ethics" },
    { question: "Which is an example of figurative language?", choices: ["Simile", "Thesis", "Topic sentence", "Introduction"], answer: "Simile" },
    { question: "What is the primary goal of argumentative writing?", choices: ["To persuade", "To inform", "To entertain", "To describe"], answer: "To persuade" },
    { question: "What is pathos?", choices: ["Appeal to emotion", "Appeal to logic", "Appeal to ethics", "A rhetorical device"], answer: "Appeal to emotion" }
  ],
  "ap-english-literature-composition": [
    { question: "What is the primary function of a narrator?", choices: ["To tell the story", "To provide arguments", "To introduce themes", "To summarize conclusions"], answer: "To tell the story" },
    { question: "What is a metaphor?", choices: ["A comparison without 'like' or 'as'", "An argument structure", "A narrative technique", "A type of rhyme"], answer: "A comparison without 'like' or 'as'" },
    { question: "What is iambic pentameter?", choices: ["A line with five pairs of syllables", "A stanza of five lines", "A rhyme scheme", "A poetic device"], answer: "A line with five pairs of syllables" },
    { question: "Which is an example of symbolism?", choices: ["A rose representing love", "A thesis statement", "A news article", "A conclusion"], answer: "A rose representing love" },
    { question: "What is the climax of a story?", choices: ["The turning point", "The introduction", "The conclusion", "The rising action"], answer: "The turning point" }
  ],
  "ap-environmental-science": [
    { question: "What is biodiversity?", choices: ["Variety of life in an ecosystem", "The number of species", "The total biomass", "Species extinction"], answer: "Variety of life in an ecosystem" },
    { question: "What is an ecological footprint?", choices: ["The environmental impact of an individual", "A measure of biodiversity", "A type of pollution", "The size of an ecosystem"], answer: "The environmental impact of an individual" },
    { question: "Which gas is primarily responsible for climate change?", choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: "Carbon dioxide" },
    { question: "What is the greenhouse effect?", choices: ["Warming of the Earth due to trapped gases", "Cooling of the Earth", "Decrease in biodiversity", "A cycle of evaporation"], answer: "Warming of the Earth due to trapped gases" },
    { question: "What is a renewable resource?", choices: ["A resource that can be replenished", "A resource that cannot be replaced", "Fossil fuels", "Minerals"], answer: "A resource that can be replenished" }
  ],
  "ap-european-history": [
    { question: "What event started World War I?", choices: ["The assassination of Archduke Franz Ferdinand", "The signing of the Treaty of Versailles", "The fall of the Berlin Wall", "The Russian Revolution"], answer: "The assassination of Archduke Franz Ferdinand" },
    { question: "What was the primary cause of the Reformation?", choices: ["Corruption in the Catholic Church", "The rise of monarchies", "The Industrial Revolution", "Colonial expansion"], answer: "Corruption in the Catholic Church" },
    { question: "Who was the first Holy Roman Emperor?", choices: ["Charlemagne", "Julius Caesar", "Otto von Bismarck", "Louis XIV"], answer: "Charlemagne" },
    { question: "What did the Enlightenment emphasize?", choices: ["Reason and individualism", "Tradition and religion", "War and conquest", "Agrarian society"], answer: "Reason and individualism" },
    { question: "What was the primary result of the French Revolution?", choices: ["Establishment of a republic", "Restoration of monarchy", "Expansion of empire", "Decline of nationalism"], answer: "Establishment of a republic" }
  ],
  "ap-french-language-culture": [
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Which famous monument is located in Paris?", choices: ["Eiffel Tower", "Big Ben", "Colosseum", "Statue of Liberty"], answer: "Eiffel Tower" },
    { question: "What is the French term for 'thank you'?", choices: ["Bonjour", "Merci", "S'il vous plaît", "Au revoir"], answer: "Merci" },
    { question: "What is the primary language spoken in France?", choices: ["English", "Spanish", "French", "German"], answer: "French" },
    { question: "What does 'bon appétit' mean?", choices: ["Goodbye", "Enjoy your meal", "Thank you", "Good morning"], answer: "Enjoy your meal" }
  ],
  "ap-german-language-culture": [
    { question: "What is the capital of Germany?", choices: ["Berlin", "Vienna", "Zurich", "Amsterdam"], answer: "Berlin" },
    { question: "What is the German word for 'thank you'?", choices: ["Bitte", "Danke", "Hallo", "Tschüss"], answer: "Danke" },
    { question: "Which famous composer was from Germany?", choices: ["Mozart", "Beethoven", "Bach", "All of the above"], answer: "All of the above" },
    { question: "What is the traditional German dish made with sausages?", choices: ["Sauerbraten", "Bratwurst", "Pretzel", "Schnitzel"], answer: "Bratwurst" },
    { question: "What does 'Guten Morgen' mean?", choices: ["Good night", "Goodbye", "Good morning", "Hello"], answer: "Good morning" }
  ],
  "ap-human-geography": [
    { question: "What is human geography?", choices: ["The study of human activity and its relationship to the earth", "The study of physical landforms", "The study of animals", "The study of the universe"], answer: "The study of human activity and its relationship to the earth" },
    { question: "What does urbanization refer to?", choices: ["The movement from rural to urban areas", "The growth of forests", "Population decline", "Rural development"], answer: "The movement from rural to urban areas" },
    { question: "What is a demographic transition model?", choices: ["A model that shows population change over time", "A model for economic growth", "A geographical feature", "A type of map"], answer: "A model that shows population change over time" },
    { question: "What does GDP stand for?", choices: ["Gross Domestic Product", "General Development Policy", "Global Development Plan", "Geographical Distribution Pattern"], answer: "Gross Domestic Product" },
    { question: "What is globalization?", choices: ["The process of increasing interconnectedness among countries", "Isolationism", "Rural development", "A cultural phenomenon"], answer: "The process of increasing interconnectedness among countries" }
  ],
  "ap-macroeconomics": [
    { question: "What is GDP?", choices: ["Gross Domestic Product", "General Domestic Policy", "Global Development Plan", "Geographic Distribution of Power"], answer: "Gross Domestic Product" },
    { question: "What does monetary policy control?", choices: ["Interest rates and money supply", "Taxes and spending", "Government regulations", "Trade agreements"], answer: "Interest rates and money supply" },
    { question: "What is inflation?", choices: ["Increase in general price levels", "Decrease in GDP", "Rise in unemployment", "Decrease in consumer spending"], answer: "Increase in general price levels" },
    { question: "What is the purpose of fiscal policy?", choices: ["To influence the economy through government spending and taxation", "To control interest rates", "To regulate trade", "To manage natural resources"], answer: "To influence the economy through government spending and taxation" },
    { question: "What is unemployment rate?", choices: ["The percentage of the labor force that is unemployed", "The number of people without jobs", "The total labor force", "The number of job vacancies"], answer: "The percentage of the labor force that is unemployed" }
  ],
  "ap-microeconomics": [
    { question: "What is the law of demand?", choices: ["As price increases, quantity demanded decreases", "As price decreases, quantity supplied increases", "As income increases, demand decreases", "As population increases, supply decreases"], answer: "As price increases, quantity demanded decreases" },
    { question: "What is a monopoly?", choices: ["A market structure with one seller", "A competitive market", "A government regulation", "A type of tax"], answer: "A market structure with one seller" },
    { question: "What does elasticity measure?", choices: ["Responsiveness of quantity demanded or supplied to price changes", "The overall demand in the market", "Total revenue", "The number of suppliers"], answer: "Responsiveness of quantity demanded or supplied to price changes" },
    { question: "What is opportunity cost?", choices: ["The value of the next best alternative", "The total cost of production", "The fixed cost", "The variable cost"], answer: "The value of the next best alternative" },
    { question: "What is a normal good?", choices: ["A good for which demand increases as income increases", "A good that is always available", "A good with constant price", "A good that is luxury"], answer: "A good for which demand increases as income increases" }
  ],
  "ap-music-theory": [
    { question: "What is the musical scale?", choices: ["A sequence of notes", "A type of instrument", "A musical form", "A genre of music"], answer: "A sequence of notes" },
    { question: "What is a time signature?", choices: ["It indicates how many beats are in each measure", "It shows the tempo of the piece", "It indicates the dynamics", "It determines the key"], answer: "It indicates how many beats are in each measure" },
    { question: "What does a flat symbol (♭) do to a note?", choices: ["Lowers the pitch by a half step", "Raises the pitch by a half step", "Makes it a quarter note", "Changes the tempo"], answer: "Lowers the pitch by a half step" },
    { question: "What is a chord?", choices: ["A combination of three or more notes played simultaneously", "A single note", "A type of scale", "A musical genre"], answer: "A combination of three or more notes played simultaneously" },
    { question: "What is the purpose of dynamics in music?", choices: ["To indicate volume", "To show tempo", "To create rhythm", "To specify notes"], answer: "To indicate volume" }
  ],
  "ap-physics-1": [
    { question: "What is Newton's first law of motion?", choices: ["An object in motion stays in motion unless acted upon by an external force", "F=ma", "For every action, there is an equal and opposite reaction", "Energy cannot be created or destroyed"], answer: "An object in motion stays in motion unless acted upon by an external force" },
    { question: "What is the formula for kinetic energy?", choices: ["KE = 1/2 mv^2", "KE = mv", "KE = mgh", "KE = Fd"], answer: "KE = 1/2 mv^2" },
    { question: "What is the unit of force?", choices: ["Joule", "Watt", "Newton", "Pascal"], answer: "Newton" },
    { question: "What does velocity measure?", choices: ["Speed in a given direction", "Total distance", "Acceleration", "Mass"], answer: "Speed in a given direction" },
    { question: "What is the principle of conservation of energy?", choices: ["Energy cannot be created or destroyed, only transformed", "Energy is always increasing", "Energy can be created from nothing", "Energy is lost in every process"], answer: "Energy cannot be created or destroyed, only transformed" }
  ],
  "ap-physics-2": [
    { question: "What is the formula for electric power?", choices: ["P = IV", "P = I^2R", "P = V^2/R", "All of the above"], answer: "All of the above" },
    { question: "What is Coulomb's law?", choices: ["The force between two charged objects is proportional to the product of their charges", "The energy stored in a capacitor", "The law of conservation of momentum", "The law of thermodynamics"], answer: "The force between two charged objects is proportional to the product of their charges" },
    { question: "What is the unit of capacitance?", choices: ["Joule", "Farad", "Ohm", "Volt"], answer: "Farad" },
    { question: "What is the function of a transformer?", choices: ["To change voltage levels", "To store energy", "To convert AC to DC", "To measure current"], answer: "To change voltage levels" },
    { question: "What is the principle of superposition in waves?", choices: ["When two waves overlap, the resulting displacement is the sum of the individual displacements", "Waves cannot interact", "Waves always cancel each other", "Waves travel at different speeds"], answer: "When two waves overlap, the resulting displacement is the sum of the individual displacements" }
  ],
  "ap-physics-c-electricity-magnetism": [
    { question: "What is the unit of magnetic field?", choices: ["Tesla", "Coulomb", "Ampere", "Volt"], answer: "Tesla" },
    { question: "What is Faraday's law of electromagnetic induction?", choices: ["The induced EMF in a circuit is proportional to the rate of change of magnetic flux", "Charge is conserved", "Energy is conserved", "Electricity cannot be created"], answer: "The induced EMF in a circuit is proportional to the rate of change of magnetic flux" },
    { question: "What does Ohm's law state?", choices: ["V = IR", "P = IV", "F = ma", "E = mc^2"], answer: "V = IR" },
    { question: "What is the purpose of a capacitor?", choices: ["To store electrical energy", "To measure current", "To convert AC to DC", "To increase voltage"], answer: "To store electrical energy" },
    { question: "What is the direction of current flow in a circuit?", choices: ["From positive to negative", "From negative to positive", "In random directions", "No specific direction"], answer: "From positive to negative" }
  ],
  "ap-physics-c-mechanics": [
    { question: "What is the formula for gravitational potential energy?", choices: ["PE = mgh", "PE = 1/2 mv^2", "PE = Fd", "PE = m^2g"], answer: "PE = mgh" },
    { question: "What is the principle of conservation of momentum?", choices: ["In a closed system, momentum is conserved", "Energy is always conserved", "Mass is always conserved", "Speed is always constant"], answer: "In a closed system, momentum is conserved" },
    { question: "What is the acceleration due to gravity on Earth?", choices: ["9.8 m/s^2", "10 m/s^2", "9.81 m/s^2", "8.5 m/s^2"], answer: "9.81 m/s^2" },
    { question: "What does a free-body diagram represent?", choices: ["All forces acting on an object", "The motion of an object", "The energy of an object", "The velocity of an object"], answer: "All forces acting on an object" },
    { question: "What is Hooke's law?", choices: ["F = kx", "F = ma", "E = mc^2", "P = IV"], answer: "F = kx" }
  ],
  "ap-psychology": [
    { question: "What is the primary focus of psychology?", choices: ["Behavior and mental processes", "Physical health", "Biological processes", "Social interactions"], answer: "Behavior and mental processes" },
    { question: "What is classical conditioning?", choices: ["Learning through association", "Learning through reinforcement", "Learning through observation", "Learning through trial and error"], answer: "Learning through association" },
    { question: "What is the function of the amygdala?", choices: ["Processing emotions", "Regulating body temperature", "Controlling movement", "Storing memories"], answer: "Processing emotions" },
    { question: "What does Maslow's hierarchy of needs represent?", choices: ["A theory of human motivation", "A cognitive process", "A learning technique", "A behavioral approach"], answer: "A theory of human motivation" },
    { question: "What is cognitive dissonance?", choices: ["The mental discomfort experienced when holding two contradictory beliefs", "A type of memory", "A psychological disorder", "A social behavior"], answer: "The mental discomfort experienced when holding two contradictory beliefs" }
  ],
  "ap-us-government-politics": [
    { question: "What is the supreme law of the land?", choices: ["The Constitution", "The Declaration of Independence", "The Bill of Rights", "The Federalist Papers"], answer: "The Constitution" },
    { question: "What are the first ten amendments to the Constitution called?", choices: ["The Bill of Rights", "The Articles of Confederation", "The Federalist Papers", "The Declaration of Independence"], answer: "The Bill of Rights" },
    { question: "Who is in charge of the executive branch?", choices: ["The President", "The Congress", "The Supreme Court", "The Cabinet"], answer: "The President" },
    { question: "What is the main function of the legislative branch?", choices: ["To make laws", "To interpret laws", "To enforce laws", "To adjudicate laws"], answer: "To make laws" },
    { question: "How many justices are on the Supreme Court?", choices: ["7", "9", "11", "13"], answer: "9" }
  ],
  "ap-us-history": [
    { question: "What was the primary cause of the Civil War?", choices: ["Slavery", "States' rights", "Economic differences", "Tariffs"], answer: "Slavery" },
    { question: "Who wrote the Declaration of Independence?", choices: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"], answer: "Thomas Jefferson" },
    { question: "What was the significance of the Emancipation Proclamation?", choices: ["It freed slaves in Confederate states", "It ended the Civil War", "It started Reconstruction", "It established civil rights"], answer: "It freed slaves in Confederate states" },
    { question: "What was the main goal of the Civil Rights Movement?", choices: ["End segregation and discrimination", "Promote economic growth", "Establish new laws", "Create new political parties"], answer: "End segregation and discrimination" },
    { question: "What event led to the United States' entry into World War I?", choices: ["The sinking of the Lusitania", "The attack on Pearl Harbor", "The signing of the Treaty of Versailles", "The Great Depression"], answer: "The sinking of the Lusitania" }
  ],
  "ap-world-history": [
    { question: "What is the primary focus of world history?", choices: ["The study of human societies over time", "The study of geography", "The study of art", "The study of economics"], answer: "The study of human societies over time" },
    { question: "What event started the French Revolution?", choices: ["Storming of the Bastille", "The signing of the Treaty of Versailles", "The establishment of the Estates-General", "The Reign of Terror"], answer: "Storming of the Bastille" },
    { question: "What was a major cause of World War II?", choices: ["The rise of totalitarian regimes", "The invention of the atomic bomb", "The signing of the Treaty of Versailles", "The Great Depression"], answer: "The rise of totalitarian regimes" },
    { question: "What was the significance of the Silk Road?", choices: ["A trade route connecting East and West", "A military pathway", "A cultural exchange platform", "An exploration route"], answer: "A trade route connecting East and West" },
    { question: "What was the main consequence of the Industrial Revolution?", choices: ["Urbanization and changes in social structure", "Decline of agriculture", "Increase in population", "Expansion of empires"], answer: "Urbanization and changes in social structure" }
  ]
}
<Question question = {question} options = {options} correctAnswer = {answer}/>;
*/



export default function AP(){
    
    //const file = await fs.readFile(process.cwd() + '/app/AP/questions.json', 'utf8');
    //const data = JSON.parse(file);

    //const [value, setValue] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState(null); 

    const handleAnswerSelect = ({answer}:any) => {

        setSelectedAnswer(answer);
    
      };


    const question = "Which of the following best describes the primary purpose of the rhetorical situation?";
    const options = {"A": "To analyze a text's literary elements.",
    "B": "To create a visual representation of ideas.",
    "C": "To understand the relationship among the speaker, audience, and purpose.",
    "D": "To evaluate the historical context of a text."};
    const answer = "C";
    return (
        <main>
            <div>
                
            </div>
            <form className='max-w-sm mx-auto'>
            <label className="flex items-center justify-center w-full text-navy text-2xl mt-20" htmlFor="course">Course:</label>

            <select name="course" id="course" className='block w-full py-2.5 text-lg text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'>
                <option selected>Choose a class</option>
                <option value="ap-biology">AP Biology</option>
                <option value="ap-calculus-ab">AP Calculus AB</option>
                <option value="ap-calculus-bc">AP Calculus BC</option>
                <option value="ap-chemistry">AP Chemistry</option>
                <option value="ap-comparative-government-politics">AP Comparative Government & Politics</option>
                <option value="ap-computer-science-a">AP Computer Science A</option>
                <option value="ap-computer-science-principles">AP Computer Science Principles</option>
                <option value="ap-english-language-composition">AP English Language and Composition</option>
                <option value="ap-english-literature-composition">AP English Literature and Composition</option>
                <option value="ap-environmental-science">AP Environmental Science</option>
                <option value="ap-european-history">AP European History</option>
                <option value="ap-french-language-culture">AP French Language & Culture</option>
                <option value="ap-german-language-culture">AP German Language & Culture</option>
                <option value="ap-human-geography">AP Human Geography</option>
                <option value="ap-macroeconomics">AP Macroeconomics</option>
                <option value="ap-microeconomics">AP Microeconomics</option>
                <option value="ap-music-theory">AP Music Theory</option>
                <option value="ap-physics-1">AP Physics 1: Algebra-Based</option>
                <option value="ap-physics-2">AP Physics 2: Algebra-Based</option>
                <option value="ap-physics-c-electricity-magnetism">AP Physics C: Electricity & Magnetism</option>
                <option value="ap-physics-c-mechanics">AP Physics C: Mechanics</option>
                <option value="ap-psychology">AP Psychology</option>
                <option value="ap-us-government-politics">AP U.S. Government & Politics</option>
                <option value="ap-us-history">AP U.S. History</option>
                <option value="ap-world-history">AP World History</option>
            </select>
            </form>


            <div className=' text-bluegrotto'>
        <p className=' text-bluegrotto flex item-center justify-center text-xl p-10'>What is the powerhouse of the cell?</p>
                <div className='flex items-center justify-center  ml-56 mr-56'>
                    <div className='flex items-center justify-center p-5'>
                    <input 
                        className=''
                        type="radio" 
                        id="option-1" 
                        name="answer" 
                        value="Ribsome"
                        checked={selectedAnswer === "Ribosome"} 
                        onChange={() => handleAnswerSelect("Ribsome")}/>
                    <label htmlFor={"option-1"}>{"Ribosome"}</label>
                    </div>
                    <div className='p-5'>
                    <input 
                        type="radio" 
                        id="option-2" 
                        name="answer" 
                        value="Mitochondria"
                        checked={selectedAnswer === "Mitochondria"} 
                        onChange={() => handleAnswerSelect("Mitochondria")}/>
                    <label htmlFor={"option-2"}>{"Mitochondria"}</label>
                    </div>
                    <div className='p-5'>
                    <input 
                        type="radio" 
                        id="option-3" 
                        name="answer" 
                        value="Nucleus"
                        checked={selectedAnswer === "Nucleus"} 
                        onChange={() => handleAnswerSelect("Nucleus")} />
                    <label htmlFor={"option-3"}>{"Nucleus"}</label>
                    </div>
                    <div className='p-5'>
                    <input 
                        type="radio" 
                        id="option-4" 
                        name="answer" 
                        value="Cell Membrane"
                        checked={selectedAnswer === "Cell Membrane"} 
                        onChange={() => handleAnswerSelect("Cell Membrane")} />
                    <label htmlFor={"option-4"}>{"Cell Membrane"}</label>
                    </div>
                    
                </div>
            </div>

            
            
            
        </main>
    )






}
