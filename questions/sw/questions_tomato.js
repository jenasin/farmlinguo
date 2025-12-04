// Tomato Questions - Swahili
const tomatoQuestions = {
    "tomato_level1": [
        {
            question: "Nyanya zinahitaji jua kiasi gani?",
            options: [
                { text: "Saa 6-8 za jua kwa siku", isCorrect: true, icon: "☀️" },
                { text: "Giza tu", isCorrect: false, icon: "🌙" },
                { text: "Saa 1 tu", isCorrect: false, icon: "☀️" },
                { text: "Hazihitaji jua", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Nyanya zinahitaji jua la kutosha - saa 6 hadi 8 kwa siku."
        },
        {
            question: "Nyanya zinapandwa vipi?",
            options: [
                { text: "Kwanza kitalu, kisha kupandikiza", isCorrect: true, icon: "🌱" },
                { text: "Moja kwa moja shambani bila kitalu", isCorrect: false, icon: "🌱" },
                { text: "Ndani ya maji", isCorrect: false, icon: "💧" },
                { text: "Kwenye mawe", isCorrect: false, icon: "🪨" }
            ],
            explanation: "Nyanya huanzishwa kitaluni kisha kupandikizwa shambani."
        },
        {
            question: "Umbali gani kati ya mimea ya nyanya?",
            options: [
                { text: "Sentimita 45-60", isCorrect: true, icon: "📏" },
                { text: "Sentimita 5", isCorrect: false, icon: "📏" },
                { text: "Mita 10", isCorrect: false, icon: "📏" },
                { text: "Milimita 1", isCorrect: false, icon: "📏" }
            ],
            explanation: "Umbali wa sentimita 45-60 unatoa nafasi nzuri kwa nyanya kukua."
        },
        {
            question: "Nyanya zinahitaji maji vipi?",
            options: [
                { text: "Mara kwa mara lakini si kupita kiasi", isCorrect: true, icon: "💧" },
                { text: "Maji mengi sana kila siku", isCorrect: false, icon: "💧" },
                { text: "Hazihitaji maji", isCorrect: false, icon: "🚫" },
                { text: "Mara moja kwa mwezi", isCorrect: false, icon: "💧" }
            ],
            explanation: "Maji ya wastani ni bora - mengi sana yanasababisha magonjwa."
        },
        {
            question: "Nyanya huanza kuzaa baada ya wiki ngapi?",
            options: [
                { text: "Wiki 8-12 baada ya kupandikiza", isCorrect: true, icon: "📅" },
                { text: "Siku 3", isCorrect: false, icon: "📅" },
                { text: "Miaka 2", isCorrect: false, icon: "📅" },
                { text: "Wiki 1", isCorrect: false, icon: "📅" }
            ],
            explanation: "Nyanya huanza kutoa matunda wiki 8 hadi 12 baada ya kupandikiza."
        }
    ],
    "tomato_level2": [
        {
            question: "Ugonjwa wa blight unaathiri nyanya vipi?",
            options: [
                { text: "Majani na matunda kuoza", isCorrect: true, icon: "🍂" },
                { text: "Mavuno kuongezeka", isCorrect: false, icon: "📈" },
                { text: "Majani kuwa kijani zaidi", isCorrect: false, icon: "🟢" },
                { text: "Maua mengi zaidi", isCorrect: false, icon: "🌸" }
            ],
            explanation: "Blight husababisha majani na matunda kuoza na kuharibika."
        },
        {
            question: "Staking (kuweka fito) kunasaidia nini?",
            options: [
                { text: "Kuinua mimea na kuzuia magonjwa", isCorrect: true, icon: "🌿" },
                { text: "Kupunguza mavuno", isCorrect: false, icon: "❌" },
                { text: "Kuvutia wadudu", isCorrect: false, icon: "🐛" },
                { text: "Hakuna faida", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Fito husaidia nyanya kusimama na kuzuia magonjwa ya udongo."
        },
        {
            question: "Mbolea gani inafaa kwa nyanya?",
            options: [
                { text: "NPK na mbolea ya samadi", isCorrect: true, icon: "🧪" },
                { text: "Chumvi tu", isCorrect: false, icon: "🧂" },
                { text: "Mafuta", isCorrect: false, icon: "🛢️" },
                { text: "Nyanya hazihitaji mbolea", isCorrect: false, icon: "🚫" }
            ],
            explanation: "NPK na samadi hutoa virutubisho vyote vinavyohitajika na nyanya."
        },
        {
            question: "Pruning (kupogoa) nyanya kunasaidia nini?",
            options: [
                { text: "Kuongeza ukubwa wa matunda", isCorrect: true, icon: "✂️" },
                { text: "Kupunguza matunda", isCorrect: false, icon: "❌" },
                { text: "Kuua mmea", isCorrect: false, icon: "🔥" },
                { text: "Hakuna faida", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Kupogoa huongeza nguvu kwenda kwenye matunda na kuyafanya makubwa."
        },
        {
            question: "Wadudu gani wanashambulia nyanya?",
            options: [
                { text: "Vidukari, inzi weupe, na funza", isCorrect: true, icon: "🐛" },
                { text: "Tembo", isCorrect: false, icon: "🐘" },
                { text: "Samaki", isCorrect: false, icon: "🐟" },
                { text: "Simba", isCorrect: false, icon: "🦁" }
            ],
            explanation: "Wadudu wadogo kama vidukari na funza ni hatari kwa nyanya."
        }
    ],
    "tomato_level3": [
        {
            question: "Nyanya zimeiva zinatambulikaje?",
            options: [
                { text: "Rangi nyekundu au njano kulingana na aina", isCorrect: true, icon: "🍅" },
                { text: "Rangi ya kijani", isCorrect: false, icon: "🟢" },
                { text: "Rangi ya bluu", isCorrect: false, icon: "🔵" },
                { text: "Rangi nyeusi", isCorrect: false, icon: "⚫" }
            ],
            explanation: "Nyanya zimeiva zinakuwa nyekundu au njano kulingana na aina."
        },
        {
            question: "Nyanya zinapaswa kuhifadhiwa vipi?",
            options: [
                { text: "Mahali pa baridi na kavu", isCorrect: true, icon: "🌡️" },
                { text: "Juani moja kwa moja", isCorrect: false, icon: "☀️" },
                { text: "Ndani ya maji", isCorrect: false, icon: "💧" },
                { text: "Karibu na moto", isCorrect: false, icon: "🔥" }
            ],
            explanation: "Nyanya zinapaswa kuhifadhiwa mahali pa baridi na kavu."
        },
        {
            question: "Ugonjwa wa bacterial wilt unaenezwaje?",
            options: [
                { text: "Kupitia udongo na maji yaliyochafuliwa", isCorrect: true, icon: "🦠" },
                { text: "Na jua", isCorrect: false, icon: "☀️" },
                { text: "Na mwezi", isCorrect: false, icon: "🌙" },
                { text: "Hauenezwi", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Bakteria wanaenezwa kupitia udongo na maji yaliyochafuliwa."
        },
        {
            question: "Greenhouse inasaidia nyanya vipi?",
            options: [
                { text: "Kudhibiti hali ya hewa na wadudu", isCorrect: true, icon: "🏠" },
                { text: "Kupunguza mavuno", isCorrect: false, icon: "❌" },
                { text: "Kuongeza joto kupita kiasi", isCorrect: false, icon: "🔥" },
                { text: "Hakuna faida", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Greenhouse husaidia kudhibiti mazingira na kulinda dhidi ya wadudu."
        },
        {
            question: "Blossom end rot inasababishwa na nini?",
            options: [
                { text: "Upungufu wa calcium", isCorrect: true, icon: "🧪" },
                { text: "Maji mengi sana", isCorrect: false, icon: "💧" },
                { text: "Jua nyingi", isCorrect: false, icon: "☀️" },
                { text: "Upepo mkali", isCorrect: false, icon: "🌬️" }
            ],
            explanation: "Upungufu wa calcium husababisha sehemu ya chini ya nyanya kuoza."
        }
    ]
};

window.tomatoQuestions = tomatoQuestions;
