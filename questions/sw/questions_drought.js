// Drought & Climate Adaptation Questions - Swahili
const droughtQuestions = {
    "drought_level1": [
        {
            question: "Ukame ni nini?",
            options: [
                { text: "Kipindi kirefu bila mvua ya kutosha", isCorrect: true, icon: "🏜️" },
                { text: "Mvua nyingi sana", isCorrect: false, icon: "🌧️" },
                { text: "Theluji nyingi", isCorrect: false, icon: "❄️" },
                { text: "Mafuriko makubwa", isCorrect: false, icon: "🌊" }
            ],
            explanation: "Ukame ni wakati ambapo hakuna mvua ya kutosha kwa muda mrefu."
        },
        {
            question: "Ukame unaathiri mimea vipi?",
            options: [
                { text: "Mimea inanyauka na kufa", isCorrect: true, icon: "🥀" },
                { text: "Mimea inakuwa kijani zaidi", isCorrect: false, icon: "🌿" },
                { text: "Maua mengi zaidi", isCorrect: false, icon: "🌸" },
                { text: "Mavuno yanaongezeka", isCorrect: false, icon: "📈" }
            ],
            explanation: "Bila maji ya kutosha, mimea inanyauka na hatimaye kufa."
        },
        {
            question: "Nini dalili ya kwanza ya ukame kwenye mimea?",
            options: [
                { text: "Majani kunyauka na kujikunja", isCorrect: true, icon: "🍂" },
                { text: "Majani kuwa makubwa", isCorrect: false, icon: "🟢" },
                { text: "Maua mengi", isCorrect: false, icon: "🌸" },
                { text: "Matunda makubwa", isCorrect: false, icon: "🥜" }
            ],
            explanation: "Majani huanza kunyauka na kujikunja wakati mmea unapungukiwa maji."
        },
        {
            question: "Ukame unaweza kudumu kwa muda gani?",
            options: [
                { text: "Wiki, miezi, au hata miaka", isCorrect: true, icon: "📅" },
                { text: "Siku moja tu", isCorrect: false, icon: "📅" },
                { text: "Saa moja", isCorrect: false, icon: "📅" },
                { text: "Dakika kumi", isCorrect: false, icon: "📅" }
            ],
            explanation: "Ukame unaweza kudumu kwa muda mrefu - wiki, miezi au miaka."
        },
        {
            question: "Wakulima wanaweza kujua ukame unakuja vipi?",
            options: [
                { text: "Kusikiliza utabiri wa hali ya hewa", isCorrect: true, icon: "📻" },
                { text: "Kusikiliza muziki", isCorrect: false, icon: "🎵" },
                { text: "Kutazama filamu", isCorrect: false, icon: "📺" },
                { text: "Hakuna njia", isCorrect: false, icon: "🙈" }
            ],
            explanation: "Utabiri wa hali ya hewa husaidia wakulima kujua na kujiandaa."
        }
    ],
    "drought_level2": [
        {
            question: "Kutandaza (mulching) kunasaidia vipi wakati wa ukame?",
            options: [
                { text: "Kuhifadhi unyevu ardhini", isCorrect: true, icon: "💧" },
                { text: "Kuongeza joto", isCorrect: false, icon: "🔥" },
                { text: "Kuleta mvua", isCorrect: false, icon: "🌧️" },
                { text: "Hakuna faida", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Kutandaza huzuia maji kuyeyuka haraka kutoka ardhini."
        },
        {
            question: "Vifaa gani vinafaa kwa kutandaza?",
            options: [
                { text: "Majani makavu, nyasi, au maganda", isCorrect: true, icon: "🌿" },
                { text: "Mawe makubwa", isCorrect: false, icon: "🪨" },
                { text: "Plastiki nyeusi", isCorrect: false, icon: "🛢️" },
                { text: "Matofali", isCorrect: false, icon: "🧱" }
            ],
            explanation: "Vifaa vya asili kama majani na nyasi ni bora kwa kutandaza."
        },
        {
            question: "Wakati gani mzuri wa kumwagilia wakati wa ukame?",
            options: [
                { text: "Asubuhi au jioni", isCorrect: true, icon: "🌅" },
                { text: "Saa sita mchana", isCorrect: false, icon: "☀️" },
                { text: "Wakati wa joto kali", isCorrect: false, icon: "🌡️" },
                { text: "Kamwe", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Kumwagilia asubuhi au jioni hupunguza upotevu wa maji kwa uvukizi."
        },
        {
            question: "Kuvuna maji ya mvua kunafanyikaje?",
            options: [
                { text: "Kukusanya maji kutoka paa kwenye tanki", isCorrect: true, icon: "🏠" },
                { text: "Kungojea maji yashuke kutoka mawinguni", isCorrect: false, icon: "☁️" },
                { text: "Kwenda kuogelea", isCorrect: false, icon: "🏊" },
                { text: "Haiwezekani", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Maji ya mvua yanaweza kukusanywa kutoka paa na kuhifadhiwa kwenye tanki."
        },
        {
            question: "Umwagiliaji kwa matone (drip) una faida gani?",
            options: [
                { text: "Kutumia maji kidogo lakini kwa ufanisi", isCorrect: true, icon: "💧" },
                { text: "Kutumia maji mengi sana", isCorrect: false, icon: "🌊" },
                { text: "Kuongeza joto", isCorrect: false, icon: "🔥" },
                { text: "Hakuna faida", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Umwagiliaji wa matone hutoa maji moja kwa moja kwenye mizizi bila kupoteza."
        }
    ],
    "drought_level3": [
        {
            question: "Zao gani linastahimili ukame vizuri?",
            options: [
                { text: "Mtama (sorghum)", isCorrect: true, icon: "🌾" },
                { text: "Mpunga (rice)", isCorrect: false, icon: "🍚" },
                { text: "Lettuce", isCorrect: false, icon: "🥬" },
                { text: "Tikiti maji", isCorrect: false, icon: "🍉" }
            ],
            explanation: "Mtama una uwezo wa kustahimili ukame vizuri kuliko mazao mengine."
        },
        {
            question: "Kwa nini kunde (cowpeas) ni nzuri wakati wa ukame?",
            options: [
                { text: "Zinastahimili ukame na kurutubisha udongo", isCorrect: true, icon: "🌿" },
                { text: "Zinahitaji maji mengi", isCorrect: false, icon: "💧" },
                { text: "Zinapenda baridi", isCorrect: false, icon: "❄️" },
                { text: "Si nzuri", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Kunde zinastahimili ukame na pia huongeza nitrojeni kwenye udongo."
        },
        {
            question: "Muhogo (cassava) unastahimili ukame kwa sababu gani?",
            options: [
                { text: "Una mizizi mikubwa inayohifadhi maji", isCorrect: true, icon: "🥔" },
                { text: "Una majani madogo", isCorrect: false, icon: "🍃" },
                { text: "Ni mti mrefu", isCorrect: false, icon: "🌳" },
                { text: "Haustahimili ukame", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Mizizi mikubwa ya muhogo huhifadhi maji na virutubisho."
        },
        {
            question: "Aina gani ya mahindi inafaa kwa maeneo ya ukame?",
            options: [
                { text: "Aina za mapema na zinazostahimili ukame", isCorrect: true, icon: "🌽" },
                { text: "Aina za kawaida", isCorrect: false, icon: "🌽" },
                { text: "Aina za muda mrefu", isCorrect: false, icon: "🌽" },
                { text: "Aina yoyote", isCorrect: false, icon: "🌽" }
            ],
            explanation: "Aina za mapema zinakomaa haraka kabla ukame haujawa mkali."
        },
        {
            question: "Nini faida ya kupanda mazao mchanganyiko wakati wa ukame?",
            options: [
                { text: "Kupunguza hatari - kama moja linashindwa, lingine linabaki", isCorrect: true, icon: "🌿" },
                { text: "Kupunguza mavuno", isCorrect: false, icon: "📉" },
                { text: "Kuvutia wadudu", isCorrect: false, icon: "🐛" },
                { text: "Hakuna faida", isCorrect: false, icon: "🚫" }
            ],
            explanation: "Mazao mchanganyiko hupunguza hatari ya kupoteza mazao yote."
        }
    ]
};

window.droughtQuestions = droughtQuestions;
