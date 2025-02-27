import { expectType, TypeOf } from 'ts-expect';
import chroma from 'chroma-js';
import { Listing } from '../components/Providers/FerryProvider';

// Phrases for search speed [50 character limit]
export const searchSpeed = {
  fast: [
    'fast',
    'kinda fast',
    'not too slow',
    'you try loading this many courses',
    'not not not fast',
    'faster than Handsome Dan',
  ],
  faster: [
    'faster',
    'really fast',
    'blazing fast',
    'faster than Zoom',
    'not not fast',
  ],
  fastest: [
    'fastest',
    'wicked fast',
    'faster than Usain',
    'faster than Yale One-Day-Breaks',
    'faster than drivers on Elm St',
    'faster than the speed of light',
    'faster than seniors when they see a gut',
    'faster than Higgins on paintball',
    'faster than YPopUp getting reserved',
    "faster than durfee's tenders selling out",
    'faster than sonic the hedgehog',
    'faster than an art-stem double major drops art',
    'faster than switching your major to CS',
    'faster than you can sell out to consulting',
  ],
};

export const sortbyOptions = [
  { label: 'Sort by Course Code', value: 'course_code', numeric: false },
  { label: 'Sort by Course Number', value: 'number', numeric: true },
  { label: 'Sort by Course Title', value: 'title', numeric: false },
  { label: 'Sort by Facebook Friends', value: 'fb', numeric: true },
  { label: 'Sort by Course Rating', value: 'average_rating', numeric: true },
  {
    label: 'Sort by Professor Rating',
    value: 'average_professor',
    numeric: true,
  },
  { label: 'Sort by Workload', value: 'average_workload', numeric: true },
  {
    label: 'Sort by Guts (Overall - Workload)',
    value: 'average_gut_rating',
    numeric: true,
  },
  { label: 'Sort by Last Enrollment', value: 'last_enrollment', numeric: true },
  { label: 'Sort by Days & Times', value: 'times_by_day', numeric: true },
] as const;

// Make sure we can only sort by keys in the listing, or by facebook.
export type SortKeys = keyof Listing | 'fb';
const _number = 0;
const _sortKeys = sortbyOptions[_number].value;
expectType<TypeOf<SortKeys, typeof _sortKeys>>(true);
export type SortByOption = typeof sortbyOptions[number];

export const areas = ['Hu', 'So', 'Sc'] as const;
export const skills = ['QR', 'WR', 'L1', 'L2', 'L3', 'L4', 'L5'] as const;
export type AreasType = typeof areas[number];
export type SkillsType = typeof skills[number];

export const skillsAreasColors: { [key: string]: string } = {
  Hu: '#9970AB',
  So: '#4393C3',
  Sc: '#5AAE61',
  QR: '#CC3311',
  WR: '#EC7014',
  L: '#000000',
  L1: '#888888',
  L2: '#888888',
  L3: '#888888',
  L4: '#888888',
  L5: '#888888',
};

export const skillsAreasOptions = [
  {
    label: 'Areas',
    options: [
      {
        label: 'Hu - Humanities & Arts',
        value: 'Hu',
        color: skillsAreasColors.Hu,
      },
      {
        label: 'So - Social Sciences',
        value: 'So',
        color: skillsAreasColors.So,
      },
      { label: 'Sc - Sciences', value: 'Sc', color: skillsAreasColors.Sc },
    ],
  },
  {
    label: 'Skills',
    options: [
      {
        label: 'QR - Quantitative Reasoning',
        value: 'QR',
        color: skillsAreasColors.QR,
      },
      { label: 'WR - Writing', value: 'WR', color: skillsAreasColors.WR },
      { label: 'L - All Language', value: 'L', color: skillsAreasColors.L },
      {
        label: 'L1 - Language Level 1',
        value: 'L1',
        color: skillsAreasColors.L1,
      },
      {
        label: 'L2 - Language Level 2',
        value: 'L2',
        color: skillsAreasColors.L2,
      },
      {
        label: 'L3 - Language Level 3',
        value: 'L3',
        color: skillsAreasColors.L3,
      },
      {
        label: 'L4 - Language Level 4',
        value: 'L4',
        color: skillsAreasColors.L4,
      },
      {
        label: 'L5 - Language Level 5',
        value: 'L5',
        color: skillsAreasColors.L5,
      },
    ],
  },
] as const;

