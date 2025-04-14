import Image from "next/image";

export default function Home() {
  const rules = [
    {
      id: 1,
      title: "डिपॉज़िट ज़रूरी | Deposit is mandatory before playing",
      hindiContent: "RDX Ludo WhatsApp ग्रुप में गेम खेलने से पहले आपको डिपॉज़िट करना होगा, जीतने के लिए खेलना ज़रूरी है।",
      englishContent: "You must make a deposit before playing the game in RDX Ludo WhatsApp group. You also need to play to win!"
    },
    {
      id: 2,
      title: "डिपॉज़िट के 2 मिनट में पेमेंट प्रूफ भेजें | Send payment proof within 2 minutes",
      hindiContent: "डिपॉज़िट के 2 मिनट के अंदर पेमेंट का स्क्रीनशॉट ग्रुप में या एडमिन को पर्सनली भेजें।",
      englishContent: "Within 2 minutes of deposit, send the payment screenshot in the RDX Ludo WhatsApp group or directly to the admin."
    },
    {
      id: 3,
      title: "टेबल चेक करें फिर OK लिखें | Check table, write OK before playing",
      hindiContent: "टेबल लगने के बाद उसे चेक करें और \"OK\" लिखें, फिर ही गेम खेलें। बिना चेक किए खेलने पर कोई शिकायत नहीं मानी जाएगी।",
      englishContent: "After the table is set in RDX Ludo WhatsApp group, check it, write OK, and then start playing. If you don't check and play, no complaints will be entertained."
    },
    {
      id: 4,
      title: "विनिंग स्क्रीनशॉट टेबल के साथ लगाएं | Attach winning screenshot with the table",
      hindiContent: "जीतने के बाद टेबल के साथ स्क्रीनशॉट ग्रुप में डालें ताकि बैलेंस अपडेट में परेशानी ना हो।",
      englishContent: "Post the winning screenshot along with the table to help update your balance without issue."
    },
    {
      id: 5,
      title: "गेम से बाहर जाना नुकसान होगा | Exiting after opponent's piece opens will be your loss",
      hindiContent: "यदि विरोधी की गोटी खुलने के बाद आप गेम छोड़ते हैं तो नुकसान आपका होगा।",
      englishContent: "If you exit the game after your opponent's piece is open, you will be at a loss."
    },
    {
      id: 6,
      title: "बैलेंस अपडेट तक नई गेम की रिक्वेस्ट ना डालें | Don't request new games before balance update",
      hindiContent: "जब तक आपका बैलेंस अपडेट न हो जाए, तब तक ग्रुप में दूसरी गेम की रिक्वेस्ट ना डालें।",
      englishContent: "Don't request another game until your balance is updated."
    },
    {
      id: 7,
      title: "बैलेंस अपडेट के बाद ही गेम बोलें | Speak for a new game only after balance is updated",
      hindiContent: "केवल बैलेंस अपडेट होने के बाद ही RDX Ludo ग्रुप में नई गेम के लिए बोले।",
      englishContent: "Speak for the next game in the RDX Ludo WhatsApp group only after your balance is updated."
    },
    {
      id: 8,
      title: "गाली-गलौज ना करें | No abusive language",
      hindiContent: "ग्रुप में किसी के साथ गाली-गलौज ना करें। पर्सनल झगड़ा हो तो पर्सनली सुलझाएं।",
      englishContent: "Do not use abusive language. If there is any personal issue, resolve it privately."
    },
    {
      id: 9,
      title: "पैसे निकालने के नियम | Withdrawal Rules",
      hindiContent: "दिन में दो बार पैसे निकाल सकते हैं। अगर बैलेंस ₹1000 से ज़्यादा है तो कभी भी निकाल सकते हैं। आप Paytm वॉलेट से कितनी भी बार निकाल सकते हैं, लेकिन अगर आप PhonePe या GPay चाहते हैं तो दिन में केवल एक बार मिलेगा।",
      englishContent: "You can withdraw money twice a day. If the amount is more than ₹1000, you can withdraw any number of times via Paytm. For PhonePe or GPay, only once a day."
    },
    {
      id: 10,
      title: "विरोधी की गोटी से पहले बाहर निकले तो गेम कैंसिल | Exiting early cancels the game",
      hindiContent: "अगर कोई खिलाड़ी विरोधी की गोटी खुलने से पहले बाहर निकलता है तो गेम कैंसिल माना जाएगा।",
      englishContent: "If you exit before your opponent's piece opens, the game will be cancelled."
    },
    {
      id: 11,
      title: "केवल डिपॉज़िट के अनुसार गेम बोले | Only play as per your deposit",
      hindiContent: "जितना डिपॉज़िट है, उतने की ही गेम बोले। ज़्यादा की गेम बोलने पर विन नहीं मिलेगा।",
      englishContent: "Play games of the same amount as your deposit. If you play a higher amount game by mistake, you will not get the win."
    },
    {
      id: 12,
      title: "कंडीशन वाले गेम में नियम | Game conditions must be followed",
      hindiContent: "अगर आपने 100++ या 50++ गेम की शर्त रखी है, तो दोनों खिलाड़ियों को खुद गेम चेक करना होगा। 10 बॉक्स से पहले अगर विरोधी की गोटी नहीं बढ़ी है तो गेम कैंसिल हो सकता है।",
      englishContent: "If you set a 100++ or 50++ condition, both players must check the game. If the opponent's piece hasn't moved 10 boxes forward, you can exit and the game will be cancelled."
    },
    {
      id: 13,
      title: "No Facebook शर्त | \"No FB\" condition rules",
      hindiContent: "अगर आपने \"No FB\" की शर्त रखी है और विरोधी फेसबुक से खेला, तो गेम कैंसिल होगा।",
      englishContent: "If you put a \"No FB\" condition and your opponent plays via Facebook, the game will be cancelled."
    },
    {
      id: 14,
      title: "No iPhone शर्त | \"No iPhone\" condition rules",
      hindiContent: "अगर आपने \"No iPhone\" की शर्त रखी है और विरोधी iPhone से खेला, तो गेम कैंसिल होगा।",
      englishContent: "If you put a \"No iPhone\" condition and your opponent uses an iPhone, the game will be cancelled."
    },
    {
      id: 15,
      title: "डिपॉज़िट नंबर के लिए किसी से ना पूछें | Never ask deposit number from others",
      hindiContent: "हमारा सिर्फ एक डिपॉज़िट नंबर है: 9560309930 यह नंबर ग्रुप डिस्क्रिप्शन और टेबल पर दिया होगा। किसी और नंबर पर डिपॉज़िट करने पर आप खुद जिम्मेदार होंगे।",
      englishContent: "Never ask for the deposit number; it is only 9560309930. Do not deposit to any other number."
    },
    {
      id: 16,
      title: "No Auto शर्त के नियम | Rules for \"No Auto\" condition",
      hindiContent: "अगर \"No Auto\" की शर्त थी और आप Auto चला कर जीते, तो हर Auto पर 10% काटा जाएगा और हारे हुए प्लेयर को जोड़ा जाएगा।",
      englishContent: "If you agreed to \"No Auto\" and still used Auto to win, 10% per Auto will be deducted from your win and added to the losing player."
    },
    {
      id: 17,
      title: "पॉपुलर कोड देने के बाद नियम | Rules after giving Popular code",
      hindiContent: "अगर आपने पॉपुलर कोड दिया और विरोधी की गोटी खुल गई लेकिन 10 बॉक्स से आगे नहीं गई, तो गेम कैंसिल होगा और आपको ₹10 कैंसिल चार्ज देना होगा।",
      englishContent: "If you gave the opponent a Popular code and their piece opens but doesn't move 10 boxes, the game is cancelled and you'll be charged ₹10."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-100 dark:to-green-100">
      <header className="bg-green-600 dark:bg-green-800 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">RDX Ludo WhatsApp Group</h1>
          <p className="text-xl text-center">Official Rules & Guidelines</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-white-400 rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-black-700 dark:text-black mb-6 border-b border-green-200 dark:border-green-700 pb-4">
            📜 RDX LUDO WHATSAPP GROUP RULES (हिंदी और English में)
          </h2>
          
          <div className="space-y-6">
            {rules.map((rule) => (
              <div key={rule.id} className="bg-green-50 dark:bg-white-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold text-green-700 dark:text-green-800 flex items-center gap-2">
                  <span className="bg-green-600 dark:bg-green-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">
                    {rule.id}
                  </span>
                  <span>{rule.title}</span>
                </h3>
                <div className="mt-2 space-y-2">
                  <p className="text-black dark:text-black-800 border-l-4 border-green-300 dark:border-green-600 pl-3 py-1">
                    {rule.hindiContent}
                  </p>
                  <p className="text-black dark:text-black-800 border-l-4 border-blue-300 dark:border-blue-600 pl-3 py-1">
                    {rule.englishContent}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 dark:bg-red-900 rounded-lg border-l-4 border-green-900">
            <p className="font-bold text-yellow-700 dark:text-yellow-300">
              ✅ नोट | Note:
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              ये सभी नियम RDX Ludo WhatsApp Group के सभी खिलाड़ियों पर लागू होते हैं। नियमों का पालन करना ज़रूरी है वरना कार्रवाई की जाएगी।
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              All these rules apply to all players in the RDX Ludo WhatsApp Group. Following the rules is mandatory, otherwise action will be taken.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-green-700 dark:bg-green-900 text-white p-4 text-center">
        <p>© 2025 RDX Ludo WhatsApp Group. All Rights Reserved.</p>
        <p className="text-sm mt-1">Official Deposit Number: <span className="font-bold">9560309930</span></p>
      </footer>
    </div>
  );
}