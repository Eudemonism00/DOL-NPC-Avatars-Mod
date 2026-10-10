// ==========================================
// NPC Avatars Mod 核心配置
// ==========================================
window.CharStyleConfig = {
    storageKey: "dolmod_custom_avatar_styles",

    // 检查是否安装并启用了 ModI18N
    isZh: function() {
        return !!(window.modUtils && window.modUtils.getMod && window.modUtils.getMod('ModI18N'));
    },

    // 风格配置（中英文均保持原名）
    styles: {
        "default":    { name: "Default",    passage: "NPCAvatarsMod_Default" },
        "maplebirch": { name: "Maplebirch", passage: "NPCAvatarsMod_Maplebirch" },
        "cici":       { name: "cici",       passage: "NPCAvatarsMod_Cici" },
        "jiala":      { name: "加辣",      passage: "NPCAvatarsMod_jiala" }
    },

    // 角色资源列表：你在 supported 数组里手动修改哪些有图
    // 不在 supported 里的风格，在下拉选项中完全不会出现
    characters: [
        { id: "Robin", nameZh: "罗宾", nameEn: "Robin", supported: ["default"] },
        { id: "Whitney", nameZh: "惠特尼", nameEn: "Whitney", supported: ["default", "cici"] },
        { id: "Eden", nameZh: "伊甸", nameEn: "Eden", supported: ["default", "cici"] },
        { id: "Kylar", nameZh: "凯拉尔", nameEn: "Kylar", supported: ["default"] },
        { id: "Sydney", nameZh: "悉尼", nameEn: "Sydney", supported: ["default"] },
        { id: "Avery", nameZh: "艾弗里", nameEn: "Avery", supported: ["default"] },
        { id: "Great Hawk", nameZh: "巨鹰", nameEn: "Great Hawk", supported: ["default"] },
        { id: "Black Wolf", nameZh: "黑狼", nameEn: "Black Wolf", supported: ["default"] },
        { id: "Alex", nameZh: "艾利克斯", nameEn: "Alex", supported: ["default"] },
        { id: "Gwylan", nameZh: "格威岚", nameEn: "Gwylan", supported: ["default"] },
        { id: "Bailey", nameZh: "贝利", nameEn: "Bailey", supported: ["default"] },
        { id: "Briar", nameZh: "布莱尔", nameEn: "Briar", supported: ["default"] },
        { id: "Charlie", nameZh: "查里", nameEn: "Charlie", supported: ["default"] },
        { id: "Darryl", nameZh: "达里尔", nameEn: "Darryl", supported: ["default"] },
        { id: "Doren", nameZh: "多伦", nameEn: "Doren", supported: ["default"] },
        { id: "Harper", nameZh: "哈珀", nameEn: "Harper", supported: ["default"] },
        { id: "Jordan", nameZh: "约旦", nameEn: "Jordan", supported: ["default"] },
        { id: "Landry", nameZh: "兰德里", nameEn: "Landry", supported: ["default"] },
        { id: "Leighton", nameZh: "礼顿", nameEn: "Leighton", supported: ["default"] },
        { id: "Mason", nameZh: "梅森", nameEn: "Mason", supported: ["default", "cici"] },
        { id: "Morgan", nameZh: "摩根", nameEn: "Morgan", supported: ["default"] },
        { id: "River", nameZh: "瑞沃", nameEn: "River", supported: ["default"] },
        { id: "Sam", nameZh: "萨姆", nameEn: "Sam", supported: ["default"] },
        { id: "Sirris", nameZh: "西里斯", nameEn: "Sirris", supported: ["default"] },
        { id: "Winter", nameZh: "温特", nameEn: "Winter", supported: ["default"] },
        { id: "Niki", nameZh: "尼奇", nameEn: "Niki", supported: ["default"] },
        { id: "Quinn", nameZh: "奎恩", nameEn: "Quinn", supported: ["default"] },
        { id: "Remy", nameZh: "雷米", nameEn: "Remy", supported: ["default"] },
        { id: "Wren", nameZh: "伦恩", nameEn: "Wren", supported: ["default"] },
        { id: "Zephyr", nameZh: "泽菲尔", nameEn: "Zephyr", supported: ["default"] },
        { id: "Ivory Wraith", nameZh: "象牙怨灵",   nameEn: "Ivory Wraith", supported: ["default", "jiala"] },
        { id: "Night Monster", nameZh: "夜魔", nameEn: "Night Monster", supported: ["maplebirch"] }
    ],

    getAll: function() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey)) || {};
        } catch (e) {
            return {};
        }
    },

    // 智能获取角色当前生效风格
    getStyle: function(charName) {
        if (!charName) return null;
        var charStr = charName.toString();
        var charInfo = this.characters.find(c => c.id.toLowerCase() === charStr.toLowerCase());

        // 如果该角色完全没有任何图，返回 null
        if (!charInfo || !charInfo.supported || charInfo.supported.length === 0) return null;

        var settings = this.getAll();
        var userChoice = settings[charInfo.id];

        // 1. 玩家自选且有图
        if (userChoice && charInfo.supported.includes(userChoice)) {
            return userChoice;
        }
        // 2. 玩家未选或选了没图的，优先回退到 default（如果 default 有图）
        if (charInfo.supported.includes("default")) {
            return "default";
        }
        // 3. default 也没图时，自动选该角色有的第一个风格
        return charInfo.supported[0];
    },

    setStyle: function(charName, style) {
        var settings = this.getAll();
        settings[charName] = style;
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(settings));
        } catch (e) {}
    },

    setAll: function(style) {
        var settings = this.getAll();
        this.characters.forEach(c => {
            if (c.supported.includes(style)) {
                settings[c.id] = style;
            }
        });
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(settings));
        } catch (e) {}
    },

    resetAll: function() {
        try {
            localStorage.removeItem(this.storageKey);
        } catch (e) {}
    }
};
