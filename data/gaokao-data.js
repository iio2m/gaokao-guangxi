/**
 * 广西高考志愿填报数据引擎 v1.0
 * 专为广西2026物理类考生设计
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
    
    // 分析强项
    const strengths = Object.entries(scores)
      .map(([subject, score]) => ({ subject, score }))
      .sort((a, b) => b.score - a.score);

    // 生物80 > 英语113 > 语文102 > 化学70 > 数学74 > 物理50
    // 推荐基于强项
    if (scores.生物 >= 75) {
      recommendations.push({
        major: '生物科学(师范)',
        reason: '你的生物80分是六科最强项，学生物师范最匹配',
        suitability: '★★★★★'
      });
      recommendations.push({
        major: '生物工程/生物技术',
        reason: '生物成绩好，工科方向可选生物工程、制药工程',
        suitability: '★★★★'
      });
    }
    if (scores.化学 >= 65) {
      recommendations.push({
        major: '化学(师范)',
        reason: '化学70分，中等偏上，可考虑化学师范',
        suitability: '★★★★'
      });
      recommendations.push({
        major: '制药工程/食品科学与工程',
        reason: '化学基础好，适合化工、制药类工科',
        suitability: '★★★★'
      });
    }
    if (scores.英语 >= 100) {
      recommendations.push({
        major: '小学教育(师范)',
        reason: '英语113分是强项，当小学老师英语优势明显',
        suitability: '★★★★'
      });
    }

    return recommendations;
  },

  /**
   * 生成完整志愿方案
   */
  generatePlan(student) {
    const { score, rank, batch, type, scores } = student;
    
    const recs = this.recommend(score, rank, batch, type);
    const majorRecs = this.recommendMajors(scores);

    return {
      studentInfo: student,
      timestamp: new Date().toISOString(),
      scores: {
        总分: score,
        位次: rank,
        本科线差: score - 368,
        特控线差: score - 510
      },
      定向师范: {
        冲: recs['冲'].slice(0, 2),
        稳: recs['稳'].slice(0, 3),
        保: recs['保'].slice(0, 3)
      },
      工科: {
        冲: this.recommend(score, rank, '本科批', '工科')['冲'].slice(0, 3),
        稳: this.recommend(score, rank, '本科批', '工科')['稳'].slice(0, 3),
        保: this.recommend(score, rank, '本科批', '工科')['保'].slice(0, 3)
      },
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
    
    lines.push(`📊 你的成绩分析：总分${score}分，全区排名${rank}，高本科线${score - 368}分，比特控线低${510 - score}分。`);
    lines.push(``);
    lines.push(`🎯 核心建议：`);
    
    if (scores.数学 < 80 && scores.物理 < 60) {
      lines.push(`• 你的数学${scores.数学}分、物理${scores.物理}分相对薄弱，纯工科（电气/机械/自动化）大学期间要学高等数学、大学物理、力学等，会有较大挑战。`);
      lines.push(`• 建议优先考虑定向师范方向，工作稳定有编制，且与你的强项科目（生物${scores.生物}分）更匹配。`);
      lines.push(`• 如果坚持工科，建议选择对数学物理要求相对较低的方向：食品科学、制药工程、生物工程。`);
    }
    
    lines.push(`• 普通工人家庭，定向师范免学费+生活补助+包分配，经济压力最小。`);
    lines.push(`• 提前批（定向师范）和本科普通批（工科）互不影响，建议提前批填师范，普通批填工科。`);
    lines.push(``);
    lines.push(`🏫 定向师范推荐：玉林师范学院（主攻）> 河池学院 > 广西民族师范学院`);
    lines.push(`🔧 工科推荐：北部湾大学 > 桂林航天工业学院 > 梧州学院`);

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
