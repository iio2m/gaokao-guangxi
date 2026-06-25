/**
 * 广西高考志愿填报数据引擎 v1.0
 * 广西本科通用版 — 覆盖定向师范/工科/医学/财经/计算机等全方向
 * 纯前端离线可用
 */

// ============================================================
// 1. 广西2026年分数线
// ============================================================
const GX_LINES_2026 = {
  physics: {
    special: 510,  // 特控线
   本科: 368,
   专科: 180
  },
  history: {
    special: 520,
   本科: 398,
   专科: 180
  }
};

// ============================================================
// 2. 广西2025年院校录取数据（物理类）
//    来源：广西招生考试院 + 各校官网
//    位次范围覆盖 30000-120000
// ============================================================
const SCHOOL_DATA_2025 = [
  // ===== 定向师范院校（提前批） =====
  {
    name: '广西师范大学',
    location: '桂林',
    nature: '公办',
    batch: '提前批',
    type: '定向师范',
    majors: ['生物科学(师范)', '化学(师范)', '物理学(师范)', '数学与应用数学(师范)'],
    minScore: 508,
    minRank: 51000,
    is985: false,
    is211: false,
    note: '广西最强师范，定向师范分数较高'
  },
  {
    name: '南宁师范大学',
    location: '南宁',
    nature: '公办',
    batch: '提前批',
    type: '定向师范',
    majors: ['生物科学(师范)', '化学(师范)', '小学教育(师范)', '学前教育(师范)'],
    minScore: 481,
    minRank: 71000,
    is985: false,
    is211: false,
    note: '你的位次76054可冲一下'
  },
  {
    name: '玉林师范学院',
    location: '玉林',
    nature: '公办',
    batch: '提前批',
    type: '定向师范',
    majors: ['生物科学(师范)', '化学(师范)', '小学教育(师范)', '学前教育(师范)', '汉语言文学(师范)'],
    minScore: 472,
    minRank: 77000,
    is985: false,
    is211: false,
    note: '主攻目标，位次匹配度高'
  },
  {
    name: '河池学院',
    location: '河池',
    nature: '公办',
    batch: '提前批',
    type: '定向师范',
    majors: ['生物科学(师范)', '化学(师范)', '小学教育(师范)', '数学与应用数学(师范)'],
    minScore: 455,
    minRank: 88000,
    is985: false,
    is211: false,
    note: '保底选择，稳妥'
  },
  {
    name: '广西民族师范学院',
    location: '崇左',
    nature: '公办',
    batch: '提前批',
    type: '定向师范',
    majors: ['生物科学(师范)', '化学(师范)', '小学教育(师范)', '汉语言文学(师范)'],
    minScore: 460,
    minRank: 84000,
    is985: false,
    is211: false,
    note: '保底选择'
  },
  {
    name: '广西科技师范学院',
    location: '来宾',
    nature: '公办',
    batch: '提前批',
    type: '定向师范',
    majors: ['小学教育(师范)', '学前教育(师范)', '生物科学(师范)'],
    minScore: 449,
    minRank: 94000,
    is985: false,
    is211: false,
    note: '保底选择，稳妥'
  },

  // ===== 工科院校（本科普通批） =====
  {
    name: '桂林电子科技大学',
    location: '桂林',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['电子信息工程', '通信工程', '计算机科学与技术', '自动化', '机械设计制造及其自动化'],
    minScore: 520,
    minRank: 43000,
    is985: false,
    is211: false,
    note: '广西工科强校，分数较高'
  },
  {
    name: '桂林理工大学',
    location: '桂林',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['土木工程', '机械设计制造及其自动化', '自动化', '电气工程及其自动化', '电子科学与技术'],
    minScore: 479,
    minRank: 72000,
    is985: false,
    is211: false,
    note: '工科实力强，可冲'
  },
  {
    name: '广西科技大学',
    location: '柳州',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['机械工程', '车辆工程', '电气工程及其自动化', '自动化', '电子信息工程'],
    minScore: 475,
    minRank: 75000,
    is985: false,
    is211: false,
    note: '工科匹配度高，冲一冲'
  },
  {
    name: '北部湾大学',
    location: '钦州',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['机械工程', '电子信息工程', '自动化', '食品科学与工程', '制药工程', '船舶与海洋工程'],
    minScore: 468,
    minRank: 80000,
    is985: false,
    is211: false,
    note: '位次匹配，工科可选'
  },
  {
    name: '桂林航天工业学院',
    location: '桂林',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['机械设计制造及其自动化', '电子信息工程', '飞行器制造工程', '自动化', '通信工程'],
    minScore: 463,
    minRank: 83000,
    is985: false,
    is211: false,
    note: '航天特色工科，性价比高'
  },
  {
    name: '梧州学院',
    location: '梧州',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['机械设计制造及其自动化', '电子信息工程', '制药工程', '食品科学与工程', '自动化'],
    minScore: 448,
    minRank: 95000,
    is985: false,
    is211: false,
    note: '稳妥保底'
  },
  {
    name: '百色学院',
    location: '百色',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['生物技术', '化学工程与工艺', '计算机科学与技术', '食品科学与工程'],
    minScore: 440,
    minRank: 101000,
    is985: false,
    is211: false,
    note: '保底'
  },
  {
    name: '广西民族大学',
    location: '南宁',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['电子信息工程', '计算机科学与技术', '化学工程与工艺', '制药工程'],
    minScore: 470,
    minRank: 78500,
    is985: false,
    is211: false,
    note: '南宁公办，可考虑'
  },
  {
    name: '广西职业师范学院',
    location: '南宁',
    nature: '公办',
    batch: '本科批',
    type: '工科',
    majors: ['计算机科学与技术', '电子信息工程', '数据科学与大数据技术'],
    minScore: 442,
    minRank: 99000,
    is985: false,
    is211: false,
    note: '保底'
  },

  // ===== 医学/医药类 =====
  {
    name: '广西医科大学',
    location: '南宁',
    nature: '公办',
    batch: '本科批',
    type: '医学',
    majors: ['临床医学', '护理学', '药学', '医学检验技术', '康复治疗学'],
    minScore: 530,
    minRank: 38000,
    is985: false,
    is211: false,
    note: '广西医学最强，分数较高'
  },
  {
    name: '桂林医学院',
    location: '桂林',
    nature: '公办',
    batch: '本科批',
    type: '医学',
    majors: ['临床医学', '护理学', '药学', '医学检验技术'],
    minScore: 505,
    minRank: 53000,
    is985: false,
    is211: false,
    note: '医学实力强'
  },
  {
    name: '右江民族医学院',
    location: '百色',
    nature: '公办',
    batch: '本科批',
    type: '医学',
    majors: ['临床医学', '护理学', '药学', '医学影像学'],
    minScore: 482,
    minRank: 70000,
    is985: false,
    is211: false,
    note: '可冲一冲'
  },

  // ===== 财经/管理类 =====
  {
    name: '广西财经学院',
    location: '南宁',
    nature: '公办',
    batch: '本科批',
    type: '财经',
    majors: ['会计学', '金融学', '财务管理', '经济学', '国际经济与贸易'],
    minScore: 470,
    minRank: 79000,
    is985: false,
    is211: false,
    note: '你的位次匹配度高'
  },
  {
    name: '广西民族大学',
    location: '南宁',
    nature: '公办',
    batch: '本科批',
    type: '综合',
    majors: ['会计学', '法学', '汉语言文学', '行政管理', '计算机科学与技术'],
    minScore: 470,
    minRank: 78500,
    is985: false,
    is211: false,
    note: '南宁公办，综合性强'
  },

  // ===== 师范类（非定向，本科普通批） =====
  {
    name: '广西师范大学',
    location: '桂林',
    nature: '公办',
    batch: '本科批',
    type: '师范',
    majors: ['汉语言文学(师范)', '英语(师范)', '数学与应用数学(师范)', '生物科学(师范)', '化学(师范)'],
    minScore: 508,
    minRank: 51000,
    is985: false,
    is211: false,
    note: '广西最强师范'
  },
  {
    name: '玉林师范学院',
    location: '玉林',
    nature: '公办',
    batch: '本科批',
    type: '师范',
    majors: ['汉语言文学(师范)', '英语(师范)', '小学教育(师范)', '生物科学(师范)', '体育教育'],
    minScore: 465,
    minRank: 81500,
    is985: false,
    is211: false,
    note: '位次匹配'
  },

  // ===== 计算机/IT类 =====
  {
    name: '桂林电子科技大学',
    location: '桂林',
    nature: '公办',
    batch: '本科批',
    type: '计算机',
    majors: ['计算机科学与技术', '软件工程', '人工智能', '数据科学', '信息安全'],
    minScore: 520,
    minRank: 43000,
    is985: false,
    is211: false,
    note: 'IT强校，分数较高'
  },
  {
    name: '广西科技大学',
    location: '柳州',
    nature: '公办',
    batch: '本科批',
    type: '计算机',
    majors: ['计算机科学与技术', '软件工程', '物联网工程', '数字媒体技术'],
    minScore: 475,
    minRank: 75000,
    is985: false,
    is211: false,
    note: '可冲'
  },

  // ===== 文史/法学类 =====
  {
    name: '广西民族大学',
    location: '南宁',
    nature: '公办',
    batch: '本科批',
    type: '文史',
    majors: ['法学', '汉语言文学', '新闻学', '国际事务与国际关系'],
    minScore: 470,
    minRank: 78500,
    is985: false,
    is211: false,
    note: '法学是该校优势'
  },
  {
    name: '广西警察学院',
    location: '南宁',
    nature: '公办',
    batch: '本科批',
    type: '文史',
    majors: ['法学', '警务指挥与战术', '公安管理学'],
    minScore: 455,
    minRank: 88000,
    is985: false,
    is211: false,
    note: '法学可考虑'
  }
];

