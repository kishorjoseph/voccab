import React, { useState } from 'react';
import './App.css';

// Vocabulary dataset derived directly from the source list
const questionsData = [
    {
      word: "Acceptable",
      definition: "satisfactory or able to be accepted",
      example: "The quality of work was acceptable to the committee."
    },
    {
      word: "Accessible",
      definition: "able to be reached or approached; easy to understand",
      example: "The museum is accessible to people with disabilities."
    },
    {
      word: "Admissible",
      definition: "able to be allowed or accepted, especially as evidence in court",
      example: "The new evidence was ruled admissible in the legal case."
    },
    {
      word: "Audible",
      definition: "able to be heard; loud enough to be heard",
      example: "The speaker's voice was barely audible at the back of the hall."
    },
    {
      word: "Belligerent",
      definition: "aggressive and hostile; eager to fight",
      example: "The belligerent tone of his speech angered many in the audience."
    },
    {
      word: "Benevolent",
      definition: "kind, generous, and showing goodwill",
      example: "The benevolent millionaire donated millions to children's hospitals."
    },
    {
      word: "Charitable",
      definition: "relating to giving help to those in need; kind and forgiving",
      example: "Her charitable work has helped thousands of homeless people."
    },
    {
      word: "Combustible",
      definition: "able to catch fire easily; flammable",
      example: "The factory stored combustible materials in a secure, isolated area."
    },
    {
      word: "Compatible",
      definition: "able to exist or work together harmoniously",
      example: "The new software is compatible with older computer systems."
    },
    {
      word: "Competent",
      definition: "having the skill, knowledge, or ability to do something successfully",
      example: "She is a highly competent engineer with years of experience."
    },
    {
      word: "Compliant",
      definition: "obeying rules or willing to cooperate",
      example: "The company must remain compliant with environmental regulations."
    },
    {
      word: "Contemptible",
      definition: "deserving contempt or disgust; shameful",
      example: "His contemptible behavior toward his family shocked everyone."
    },
    {
      word: "Dependable",
      definition: "reliable and worthy of trust",
      example: "She is a dependable friend who always shows up when needed."
    },
    {
      word: "Despicable",
      definition: "extremely unpleasant; deserving hatred or contempt",
      example: "The despicable treatment of the refugees gained international condemnation."
    },
    {
      word: "Diligent",
      definition: "showing careful effort and attention to detail",
      example: "His diligent research led to groundbreaking discoveries."
    },
    {
      word: "Exuberant",
      definition: "enthusiastic and energetic",
      example: "The exuberant children laughed and played in the park."
    },
    {
      word: "Feasible",
      definition: "possible to do or achieve",
      example: "The project is feasible if we have enough funding."
    },
    {
      word: "Formidable",
      definition: "inspiring fear or respect through being very large or powerful",
      example: "She faced a formidable opponent in the chess tournament."
    },
    {
      word: "Gullible",
      definition: "easily deceived or tricked; believing things too readily",
      example: "The gullible teenager believed the online scam and lost money."
    },
    {
      word: "Inaudible",
      definition: "unable to be heard; too quiet to hear",
      example: "His whisper was inaudible to everyone in the crowded room."
    },
    {
      word: "Incompatible",
      definition: "unable to exist or work together harmoniously",
      example: "The two software programs are incompatible with each other."
    },
    {
      word: "Incompetent",
      definition: "lacking the skill or ability to do something properly",
      example: "The incompetent repair worker made the problem worse."
    },
    {
      word: "Intangible",
      definition: "unable to be touched or difficult to define precisely",
      example: "The intangible value of friendship cannot be measured in money."
    },
    {
      word: "Intolerable",
      definition: "unbearable; unacceptable",
      example: "The noise levels in the factory were intolerable for workers."
    },
    {
      word: "Invincible",
      definition: "unable to be defeated; unconquerable",
      example: "The team seemed invincible after winning 20 consecutive games."
    },
    {
      word: "Invisible",
      definition: "unable to be seen",
      example: "Germs are invisible to the naked eye but cause serious diseases."
    },
    {
      word: "Irrepressible",
      definition: "unable to be suppressed or restrained",
      example: "His irrepressible optimism inspired everyone around him."
    },
    {
      word: "Irresistible",
      definition: "too attractive or tempting to resist",
      example: "The chocolate cake was irresistible to the dessert lovers."
    },
    {
      word: "Malevolent",
      definition: "evil-intentioned; causing harm",
      example: "The malevolent character in the novel plotted revenge."
    },
    {
      word: "Negligent",
      definition: "failing to take proper care; careless",
      example: "The negligent doctor was sued for malpractice."
    },
    {
      word: "Obedient",
      definition: "willing to obey orders or rules",
      example: "The obedient dog followed every command from its owner."
    },
    {
      word: "Spontaneous",
      definition: "done or occurring suddenly without planning",
      example: "Their spontaneous road trip resulted in wonderful memories."
    },
    {
      word: "Phenomenon",
      definition: "a remarkable or interesting fact or event",
      example: "The meteor shower was a natural phenomenon studied by astronomers."
    },
    {
      word: "Palpable",
      definition: "able to be touched or felt; easily noticed",
      example: "The tension in the room was palpable as everyone waited for results."
    },
    {
      word: "Plausible",
      definition: "seeming reasonable or probable",
      example: "His explanation for being late was plausible."
    },
    {
      word: "Redundant",
      definition: "unnecessary because already said or done; superfluous",
      example: "Saying 'free gift' is redundant since gifts are free."
    },
    {
      word: "Sensational",
      definition: "causing great public interest and excitement",
      example: "The newspaper published a sensational story about the celebrity scandal."
    },
    {
      word: "Susceptible",
      definition: "easily affected or influenced; vulnerable",
      example: "Young children are susceptible to common colds."
    },
    {
      word: "Abhorrence",
      definition: "intense hatred or disgust",
      example: "She expressed her abhorrence of violence in all forms."
    },
    {
      word: "Aggravate",
      definition: "to make something worse; to annoy",
      example: "Eating spicy food tends to aggravate heartburn symptoms."
    },
    {
      word: "Annihilate",
      definition: "to destroy completely",
      example: "The meteor could annihilate all life on Earth."
    },
    {
      word: "Apparatus",
      definition: "equipment or machinery designed for a specific purpose",
      example: "The laboratory apparatus was expensive and delicate."
    },
    {
      word: "Assessment",
      definition: "a judgment or evaluation",
      example: "The teacher's assessment of the students' work was fair."
    },
    {
      word: "Camouflage",
      definition: "to conceal or disguise; protective coloring",
      example: "The soldier's camouflage uniform blended perfectly with the forest."
    },
    {
      word: "Colleague",
      definition: "a person with whom one works in a profession",
      example: "My colleague offered helpful advice on the project."
    },
    {
      word: "Commence",
      definition: "to begin or start",
      example: "The ceremony will commence at 10 o'clock sharp."
    },
    {
      word: "Commitment",
      definition: "a pledge or dedication to a cause",
      example: "His commitment to education changed many lives."
    },
    {
      word: "Conscience",
      definition: "inner sense of right and wrong; moral consciousness",
      example: "His conscience troubled him after telling the lie."
    },
    {
      word: "Conscientious",
      definition: "diligent and careful; showing integrity",
      example: "She was a conscientious student who never missed deadlines."
    },
    {
      word: "Delinquent",
      definition: "failing in duty; young offender",
      example: "The delinquent teenager was sent to reform school."
    },
    {
      word: "Dilemma",
      definition: "a situation requiring a difficult choice",
      example: "She faced a dilemma between her career and her family."
    },
    {
      word: "Disseminate",
      definition: "to spread widely; distribute information",
      example: "The organization works to disseminate health information."
    },
    {
      word: "Exaggerate",
      definition: "to represent as greater than it actually is",
      example: "He tends to exaggerate his accomplishments."
    },
    {
      word: "Illiterate",
      definition: "unable to read or write",
      example: "In developing countries, many people remain illiterate."
    },
    {
      word: "Immaculate",
      definition: "extremely clean; spotless; pure",
      example: "The hotel room was immaculate and smelled fresh."
    },
    {
      word: "Imminent",
      definition: "about to happen; impending",
      example: "With dark clouds overhead, rain seems imminent."
    },
    {
      word: "Inadvertent",
      definition: "unintentional; accidental",
      example: "His inadvertent comment hurt her feelings."
    },
    {
      word: "Irrelevant",
      definition: "not connected or applicable to something",
      example: "The old facts are irrelevant to this modern case."
    },
    {
      word: "Liaison",
      definition: "a connection or communication between groups",
      example: "She serves as liaison between the company and its clients."
    },
    {
      word: "Magnanimous",
      definition: "generous and forgiving; noble in spirit",
      example: "The magnanimous winner congratulated the opponent graciously."
    },
    {
      word: "Malicious",
      definition: "intending or intended to cause harm",
      example: "The malicious rumor spread quickly through the school."
    },
    {
      word: "Millennium",
      definition: "a period of 1,000 years",
      example: "We celebrated the new millennium on January 1, 2000."
    },
    {
      word: "Miscellaneous",
      definition: "consisting of various types; mixed",
      example: "The box contained miscellaneous items from the attic."
    },
    {
      word: "Mischievous",
      definition: "playfully annoying or naughty; causing minor trouble",
      example: "The mischievous children put salt in the sugar bowl."
    },
    {
      word: "Necessitate",
      definition: "to make necessary; to require as an essential condition",
      example: "The accident will necessitate extensive repairs to the vehicle."
    },
    {
      word: "Occurrence",
      definition: "an instance or event; something that happens",
      example: "Such accidents are a rare occurrence on this road."
    },
    {
      word: "Oscillate",
      definition: "to swing back and forth; to fluctuate",
      example: "The pendulum will oscillate continuously."
    },
    {
      word: "Parallel",
      definition: "alongside and at equal distance; similar",
      example: "The parallel lines will never meet."
    },
    {
      word: "Perennial",
      definition: "lasting throughout the year; recurring continually",
      example: "That perennial flower blooms every spring."
    },
    {
      word: "Possession",
      definition: "ownership; something owned",
      example: "The painting was his most prized possession."
    },
    {
      word: "Predecessor",
      definition: "the person who held a job before another",
      example: "The new manager was more organized than his predecessor."
    },
    {
      word: "Reminiscence",
      definition: "a recollection or memory",
      example: "The old photo brought back reminiscence of childhood."
    },
    {
      word: "Succumb",
      definition: "to give way; to yield to pressure or disease",
      example: "Many soldiers succumbed to disease during the war."
    },
    {
      word: "Vacillate",
      definition: "to waver between options; to hesitate",
      example: "She continued to vacillate between two job offers."
    },
    {
      word: "Vulnerable",
      definition: "easily hurt or damaged; open to attack",
      example: "The homeless population is vulnerable to harsh weather."
    },
    {
      word: "Whimsical",
      definition: "playfully quaint; acting on whim rather than reason",
      example: "The artist's whimsical paintings delighted viewers."
    },
    {
      word: "Ambidextrous",
      definition: "able to use both hands equally well",
      example: "The ambidextrous athlete could throw with either hand."
    },
    {
      word: "Auspicious",
      definition: "giving a good indication of future success; favorable",
      example: "The auspicious beginning of the year brought hope."
    },
    {
      word: "Boisterous",
      definition: "noisy, energetic, and cheerful",
      example: "The boisterous laughter filled the entire restaurant."
    },
    {
      word: "Capricious",
      definition: "prone to sudden changes of mood or behavior; unpredictable",
      example: "Her capricious nature made her unpredictable as a friend."
    },
    {
      word: "Contagious",
      definition: "able to spread from person to person; infectious",
      example: "The flu is highly contagious during winter months."
    },
    {
      word: "Courteous",
      definition: "polite and respectful",
      example: "The courteous staff made all customers feel welcome."
    },
    {
      word: "Deceitful",
      definition: "misleading or dishonest; involving deception",
      example: "His deceitful advertising claims resulted in a lawsuit."
    },
    {
      word: "Devious",
      definition: "dishonest and morally wrong; cunning",
      example: "He used devious tactics to win the competition."
    },
    {
      word: "Efficacious",
      definition: "successful in producing the desired result; effective",
      example: "The efficacious medicine cured the illness quickly."
    },
    {
      word: "Etiquette",
      definition: "the rules of polite and correct behavior",
      example: "Good etiquette requires saying 'please' and 'thank you'."
    },
    {
      word: "Fallacious",
      definition: "based on false reasoning; misleading",
      example: "The fallacious argument did not convince the jury."
    },
    {
      word: "Ferocious",
      definition: "savagely fierce or cruel; violent",
      example: "The ferocious tiger attacked the hunter."
    },
    {
      word: "Grievous",
      definition: "serious or severe; causing grief",
      example: "The grievous injury required immediate surgery."
    },
    {
      word: "Inauspicious",
      definition: "not giving a good indication of future success; unfavorable",
      example: "The inauspicious weather delayed the launch."
    },
    {
      word: "Judicious",
      definition: "showing good judgment; wise and careful",
      example: "His judicious decision saved the company from bankruptcy."
    },
    {
      word: "Luminous",
      definition: "giving off light; shining brightly",
      example: "The luminous moon lit up the night sky."
    },
    {
      word: "Manoeuvre",
      definition: "a skillful move or operation; a military movement",
      example: "The pilot performed an expert manoeuvre to land the plane."
    },
    {
      word: "Nauseous",
      definition: "feeling sick or wanting to vomit",
      example: "The boat's rocking motion made her nauseous."
    },
    {
      word: "Obsequious",
      definition: "obedient to excess; servile and fawning",
      example: "His obsequious behavior toward the boss was obvious."
    },
    {
      word: "Ominous",
      definition: "suggesting something bad will happen; threatening",
      example: "The ominous dark clouds suggested a storm was coming."
    },
    {
      word: "Simultaneous",
      definition: "happening at exactly the same time",
      example: "The two events occurred simultaneously."
    },
    {
      word: "Surreptitious",
      definition: "done secretly or stealthily",
      example: "He took a surreptitious glance at the exam answers."
    },
    {
      word: "Tenacious",
      definition: "holding firmly; persistent and determined",
      example: "Her tenacious effort led to success."
    },
    {
      word: "Tenant",
      definition: "a person who rents a property from a landlord",
      example: "The tenant paid the rent on time every month."
    },
    {
      word: "Vehicle",
      definition: "a machine for transporting people or goods",
      example: "Cars are the most common vehicle for transportation."
    },
    {
      word: "Venomous",
      definition: "containing poison; spiteful",
      example: "The venomous snake posed a danger to hikers."
    },
    {
      word: "Adversary",
      definition: "an opponent or enemy",
      example: "His rival became his greatest adversary in business."
    },
    {
      word: "Anniversary",
      definition: "the date on which an event happened in a previous year",
      example: "They celebrated their 25th wedding anniversary."
    },
    {
      word: "Alleviate",
      definition: "to make something less severe or serious",
      example: "The medication helps alleviate the pain."
    },
    {
      word: "Ambiguity",
      definition: "the quality of being unclear; having more than one interpretation",
      example: "The ambiguity in his statement confused everyone."
    },
    {
      word: "Ameliorate",
      definition: "to make something better; to improve",
      example: "New policies will ameliorate working conditions."
    },
    {
      word: "Apathy",
      definition: "lack of interest or concern; indifference",
      example: "The public's apathy toward the election was concerning."
    },
    {
      word: "Apprehension",
      definition: "anxiety or fear; the act of arresting",
      example: "She felt apprehension before the job interview."
    },
    {
      word: "Arduous",
      definition: "difficult and requiring great effort",
      example: "Climbing the mountain was an arduous task."
    },
    {
      word: "Ascertain",
      definition: "to find out or establish the truth",
      example: "The detective worked to ascertain the facts."
    },
    {
      word: "Aspiration",
      definition: "a hope or desire to achieve something",
      example: "His aspiration was to become a doctor."
    },
    {
      word: "Audacity",
      definition: "boldness or daring; disrespectful boldness",
      example: "She had the audacity to question the boss."
    },
    {
      word: "Augment",
      definition: "to increase or make larger",
      example: "We will augment our team with new staff."
    },
    {
      word: "Austerity",
      definition: "severe simplicity and lack of luxury; strict discipline",
      example: "The government imposed austerity measures during the recession."
    },
    {
      word: "Belligerence",
      definition: "aggressive or warlike attitude; hostility",
      example: "The belligerence between nations threatened war."
    },
    {
      word: "Chronology",
      definition: "the arrangement of events in time order",
      example: "The chronology of events in history is important to understand."
    },
    {
      word: "Collaborate",
      definition: "to work together toward a common goal",
      example: "The two artists decided to collaborate on a project."
    },
    {
      word: "Cognizance",
      definition: "awareness or knowledge of something",
      example: "The judge took cognizance of the new evidence."
    },
    {
      word: "Condescend",
      definition: "to behave in a way that shows superior attitude; to lower oneself",
      example: "She refused to condescend to his level."
    },
    {
      word: "Contemplate",
      definition: "to think deeply about something; to consider",
      example: "He sat quietly to contemplate his future."
    },
    {
      word: "Deference",
      definition: "respectful and polite behavior; respect",
      example: "She showed deference to her elders."
    },
    {
      word: "Denounce",
      definition: "to declare someone or something to be wrong or evil publicly",
      example: "The activist denounced the unjust law."
    },
    {
      word: "Despondency",
      definition: "a state of depression or low spirits",
      example: "The despondency in his voice revealed his sadness."
    },
    {
      word: "Deviation",
      definition: "a departure from an accepted standard or route",
      example: "Any deviation from the plan must be approved first."
    },
    {
      word: "Eloquence",
      definition: "fluent and persuasive speaking; expressiveness",
      example: "Her eloquence during the speech impressed the audience."
    },
    {
      word: "Empathy",
      definition: "the ability to understand and share others' feelings",
      example: "His empathy made him a good counselor."
    },
    {
      word: "Emulate",
      definition: "to imitate or try to match; to strive to equal",
      example: "Young athletes often emulate their favorite players."
    },
    {
      word: "Ephemeral",
      definition: "lasting a very short time; temporary",
      example: "The beauty of cherry blossoms is ephemeral."
    },
    {
      word: "Equivocate",
      definition: "to avoid committing oneself; to use ambiguous language",
      example: "The politician tried to equivocate on the issue."
    },
    {
      word: "Exasperate",
      definition: "to irritate intensely; to annoy greatly",
      example: "Her constant complaining began to exasperate him."
    },
    {
      word: "Fabricate",
      definition: "to invent falsely; to make something",
      example: "He decided to fabricate an excuse for his absence."
    },
    {
      word: "Haughty",
      definition: "arrogantly superior and disdainful",
      example: "Her haughty attitude made her unpopular."
    },
    {
      word: "Impediment",
      definition: "a hindrance or obstruction; a speech defect",
      example: "The language barrier was an impediment to communication."
    },
    {
      word: "Indifference",
      definition: "lack of interest or concern; apathy",
      example: "His indifference toward the problem was alarming."
    },
    {
      word: "Indignation",
      definition: "anger aroused by something felt to be unjust",
      example: "Her indignation at the unfair decision was clear."
    },
    {
      word: "Inference",
      definition: "a conclusion drawn from evidence and reasoning",
      example: "Based on the clues, the inference was that he was guilty."
    },
    {
      word: "Ingenuity",
      definition: "cleverness and original thinking; skill",
      example: "The engineer's ingenuity solved the difficult problem."
    },
    {
      word: "Insolence",
      definition: "rude and disrespectful behavior; impudence",
      example: "His insolence toward the teacher resulted in detention."
    },
    {
      word: "Instigate",
      definition: "to cause or trigger something; to incite",
      example: "He tried to instigate a fight between the rivals."
    },
    {
      word: "Integrity",
      definition: "moral principles; honesty and truthfulness",
      example: "The leader's integrity earned the people's trust."
    },
    {
      word: "Intimidation",
      definition: "the action of intimidating someone; bullying",
      example: "The intimidation tactics frightened the witnesses."
    },
    {
      word: "Intuition",
      definition: "the ability to understand something instantly without reasoning",
      example: "Her intuition told her something was wrong."
    },
    {
      word: "Jovial",
      definition: "cheerful and friendly; jolly",
      example: "His jovial personality made him popular at parties."
    },
    {
      word: "Lucid",
      definition: "clear and easy to understand; mentally clear",
      example: "Her lucid explanation helped everyone understand."
    },
    {
      word: "Melancholy",
      definition: "a feeling of pensive sadness; gloomy",
      example: "The melancholy music reflected his sad mood."
    },
    {
      word: "Metamorphosis",
      definition: "a complete transformation; change in form",
      example: "The metamorphosis from caterpillar to butterfly is remarkable."
    },
    {
      word: "Mitigate",
      definition: "to make something less severe or serious",
      example: "Exercise can mitigate the effects of stress."
    },
    {
      word: "Monopolise",
      definition: "to have exclusive control or possession",
      example: "She tried to monopolise his attention."
    },
    {
      word: "Nostalgia",
      definition: "sentimental longing for the past",
      example: "She felt nostalgia when visiting her childhood home."
    },
    {
      word: "Obliterate",
      definition: "to destroy completely; to wipe out",
      example: "The bomb could obliterate the entire building."
    },
    {
      word: "Obstinate",
      definition: "stubbornly refusing to change opinion; persistent",
      example: "His obstinate refusal to listen frustrated everyone."
    },
    {
      word: "Perception",
      definition: "the way something is understood or interpreted; awareness",
      example: "Her perception of the situation was different from his."
    },
    {
      word: "Perseverance",
      definition: "persistence in doing something despite difficulty",
      example: "His perseverance in training paid off with Olympic gold."
    },
    {
      word: "Pertinent",
      definition: "relevant and appropriate; relating to the subject",
      example: "Her comment was pertinent to the discussion."
    },
    {
      word: "Pervasive",
      definition: "spreading widely throughout an area or group",
      example: "The pervasive smell of smoke filled the building."
    },
    {
      word: "Placid",
      definition: "calm and peaceful; not easily disturbed",
      example: "The placid lake reflected the mountains."
    },
    {
      word: "Pragmatic",
      definition: "dealing with things in a practical, realistic way",
      example: "Her pragmatic approach solved the problem efficiently."
    },
    {
      word: "Precarious",
      definition: "uncertain and likely to be dangerous; unstable",
      example: "His financial situation was precarious."
    },
    {
      word: "Prejudice",
      definition: "an unfair feeling or opinion formed without knowledge; bias",
      example: "Prejudice against certain groups is unjust."
    },
    {
      word: "Procrastinate",
      definition: "to delay or postpone something; to put off",
      example: "Students often procrastinate before exams."
    },
    {
      word: "Profound",
      definition: "very deep; showing great knowledge or understanding",
      example: "The professor made a profound observation."
    },
    {
      word: "Prudence",
      definition: "the quality of being careful and sensible; wisdom",
      example: "She showed prudence in managing her finances."
    },
    {
      word: "Rancour",
      definition: "bitterness and resentment; deep-seated anger",
      example: "The rancour between the rivals lasted for years."
    },
    {
      word: "Reconcile",
      definition: "to restore friendly relations; to make compatible",
      example: "The mediator helped reconcile the feuding families."
    },
    {
      word: "Redundancy",
      definition: "the state of being unnecessary or superfluous; job loss",
      example: "The redundancy in the text made it unclear."
    },
    {
      word: "Reiterate",
      definition: "to say something again; to repeat",
      example: "The teacher had to reiterate the instructions."
    },
    {
      word: "Reluctance",
      definition: "unwillingness or disinclination; hesitancy",
      example: "She showed reluctance to participate in the activity."
    },
    {
      word: "Reprehensible",
      definition: "deserving strong disapproval; blameworthy",
      example: "His reprehensible behavior shocked the community."
    },
    {
      word: "Reputation",
      definition: "the general opinion about someone's character",
      example: "He earned a reputation as a hard worker."
    },
    {
      word: "Resignation",
      definition: "acceptance of something unwelcome; formal withdrawal",
      example: "His resignation from the company surprised everyone."
    },
    {
      word: "Retribution",
      definition: "punishment inflicted for a wrong; revenge",
      example: "He sought retribution for the harm done to him."
    },
    {
      word: "Reverence",
      definition: "deep respect and admiration; awe",
      example: "The reverence for the religious leader was evident."
    },
    {
      word: "Sanction",
      definition: "approval or permission; a penalty or punishment",
      example: "The government imposed economic sanctions on the country."
    },
    {
      word: "Scrutinise",
      definition: "to examine closely and carefully",
      example: "The auditor will scrutinise the financial records."
    },
    {
      word: "Serenity",
      definition: "the state of being calm and peaceful",
      example: "The serenity of the garden provided a place to relax."
    },
    {
      word: "Speculation",
      definition: "forming opinions without facts; investment in risky ventures",
      example: "The speculation about his departure was widespread."
    },
    {
      word: "Subsequent",
      definition: "coming or occurring after something else",
      example: "In subsequent meetings, progress was made."
    },
    {
      word: "Superfluous",
      definition: "unnecessary or more than needed; excessive",
      example: "The superfluous details made the report too long."
    },
    {
      word: "Trivial",
      definition: "of little importance or value; minor",
      example: "Don't worry about such trivial matters."
    },
    {
      word: "Turbulence",
      definition: "violent or unsteady movement; disorder",
      example: "The turbulence during the flight made passengers nervous."
    },
    {
      word: "Unprecedented",
      definition: "never done or known before; novel",
      example: "The pandemic caused unprecedented global disruption."
    },
    {
      word: "Validation",
      definition: "confirmation or proof; official approval",
      example: "The research needs validation from other scientists."
    },
    {
      word: "Venerable",
      definition: "worthy of respect due to age or dignity; respected",
      example: "The venerable professor retired after 40 years."
    },
    {
      word: "Vindicate",
      definition: "to prove or justify; to clear from blame",
      example: "The evidence will vindicate his innocence."
    },
    {
      word: "Affect",
      definition: "to influence or change; emotion or feeling (noun)",
      example: "The weather can affect your mood."
    },
    {
      word: "Effect",
      definition: "a change produced by an action; a result",
      example: "The medication has a strong effect on pain."
    },
    {
      word: "Ascent",
      definition: "a climb or upward movement; rise",
      example: "The ascent of the mountain took eight hours."
    },
    {
      word: "Assent",
      definition: "agreement or approval",
      example: "The king gave his assent to the new law."
    },
    {
      word: "Complement",
      definition: "something that completes; to enhance or go well with",
      example: "The wine complement the meal perfectly."
    },
    {
      word: "Compliment",
      definition: "a polite expression of praise",
      example: "She received many compliments on her presentation."
    },
    {
      word: "Council",
      definition: "a body of people appointed for a function",
      example: "The city council met to discuss the budget."
    },
    {
      word: "Counsel",
      definition: "a lawyer; advice or guidance",
      example: "The lawyer served as counsel in the trial."
    },
    {
      word: "Difference",
      definition: "the way in which things are not the same; disagreement",
      example: "There is a big difference between the two options."
    },
    {
      word: "Discrete",
      definition: "separate and distinct; not continuous",
      example: "The data was divided into discrete categories."
    },
    {
      word: "Discreet",
      definition: "careful not to attract attention; tactful and unobtrusive",
      example: "She gave him a discreet nod from across the room."
    },
    {
      word: "Elicit",
      definition: "to draw out or evoke a response or information",
      example: "The question will elicit different opinions."
    },
    {
      word: "Illicit",
      definition: "forbidden by law or rules; illegal",
      example: "The illicit drugs were confiscated by police."
    },
    {
      word: "Eminent",
      definition: "famous, respected, and important",
      example: "The eminent scientist won the Nobel Prize."
    },
    {
      word: "Emigrate",
      definition: "to leave one's country to live in another",
      example: "Many families emigrated from Ireland to America."
    },
    {
      word: "Immigrate",
      definition: "to come to a country to live permanently",
      example: "Millions immigrate to the United States each year."
    },
    {
      word: "Envelop",
      definition: "to wrap up or cover completely",
      example: "Darkness will envelop the city at sunset."
    },
    {
      word: "Envelope",
      definition: "a paper container for mail; a covering",
      example: "Put the letter in an envelope before mailing."
    },
    {
      word: "Except",
      definition: "to exclude; other than",
      example: "Everyone came except John."
    },
    {
      word: "Accept",
      definition: "to receive willingly; to agree to",
      example: "She will accept the job offer."
    },
    {
      word: "Hoard",
      definition: "to collect and store things; a stockpile",
      example: "Squirrels hoard nuts for winter."
    },
    {
      word: "Insight",
      definition: "a deep understanding of a situation",
      example: "Her insight into human nature was valuable."
    },
    {
      word: "Incite",
      definition: "to provoke or encourage someone to act",
      example: "The speech will incite the crowd."
    },
    {
      word: "Principal",
      definition: "first in order or importance; head of a school",
      example: "The principal arrived at the school early."
    },
    {
      word: "Principle",
      definition: "a fundamental rule or belief",
      example: "He stood firm on his moral principles."
    },
    {
      word: "Stationary",
      definition: "not moving; staying in one place",
      example: "The car remains stationary in the garage."
    },
    {
      word: "Stationery",
      definition: "writing materials like paper and envelopes",
      example: "I bought stationery from the office supply store."
    },
    {
      word: "Proceed",
      definition: "to continue; to move forward",
      example: "We will proceed with the plan as scheduled."
    },
    {
      word: "Precede",
      definition: "to come or go before something else",
      example: "Dinner will precede the movie."
    },
    {
      word: "Wary",
      definition: "cautious and careful; suspicious",
      example: "She was wary of strangers."
    },
    {
      word: "Weary",
      definition: "tired; exhausted",
      example: "After the long journey, he felt weary."
    }
  ];