export const ratingColormap = chroma
  .scale(['#f8696b', '#ffeb84', '#63b37b'])
  .domain([1, 5]);
export const workloadColormap = chroma
  .scale(['#63b37b', '#ffeb84', '#f8696b'])
  .domain([1, 5]);

// Maybe the number type is causing the error? (but it works fine on navbar search hmmm)
export const creditOptions = [
  { label: '0.5', value: 0.5 },
  { label: '1', value: 1 },
  { label: '1.5', value: 1.5 },
  { label: '2', value: 2 },
] as const;

export const dayOptions = [
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
] as const;

// to get a list of abbreviations, run
// a distinct_on:school query over computed_course_info

// school labels were filled in manually
export const schoolOptions = [
  { label: 'Yale College', value: 'YC' },
  { label: 'School of Architecture', value: 'AC' },
  { label: 'School of Fine Arts', value: 'AT' },
  { label: 'Graduate School of Arts and Sciences', value: 'GS' },
  { label: 'Divinity School', value: 'DI' },
  { label: 'School of Drama', value: 'DR' },
  { label: 'School of the Environment', value: 'FS' },
  { label: 'Law School', value: 'LW' },
  { label: 'School of Medicine', value: 'MD' },
  { label: 'School of Management', value: 'MG' },
  { label: 'School of Music', value: 'MU' },
  { label: 'School of Nursing', value: 'NR' },
  { label: 'Physician Associate Program', value: 'PA' },
  { label: 'School of Public Health', value: 'PH' },
  { label: 'Summer Session', value: 'SU' },
] as const;

export const questions = [
  'assessment',
  'workload',
  'major',
  'engagement',
  'organized',
  'feedback',
  'challenge',
] as const;
export const question_text = {
  assessment: 'What is your overall assessment of this course?',
  workload:
    'Relative to other courses you have taken at Yale, the workload of this course was:',
  major:
    'Do you expect to use this class for credit toward your major, or toward a pre-professional program?',
  engagement: 'Your level of engagement with the course was:',
  organized: 'The course was well organized to facilitate student learning.',
  feedback: 'I received clear feedback that improved my learning.',
  challenge:
    'Relative to other courses you have taken at Yale, the level of intellectual challenge of this course was:',
} as const;
export const graph_labels = {
  assessment: ['poor', 'fair', 'good', 'very good', 'excellent'],
  workload: ['much less', 'less', 'same', 'greater', 'much greater'],
  engagement: ['very low', 'low', 'medium', 'high', 'very high'],
  organized: [
    'strongly disagree',
    'disagree',
    'neutral',
    'agree',
    'strongly agree',
  ],
  feedback: [
    'strongly disagree',
    'disagree',
    'neutral',
    'agree',
    'strongly agree',
  ],
  challenge: ['much less', 'less', 'same', 'greater', 'much greater'],
  major: [],
} as const;
export const graph_titles = {
  assessment: 'Overall',
  workload: 'Workload',
  engagement: 'Engagement',
  organized: 'Organization',
  feedback: 'Feedback Clarity',
  challenge: 'Intellectual Challenge',
  major: 'Taking for Major?',
} as const;

