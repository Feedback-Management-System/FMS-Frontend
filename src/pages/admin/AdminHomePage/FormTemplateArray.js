/* eslint-disable no-unused-expressions */
const TemplateFormArray = [
    {
        updateFormInfo: {
            updateMask: 'description',
            info: {
                description: `C-4, Janakpuri, New Delhi-110058
(Affiliated to Guru Govind Singh Indraprastha University, Delhi)
                
(You can fill out this form only once)  
                
*Course,Semester,Shift eg.BBA (B & I) IInd Semester (M & E)* Faculty Feedback from Students (*Date eg.Jan-June 2023*)              
                
The purpose of this feedback is to further improve the performance of the faculty with your cooperation. Kindly play the role of a counselor rather than that of a judge. 
Your assessment should be unbiased and objective.`,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'A) Course, Semester, Section, Shift',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'DROP_DOWN',
                            options: [
                                {
                                    value: '*Enter Options*',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 0,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'B) Choose your Class Coordinator',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'DROP_DOWN',
                            options: [
                                {
                                    value: '*Enter Options*',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 1,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'C) Quality of Interaction with Class Coordinator',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'RADIO',
                            options: [
                                {
                                    value: 'Mentor & Motivator',
                                },
                                {
                                    value: 'Supportive',
                                },
                                {
                                    value: 'Indifferent to you',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 2,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'D) Name of the *Subject* Faculty',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'DROP_DOWN',
                            options: [
                                {
                                    value: '*Enter Options*',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 3,
            },
        },
    },
    {
        createItem: {
            item: {
                textItem: {},
                title: 'How satisfied were you with *Subject* Faculty ?',
                description:
                    '1= Poor, 2= Fair, 3= Good, 4= Very Good, 5= Outstanding',
            },
            location: {
                index: 4,
            },
        },
    },
    {
        createItem: {
            item: {
                questionGroupItem: {
                    grid: {
                        columns: {
                            type: 'RADIO',
                            options: [
                                {
                                    value: '5',
                                },
                                {
                                    value: '4',
                                },
                                {
                                    value: '3',
                                },
                                {
                                    value: '2',
                                },
                                {
                                    value: '1',
                                },
                            ],
                        },
                    },
                    questions: [
                        {
                            rowQuestion: {
                                title: 'Subject knowledge',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Communication Skills',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Interactive Approach & Clear doubts',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Covers all the topic of the Syllabus',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Punctuality in taking classes',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Control over the class',
                            },
                            required: true,
                        },
                    ],
                },
            },
            location: {
                index: 5,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'E) Name of the *Subject* Faculty',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'DROP_DOWN',
                            options: [
                                {
                                    value: '*Enter Options*',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 6,
            },
        },
    },
    {
        createItem: {
            item: {
                textItem: {},
                title: 'How satisfied were you with *Subject* Faculty ?',
                description:
                    '1= Poor, 2= Fair, 3= Good, 4= Very Good, 5= Outstanding',
            },
            location: {
                index: 7,
            },
        },
    },
    {
        createItem: {
            item: {
                questionGroupItem: {
                    grid: {
                        columns: {
                            type: 'RADIO',
                            options: [
                                {
                                    value: '5',
                                },
                                {
                                    value: '4',
                                },
                                {
                                    value: '3',
                                },
                                {
                                    value: '2',
                                },
                                {
                                    value: '1',
                                },
                            ],
                        },
                    },
                    questions: [
                        {
                            rowQuestion: {
                                title: 'Subject knowledge',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Communication Skills',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Interactive Approach & Clear doubts',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Covers all the topic of the Syllabus',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Punctuality in taking classes',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Control over the class',
                            },
                            required: true,
                        },
                    ],
                },
            },
            location: {
                index: 8,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'F) Name of the *Subject* Faculty',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'DROP_DOWN',
                            options: [
                                {
                                    value: '*Enter Options*',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 9,
            },
        },
    },
    {
        createItem: {
            item: {
                textItem: {},
                title: 'How satisfied were you with *Subject* Faculty ?',
                description:
                    '1= Poor, 2= Fair, 3= Good, 4= Very Good, 5= Outstanding',
            },
            location: {
                index: 10,
            },
        },
    },
    {
        createItem: {
            item: {
                questionGroupItem: {
                    grid: {
                        columns: {
                            type: 'RADIO',
                            options: [
                                {
                                    value: '5',
                                },
                                {
                                    value: '4',
                                },
                                {
                                    value: '3',
                                },
                                {
                                    value: '2',
                                },
                                {
                                    value: '1',
                                },
                            ],
                        },
                    },
                    questions: [
                        {
                            rowQuestion: {
                                title: 'Subject knowledge',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Communication Skills',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Interactive Approach & Clear doubts',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Covers all the topic of the Syllabus',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Punctuality in taking classes',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Control over the class',
                            },
                            required: true,
                        },
                    ],
                },
            },
            location: {
                index: 11,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'G) Name of the *Subject* Faculty',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'DROP_DOWN',
                            options: [
                                {
                                    value: '*Enter Options*',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 12,
            },
        },
    },
    {
        createItem: {
            item: {
                textItem: {},
                title: 'How satisfied were you with *Subject* Faculty ?',
                description:
                    '1= Poor, 2= Fair, 3= Good, 4= Very Good, 5= Outstanding',
            },
            location: {
                index: 13,
            },
        },
    },
    {
        createItem: {
            item: {
                questionGroupItem: {
                    grid: {
                        columns: {
                            type: 'RADIO',
                            options: [
                                {
                                    value: '5',
                                },
                                {
                                    value: '4',
                                },
                                {
                                    value: '3',
                                },
                                {
                                    value: '2',
                                },
                                {
                                    value: '1',
                                },
                            ],
                        },
                    },
                    questions: [
                        {
                            rowQuestion: {
                                title: 'Subject knowledge',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Communication Skills',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Interactive Approach & Clear doubts',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Covers all the topic of the Syllabus',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Punctuality in taking classes',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Control over the class',
                            },
                            required: true,
                        },
                    ],
                },
            },
            location: {
                index: 14,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'H) Name of the *Subject* Faculty',
                questionItem: {
                    question: {
                        choiceQuestion: {
                            type: 'DROP_DOWN',
                            options: [
                                {
                                    value: '*Enter Options*',
                                },
                            ],
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 15,
            },
        },
    },
    {
        createItem: {
            item: {
                textItem: {},
                title: 'How satisfied were you with *Subject* Faculty ?',
                description:
                    '1= Poor, 2= Fair, 3= Good, 4= Very Good, 5= Outstanding',
            },
            location: {
                index: 16,
            },
        },
    },
    {
        createItem: {
            item: {
                questionGroupItem: {
                    grid: {
                        columns: {
                            type: 'RADIO',
                            options: [
                                {
                                    value: '5',
                                },
                                {
                                    value: '4',
                                },
                                {
                                    value: '3',
                                },
                                {
                                    value: '2',
                                },
                                {
                                    value: '1',
                                },
                            ],
                        },
                    },
                    questions: [
                        {
                            rowQuestion: {
                                title: 'Subject knowledge',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Communication Skills',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Interactive Approach & Clear doubts',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Covers all the topic of the Syllabus',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Punctuality in taking classes',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Control over the class',
                            },
                            required: true,
                        },
                    ],
                },
            },
            location: {
                index: 17,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'I) Library Facilities',
                questionGroupItem: {
                    grid: {
                        columns: {
                            type: 'RADIO',
                            options: [
                                {
                                    value: 'Sufficient',
                                },
                                {
                                    value: 'Average',
                                },
                                {
                                    value: 'Insufficient',
                                },
                            ],
                        },
                    },
                    questions: [
                        {
                            rowQuestion: {
                                title: 'Subject & books availability',
                            },
                            required: true,
                        },
                        {
                            rowQuestion: {
                                title: 'Reference books availabilty',
                            },
                            required: true,
                        },
                    ],
                },
            },
            location: {
                index: 18,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'J) How satisfied were you with MS Teams App ?',
                questionItem: {
                    question: {
                        textQuestion: {
                            paragraph: false,
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 19,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'K) How satisfied were you with Online Classes?',
                questionItem: {
                    question: {
                        scaleQuestion: {
                            high: 5,
                            low: 1,
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 20,
            },
        },
    },
    {
        createItem: {
            item: {
                title: 'L) Any Suggestion for improvement on Labs, Library, Canteen and Infrastructure',
                questionItem: {
                    question: {
                        textQuestion: {
                            paragraph: true,
                        },
                        required: true,
                    },
                },
            },
            location: {
                index: 21,
            },
        },
    },
];

export default TemplateFormArray;