// ============================================================
// 3. 推荐引擎（位次法）
// ============================================================
const RECOMMEND_ENGINE = {
  /**
   * 根据考生分数和位次，推荐冲稳保院校
   * @param {number} score - 考生分数
   * @param {number} rank - 考生位次
   * @param {string} batch - '提前批' | '本科批'
   * @param {string} type - '定向师范' | '工科'
   * @returns {object} { 冲: [], 稳: [], 保: [] }
   */
  recommend(score, rank, batch, type) {
    // 过滤符合条件的院校
    let schools = SCHOOL_DATA_2025.filter(s => {
      if (batch && s.batch !== batch) return false;
      if (type && s.type !== type) return false;
      return true;
    });

    // 按位次差分类
    const result = { 冲: [], 稳: [], 保: [] };

    schools.forEach(s => {
      const rankDiff = s.minRank - rank; // 正数：院校位次比你低（更容易）
      
      if (rankDiff <= -5000) {
        // 院校最低位次比你高5000以上 → 冲
        result['冲'].push({ ...s, matchRate: this._calcRate(rankDiff, '冲') });
      } else if (rankDiff <= 5000) {
        // 院校位次在你上下5000内 → 稳
        result['稳'].push({ ...s, matchRate: this._calcRate(rankDiff, '稳') });
      } else {
        // 院校位次比你低5000以上 → 保
        result['保'].push({ ...s, matchRate: this._calcRate(rankDiff, '保') });
      }
    });

    // 每档按匹配度排序
    ['冲', '稳', '保'].forEach(tier => {
      result[tier].sort((a, b) => b.matchRate - a.matchRate);
    });

    return result;
  },

  /**
   * 计算匹配度百分比
   */
  _calcRate(rankDiff, tier) {
    if (tier === '冲') {
      // 冲：位次差越大越难，但差得少则希望大
      const gap = Math.abs(rankDiff);
      return Math.max(10, Math.min(45, 45 - (gap / 200)));
    } else if (tier === '稳') {
      // 稳：位次越接近越好
      return Math.max(50, Math.min(80, 80 - (Math.abs(rankDiff) / 200)));
    } else {
      // 保：位次越低越稳
      return Math.max(80, Math.min(99, 80 + (rankDiff / 300)));
    }
  },

  /**
   * 根据考生科目能力推荐专业
   * @param {object} scores - { 语文, 数学, 英语, 物理, 化学, 生物 }
   * @returns {array} 推荐专业列表
   */
  recommendMajors(scores) {
    const recommendations = [];
    
    // 构建排序列表
    const sorted = Object.entries(scores)
      .map(([sub, sc]) => ({ sub, sc }))
      .sort((a, b) => b.sc - a.sc);

    const top2 = sorted.slice(0, 2);
    const weak2 = sorted.slice(-2);

    // 根据强项科目推荐
    top2.forEach(({ sub, sc }) => {
      if (sub === '英语' && sc >= 110) {
        recommendations.push({ major: '英语(师范)/翻译', reason: `英语${sc}分是强项，适合语言类专业`, suitability: '★★★★★' });
        recommendations.push({ major: '国际经济与贸易', reason: '英语好是外贸专业的核心优势', suitability: '★★★★' });
      }
      if (sub === '语文' && sc >= 105) {
        recommendations.push({ major: '汉语言文学(师范)', reason: `语文${sc}分不错，适合文科师范方向`, suitability: '★★★★' });
        recommendations.push({ major: '法学/新闻学', reason: '语文好是法学和新闻学的基础', suitability: '★★★★' });
      }
      if (sub === '生物' && sc >= 75) {
        recommendations.push({ major: '生物科学(师范)', reason: `生物${sc}分是强项，学生物师范最匹配`, suitability: '★★★★' });
        recommendations.push({ major: '护理学/药学', reason: '生物成绩好适合医学护理方向', suitability: '★★★' });
      }
      if (sub === '化学' && sc >= 70) {
        recommendations.push({ major: '化学(师范)', reason: `化学${sc}分中等偏上，可考虑化学师范`, suitability: '★★★★' });
        recommendations.push({ major: '药学/医学检验', reason: '化学基础好适合医药类专业', suitability: '★★★' });
      }
      if (sub === '数学' && sc >= 100) {
        recommendations.push({ major: '数学(师范)', reason: `数学${sc}分好，适合数学师范`, suitability: '★★★★' });
        recommendations.push({ major: '计算机/大数据', reason: '数学好是计算机核心优势', suitability: '★★★★' });
      }
      if (sub === '物理' && sc >= 80) {
        recommendations.push({ major: '物理(师范)', reason: `物理${sc}分好，适合物理师范方向`, suitability: '★★★★' });
        recommendations.push({ major: '电气/机械/自动化', reason: '物理好是工科基础', suitability: '★★★★' });
      }
    });

    // 弱项提醒
    const weakSubjects = weak2.map(s => `${s.sub}${s.sc}分`).join('、');
    recommendations.push({
      major: '⚠️ 选专业提醒',
      reason: `你的${weakSubjects}偏弱，报相关专业慎重考虑`,
      suitability: '❗'
    });

    return recommendations;
  },

  /**
   * 生成完整志愿方案
   */
  generatePlan(student) {
    const { score, rank, scores } = student;
    const majorRecs = this.recommendMajors(scores);
    const allTypes = ['定向师范', '工科', '医学', '财经', '师范', '计算机', '文史'];

    const result = {};

    allTypes.forEach(type => {
      const batch = type === '定向师范' ? '提前批' : '本科批';
      const recs = this.recommend(score, rank, batch, type);
      result[type] = {
        冲: recs['冲'].slice(0, 2),
        稳: recs['稳'].slice(0, 3),
        保: recs['保'].slice(0, 3)
      };
    });

    return {
      studentInfo: student,
      timestamp: new Date().toISOString(),
      scores: {
        总分: score,
        位次: rank,
        本科线差: score - 368,
        特控线差: score - 510
      },
      所有方向: result,
      专业推荐: majorRecs,
      advice: this._generateAdvice(student)
    };
  },

  /**
   * 生成个性化建议
   */
  _generateAdvice(student) {
    const { score, rank, scores } = student;
    const lines = [];
    
    const top2 = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 2).map(e => `${e[0]}${e[1]}分`).join('、');
    const weak2 = Object.entries(scores).sort((a, b) => a[1] - b[1]).slice(0, 2).map(e => `${e[0]}${e[1]}分`).join('、');
    
    lines.push(`📊 成绩分析：总分${score}分，全区排名${rank}，高本科线${score - 368}分，比特控线低${510 - score}分。`);
    lines.push(`💪 强项科目：${top2}`);
    lines.push(`⚠️ 弱项科目：${weak2}`);
    lines.push(``);
    lines.push(`🎯 志愿策略：`);
    lines.push(`• 提前批（定向师范）和本科普通批互不影响，可以同时填报。`);
    lines.push(`• 建议提前批填1-2所定向师范院校冲稳，普通批按冲稳保梯度填报。`);
    lines.push(`• 公办本科为主，你的位次76054在众多广西公办二本中有较多选择。`);
    lines.push(``);
    lines.push(`🏫 推荐梯度（综合）：`);
    lines.push(`• 冲：南宁师范大学(定向师范) / 广西科技大学(工科)`);
    lines.push(`• 稳：玉林师范学院 / 北部湾大学 / 广西财经学院 / 右江民族医学院`);
    lines.push(`• 保：河池学院 / 广西民族师范学院 / 梧州学院 / 百色学院`);

    return lines.join('\n');
  }
};

// ============================================================
// 4. 学生数据（默认预填）
// ============================================================
const DEFAULT_STUDENT = {
  name: '广西考生',
  province: '广西',
  city: '玉林市博白县',
  gender: '女',
  family: '普通工人家庭',
  subject: '物理类',
  year: 2026,
  score: 489,
  rank: 76054,
  scores: {
    语文: 102,
    数学: 74,
    英语: 113,
    物理: 50,
    化学: 70,
    生物: 80
  },
  targetBatches: ['提前批', '本科批'],
  targetTypes: ['定向师范', '工科'],
  targetMajors: ['电气自动化', '机械', '电子信息', '新能源'],
  requirement: '公办本科'
};

// 浏览器环境导出到全局
if (typeof window !== 'undefined') {
  window.GX_LINES_2026 = GX_LINES_2026;
  window.SCHOOL_DATA_2025 = SCHOOL_DATA_2025;
  window.RECOMMEND_ENGINE = RECOMMEND_ENGINE;
  window.DEFAULT_STUDENT = DEFAULT_STUDENT;
}
// Node.js 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GX_LINES_2026, SCHOOL_DATA_2025, RECOMMEND_ENGINE, DEFAULT_STUDENT };
}
