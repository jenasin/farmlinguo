// Beans Questions - Swahili
const beansQuestions = {
    "beans_level1": [
        {
            question: "Maharagwe ni zao la aina gani?",
            options: [
                { text: "Zao la jamii ya mikunde (legume)", isCorrect: true, icon: "🫘" },
                { text: "Mti mkubwa", isCorrect: false, icon: "🌳" },
                { text: "Nyasi", isCorrect: false, icon: "🌿" },
                { text: "Uyoga", isCorrect: false, icon: "🍄" }
            ],
            explanation: "Maharagwe ni zao la jamii ya mikunde ambalo husaidia kurutubisha udongo."
        },
        {
            question: "Maharagwe yanasaidia udongo vipi?",
            options: [
                { text: "Huongeza nitrojeni ardhini", isCorrect: true, icon: "🌱" },
                { text: "Huchoma udongo", isCorrect: false, icon: "🔥" },
                { text: "Huondoa maji yote", isCorrect: false, icon: "💧" },
                { text: "Hayasaidii", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Maharagwe yana bakteria kwenye mizizi ambao hubadilisha nitrojeni ya hewa kuwa mbolea."
        },
        {
            question: "Maharagwe yanapandwa kwa kina gani?",
            options: [
                { text: "Sentimita 3-5", isCorrect: true, icon: "📏" },
                { text: "Mita 1", isCorrect: false, icon: "📏" },
                { text: "Milimita 1", isCorrect: false, icon: "📏" },
                { text: "Sentimita 50", isCorrect: false, icon: "📏" }
            ],
            explanation: "Kina cha sentimita 3-5 ni bora kwa maharagwe kuota vizuri."
        },
        {
            question: "Maharagwe yanakomaa baada ya siku ngapi?",
            options: [
                { text: "Siku 60-90", isCorrect: true, icon: "📅" },
                { text: "Siku 7", isCorrect: false, icon: "📅" },
                { text: "Miaka 3", isCorrect: false, icon: "📅" },
                { text: "Siku 300", isCorrect: false, icon: "📅" }
            ],
            explanation: "Maharagwe mengi yanakomaa ndani ya siku 60 hadi 90."
        },
        {
            question: "Aina gani ya maharagwe ipo?",
            options: [
                { text: "Ya kutambaa na ya kusimama", isCorrect: true, icon: "🫘" },
                { text: "Ya kuruka tu", isCorrect: false, icon: "🫘" },
                { text: "Ya kuogelea", isCorrect: false, icon: "🫘" },
                { text: "Aina moja tu", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Maharagwe yana aina mbili kuu: yanayotambaa na yanayosimama."
        }
    ],
    "beans_level2": [
        {
            question: "Mbolea gani inafaa kwa maharagwe?",
            options: [
                { text: "Phosphorus zaidi kuliko nitrojeni", isCorrect: true, icon: "🧪" },
                { text: "Chumvi tu", isCorrect: false, icon: "🧂" },
                { text: "Mafuta", isCorrect: false, icon: "🛢️" },
                { text: "Hakuna mbolea", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Maharagwe yanatengeneza nitrojeni yenyewe, kwa hiyo yanahitaji phosphorus zaidi."
        },
        {
            question: "Ugonjwa wa angular leaf spot unaathiri nini?",
            options: [
                { text: "Majani - hutengeneza madoa ya pembe", isCorrect: true, icon: "🍂" },
                { text: "Huongeza mavuno", isCorrect: false, icon: "📈" },
                { text: "Huongeza maua", isCorrect: false, icon: "🌸" },
                { text: "Hauathiri", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Ugonjwa huu unafanya madoa ya pembe kwenye majani na kupunguza mavuno."
        },
        {
            question: "Wadudu gani wanashambulia maharagwe?",
            options: [
                { text: "Vidukari, inzi weupe, na funza", isCorrect: true, icon: "🐛" },
                { text: "Tembo", isCorrect: false, icon: "🐘" },
                { text: "Samaki", isCorrect: false, icon: "🐟" },
                { text: "Simba", isCorrect: false, icon: "🦁" }
            ],
            explanation: "Wadudu wadogo kama vidukari na funza ni hatari kwa maharagwe."
        },
        {
            question: "Maharagwe yanapaswa kumwagiliwa vipi?",
            options: [
                { text: "Wastani - si mengi wala kidogo", isCorrect: true, icon: "💧" },
                { text: "Maji mengi sana kila siku", isCorrect: false, icon: "💧" },
                { text: "Hayahitaji maji", isCorrect: false, icon: "🚫" },
                { text: "Mara moja kwa mwaka", isCorrect: false, icon: "💧" }
            ],
            explanation: "Maji ya wastani ni bora - mengi sana yanasababisha magonjwa."
        },
        {
            question: "Inoculation ya maharagwe ni nini?",
            options: [
                { text: "Kuweka bakteria wa kutengeneza nitrojeni kwenye mbegu", isCorrect: true, icon: "🦠" },
                { text: "Chanjo ya wanyama", isCorrect: false, icon: "💉" },
                { text: "Kuchoma mbegu", isCorrect: false, icon: "🔥" },
                { text: "Hakuna kitu", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Inoculation huongeza bakteria wanaosaidia maharagwe kutengeneza mbolea ya nitrojeni."
        }
    ],
    "beans_level3": [
        {
            question: "Maharagwe yamekomaa yanatambulikaje?",
            options: [
                { text: "Maganda kukauka na kubadilika rangi", isCorrect: true, icon: "🫘" },
                { text: "Maganda kuwa kijani zaidi", isCorrect: false, icon: "🟢" },
                { text: "Maganda kuwa na maji", isCorrect: false, icon: "💧" },
                { text: "Maua kuendelea", isCorrect: false, icon: "🌸" }
            ],
            explanation: "Maganda yanapokauka na kubadilika rangi, maharagwe yako tayari kuvunwa."
        },
        {
            question: "Maharagwe yanavunwa vipi?",
            options: [
                { text: "Kung'oa au kukata mimea, kisha kupura", isCorrect: true, icon: "👋" },
                { text: "Kuchoma shamba", isCorrect: false, icon: "🔥" },
                { text: "Kumwagilia maji mengi", isCorrect: false, icon: "💧" },
                { text: "Hayavunwi", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Mimea inang'olewa au kukatwa, kisha maharagwe yanapurwa kutoka magandani."
        },
        {
            question: "Maharagwe yanapaswa kukaushwa hadi unyevu gani?",
            options: [
                { text: "Chini ya 14%", isCorrect: true, icon: "💧" },
                { text: "50%", isCorrect: false, icon: "💧" },
                { text: "90%", isCorrect: false, icon: "💧" },
                { text: "0% kabisa", isCorrect: false, icon: "💧" }
            ],
            explanation: "Unyevu chini ya 14% huzuia kuvu na wadudu ghalani."
        },
        {
            question: "Bruchids (wadudu wa hifadhi) wanadhibitiwaje?",
            options: [
                { text: "Kuhifadhi vizuri na kutumia majivu au dawa", isCorrect: true, icon: "🏠" },
                { text: "Kuloweka maharagwe majini", isCorrect: false, icon: "💧" },
                { text: "Kuweka juani wiki mbili", isCorrect: false, icon: "☀️" },
                { text: "Hakuna njia", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Hifadhi nzuri na majivu au dawa husaidia kuzuia wadudu wa ghalani."
        },
        {
            question: "PICS bags zinasaidia kuhifadhi maharagwe vipi?",
            options: [
                { text: "Kuzuia hewa na wadudu kuingia", isCorrect: true, icon: "🛍️" },
                { text: "Kuongeza joto", isCorrect: false, icon: "🔥" },
                { text: "Kuongeza unyevu", isCorrect: false, icon: "💧" },
                { text: "Hazisaidii", isCorrect: false, icon: "🚫" }
            ],
            explanation: "PICS bags huzuia hewa, hivyo wadudu wanakufa bila oksijeni."
        }
    ]
};

window.beansQuestions = beansQuestions;