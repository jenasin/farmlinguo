// Cashew Cultivation Questions - Swahili
const cashewQuestions = {
    "cashew_level1": [
        {
            question: "Korosho ni zao la aina gani?",
            options: [
                { text: "Zao la kudumu (mti)", isCorrect: true, icon: "🌳" },
                { text: "Zao la msimu", isCorrect: false, icon: "🌾" },
                { text: "Mboga", isCorrect: false, icon: "🥬" },
                { text: "Nyasi", isCorrect: false, icon: "🌿" }
            ],
            explanation: "Korosho ni mti unaodumu kwa miaka mingi."
        },
        {
            question: "Korosho hutoka wapi asili yake?",
            options: [
                { text: "Brazil (Amerika ya Kusini)", isCorrect: true, icon: "🇧🇷" },
                { text: "India", isCorrect: false, icon: "🇮🇳" },
                { text: "Tanzania", isCorrect: false, icon: "🇹🇿" },
                { text: "China", isCorrect: false, icon: "🇨🇳" }
            ],
            explanation: "Korosho ilitoka Brazil na kulimwa duniani kote."
        },
        {
            question: "Sehemu gani ya korosho inaliwa?",
            options: [
                { text: "Mbegu (nut) na tunda (apple)", isCorrect: true, icon: "🥜" },
                { text: "Majani tu", isCorrect: false, icon: "🍃" },
                { text: "Gome la mti", isCorrect: false, icon: "🪵" },
                { text: "Maua tu", isCorrect: false, icon: "🌸" }
            ],
            explanation: "Mbegu ya korosho ni chakula muhimu, na tunda pia linaliwa au kufanya juisi."
        },
        {
            question: "Mti wa korosho unaweza kuishi miaka mingapi?",
            options: [
                { text: "Miaka 30-50", isCorrect: true, icon: "📅" },
                { text: "Miaka 5-10", isCorrect: false, icon: "📅" },
                { text: "Miaka 1-2", isCorrect: false, icon: "📅" },
                { text: "Miaka 100+", isCorrect: false, icon: "📅" }
            ],
            explanation: "Mti wa korosho unaishi kati ya miaka 30 hadi 50 ukitunzwa vizuri."
        },
        {
            question: "Korosho hustawi vizuri katika hali ya hewa gani?",
            options: [
                { text: "Joto na unyevu wa wastani", isCorrect: true, icon: "☀️" },
                { text: "Baridi sana", isCorrect: false, icon: "❄️" },
                { text: "Mvua nyingi sana mwaka mzima", isCorrect: false, icon: "🌧️" },
                { text: "Milimani kwenye theluji", isCorrect: false, icon: "🏔️" }
            ],
            explanation: "Korosho inapenda hali ya hewa ya joto na unyevu wa wastani."
        }
    ],
    "cashew_level2": [
        {
            question: "Wakati gani mzuri wa kupanda korosho?",
            options: [
                { text: "Mwanzo wa msimu wa mvua", isCorrect: true, icon: "🌧️" },
                { text: "Katikati ya kiangazi", isCorrect: false, icon: "☀️" },
                { text: "Wakati wa baridi kali", isCorrect: false, icon: "❄️" },
                { text: "Wakati wa mafuriko", isCorrect: false, icon: "🌊" }
            ],
            explanation: "Kupanda mwanzo wa mvua husaidia mche kupata maji ya kutosha."
        },
        {
            question: "Umbali gani kati ya miti ya korosho?",
            options: [
                { text: "Mita 8-10", isCorrect: true, icon: "📏" },
                { text: "Mita 1-2", isCorrect: false, icon: "📏" },
                { text: "Mita 50", isCorrect: false, icon: "📏" },
                { text: "Sentimita 30", isCorrect: false, icon: "📏" }
            ],
            explanation: "Miti ya korosho inahitaji nafasi ya mita 8-10 kukua vizuri."
        },
        {
            question: "Udongo gani unafaa kwa korosho?",
            options: [
                { text: "Udongo wa kichanga wenye mifereji mizuri", isCorrect: true, icon: "🏖️" },
                { text: "Udongo wa maji mengi", isCorrect: false, icon: "💧" },
                { text: "Udongo wa mawe tu", isCorrect: false, icon: "🪨" },
                { text: "Udongo mwekundu mgumu", isCorrect: false, icon: "🧱" }
            ],
            explanation: "Korosho inapenda udongo unaopitisha maji vizuri."
        },
        {
            question: "Shimo la kupandia korosho liwe na ukubwa gani?",
            options: [
                { text: "Sm 60 x 60 x 60", isCorrect: true, icon: "📐" },
                { text: "Sm 10 x 10 x 10", isCorrect: false, icon: "📐" },
                { text: "Mita 2 x 2 x 2", isCorrect: false, icon: "📐" },
                { text: "Sm 5 x 5 x 5", isCorrect: false, icon: "📐" }
            ],
            explanation: "Shimo la sentimita 60 kwa pande zote linatoa nafasi nzuri kwa mizizi."
        },
        {
            question: "Nini kifanyike kabla ya kupanda mche wa korosho?",
            options: [
                { text: "Chimba shimo na weka mbolea wiki 2 kabla", isCorrect: true, icon: "🕳️" },
                { text: "Choma eneo lote", isCorrect: false, icon: "🔥" },
                { text: "Mwagilia maji mengi sana", isCorrect: false, icon: "💧" },
                { text: "Hakuna maandalizi", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Maandalizi mazuri ya shimo na mbolea husaidia mche kuanza vizuri."
        }
    ],
    "cashew_level3": [
        {
            question: "Korosho inahitaji kumwagiliwa mara ngapi kwa wiki wakati wa kiangazi?",
            options: [
                { text: "Mara 1-2 kwa wiki", isCorrect: true, icon: "💧" },
                { text: "Kila siku mara 5", isCorrect: false, icon: "💧" },
                { text: "Mara moja kwa mwezi", isCorrect: false, icon: "💧" },
                { text: "Haina haja ya maji", isCorrect: false, icon: "💧" }
            ],
            explanation: "Maji ya wastani ni bora - mara 1-2 kwa wiki wakati wa kiangazi."
        },
        {
            question: "Kupogoa korosho kunasaidia nini?",
            options: [
                { text: "Kuongeza mavuno na afya ya mti", isCorrect: true, icon: "✂️" },
                { text: "Kuua mti", isCorrect: false, icon: "✂️" },
                { text: "Kupunguza mavuno", isCorrect: false, icon: "✂️" },
                { text: "Hakuna faida", isCorrect: false, icon: "✂️" }
            ],
            explanation: "Kupogoa huondoa matawi mabaya na kusaidia mti kutoa mavuno mengi."
        },
        {
            question: "Wakati gani mzuri wa kupogoa korosho?",
            options: [
                { text: "Baada ya mavuno", isCorrect: true, icon: "📅" },
                { text: "Wakati wa maua", isCorrect: false, icon: "📅" },
                { text: "Wakati wa matunda", isCorrect: false, icon: "📅" },
                { text: "Wakati wa mvua kubwa", isCorrect: false, icon: "📅" }
            ],
            explanation: "Kupogoa baada ya mavuno hutoa muda wa mti kupona kabla ya msimu ujao."
        },
        {
            question: "Mbolea gani inafaa kwa korosho?",
            options: [
                { text: "NPK na mbolea ya samadi", isCorrect: true, icon: "🧪" },
                { text: "Chumvi tu", isCorrect: false, icon: "🧂" },
                { text: "Mafuta ya gari", isCorrect: false, icon: "🛢️" },
                { text: "Korosho haihitaji mbolea", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Mchanganyiko wa NPK na samadi hutoa virutubisho vyote vinavyohitajika."
        },
        {
            question: "Korosho huanza kutoa mavuno baada ya miaka mingapi?",
            options: [
                { text: "Miaka 3-5", isCorrect: true, icon: "📅" },
                { text: "Miezi 6", isCorrect: false, icon: "📅" },
                { text: "Miaka 20", isCorrect: false, icon: "📅" },
                { text: "Wiki 2", isCorrect: false, icon: "📅" }
            ],
            explanation: "Korosho huanza kutoa mavuno kidogo baada ya miaka 3-5."
        }
    ]
};

window.cashewQuestions = cashewQuestions;