// Helper function to shuffle options
const getRandomOptions = (currentIndex, data) => {
  const currentItem = data[currentIndex];
  const incorrectOptions = data
    .filter((_, idx) => idx !== currentIndex)
    .map(item => item.word);
  
  const shuffledIncorrect = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
  const allOptions = [...shuffledIncorrect, currentItem.word].sort(() => 0.5 - Math.random());
  return allOptions;
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Track global counts
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  
  // Track answer states per question index
  // stores: { [index]: { selectedOptions: string[], isCorrect: boolean } }
  const [userAnswers, setUserAnswers] = useState({}); 
  
  // Cache options per question so they don't reshuffle when using back/next buttons
  const [questionOptions, setQuestionOptions] = useState({
    0: getRandomOptions(0, questionsData)
  });

  const currentQuestion = questionsData[currentIndex];
  const currentAnswerState = userAnswers[currentIndex] || { selectedOptions: [], isCorrect: false };
  const currentOptions = questionOptions[currentIndex] || getRandomOptions(currentIndex, questionsData);

  const handleSelectOption = (selectedWord) => {
    // If already answered correctly, lock interaction
    if (currentAnswerState.isCorrect) return;

    const isCorrect = selectedWord === currentQuestion.word;
    const previouslySelected = currentAnswerState.selectedOptions;

    // Only increment wrong count if this specific wrong button hasn't been clicked yet for this question
    if (!isCorrect && !previouslySelected.includes(selectedWord)) {
      setScore(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    // If it's newly correct, increment correct count
    if (isCorrect && !currentAnswerState.isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    }

    const updatedSelectedOptions = [...new Set([...previouslySelected, selectedWord])];

    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        selectedOptions: updatedSelectedOptions,
        isCorrect: isCorrect || currentAnswerState.isCorrect
      }
    }));
  };

  const handleNext = () => {
    if (currentIndex < questionsData.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      
      // Generate options for next question if not already cached
      if (!questionOptions[nextIdx]) {
        setQuestionOptions(prev => ({
          ...prev,
          [nextIdx]: getRandomOptions(nextIdx, questionsData)
        }));
      }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isCompleted = currentIndex === questionsData.length - 1 && currentAnswerState.isCorrect;

  return (
    <div className="app-container">
      {/* Top Score Bar */}
      <header className="score-header">
        <div className="score-badge correct">✅ Correct: {score.correct}</div>
        <div className="score-badge wrong">❌ Wrong: {score.wrong}</div>
      </header>

      <main className="card">
        <div className="progress-indicator">
          Question {currentIndex + 1} of {questionsData.length}
        </div>

        {/* Meaning sentence prompt */}
        <h2 className="definition-title">What word matches this definition?</h2>
        <p className="definition-text">"{currentQuestion.definition}"</p>

        {/* Options Buttons */}
        <div className="options-grid">
          {currentOptions.map((optionWord, idx) => {
            let btnClass = "option-btn";
            const isSelected = currentAnswerState.selectedOptions.includes(optionWord);

            if (currentAnswerState.isCorrect && optionWord === currentQuestion.word) {
              btnClass += " correct-highlight"; // Only highlight correct once solved
            } else if (isSelected) {
              btnClass += " wrong-highlight"; // Highlights user's wrong guess in red
            }

            return (
              <button
                key={idx}
                className={btnClass}
                onClick={() => handleSelectOption(optionWord)}
              >
                {optionWord}
              </button>
            );
          })}
        </div>

        {/* Error Feedback & Example Sentence */}
        {currentAnswerState.selectedOptions.length > 0 && !currentAnswerState.isCorrect && (
          <div className="error-box">
            <p className="oops-text">⚠️ Oops! That's incorrect.</p>
            <p className="hint-label">Read this example sentence to guess the right word:</p>
            <p className="example-text">"{currentQuestion.example}"</p>
          </div>
        )}

        {currentAnswerState.isCorrect && (
          <div className="success-box">
            <p>🎉 Spot on! Great job.</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button 
            className="nav-btn" 
            onClick={handleBack} 
            disabled={currentIndex === 0}
          >
            ⬅️ Back
          </button>

          <button 
            className="nav-btn primary" 
            onClick={handleNext} 
            disabled={!currentAnswerState.isCorrect || currentIndex === questionsData.length - 1}
          >
            Next ➡️
          </button>
        </div>

        {isCompleted && (
          <div className="completion-banner">
            <h2>🏆 Amazing! You completed all vocabulary challenges!</h2>
          </div>
        )}
      </main>
    </div>
  );
}