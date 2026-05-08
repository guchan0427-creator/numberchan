const numerologyData = {
  1: {
    title: "1番：リーダー・開拓者",
    description: "強い意志と独立心を持つ、生まれながらのリーダーです。新しいことへの挑戦を恐れず、自分の道を切り開く力があります。独創的なアイデアで周囲を引っ張る存在です。",
    keywords: ["独立", "リーダーシップ", "開拓者", "創造力", "意志の強さ"]
  },
  2: {
    title: "2番：協調者・調停者",
    description: "繊細な感受性と深い共感力を持ちます。人間関係を大切にし、チームの調和を保つことが得意です。直感力が高く、相手の気持ちをよく理解できます。",
    keywords: ["協調性", "共感力", "調和", "直感", "優しさ"]
  },
  3: {
    title: "3番：表現者・クリエイター",
    description: "豊かな表現力と創造性を持ち、周囲を明るくする才能があります。コミュニケーション上手で、芸術・音楽・文章など創造的な分野で輝きます。",
    keywords: ["表現力", "創造性", "コミュニケーション", "明るさ", "芸術性"]
  },
  4: {
    title: "4番：建設者・実務家",
    description: "責任感が強く、着実にものごとを進める力があります。計画を立て、一歩一歩確実に実行することを得意とします。信頼できる堅実な人物です。",
    keywords: ["堅実", "責任感", "計画性", "忍耐", "信頼"]
  },
  5: {
    title: "5番：自由人・冒険家",
    description: "自由を愛し、変化と冒険を求める行動派です。好奇心旺盛で多才、新しい経験を通じて成長します。人を惹きつけるカリスマ性があります。",
    keywords: ["自由", "冒険", "好奇心", "多才", "変化"]
  },
  6: {
    title: "6番：愛情家・守護者",
    description: "深い愛情と責任感で家族や仲間を守ります。奉仕の精神が強く、人の役に立つことに喜びを感じます。美意識が高く、調和のある環境を大切にします。",
    keywords: ["愛情", "責任", "奉仕", "家庭", "美意識"]
  },
  7: {
    title: "7番：探求者・哲学者",
    description: "深い洞察力と分析力を持つ、真実の探求者です。直感と論理を組み合わせて物事の本質を見抜きます。精神的な成長や知識の探求に喜びを感じます。",
    keywords: ["洞察力", "分析", "直感", "哲学", "探求心"]
  },
  8: {
    title: "8番：権威者・実力者",
    description: "強いリーダーシップと実行力を持ち、大きな目標を達成する力があります。ビジネスや組織の中で実力を発揮し、物質的な成功を手にする資質があります。",
    keywords: ["実力", "リーダーシップ", "成功", "組織力", "野心"]
  },
  9: {
    title: "9番：博愛主義者・完成者",
    description: "大きな思いやりと理想を持ち、世界をより良くしたいという使命感があります。芸術的センスと精神的な深さを兼ね備え、人々に影響を与える存在です。",
    keywords: ["博愛", "理想主義", "使命感", "精神性", "完成"]
  },
  11: {
    title: "11番：マスターナンバー・直感の達人",
    description: "高い直感力と霊的な感受性を持つマスターナンバーです。インスピレーションで人を導く力があり、精神的なメッセージを世に伝える役割を担います。",
    keywords: ["マスターナンバー", "直感", "霊感", "インスピレーション", "使命"]
  },
  22: {
    title: "22番：マスターナンバー・夢の建設者",
    description: "大きなビジョンを現実に変える力を持つマスターナンバーです。スケールの大きな夢を実現し、多くの人の人生に影響を与える可能性を秘めています。",
    keywords: ["マスターナンバー", "ビジョン", "実現力", "スケール", "影響力"]
  },
  33: {
    title: "33番：マスターナンバー・愛の師",
    description: "無条件の愛と癒しの力を持つ最強のマスターナンバーです。高い精神性と慈愛の心で多くの人を導き、世界に光をもたらす存在です。",
    keywords: ["マスターナンバー", "無条件の愛", "癒し", "師", "精神性"]
  }
};

function reduceToSingleDigit(n) {
  if (n === 11 || n === 22 || n === 33) return n;
  if (n < 10) return n;
  const sum = String(n).split('').reduce((acc, d) => acc + parseInt(d), 0);
  return reduceToSingleDigit(sum);
}

function calcLifePathNumber(dateStr) {
  const digits = dateStr.replace(/-/g, '').split('').map(Number);
  const total = digits.reduce((acc, d) => acc + d, 0);
  return reduceToSingleDigit(total);
}

function calculate() {
  const input = document.getElementById('birthdate').value;
  if (!input) {
    alert('生年月日を入力してください');
    return;
  }

  const number = calcLifePathNumber(input);
  const data = numerologyData[number];

  document.getElementById('life-path-number').textContent = number;

  const descEl = document.getElementById('description');
  descEl.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <div class="keywords">
      ${data.keywords.map(k => `<span class="keyword">${k}</span>`).join('')}
    </div>
  `;

  const resultEl = document.getElementById('result');
  resultEl.classList.remove('hidden');
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.getElementById('birthdate').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') calculate();
});