export const subjectOptions = [
  { value: 'ACCT', label: 'ACCT - Accounting' },
  { value: 'ADSC', label: 'ADSC - Administrative Sciences' },
  { value: 'AFAM', label: 'AFAM - African American Studies' },
  { value: 'AFAS', label: 'AFAS - African & African-Amer Studies' },
  { value: 'AFKN', label: 'AFKN - Afrikaans' },
  { value: 'AFST', label: 'AFST - African Studies' },
  { value: 'AKKD', label: 'AKKD - Akkadian' },
  { value: 'AMST', label: 'AMST - American Studies' },
  { value: 'AMTH', label: 'AMTH - Applied Mathematics' },
  { value: 'ANES', label: 'ANES - Anesthesiology' },
  { value: 'ANTH', label: 'ANTH - Anthropology' },
  { value: 'APHY', label: 'APHY - Applied Physics' },
  { value: 'ARBC', label: 'ARBC - Arabic' },
  { value: 'ARCG', label: 'ARCG - Archaeological Studies' },
  { value: 'ARCH', label: 'ARCH - Architecture' },
  { value: 'ARMN', label: 'ARMN - Armenian' },
  { value: 'ART', label: 'ART - Art' },
  { value: 'ASL', label: 'ASL - American Sign Language' },
  { value: 'ASTR', label: 'ASTR - Astronomy' },
  { value: 'B&BS', label: 'B&BS - Biological & Biomedical Sci' },
  { value: 'BENG', label: 'BENG - Biomedical Engineering' },
  { value: 'BIOL', label: 'BIOL - Biology' },
  { value: 'BIS', label: 'BIS - Biostatistics' },
  { value: 'BME', label: 'BME - Biomedical Engineering' },
  { value: 'BNGL', label: 'BNGL - Bengali' },
  { value: 'BRST', label: 'BRST - British Studies' },
  { value: 'BURM', label: 'BURM - Burmese' },
  { value: 'C&MP', label: 'C&MP - Cell & Molecular Physiology' },
  { value: 'CAND', label: 'CAND - Prep for Adv to Candidacy' },
  { value: 'CB&B', label: 'CB&B - Comp Biol & Bioinfomatics' },
  { value: 'CBIO', label: 'CBIO - Cell Biology' },
  { value: 'CDE', label: 'CDE - Chronic Disease Epidemiology' },
  { value: 'CENG', label: 'CENG - Chemical Engineering' },
  { value: 'CGSC', label: 'CGSC - Cognitive Science' },
  { value: 'CHEM', label: 'CHEM - Chemistry' },
  { value: 'CHLD', label: 'CHLD - Child Study' },
  { value: 'CHNS', label: 'CHNS - Chinese' },
  { value: 'CLCV', label: 'CLCV - Classical Civilization' },
  { value: 'CLSS', label: 'CLSS - Classics' },
  { value: 'CPAR', label: 'CPAR - Computing and the Arts' },
  { value: 'CPLT', label: 'CPLT - Comparative Literature' },
  { value: 'CPMD', label: 'CPMD - Comparative Medicine' },
  { value: 'CPSC', label: 'CPSC - Computer Science' },
  { value: 'CPTC', label: 'CPTC - Coptic' },
  { value: 'CSBF', label: 'CSBF - Coll Sem:Ben Franklin Coll' },
  { value: 'CSBK', label: 'CSBK - Coll Sem:Berkeley Coll' },
  { value: 'CSBR', label: 'CSBR - Coll Sem:Branford Coll' },
  { value: 'CSCC', label: 'CSCC - Coll Sem:Calhoun Coll' },
  { value: 'CSDC', label: 'CSDC - Coll Sem:Davenport Coll' },
  { value: 'CSEC', label: 'CSEC - Computer Science and Economics' },
  { value: 'CSES', label: 'CSES - Coll Sem:Ezra Stiles Coll' },
  { value: 'CSGH', label: 'CSGH - Coll Sem:Grace Hopper Coll' },
  { value: 'CSJE', label: 'CSJE - Coll Sem:Jonathan Edwards Coll' },
  { value: 'CSMC', label: 'CSMC - Coll Sem:Morse Coll' },
  { value: 'CSMY', label: 'CSMY - Coll Sem:Pauli Murray Coll' },
  { value: 'CSPC', label: 'CSPC - Coll Sem:Pierson Coll' },
  { value: 'CSSM', label: 'CSSM - Coll Sem:Silliman Coll' },
  { value: 'CSSY', label: 'CSSY - Coll Sem:Saybrook Coll' },
  { value: 'CSTC', label: 'CSTC - Coll Sem:Trumbull Coll' },
  { value: 'CSTD', label: 'CSTD - Coll Sem:Timothy Dwight Coll' },
  { value: 'CSYC', label: 'CSYC - Coll Sem: Yale Coll' },
  { value: 'CTLN', label: 'CTLN - Catalan' },
  { value: 'CZEC', label: 'CZEC - Czech' },
  { value: 'DERM', label: 'DERM - Dermatology' },
  { value: 'DEVN', label: 'DEVN - The DeVane Lecture Course' },
  { value: 'DIAG', label: 'DIAG - Diagnostic Radiology' },
  { value: 'DIR', label: 'DIR - DIrecting' },
  { value: 'DISA', label: 'DISA - Diss Research' },
  { value: 'DISR', label: 'DISR - Diss Research' },
  { value: 'DRAM', label: 'DRAM - Drama' },
  { value: 'DRST', label: 'DRST - Directed Studies' },
  { value: 'DUTC', label: 'DUTC - Dutch' },
  { value: 'E&EB', label: 'E&EB - Ecology & Evolutionary Biology' },
  { value: 'E&RS', label: 'E&RS - European & Russian Studies' },
  { value: 'EALL', label: 'EALL - East Asian Lang and Lit' },
  { value: 'EAST', label: 'EAST - East Asian Studies' },
  { value: 'ECON', label: 'ECON - Economics' },
  { value: 'EDST', label: 'EDST - Education Studies' },
  { value: 'EECS', label: 'EECS - Elec Eng & Comp Sci' },
  { value: 'EENG', label: 'EENG - Electrical Engineering' },
  { value: 'EGYP', label: 'EGYP - Egyptology' },
  { value: 'EHS', label: 'EHS - Environmental Health Sciences' },
  { value: 'EID', label: 'EID - Epidemiology Infectious Diseas' },
  { value: 'ELP', label: 'ELP - English Language Program' },
  { value: 'EMD', label: 'EMD - Epidemiology Microbial Disease' },
  { value: 'ENAS', label: 'ENAS - Engineering & Applied Science' },
  { value: 'ENGL', label: 'ENGL - English' },
  { value: 'ENHS', label: 'ENHS - Environmental Health Sciences' },
  { value: 'ENRG', label: 'ENRG - Energy Studies' },
  { value: 'ENV', label: 'ENV - Environment' },
  { value: 'ENVE', label: 'ENVE - Environmental Engineering' },
  { value: 'EP&E', label: 'EP&E - Ethics, Politics, & Economics' },
  { value: 'EPH', label: 'EPH - Epidemiology & Public Health' },
  { value: 'EPS', label: 'EPS - Earth and Planetary Sciences' },
  { value: 'ER&M', label: 'ER&M - Ethnicity, Race, & Migration' },
  { value: 'EVST', label: 'EVST - Environmental Studies' },
  { value: 'EXPA', label: 'EXPA - Experimental Pathology' },
  { value: 'F&ES', label: 'F&ES - Forestry & Environment Studies' },
  { value: 'FILM', label: 'FILM - Film & Media Studies' },
  { value: 'FNSH', label: 'FNSH - Finnish' },
  { value: 'FREN', label: 'FREN - French' },
  { value: 'G&G', label: 'G&G - Geology and Geophysics' },
  { value: 'GENE', label: 'GENE - Genetics' },
  { value: 'GHD', label: 'GHD - Global Health' },
  { value: 'GLBL', label: 'GLBL - Global Affairs' },
  { value: 'GMAN', label: 'GMAN - German' },
  { value: 'GMIC', label: 'GMIC - Germanic' },
  { value: 'GMST', label: 'GMST - German Studies' },
  { value: 'GRAN', label: 'GRAN - Gross Anatomy' },
  { value: 'GREK', label: 'GREK - Ancient Greek' },
  { value: 'GSAS', label: 'GSAS - Graduate School' },
  { value: 'HAUS', label: 'HAUS - Hausa' },
  { value: 'HEBR', label: 'HEBR - Modern Hebrew' },
  { value: 'HGRN', label: 'HGRN - Hungarian' },
  { value: 'HIST', label: 'HIST - History' },
  { value: 'HLTH', label: 'HLTH - Health Studies' },
  { value: 'HM&S', label: 'HM&S - History of Medicine & Science' },
  { value: 'HMRT', label: 'HMRT - Human Rights' },
  { value: 'HNDI', label: 'HNDI - Hindi' },
  { value: 'HPA', label: 'HPA - Health Policy Administration' },
  { value: 'HPM', label: 'HPM - Health Policy and Management' },
  { value: 'HPR', label: 'HPR - Health Policy Resources & Adm' },
  { value: 'HSAR', label: 'HSAR - History of Art' },
  { value: 'HSHM', label: 'HSHM - Hist of Science, Hist of Med' },
  { value: 'HSMD', label: 'HSMD - History of Medicine' },
  { value: 'HSPL', label: 'HSPL - History & Politics' },
  { value: 'HUMS', label: 'HUMS - Humanities' },
  { value: 'IBIO', label: 'IBIO - Immunobiology' },
  { value: 'IHD', label: 'IHD - International Health' },
  { value: 'IMED', label: 'IMED - Investigative Medicine' },
  { value: 'IND', label: 'IND - IndoEuropean' },
  { value: 'INDC', label: 'INDC - Indic' },
  { value: 'INDN', label: 'INDN - Indonesian' },
  { value: 'INMD', label: 'INMD - Internal Medicine' },
  { value: 'INP', label: 'INP - Interdpt Neuroscience Pgm' },
  { value: 'INRL', label: 'INRL - International Relations' },
  { value: 'INTL', label: 'INTL - International' },
  { value: 'INTS', label: 'INTS - International Studies' },
  { value: 'IRAN', label: 'IRAN - Iranian' },
  { value: 'IRES', label: 'IRES - Independent Research' },
  { value: 'ITAL', label: 'ITAL - Italian' },
  { value: 'JAPN', label: 'JAPN - Japanese' },
  { value: 'JDST', label: 'JDST - Judaic Studies' },
  { value: 'KHMR', label: 'KHMR - Khmer' },
  { value: 'KREN', label: 'KREN - Korean' },
  { value: 'LAST', label: 'LAST - Latin American Studies' },
  { value: 'LATN', label: 'LATN - Latin' },
  { value: 'LAW', label: 'LAW - Law' },
  { value: 'LBMD', label: 'LBMD - Laboratory Medicine' },
  { value: 'LING', label: 'LING - Linguistics' },
  { value: 'LITR', label: 'LITR - Literature' },
  { value: 'LUCE', label: 'LUCE - The Henry Luce Course' },
  { value: 'MATH', label: 'MATH - Mathematics' },
  { value: 'MB&B', label: 'MB&B - Molecular Biophysics & Biochem' },
  { value: 'MBIO', label: 'MBIO - Microbiology' },
  { value: 'MCDB', label: 'MCDB - Molecular, Cellular & Dev Biol' },
  { value: 'MDVL', label: 'MDVL - Medieval Studies' },
  { value: 'MED', label: 'MED - Master of Environmental Design' },
  { value: 'MEDC', label: 'MEDC - Courses in School of Medicine' },
  { value: 'MEDR', label: 'MEDR - Clinical Clerkships' },
  { value: 'MENG', label: 'MENG - Mechanical Engineering' },
  { value: 'MESO', label: 'MESO - Mesopotamia' },
  { value: 'MGMT', label: 'MGMT - Management' },
  { value: 'MGRK', label: 'MGRK - Modern Greek' },
  { value: 'MGT', label: 'MGT - School of Management' },
  { value: 'MIC', label: 'MIC - Microbiology' },
  { value: 'MMES', label: 'MMES - Modern Middle East Studies' },
  { value: 'MRES', label: "MRES - Master's Thesis Research" },
  { value: 'MTBT', label: 'MTBT - Modern Tibetan' },
  { value: 'MUS', label: 'MUS - School of Music' },
  { value: 'MUSI', label: 'MUSI - Music Department' },
  { value: 'NAVY', label: 'NAVY - Naval Science' },
  { value: 'NBIO', label: 'NBIO - Neurobiology' },
  { value: 'NELC', label: 'NELC - Near Eastern Langs & Civs' },
  { value: 'NHTL', label: 'NHTL - Nahuatl' },
  { value: 'NRLG', label: 'NRLG - Neurology' },
  { value: 'NSCI', label: 'NSCI - Neuroscience' },
  { value: 'NURS', label: 'NURS - Nursing' },
  { value: 'OBGN', label: 'OBGN - Obstetrics/Gynecology' },
  { value: 'OBIO', label: 'OBIO - Organismal Biology' },
  { value: 'OLPA', label: 'OLPA - Online Physician Assistant Pgm' },
  { value: 'OPRH', label: 'OPRH - Orthopaedics & Rehabilitation' },
  { value: 'OPRS', label: 'OPRS - Operations Research' },
  { value: 'OPVS', label: 'OPVS - Ophthalmology & Visual Science' },
  { value: 'ORMS', label: 'ORMS - Operations Res/Mgmt Science' },
  { value: 'OTTM', label: 'OTTM - Ottoman' },
  { value: 'PA', label: 'PA - Physician Associate Program' },
  { value: 'PATH', label: 'PATH - Pathology' },
  { value: 'PEDT', label: 'PEDT - Pediatrics' },
  { value: 'PERS', label: 'PERS - Persian' },
  { value: 'PHAR', label: 'PHAR - Pharmacology' },
  { value: 'PHIL', label: 'PHIL - Philosophy' },
  { value: 'PHUM', label: 'PHUM - Public Humanities' },
  { value: 'PHYS', label: 'PHYS - Physics' },
  { value: 'PIH', label: 'PIH - Program International Health' },
  { value: 'PLSC', label: 'PLSC - Political Science' },
  { value: 'PLSH', label: 'PLSH - Polish' },
  { value: 'PNJB', label: 'PNJB - Punjabi' },
  { value: 'PORT', label: 'PORT - Portuguese' },
  { value: 'PPM', label: 'PPM - Public & Private Management' },
  { value: 'PRAC', label: 'PRAC - Practicum Analysis' },
  { value: 'PSYC', label: 'PSYC - Psychology' },
  { value: 'PSYT', label: 'PSYT - Psychiatry' },
  { value: 'QUAL', label: 'QUAL - Preparing for Qualifying Exams' },
  { value: 'QUAN', label: 'QUAN - Quantitative Reasoning' },
  { value: 'REL', label: 'REL - Religion' },
  { value: 'RLST', label: 'RLST - Religious Studies' },
  { value: 'RNST', label: 'RNST - Renaissance Studies' },
  { value: 'ROMN', label: 'ROMN - Romanian' },
  { value: 'RSEE', label: 'RSEE - Russian & East Europe Studies' },
  { value: 'RUSS', label: 'RUSS - Russian' },
  { value: 'S&DS', label: 'S&DS - Statistics and Data Science' },
  { value: 'SAST', label: 'SAST - South Asian Studies' },
  { value: 'SBCR', label: 'SBCR - Serbian & Croatian' },
  { value: 'SBS', label: 'SBS - Social and Behavioral Sciences' },
  { value: 'SCAN', label: 'SCAN - Scandinavian' },
  { value: 'SCIE', label: 'SCIE - Science' },
  { value: 'SKRT', label: 'SKRT - Sanskrit' },
  { value: 'SLAV', label: 'SLAV - Slavic' },
  { value: 'SMTC', label: 'SMTC - Semitic' },
  { value: 'SNHL', label: 'SNHL - Sinhala' },
  { value: 'SOCY', label: 'SOCY - Sociology' },
  { value: 'SPAN', label: 'SPAN - Spanish' },
  { value: 'SPEC', label: 'SPEC - Special Divisional Major' },
  { value: 'SPTC', label: 'SPTC - Special Term Course' },
  { value: 'STAT', label: 'STAT - Statistics' },
  { value: 'STCY', label: 'STCY - Study of the City' },
  { value: 'STEV', label: 'STEV - Studies in the Environment' },
  { value: 'STRT', label: 'STRT - Start Program' },
  { value: 'SURG', label: 'SURG - Surgery' },
  { value: 'SWAH', label: 'SWAH - Kiswahili' },
  { value: 'TAML', label: 'TAML - Tamil' },
  { value: 'TBTN', label: 'TBTN - Tibetan' },
  { value: 'THST', label: 'THST - Theater Studies' },
  { value: 'TKSH', label: 'TKSH - Turkish' },
  { value: 'TPRP', label: 'TPRP - Teacher Preparation' },
  { value: 'TRAD', label: 'TRAD - Therapeutic Radiology' },
  { value: 'TWI', label: 'TWI - Twi' },
  { value: 'UKRN', label: 'UKRN - Ukrainian' },
  { value: 'URBN', label: 'URBN - Urban Studies' },
  { value: 'URDU', label: 'URDU - Heritage Urdu' },
  { value: 'USAF', label: 'USAF - Aerospace Studies' },
  { value: 'VAIR', label: 'VAIR - Visiting Assistant in Research' },
  { value: 'VIET', label: 'VIET - Vietnamese' },
  { value: 'WGSS', label: "WGSS - Women'sGender&SexualityStudies" },
  { value: 'WGST', label: "WGST - Women's & Gender Studies" },
  { value: 'WHIT', label: 'WHIT - Whitney Seminar' },
  { value: 'WLOF', label: 'WLOF - Wolof' },
  { value: 'WMST', label: "WMST - Women's Studies" },
  { value: 'YORU', label: 'YORU - Yoruba' },
  { value: 'YPKU', label: 'YPKU - PKU: Direct Enrollment' },
  { value: 'YSM', label: 'YSM - Yale School of Medicine' },
  { value: 'ZULU', label: 'ZULU - Zulu' },
] as const;
