export const translations = {
  en: {
    // 导航
    nav: {
      home: 'Home',
      features: 'Features',
      architecture: 'Architecture',
      download: 'Download',
      docs: 'Docs',
      github: 'GitHub',
    },

    // 首页
    hero: {
      title: 'MaudelClaw',
      subtitle: 'Cross-Platform AI Agent System',
      description: 'Ready to use out of the box, beautiful interface, powerful features. Fully compatible with OpenClaw ecosystem. Privacy-first, powered by SOTA models.',
      cta: {
        download: 'Download Now',
        learn: 'Learn More',
        github: 'Star on GitHub',
      },
      badge: 'Open Source • Privacy First • OpenClaw Compatible',
      // 核心优势
      highlights: {
        readyToUse: 'Ready to Use',
        beautifulUI: 'Beautiful Interface',
        powerful: 'Powerful Features',
        compatible: 'OpenClaw Compatible',
      },
      // 统计数据
      stats: {
        crossPlatform: { label: 'Cross-Platform', value: 'Win/Mac' },
        privacy: { label: 'Privacy First', value: '100% Local' },
        aiPowered: { label: 'AI Powered', value: 'SOTA Models' },
        ecosystem: { label: 'Ecosystem', value: 'OpenClaw' },
      },
    },

    // 特性部分
    features: {
      title: 'Core Features',
      subtitle: 'Powerful capabilities designed for the future of AI automation',

      crossPlatform: {
        title: 'Cross-Platform Support',
        description: 'Native support for Windows and macOS with desktop app (Tauri) and web version. Ready to use out of the box.',
      },

      localDeployment: {
        title: 'Fully Local Deployment',
        description: 'Your data never leaves your device. Supports SOTA models and local AI models.',
      },

      tools: {
        title: 'Intelligent Tool Integration',
        description: 'Browser automation, document processing, email management, voice input, image processing, and web search.',
      },

      skills: {
        title: 'SKILL System',
        description: 'Create, manage, and share skills. Persist expert knowledge and reuse workflows across sessions.',
      },

      memory: {
        title: 'Memory System',
        description: 'Long-term conversation memory for personalized experiences and deep context understanding.',
      },

      knowledgeBase: {
        title: 'Knowledge Base RAG',
        description: 'Intelligent document retrieval and Q&A with enhanced table and image recognition.',
      },

      im: {
        title: 'IM Integration',
        description: 'Connect with Feishu, DingTalk, and Telegram bots. Remote task creation and smart notifications.',
      },

      security: {
        title: 'Data Security',
        description: 'Local-first storage, fully private deployment options, and transparent, auditable operations.',
      },
    },

    // 架构部分
    architecture: {
      title: 'System Architecture',
      subtitle: 'Built with modern technologies for reliability and performance',

      threeComponent: {
        title: 'Three-Component Architecture',
        description: 'MaudelClaw consists of three main components working together seamlessly',
        halo: 'MaudelClaw Desktop Client',
        happy: 'Mobile Client',
        agentFlow: 'Agent Flow Backend',
      },

      techStack: {
        title: 'Technology Stack',
        frontend: 'Frontend',
        desktop: 'Desktop Framework',
        backend: 'Backend API',
        sdk: 'Agent SDK',
        database: 'Database',
        protocol: 'Protocol',
      },

      workflow: {
        title: 'How It Works',
        step1: 'User Input',
        step1Desc: 'Natural language task description',
        step2: 'Task Understanding',
        step2Desc: 'AI analyzes requirements and plans execution',
        step3: 'Tool Invocation',
        step3Desc: 'Automatically calls relevant tools',
        step4: 'Execution Feedback',
        step4Desc: 'Real-time result updates',
        step5: 'Iteration & Optimization',
        step5Desc: 'Adjusts strategy until goal is achieved',
      },
    },

    // 下载部分
    download: {
      title: 'Download MaudelClaw',
      subtitle: 'Choose your platform and get started in minutes',

      platform: {
        macosArm: {
          title: 'macOS (Apple Silicon)',
          version: 'For M1/M2/M3/M4 chips • Requires macOS 10.15 or later',
          download: 'Download for Apple Silicon',
        },
        macosIntel: {
          title: 'macOS (Intel)',
          version: 'For Intel-based Macs • Requires macOS 10.15 or later',
          download: 'Download for Intel Mac',
        },
        windows: {
          title: 'Windows',
          version: 'Requires Windows 10 or later',
          download: 'Download for Windows',
        },
      },

      requirements: {
        title: 'System Requirements',
        ram: '8GB RAM (16GB recommended)',
        storage: '2GB available storage',
        network: 'Internet connection for cloud models',
        optional: 'Local LLM support with Ollama (optional)',
      },

      quickStart: {
        title: 'Quick Start',
        step1: 'Download and install MaudelClaw',
        step2: 'Choose your AI model (local or cloud)',
        step3: 'Start chatting with your AI agent',
      },
    },

    // 页脚
    footer: {
      description: 'Open-source AI Agent system for the privacy-conscious',
      links: {
        documentation: 'Documentation',
        community: 'Community',
        github: 'GitHub',
        twitter: 'Twitter',
      },
      copyright: '© 2026 MaudelClaw. All rights reserved.',
      // SEO关键词
      seo: {
        title: 'Related Keywords',
        keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, OpenClaw Install, AI Agent, LLM Desktop App, Claude Desktop, Privacy-First AI, Local AI Assistant, Open Source AI Agent',
      },
    },

    // FAQ部分
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about MaudelClaw',
      whatIs: {
        question: 'What is MaudelClaw?',
        answer: 'MaudelClaw is a cross-platform AI Agent desktop application that is fully compatible with the OpenClaw ecosystem. It is open source, privacy-first, and ready to use out of the box with a beautiful interface.',
      },
      compatible: {
        question: 'Is MaudelClaw compatible with OpenClaw?',
        answer: 'Yes, MaudelClaw is fully compatible with the OpenClaw ecosystem. It can work with OpenClaw configurations, skills, and integrations seamlessly.',
      },
      install: {
        question: 'How to install OpenClaw Desktop?',
        answer: 'You can install MaudelClaw (OpenClaw Desktop) by downloading the appropriate version for your platform: Apple Silicon Mac (M1/M2/M3/M4), Intel Mac, or Windows. The installation is straightforward and requires macOS 10.15+ or Windows 10+.',
      },
      free: {
        question: 'Is MaudelClaw free and open source?',
        answer: 'Yes, MaudelClaw is completely free and open source. You can download it from GitHub and the source code is available for review and contribution.',
      },
      models: {
        question: 'What AI models does MaudelClaw support?',
        answer: 'MaudelClaw supports both SOTA (state-of-the-art) cloud AI models and local AI models through Ollama. This gives users flexibility to choose between powerful cloud models or privacy-focused local deployment.',
      },
    },
  },

  zh: {
    // 导航
    nav: {
      home: '首页',
      features: '功能特性',
      architecture: '系统架构',
      download: '立即下载',
      docs: '文档',
      github: 'GitHub',
    },

    // 首页
    hero: {
      title: 'MaudelClaw',
      subtitle: '跨平台 AI Agent 智能体系统',
      description: '开箱即用，界面美观，功能强大。完全兼容 OpenClaw 生态。隐私优先，支持 SOTA 模型和本地 AI 模型。',
      cta: {
        download: '立即下载',
        learn: '了解更多',
        github: 'GitHub 点赞',
      },
      badge: '开源免费 • 隐私优先 • 兼容 OpenClaw',
      // 核心优势
      highlights: {
        readyToUse: '开箱即用',
        beautifulUI: '界面美观',
        powerful: '功能强大',
        compatible: '兼容 OpenClaw',
      },
      // 统计数据
      stats: {
        crossPlatform: { label: '跨平台', value: 'Win/Mac' },
        privacy: { label: '隐私优先', value: '100% 本地' },
        aiPowered: { label: 'AI 驱动', value: 'SOTA 模型' },
        ecosystem: { label: '生态系统', value: 'OpenClaw' },
      },
    },

    // 特性部分
    features: {
      title: '核心特性',
      subtitle: '面向未来 AI 自动化的强大能力',

      crossPlatform: {
        title: '跨平台支持',
        description: '原生支持 Windows 和 macOS，提供桌面应用（Tauri）和网页版本，开箱即用。',
      },

      localDeployment: {
        title: '完全本地部署',
        description: '数据不出本地，隐私安全。支持 SOTA 模型和本地 AI 模型。',
      },

      tools: {
        title: '智能工具集成',
        description: '浏览器自动化、文档处理、邮件管理、语音输入、图像处理、网络搜索等丰富工具。',
      },

      skills: {
        title: 'SKILL 技能系统',
        description: '创建、管理和发布技能，持久化专家经验，实现知识复用与分享。',
      },

      memory: {
        title: '记忆系统',
        description: '长期对话记忆，个性化体验优化，深度理解上下文。',
      },

      knowledgeBase: {
        title: '知识库 RAG',
        description: '文档智能检索与问答，表格、图片识别增强，本地知识库管理。',
      },

      im: {
        title: 'IM 集成',
        description: '飞书、钉钉、Telegram 机器人接入，远程创建任务，智能执行与通知。',
      },

      security: {
        title: '数据安全',
        description: '本地优先存储，支持完全私有化部署，操作透明可控可审计。',
      },
    },

    // 架构部分
    architecture: {
      title: '系统架构',
      subtitle: '采用现代技术栈构建，可靠且高性能',

      threeComponent: {
        title: '三组件架构',
        description: 'MaudelClaw 由三个主要组件无缝协作组成',
        halo: 'MaudelClaw 桌面客户端',
        happy: '移动端',
        agentFlow: 'Agent Flow 后端',
      },

      techStack: {
        title: '技术栈',
        frontend: '前端',
        desktop: '桌面框架',
        backend: '后端 API',
        sdk: 'Agent SDK',
        database: '数据库',
        protocol: '协议',
      },

      workflow: {
        title: '工作原理',
        step1: '用户输入',
        step1Desc: '自然语言描述任务',
        step2: '任务理解',
        step2Desc: 'AI 分析需求，制定执行计划',
        step3: '工具调用',
        step3Desc: '自动调用相关工具',
        step4: '执行反馈',
        step4Desc: '实时返回执行结果',
        step5: '迭代优化',
        step5Desc: '根据结果调整策略，直到达成目标',
      },
    },

    // 下载部分
    download: {
      title: '下载 MaudelClaw',
      subtitle: '选择您的平台，几分钟即可开始使用',

      platform: {
        macosArm: {
          title: 'macOS (Apple Silicon)',
          version: '适用于 M1/M2/M3/M4 芯片 • 需要 macOS 10.15 或更高版本',
          download: '下载 Apple Silicon 版本',
        },
        macosIntel: {
          title: 'macOS (Intel)',
          version: '适用于 Intel 芯片 Mac • 需要 macOS 10.15 或更高版本',
          download: '下载 Intel 版本',
        },
        windows: {
          title: 'Windows',
          version: '需要 Windows 10 或更高版本',
          download: '下载 Windows 版本',
        },
      },

      requirements: {
        title: '系统要求',
        ram: '8GB 内存（推荐 16GB）',
        storage: '2GB 可用存储空间',
        network: '云端模型需要网络连接',
        optional: '本地 LLM 支持（需安装 Ollama）',
      },

      quickStart: {
        title: '快速开始',
        step1: '下载并安装 MaudelClaw',
        step2: '选择您的 AI 模型（本地或云端）',
        step3: '开始与您的 AI 代理对话',
      },
    },

    // 页脚
    footer: {
      description: '面向注重隐私的用户的开源 AI Agent 系统',
      links: {
        documentation: '文档',
        community: '社区',
        github: 'GitHub',
        twitter: 'Twitter',
      },
      copyright: '© 2026 MaudelClaw. 保留所有权利。',
      // SEO关键词
      seo: {
        title: '相关关键词',
        keywords: 'OpenClaw, Agentic AI, 智能体, OpenClaw 桌面版, OpenClaw 安装, AI Agent, 大模型桌面应用, Claude 桌面版, 隐私优先 AI, 本地 AI 助手, 开源 AI Agent, OpenClaw 生态',
      },
    },

    // FAQ部分
    faq: {
      title: '常见问题',
      subtitle: '关于 MaudelClaw 您需要了解的一切',
      whatIs: {
        question: 'MaudelClaw 是什么？',
        answer: 'MaudelClaw 是一款跨平台 AI Agent 桌面应用，完全兼容 OpenClaw 生态系统。它是开源的、隐私优先的，拥有美观的界面，开箱即用。',
      },
      compatible: {
        question: 'MaudelClaw 兼容 OpenClaw 吗？',
        answer: '是的，MaudelClaw 完全兼容 OpenClaw 生态系统。它可以无缝地使用 OpenClaw 的配置、技能和集成。',
      },
      install: {
        question: '如何安装 OpenClaw 桌面版？',
        answer: '您可以通过下载适合您平台的版本来安装 MaudelClaw（OpenClaw 桌面版）：Apple Silicon Mac (M1/M2/M3/M4)、Intel Mac 或 Windows。安装非常简单，需要 macOS 10.15+ 或 Windows 10+。',
      },
      free: {
        question: 'MaudelClaw 是免费开源的吗？',
        answer: '是的，MaudelClaw 完全免费且开源。您可以从 GitHub 下载，源代码可供审查和贡献。',
      },
      models: {
        question: 'MaudelClaw 支持哪些 AI 模型？',
        answer: 'MaudelClaw 同时支持 SOTA（最先进的）云端 AI 模型和通过 Ollama 运行的本地 AI 模型。这让用户可以灵活地在强大的云端模型或注重隐私的本地部署之间选择。',
      },
    },
  },

  // 繁體中文
  'zh-TW': {
    nav: {
      home: '首頁',
      features: '功能特性',
      architecture: '系統架構',
      download: '立即下載',
      docs: '文檔',
      github: 'GitHub',
    },
    hero: {
      title: 'MaudelClaw',
      subtitle: '跨平台 AI Agent 智能體系統',
      description: '開箱即用，界面美觀，功能強大。完全兼容 OpenClaw 生態。隱私優先，支持 SOTA 模型和本地 AI 模型。',
      cta: {
        download: '立即下載',
        learn: '了解更多',
        github: 'GitHub 點讚',
      },
      badge: '開源免費 • 隱私優先 • 兼容 OpenClaw',
      highlights: {
        readyToUse: '開箱即用',
        beautifulUI: '界面美觀',
        powerful: '功能強大',
        compatible: '兼容 OpenClaw',
      },
      stats: {
        crossPlatform: { label: '跨平台', value: 'Win/Mac' },
        privacy: { label: '隱私優先', value: '100% 本地' },
        aiPowered: { label: 'AI 驅動', value: 'SOTA 模型' },
        ecosystem: { label: '生態系統', value: 'OpenClaw' },
      },
    },
    features: {
      title: '核心特性',
      subtitle: '面向未來 AI 自動化的強大能力',
      crossPlatform: { title: '跨平台支持', description: '原生支持 Windows 和 macOS，開箱即用。' },
      localDeployment: { title: '完全本地部署', description: '數據不出本地，隱私安全。支持 SOTA 模型和本地 AI 模型。' },
      tools: { title: '智能工具集成', description: '瀏覽器自動化、文檔處理、郵件管理等豐富工具。' },
      skills: { title: 'SKILL 技能系統', description: '創建、管理和發布技能，實現知識復用與分享。' },
      memory: { title: '記憶系統', description: '長期對話記憶，深度理解上下文。' },
      knowledgeBase: { title: '知識庫 RAG', description: '文檔智能檢索與問答。' },
      im: { title: 'IM 集成', description: '飛書、釘釘、Telegram 機器人接入。' },
      security: { title: '數據安全', description: '本地優先存儲，支持完全私有化部署。' },
    },
    architecture: {
      title: '系統架構',
      subtitle: '採用現代技術棧構建，可靠且高性能',
      threeComponent: {
        title: '三組件架構',
        description: 'MaudelClaw 由三個主要組件無縫協作組成',
        halo: 'MaudelClaw 桌面客戶端',
        happy: '移動端',
        agentFlow: 'Agent Flow 後端',
      },
      techStack: { title: '技術棧', frontend: '前端', desktop: '桌面框架', backend: '後端 API', sdk: 'Agent SDK', database: '數據庫', protocol: '協議' },
      workflow: {
        title: '工作原理',
        step1: '用戶輸入', step1Desc: '自然語言描述任務',
        step2: '任務理解', step2Desc: 'AI 分析需求，制定執行計劃',
        step3: '工具調用', step3Desc: '自動調用相關工具',
        step4: '執行反饋', step4Desc: '實時返回執行結果',
        step5: '迭代優化', step5Desc: '根據結果調整策略，直到達成目標',
      },
    },
    download: {
      title: '下載 MaudelClaw',
      subtitle: '選擇您的平台，幾分鐘即可開始使用',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: '適用於 M1/M2/M3/M4 芯片', download: '下載 Apple Silicon 版本' },
        macosIntel: { title: 'macOS (Intel)', version: '適用於 Intel 芯片 Mac', download: '下載 Intel 版本' },
        windows: { title: 'Windows', version: '需要 Windows 10 或更高版本', download: '下載 Windows 版本' },
      },
      requirements: { title: '系統要求', ram: '8GB 內存（推薦 16GB）', storage: '2GB 可用存儲空間', network: '雲端模型需要網絡連接', optional: '本地 LLM 支持（需安裝 Ollama）' },
      quickStart: { title: '快速開始', step1: '下載並安裝 MaudelClaw', step2: '選擇您的 AI 模型', step3: '開始與您的 AI 代理對話' },
    },
    footer: {
      description: '面向注重隱私的用戶的開源 AI Agent 系統',
      links: { documentation: '文檔', community: '社區', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. 保留所有權利。',
      seo: { title: '相關關鍵詞', keywords: 'OpenClaw, Agentic AI, 智能體, OpenClaw 桌面版, AI Agent, 本地 AI 助手' },
    },
    faq: {
      title: '常見問題',
      subtitle: '關於 MaudelClaw 您需要了解的一切',
      whatIs: { question: 'MaudelClaw 是什麼？', answer: 'MaudelClaw 是一款跨平台 AI Agent 桌面應用，完全兼容 OpenClaw 生態系統。它是開源的、隱私優先的，擁有美觀的界面，開箱即用。' },
      compatible: { question: 'MaudelClaw 兼容 OpenClaw 嗎？', answer: '是的，MaudelClaw 完全兼容 OpenClaw 生態系統。' },
      install: { question: '如何安裝 OpenClaw 桌面版？', answer: '您可以下載適合您平台的版本：Apple Silicon Mac、Intel Mac 或 Windows。' },
      free: { question: 'MaudelClaw 是免費開源的嗎？', answer: '是的，MaudelClaw 完全免費且開源。' },
      models: { question: 'MaudelClaw 支持哪些 AI 模型？', answer: '支持 SOTA 雲端 AI 模型和通過 Ollama 運行的本地 AI 模型。' },
    },
  },

  // 日本語
  ja: {
    nav: { home: 'ホーム', features: '機能', architecture: 'アーキテクチャ', download: 'ダウンロード', docs: 'ドキュメント', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'クロスプラットフォーム AI エージェントシステム',
      description: 'すぐに使える、美しいインターフェース、強力な機能。OpenClawエコシステムと完全互換。プライバシー優先。',
      cta: { download: '今すぐダウンロード', learn: '詳細を見る', github: 'GitHubでスター' },
      badge: 'オープンソース • プライバシー優先 • OpenClaw互換',
      highlights: { readyToUse: 'すぐに使える', beautifulUI: '美しいUI', powerful: '強力な機能', compatible: 'OpenClaw互換' },
      stats: {
        crossPlatform: { label: 'クロスプラットフォーム', value: 'Win/Mac' },
        privacy: { label: 'プライバシー優先', value: '100% ローカル' },
        aiPowered: { label: 'AI搭載', value: 'SOTAモデル' },
        ecosystem: { label: 'エコシステム', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'コア機能', subtitle: 'AI自動化の未来に向けた強力な機能',
      crossPlatform: { title: 'クロスプラットフォーム対応', description: 'WindowsとmacOSをネイティブサポート。' },
      localDeployment: { title: '完全ローカルデプロイ', description: 'データはデバイスから出ません。SOTAモデルとローカルAIモデルをサポート。' },
      tools: { title: 'インテリジェントツール統合', description: 'ブラウザ自動化、ドキュメント処理など。' },
      skills: { title: 'スキルシステム', description: 'スキルの作成、管理、共有。' },
      memory: { title: 'メモリシステム', description: '長期会話メモリ。' },
      knowledgeBase: { title: 'ナレッジベースRAG', description: 'インテリジェントなドキュメント検索。' },
      im: { title: 'IM統合', description: 'Telegramボット接続。' },
      security: { title: 'データセキュリティ', description: 'ローカルファーストストレージ。' },
    },
    architecture: {
      title: 'システムアーキテクチャ', subtitle: '信頼性とパフォーマンスのための最新技術スタック',
      threeComponent: { title: '3コンポーネントアーキテクチャ', description: 'MaudelClawは3つの主要コンポーネントで構成', halo: 'MaudelClaw デスクトップ', happy: 'モバイル', agentFlow: 'Agent Flow バックエンド' },
      techStack: { title: '技術スタック', frontend: 'フロントエンド', desktop: 'デスクトップフレームワーク', backend: 'バックエンドAPI', sdk: 'Agent SDK', database: 'データベース', protocol: 'プロトコル' },
      workflow: { title: '仕組み', step1: 'ユーザー入力', step1Desc: '自然言語でのタスク説明', step2: 'タスク理解', step2Desc: 'AIが要件を分析', step3: 'ツール呼び出し', step3Desc: '関連ツールを自動呼び出し', step4: '実行フィードバック', step4Desc: 'リアルタイム結果更新', step5: '反復と最適化', step5Desc: '目標達成まで戦略調整' },
    },
    download: {
      title: 'MaudelClawをダウンロード', subtitle: 'プラットフォームを選んで数分で開始',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'M1/M2/M3/M4チップ用', download: 'Apple Silicon版をダウンロード' },
        macosIntel: { title: 'macOS (Intel)', version: 'Intel Mac用', download: 'Intel版をダウンロード' },
        windows: { title: 'Windows', version: 'Windows 10以降が必要', download: 'Windows版をダウンロード' },
      },
      requirements: { title: 'システム要件', ram: '8GB RAM（16GB推奨）', storage: '2GBの空き容量', network: 'クラウドモデルにはインターネット接続', optional: 'OllamaでローカルLLMサポート（オプション）' },
      quickStart: { title: 'クイックスタート', step1: 'MaudelClawをダウンロードしてインストール', step2: 'AIモデルを選択', step3: 'AIエージェントとのチャットを開始' },
    },
    footer: {
      description: 'プライバシー重視のユーザー向けオープンソースAIエージェントシステム',
      links: { documentation: 'ドキュメント', community: 'コミュニティ', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. All rights reserved.',
      seo: { title: '関連キーワード', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'よくある質問', subtitle: 'MaudelClawについて知っておくべきこと',
      whatIs: { question: 'MaudelClawとは？', answer: 'MaudelClawはOpenClawエコシステムと完全互換のクロスプラットフォームAIエージェントデスクトップアプリケーションです。' },
      compatible: { question: 'MaudelClawはOpenClawと互換性がありますか？', answer: 'はい、MaudelClawはOpenClawエコシステムと完全に互換性があります。' },
      install: { question: 'OpenClaw Desktopのインストール方法は？', answer: 'Apple Silicon Mac、Intel Mac、またはWindows用のバージョンをダウンロードできます。' },
      free: { question: 'MaudelClawは無料でオープンソースですか？', answer: 'はい、MaudelClawは完全に無料でオープンソースです。' },
      models: { question: 'MaudelClawはどのAIモデルをサポートしていますか？', answer: 'SOTAクラウドAIモデルとOllamaを通じたローカルAIモデルの両方をサポートしています。' },
    },
  },

  // Français
  fr: {
    nav: { home: 'Accueil', features: 'Fonctionnalités', architecture: 'Architecture', download: 'Télécharger', docs: 'Docs', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'Système d\'Agent IA Multiplateforme',
      description: 'Prêt à l\'emploi, interface magnifique, fonctionnalités puissantes. Entièrement compatible avec l\'écosystème OpenClaw. Confidentialité d\'abord.',
      cta: { download: 'Télécharger', learn: 'En savoir plus', github: 'Star sur GitHub' },
      badge: 'Open Source • Confidentialité • Compatible OpenClaw',
      highlights: { readyToUse: 'Prêt à l\'emploi', beautifulUI: 'Interface Magnifique', powerful: 'Fonctionnalités Puissantes', compatible: 'Compatible OpenClaw' },
      stats: {
        crossPlatform: { label: 'Multiplateforme', value: 'Win/Mac' },
        privacy: { label: 'Confidentialité', value: '100% Local' },
        aiPowered: { label: 'IA Puissante', value: 'Modèles SOTA' },
        ecosystem: { label: 'Écosystème', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'Fonctionnalités Principales', subtitle: 'Capacités puissantes pour l\'automatisation IA',
      crossPlatform: { title: 'Support Multiplateforme', description: 'Support natif Windows et macOS.' },
      localDeployment: { title: 'Déploiement Local Complet', description: 'Vos données ne quittent jamais votre appareil.' },
      tools: { title: 'Intégration d\'Outils Intelligents', description: 'Automatisation navigateur, traitement documents.' },
      skills: { title: 'Système de Compétences', description: 'Créer, gérer et partager des compétences.' },
      memory: { title: 'Système de Mémoire', description: 'Mémoire de conversation à long terme.' },
      knowledgeBase: { title: 'Base de Connaissances RAG', description: 'Récupération intelligente de documents.' },
      im: { title: 'Intégration IM', description: 'Connexion bots Telegram.' },
      security: { title: 'Sécurité des Données', description: 'Stockage local prioritaire.' },
    },
    architecture: {
      title: 'Architecture Système', subtitle: 'Construit avec des technologies modernes',
      threeComponent: { title: 'Architecture Trois Composants', description: 'MaudelClaw comprend trois composants principaux', halo: 'Client Desktop MaudelClaw', happy: 'Client Mobile', agentFlow: 'Backend Agent Flow' },
      techStack: { title: 'Stack Technologique', frontend: 'Frontend', desktop: 'Framework Desktop', backend: 'API Backend', sdk: 'Agent SDK', database: 'Base de données', protocol: 'Protocole' },
      workflow: { title: 'Comment ça fonctionne', step1: 'Entrée Utilisateur', step1Desc: 'Description de tâche en langage naturel', step2: 'Compréhension de Tâche', step2Desc: 'L\'IA analyse les exigences', step3: 'Invocation d\'Outils', step3Desc: 'Appelle automatiquement les outils pertinents', step4: 'Feedback d\'Exécution', step4Desc: 'Mise à jour des résultats en temps réel', step5: 'Itération & Optimisation', step5Desc: 'Ajuste la stratégie jusqu\'à l\'objectif' },
    },
    download: {
      title: 'Télécharger MaudelClaw', subtitle: 'Choisissez votre plateforme et commencez en minutes',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'Pour puces M1/M2/M3/M4', download: 'Télécharger pour Apple Silicon' },
        macosIntel: { title: 'macOS (Intel)', version: 'Pour Mac Intel', download: 'Télécharger pour Intel' },
        windows: { title: 'Windows', version: 'Nécessite Windows 10 ou supérieur', download: 'Télécharger pour Windows' },
      },
      requirements: { title: 'Configuration Requise', ram: '8 Go RAM (16 Go recommandés)', storage: '2 Go d\'espace disponible', network: 'Connexion internet pour modèles cloud', optional: 'Support LLM local avec Ollama (optionnel)' },
      quickStart: { title: 'Démarrage Rapide', step1: 'Télécharger et installer MaudelClaw', step2: 'Choisir votre modèle IA', step3: 'Commencer à discuter avec votre agent IA' },
    },
    footer: {
      description: 'Système d\'Agent IA open-source pour les soucieux de la confidentialité',
      links: { documentation: 'Documentation', community: 'Communauté', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. Tous droits réservés.',
      seo: { title: 'Mots-clés Associés', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'Questions Fréquentes', subtitle: 'Tout ce que vous devez savoir sur MaudelClaw',
      whatIs: { question: 'Qu\'est-ce que MaudelClaw?', answer: 'MaudelClaw est une application desktop d\'agent IA multiplateforme entièrement compatible avec l\'écosystème OpenClaw.' },
      compatible: { question: 'MaudelClaw est-il compatible avec OpenClaw?', answer: 'Oui, MaudelClaw est entièrement compatible avec l\'écosystème OpenClaw.' },
      install: { question: 'Comment installer OpenClaw Desktop?', answer: 'Vous pouvez télécharger la version appropriée pour Apple Silicon Mac, Intel Mac ou Windows.' },
      free: { question: 'MaudelClaw est-il gratuit et open-source?', answer: 'Oui, MaudelClaw est entièrement gratuit et open-source.' },
      models: { question: 'Quels modèles IA MaudelClaw supporte-t-il?', answer: 'Il supporte les modèles IA cloud SOTA et les modèles IA locaux via Ollama.' },
    },
  },

  // Deutsch
  de: {
    nav: { home: 'Startseite', features: 'Funktionen', architecture: 'Architektur', download: 'Herunterladen', docs: 'Dokumentation', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'Plattformübergreifendes KI-Agentensystem',
      description: 'Sofort einsatzbereit, schöne Oberfläche, leistungsstarke Funktionen. Vollständig kompatibel mit dem OpenClaw-Ökosystem. Datenschutz zuerst.',
      cta: { download: 'Jetzt Herunterladen', learn: 'Mehr Erfahren', github: 'Auf GitHub' },
      badge: 'Open Source • Datenschutz • OpenClaw-Kompatibel',
      highlights: { readyToUse: 'Sofort Einsatzbereit', beautifulUI: 'Schöne Oberfläche', powerful: 'Leistungsstarke Funktionen', compatible: 'OpenClaw-Kompatibel' },
      stats: {
        crossPlatform: { label: 'Plattformübergreifend', value: 'Win/Mac' },
        privacy: { label: 'Datenschutz', value: '100% Lokal' },
        aiPowered: { label: 'KI-gestützt', value: 'SOTA-Modelle' },
        ecosystem: { label: 'Ökosystem', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'Hauptfunktionen', subtitle: 'Leistungsstarke Fähigkeiten für die KI-Automatisierung',
      crossPlatform: { title: 'Plattformübergreifende Unterstützung', description: 'Native Unterstützung für Windows und macOS.' },
      localDeployment: { title: 'Vollständig Lokale Bereitstellung', description: 'Ihre Daten verlassen niemals Ihr Gerät.' },
      tools: { title: 'Intelligente Werkzeugintegration', description: 'Browser-Automatisierung, Dokumentenverarbeitung.' },
      skills: { title: 'Fähigkeitensystem', description: 'Erstellen, verwalten und teilen Sie Fähigkeiten.' },
      memory: { title: 'Gedächtnissystem', description: 'Langzeit-Gesprächsgedächtnis.' },
      knowledgeBase: { title: 'Wissensdatenbank RAG', description: 'Intelligente Dokumentenabfrage.' },
      im: { title: 'IM-Integration', description: 'Telegram-Bot-Verbindung.' },
      security: { title: 'Datensicherheit', description: 'Lokale Speicherung hat Vorrang.' },
    },
    architecture: {
      title: 'Systemarchitektur', subtitle: 'Mit modernen Technologien für Zuverlässigkeit',
      threeComponent: { title: 'Drei-Komponenten-Architektur', description: 'MaudelClaw besteht aus drei Hauptkomponenten', halo: 'MaudelClaw Desktop-Client', happy: 'Mobile-Client', agentFlow: 'Agent Flow Backend' },
      techStack: { title: 'Technologie-Stack', frontend: 'Frontend', desktop: 'Desktop-Framework', backend: 'Backend-API', sdk: 'Agent SDK', database: 'Datenbank', protocol: 'Protokoll' },
      workflow: { title: 'Funktionsweise', step1: 'Benutzereingabe', step1Desc: 'Aufgabenbeschreibung in natürlicher Sprache', step2: 'Aufgabenverständnis', step2Desc: 'KI analysiert Anforderungen', step3: 'Werkzeugaufruf', step3Desc: 'Ruft automatisch relevante Werkzeuge auf', step4: 'Ausführungsfeedback', step4Desc: 'Echtzeit-Ergebnisupdates', step5: 'Iteration & Optimierung', step5Desc: 'Passt Strategie bis zum Ziel an' },
    },
    download: {
      title: 'MaudelClaw Herunterladen', subtitle: 'Wählen Sie Ihre Plattform und starten Sie in Minuten',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'Für M1/M2/M3/M4-Chips', download: 'Für Apple Silicon herunterladen' },
        macosIntel: { title: 'macOS (Intel)', version: 'Für Intel-Macs', download: 'Für Intel herunterladen' },
        windows: { title: 'Windows', version: 'Erfordert Windows 10 oder höher', download: 'Für Windows herunterladen' },
      },
      requirements: { title: 'Systemanforderungen', ram: '8 GB RAM (16 GB empfohlen)', storage: '2 GB verfügbarer Speicher', network: 'Internetverbindung für Cloud-Modelle', optional: 'Lokale LLM-Unterstützung mit Ollama (optional)' },
      quickStart: { title: 'Schnellstart', step1: 'MaudelClaw herunterladen und installieren', step2: 'KI-Modell auswählen', step3: 'Mit KI-Agenten chatten' },
    },
    footer: {
      description: 'Open-Source-KI-Agentensystem für datenschutzbewusste Nutzer',
      links: { documentation: 'Dokumentation', community: 'Community', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. Alle Rechte vorbehalten.',
      seo: { title: 'Verwandte Schlüsselwörter', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'Häufig Gestellte Fragen', subtitle: 'Alles was Sie über MaudelClaw wissen müssen',
      whatIs: { question: 'Was ist MaudelClaw?', answer: 'MaudelClaw ist eine plattformübergreifende KI-Agenten-Desktop-Anwendung, die vollständig mit dem OpenClaw-Ökosystem kompatibel ist.' },
      compatible: { question: 'Ist MaudelClaw mit OpenClaw kompatibel?', answer: 'Ja, MaudelClaw ist vollständig mit dem OpenClaw-Ökosystem kompatibel.' },
      install: { question: 'Wie installiert man OpenClaw Desktop?', answer: 'Sie können die entsprechende Version für Apple Silicon Mac, Intel Mac oder Windows herunterladen.' },
      free: { question: 'Ist MaudelClaw kostenlos und open-source?', answer: 'Ja, MaudelClaw ist völlig kostenlos und open-source.' },
      models: { question: 'Welche KI-Modelle unterstützt MaudelClaw?', answer: 'Es unterstützt sowohl SOTA-Cloud-KI-Modelle als auch lokale KI-Modelle über Ollama.' },
    },
  },

  // Español
  es: {
    nav: { home: 'Inicio', features: 'Características', architecture: 'Arquitectura', download: 'Descargar', docs: 'Documentos', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'Sistema de Agente IA Multiplataforma',
      description: 'Listo para usar, interfaz hermosa, funciones potentes. Totalmente compatible con el ecosistema OpenClaw. Privacidad primero.',
      cta: { download: 'Descargar Ahora', learn: 'Más Información', github: 'GitHub' },
      badge: 'Código Abierto • Privacidad • Compatible con OpenClaw',
      highlights: { readyToUse: 'Listo para Usar', beautifulUI: 'Interfaz Hermosa', powerful: 'Funciones Potentes', compatible: 'Compatible OpenClaw' },
      stats: {
        crossPlatform: { label: 'Multiplataforma', value: 'Win/Mac' },
        privacy: { label: 'Privacidad', value: '100% Local' },
        aiPowered: { label: 'Potenciado por IA', value: 'Modelos SOTA' },
        ecosystem: { label: 'Ecosistema', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'Características Principales', subtitle: 'Capacidades potentes para la automatización IA',
      crossPlatform: { title: 'Soporte Multiplataforma', description: 'Soporte nativo para Windows y macOS.' },
      localDeployment: { title: 'Despliegue Local Completo', description: 'Tus datos nunca salen de tu dispositivo.' },
      tools: { title: 'Integración de Herramientas', description: 'Automatización de navegador, procesamiento de documentos.' },
      skills: { title: 'Sistema de Habilidades', description: 'Crear, gestionar y compartir habilidades.' },
      memory: { title: 'Sistema de Memoria', description: 'Memoria de conversación a largo plazo.' },
      knowledgeBase: { title: 'Base de Conocimientos RAG', description: 'Recuperación inteligente de documentos.' },
      im: { title: 'Integración IM', description: 'Conexión con bots de Telegram.' },
      security: { title: 'Seguridad de Datos', description: 'Almacenamiento local prioritario.' },
    },
    architecture: {
      title: 'Arquitectura del Sistema', subtitle: 'Construido con tecnologías modernas',
      threeComponent: { title: 'Arquitectura de Tres Componentes', description: 'MaudelClaw consta de tres componentes principales', halo: 'Cliente Desktop MaudelClaw', happy: 'Cliente Móvil', agentFlow: 'Backend Agent Flow' },
      techStack: { title: 'Stack Tecnológico', frontend: 'Frontend', desktop: 'Framework Desktop', backend: 'API Backend', sdk: 'Agent SDK', database: 'Base de datos', protocol: 'Protocolo' },
      workflow: { title: 'Cómo Funciona', step1: 'Entrada del Usuario', step1Desc: 'Descripción de tarea en lenguaje natural', step2: 'Comprensión de Tarea', step2Desc: 'La IA analiza los requisitos', step3: 'Invocación de Herramientas', step3Desc: 'Llama automáticamente a herramientas relevantes', step4: 'Feedback de Ejecución', step4Desc: 'Actualizaciones de resultados en tiempo real', step5: 'Iteración y Optimización', step5Desc: 'Ajusta la estrategia hasta el objetivo' },
    },
    download: {
      title: 'Descargar MaudelClaw', subtitle: 'Elige tu plataforma y comienza en minutos',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'Para chips M1/M2/M3/M4', download: 'Descargar para Apple Silicon' },
        macosIntel: { title: 'macOS (Intel)', version: 'Para Macs Intel', download: 'Descargar para Intel' },
        windows: { title: 'Windows', version: 'Requiere Windows 10 o superior', download: 'Descargar para Windows' },
      },
      requirements: { title: 'Requisitos del Sistema', ram: '8 GB RAM (16 GB recomendados)', storage: '2 GB de espacio disponible', network: 'Conexión a internet para modelos en la nube', optional: 'Soporte LLM local con Ollama (opcional)' },
      quickStart: { title: 'Inicio Rápido', step1: 'Descargar e instalar MaudelClaw', step2: 'Elegir tu modelo de IA', step3: 'Comenzar a chatear con tu agente IA' },
    },
    footer: {
      description: 'Sistema de Agente IA de código abierto para usuarios conscientes de la privacidad',
      links: { documentation: 'Documentación', community: 'Comunidad', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. Todos los derechos reservados.',
      seo: { title: 'Palabras Clave Relacionadas', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'Preguntas Frecuentes', subtitle: 'Todo lo que necesitas saber sobre MaudelClaw',
      whatIs: { question: '¿Qué es MaudelClaw?', answer: 'MaudelClaw es una aplicación de escritorio de agente IA multiplataforma totalmente compatible con el ecosistema OpenClaw.' },
      compatible: { question: '¿Es MaudelClaw compatible con OpenClaw?', answer: 'Sí, MaudelClaw es totalmente compatible con el ecosistema OpenClaw.' },
      install: { question: '¿Cómo instalar OpenClaw Desktop?', answer: 'Puedes descargar la versión apropiada para Apple Silicon Mac, Intel Mac o Windows.' },
      free: { question: '¿Es MaudelClaw gratuito y de código abierto?', answer: 'Sí, MaudelClaw es completamente gratuito y de código abierto.' },
      models: { question: '¿Qué modelos de IA soporta MaudelClaw?', answer: 'Soporta modelos de IA en la nube SOTA y modelos de IA locales a través de Ollama.' },
    },
  },

  // Русский
  ru: {
    nav: { home: 'Главная', features: 'Возможности', architecture: 'Архитектура', download: 'Скачать', docs: 'Документация', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'Кроссплатформенная система ИИ-агентов',
      description: 'Готов к использованию, красивый интерфейс, мощные функции. Полная совместимость с экосистемой OpenClaw. Приватность превыше всего.',
      cta: { download: 'Скачать', learn: 'Подробнее', github: 'GitHub' },
      badge: 'Открытый код • Приватность • Совместимость с OpenClaw',
      highlights: { readyToUse: 'Готов к использованию', beautifulUI: 'Красивый интерфейс', powerful: 'Мощные функции', compatible: 'Совместимость с OpenClaw' },
      stats: {
        crossPlatform: { label: 'Кроссплатформенность', value: 'Win/Mac' },
        privacy: { label: 'Приватность', value: '100% Локально' },
        aiPowered: { label: 'На базе ИИ', value: 'Модели SOTA' },
        ecosystem: { label: 'Экосистема', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'Основные возможности', subtitle: 'Мощные функции для автоматизации ИИ',
      crossPlatform: { title: 'Кроссплатформенность', description: 'Нативная поддержка Windows и macOS.' },
      localDeployment: { title: 'Локальное развёртывание', description: 'Ваши данные никогда не покидают устройство.' },
      tools: { title: 'Интеграция инструментов', description: 'Автоматизация браузера, обработка документов.' },
      skills: { title: 'Система навыков', description: 'Создание, управление и обмен навыками.' },
      memory: { title: 'Система памяти', description: 'Долгосрочная память диалогов.' },
      knowledgeBase: { title: 'База знаний RAG', description: 'Интеллектуальный поиск документов.' },
      im: { title: 'Интеграция мессенджеров', description: 'Подключение Telegram ботов.' },
      security: { title: 'Безопасность данных', description: 'Приоритет локального хранения.' },
    },
    architecture: {
      title: 'Архитектура системы', subtitle: 'Построено на современных технологиях',
      threeComponent: { title: 'Трёхкомпонентная архитектура', description: 'MaudelClaw состоит из трёх основных компонентов', halo: 'Клиент MaudelClaw', happy: 'Мобильный клиент', agentFlow: 'Бэкенд Agent Flow' },
      techStack: { title: 'Технологический стек', frontend: 'Фронтенд', desktop: 'Фреймворк', backend: 'API бэкенда', sdk: 'Agent SDK', database: 'База данных', protocol: 'Протокол' },
      workflow: { title: 'Как это работает', step1: 'Ввод пользователя', step1Desc: 'Описание задачи на естественном языке', step2: 'Понимание задачи', step2Desc: 'ИИ анализирует требования', step3: 'Вызов инструментов', step3Desc: 'Автоматический вызов релевантных инструментов', step4: 'Обратная связь', step4Desc: 'Обновление результатов в реальном времени', step5: 'Итерация и оптимизация', step5Desc: 'Корректировка стратегии до достижения цели' },
    },
    download: {
      title: 'Скачать MaudelClaw', subtitle: 'Выберите платформу и начните за минуты',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'Для чипов M1/M2/M3/M4', download: 'Скачать для Apple Silicon' },
        macosIntel: { title: 'macOS (Intel)', version: 'Для Intel Mac', download: 'Скачать для Intel' },
        windows: { title: 'Windows', version: 'Требуется Windows 10 или выше', download: 'Скачать для Windows' },
      },
      requirements: { title: 'Системные требования', ram: '8 ГБ ОЗУ (рекомендуется 16 ГБ)', storage: '2 ГБ свободного места', network: 'Интернет для облачных моделей', optional: 'Локальная LLM поддержка через Ollama (опционально)' },
      quickStart: { title: 'Быстрый старт', step1: 'Скачать и установить MaudelClaw', step2: 'Выбрать модель ИИ', step3: 'Начать диалог с ИИ-агентом' },
    },
    footer: {
      description: 'Система ИИ-агентов с открытым кодом для приверженцев приватности',
      links: { documentation: 'Документация', community: 'Сообщество', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. Все права защищены.',
      seo: { title: 'Связанные ключевые слова', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'Часто задаваемые вопросы', subtitle: 'Всё, что нужно знать о MaudelClaw',
      whatIs: { question: 'Что такое MaudelClaw?', answer: 'MaudelClaw — это кроссплатформенное десктопное приложение ИИ-агента, полностью совместимое с экосистемой OpenClaw.' },
      compatible: { question: 'Совместим ли MaudelClaw с OpenClaw?', answer: 'Да, MaudelClaw полностью совместим с экосистемой OpenClaw.' },
      install: { question: 'Как установить OpenClaw Desktop?', answer: 'Вы можете скачать подходящую версию для Apple Silicon Mac, Intel Mac или Windows.' },
      free: { question: 'Бесплатен ли MaudelClaw?', answer: 'Да, MaudelClaw полностью бесплатен и имеет открытый код.' },
      models: { question: 'Какие модели ИИ поддерживает MaudelClaw?', answer: 'Поддерживаются облачные модели SOTA и локальные модели через Ollama.' },
    },
  },

  // Tiếng Việt
  vi: {
    nav: { home: 'Trang chủ', features: 'Tính năng', architecture: 'Kiến trúc', download: 'Tải xuống', docs: 'Tài liệu', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'Hệ thống AI Agent đa nền tảng',
      description: 'Sẵn sàng sử dụng, giao diện đẹp, tính năng mạnh mẽ. Tương thích hoàn toàn với hệ sinh thái OpenClaw. Bảo mật là ưu tiên.',
      cta: { download: 'Tải ngay', learn: 'Tìm hiểu thêm', github: 'GitHub' },
      badge: 'Mã nguồn mở • Bảo mật • Tương thích OpenClaw',
      highlights: { readyToUse: 'Sẵn sàng sử dụng', beautifulUI: 'Giao diện đẹp', powerful: 'Tính năng mạnh mẽ', compatible: 'Tương thích OpenClaw' },
      stats: {
        crossPlatform: { label: 'Đa nền tảng', value: 'Win/Mac' },
        privacy: { label: 'Bảo mật', value: '100% Cục bộ' },
        aiPowered: { label: 'AI Tăng cường', value: 'Mô hình SOTA' },
        ecosystem: { label: 'Hệ sinh thái', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'Tính năng chính', subtitle: 'Khả năng mạnh mẽ cho tự động hóa AI',
      crossPlatform: { title: 'Hỗ trợ đa nền tảng', description: 'Hỗ trợ gốc Windows và macOS.' },
      localDeployment: { title: 'Triển khai cục bộ hoàn toàn', description: 'Dữ liệu không bao giờ rời khỏi thiết bị.' },
      tools: { title: 'Tích hợp công cụ thông minh', description: 'Tự động hóa trình duyệt, xử lý tài liệu.' },
      skills: { title: 'Hệ thống kỹ năng', description: 'Tạo, quản lý và chia sẻ kỹ năng.' },
      memory: { title: 'Hệ thống bộ nhớ', description: 'Bộ nhớ hội thoại dài hạn.' },
      knowledgeBase: { title: 'Cơ sở kiến thức RAG', description: 'Truy xuất tài liệu thông minh.' },
      im: { title: 'Tích hợp IM', description: 'Kết nối bot Telegram.' },
      security: { title: 'Bảo mật dữ liệu', description: 'Ưu tiên lưu trữ cục bộ.' },
    },
    architecture: {
      title: 'Kiến trúc hệ thống', subtitle: 'Được xây dựng với công nghệ hiện đại',
      threeComponent: { title: 'Kiến trúc ba thành phần', description: 'MaudelClaw bao gồm ba thành phần chính', halo: 'Client Desktop MaudelClaw', happy: 'Client Mobile', agentFlow: 'Backend Agent Flow' },
      techStack: { title: 'Stack công nghệ', frontend: 'Frontend', desktop: 'Framework Desktop', backend: 'API Backend', sdk: 'Agent SDK', database: 'Cơ sở dữ liệu', protocol: 'Giao thức' },
      workflow: { title: 'Cách hoạt động', step1: 'Đầu vào người dùng', step1Desc: 'Mô tả tác vụ bằng ngôn ngữ tự nhiên', step2: 'Hiểu tác vụ', step2Desc: 'AI phân tích yêu cầu', step3: 'Gọi công cụ', step3Desc: 'Tự động gọi công cụ liên quan', step4: 'Phản hồi thực thi', step4Desc: 'Cập nhật kết quả thời gian thực', step5: 'Lặp lại & Tối ưu hóa', step5Desc: 'Điều chỉnh chiến lược đến mục tiêu' },
    },
    download: {
      title: 'Tải xuống MaudelClaw', subtitle: 'Chọn nền tảng và bắt đầu trong vài phút',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'Cho chip M1/M2/M3/M4', download: 'Tải cho Apple Silicon' },
        macosIntel: { title: 'macOS (Intel)', version: 'Cho Mac Intel', download: 'Tải cho Intel' },
        windows: { title: 'Windows', version: 'Yêu cầu Windows 10 trở lên', download: 'Tải cho Windows' },
      },
      requirements: { title: 'Yêu cầu hệ thống', ram: '8GB RAM (khuyến nghị 16GB)', storage: '2GB dung lượng khả dụng', network: 'Kết nối internet cho mô hình đám mây', optional: 'Hỗ trợ LLM cục bộ với Ollama (tùy chọn)' },
      quickStart: { title: 'Khởi động nhanh', step1: 'Tải và cài đặt MaudelClaw', step2: 'Chọn mô hình AI', step3: 'Bắt đầu trò chuyện với AI agent' },
    },
    footer: {
      description: 'Hệ thống AI Agent mã nguồn mở cho người dùng quan tâm bảo mật',
      links: { documentation: 'Tài liệu', community: 'Cộng đồng', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. Đã đăng ký bản quyền.',
      seo: { title: 'Từ khóa liên quan', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'Câu hỏi thường gặp', subtitle: 'Tất cả những gì bạn cần biết về MaudelClaw',
      whatIs: { question: 'MaudelClaw là gì?', answer: 'MaudelClaw là ứng dụng desktop AI agent đa nền tảng tương thích hoàn toàn với hệ sinh thái OpenClaw.' },
      compatible: { question: 'MaudelClaw có tương thích với OpenClaw không?', answer: 'Có, MaudelClaw tương thích hoàn toàn với hệ sinh thái OpenClaw.' },
      install: { question: 'Làm thế nào để cài đặt OpenClaw Desktop?', answer: 'Bạn có thể tải phiên bản phù hợp cho Apple Silicon Mac, Intel Mac hoặc Windows.' },
      free: { question: 'MaudelClaw có miễn phí và mã nguồn mở không?', answer: 'Có, MaudelClaw hoàn toàn miễn phí và mã nguồn mở.' },
      models: { question: 'MaudelClaw hỗ trợ những mô hình AI nào?', answer: 'Hỗ trợ mô hình AI đám mây SOTA và mô hình AI cục bộ qua Ollama.' },
    },
  },

  // العربية
  ar: {
    nav: { home: 'الرئيسية', features: 'الميزات', architecture: 'الهيكل', download: 'تحميل', docs: 'الوثائق', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'نظام وكيل الذكاء الاصطناعي متعدد المنصات',
      description: 'جاهز للاستخدام، واجهة جميلة، ميزات قوية. متوافق تمامًا مع نظام OpenClaw. الخصوصية أولاً.',
      cta: { download: 'تحميل الآن', learn: 'معرفة المزيد', github: 'GitHub' },
      badge: 'مفتوح المصدر • الخصوصية • متوافق مع OpenClaw',
      highlights: { readyToUse: 'جاهز للاستخدام', beautifulUI: 'واجهة جميلة', powerful: 'ميزات قوية', compatible: 'متوافق مع OpenClaw' },
      stats: {
        crossPlatform: { label: 'متعدد المنصات', value: 'Win/Mac' },
        privacy: { label: 'الخصوصية', value: '100% محلي' },
        aiPowered: { label: 'مدعوم بالذكاء الاصطناعي', value: 'نماذج SOTA' },
        ecosystem: { label: 'النظام البيئي', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'الميزات الرئيسية', subtitle: 'قدرات قوية لأتمتة الذكاء الاصطناعي',
      crossPlatform: { title: 'دعم متعدد المنصات', description: 'دعم أصلي لنظامي Windows و macOS.' },
      localDeployment: { title: 'نشر محلي بالكامل', description: 'بياناتك لا تغادر جهازك أبدًا.' },
      tools: { title: 'تكامل الأدوات الذكية', description: 'أتمتة المتصفح، معالجة المستندات.' },
      skills: { title: 'نظام المهارات', description: 'إنشاء وإدارة ومشاركة المهارات.' },
      memory: { title: 'نظام الذاكرة', description: 'ذاكرة محادثة طويلة المدى.' },
      knowledgeBase: { title: 'قاعدة المعرفة RAG', description: 'استرجاع ذكي للمستندات.' },
      im: { title: 'تكامل المراسلة', description: 'اتصال بوت Telegram.' },
      security: { title: 'أمن البيانات', description: 'التخزين المحلي أولاً.' },
    },
    architecture: {
      title: 'هيكل النظام', subtitle: 'مبني بتقنيات حديثة للموثوقية',
      threeComponent: { title: 'هيكل ثلاثي المكونات', description: 'يتكون MaudelClaw من ثلاثة مكونات رئيسية', halo: 'عميل سطح المكتب MaudelClaw', happy: 'عميل الهاتف', agentFlow: 'الواجهة الخلفية Agent Flow' },
      techStack: { title: 'المكدس التقني', frontend: 'الواجهة الأمامية', desktop: 'إطار سطح المكتب', backend: 'API الخلفية', sdk: 'Agent SDK', database: 'قاعدة البيانات', protocol: 'البروتوكول' },
      workflow: { title: 'كيف يعمل', step1: 'إدخال المستخدم', step1Desc: 'وصف المهمة باللغة الطبيعية', step2: 'فهم المهمة', step2Desc: 'الذكاء الاصطناعي يحلل المتطلبات', step3: 'استدعاء الأدوات', step3Desc: 'استدعاء تلقائي للأدوات ذات الصلة', step4: 'ملاحظات التنفيذ', step4Desc: 'تحديث النتائج في الوقت الفعلي', step5: 'التكرار والتحسين', step5Desc: 'ضبط الاستراتيجية حتى الهدف' },
    },
    download: {
      title: 'تحميل MaudelClaw', subtitle: 'اختر منصتك وابدأ في دقائق',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'لشرائح M1/M2/M3/M4', download: 'تحميل لـ Apple Silicon' },
        macosIntel: { title: 'macOS (Intel)', version: 'لـ Intel Mac', download: 'تحميل لـ Intel' },
        windows: { title: 'Windows', version: 'يتطلب Windows 10 أو أحدث', download: 'تحميل لـ Windows' },
      },
      requirements: { title: 'متطلبات النظام', ram: '8 جيجابايت RAM (16 جيجابايت موصى به)', storage: '2 جيجابايت مساحة متوفرة', network: 'اتصال إنترنت للنماذج السحابية', optional: 'دعم LLM المحلي مع Ollama (اختياري)' },
      quickStart: { title: 'البدء السريع', step1: 'تحميل وتثبيت MaudelClaw', step2: 'اختر نموذج الذكاء الاصطناعي', step3: 'ابدأ المحادثة مع وكيل الذكاء الاصطناعي' },
    },
    footer: {
      description: 'نظام وكيل الذكاء الاصطناعي مفتوح المصدر للمهتمين بالخصوصية',
      links: { documentation: 'الوثائق', community: 'المجتمع', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw. جميع الحقوق محفوظة.',
      seo: { title: 'الكلمات المفتاحية ذات الصلة', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'الأسئلة الشائعة', subtitle: 'كل ما تحتاج معرفته عن MaudelClaw',
      whatIs: { question: 'ما هو MaudelClaw؟', answer: 'MaudelClaw هو تطبيق سطح مكتب لوكيل الذكاء الاصطناعي متعدد المنصات متوافق تمامًا مع نظام OpenClaw.' },
      compatible: { question: 'هل MaudelClaw متوافق مع OpenClaw؟', answer: 'نعم، MaudelClaw متوافق تمامًا مع نظام OpenClaw.' },
      install: { question: 'كيفية تثبيت OpenClaw Desktop؟', answer: 'يمكنك تحميل الإصدار المناسب لـ Apple Silicon Mac أو Intel Mac أو Windows.' },
      free: { question: 'هل MaudelClaw مجاني ومفتوح المصدر؟', answer: 'نعم، MaudelClaw مجاني تمامًا ومفتوح المصدر.' },
      models: { question: 'ما هي نماذج الذكاء الاصطناعي التي يدعمها MaudelClaw؟', answer: 'يدعم نماذج الذكاء الاصطناعي السحابية SOTA والنماذج المحلية عبر Ollama.' },
    },
  },

  // ไทย
  th: {
    nav: { home: 'หน้าแรก', features: 'คุณสมบัติ', architecture: 'สถาปัตยกรรม', download: 'ดาวน์โหลด', docs: 'เอกสาร', github: 'GitHub' },
    hero: {
      title: 'MaudelClaw',
      subtitle: 'ระบบ AI Agent ข้ามแพลตฟอร์ม',
      description: 'พร้อมใช้งาน อินเทอร์เฟซสวยงาม ฟีเจอร์ทรงพลัง เข้ากันได้กับระบบนิเวศ OpenClaw โดยสมบูรณ์ ความเป็นส่วนตัวเป็นอันดับหนึ่ง',
      cta: { download: 'ดาวน์โหลด', learn: 'เรียนรู้เพิ่มเติม', github: 'GitHub' },
      badge: 'โอเพนซอร์ส • ความเป็นส่วนตัว • เข้ากันได้กับ OpenClaw',
      highlights: { readyToUse: 'พร้อมใช้งาน', beautifulUI: 'อินเทอร์เฟซสวยงาม', powerful: 'ฟีเจอร์ทรงพลัง', compatible: 'เข้ากันได้กับ OpenClaw' },
      stats: {
        crossPlatform: { label: 'ข้ามแพลตฟอร์ม', value: 'Win/Mac' },
        privacy: { label: 'ความเป็นส่วนตัว', value: '100% ในเครื่อง' },
        aiPowered: { label: 'ขับเคลื่อนด้วย AI', value: 'โมเดล SOTA' },
        ecosystem: { label: 'ระบบนิเวศ', value: 'OpenClaw' },
      },
    },
    features: {
      title: 'คุณสมบัติหลัก', subtitle: 'ความสามารถทรงพลังสำหรับระบบอัตโนมัติ AI',
      crossPlatform: { title: 'รองรับหลายแพลตฟอร์ม', description: 'รองรับ Windows และ macOS แบบ Native' },
      localDeployment: { title: 'ปรับใช้ในเครื่องได้เต็มรูปแบบ', description: 'ข้อมูลของคุณไม่ออกจากอุปกรณ์' },
      tools: { title: 'การผสานรวมเครื่องมืออัจฉริยะ', description: 'ระบบอัตโนมัติเบราว์เซอร์ ประมวลผลเอกสาร' },
      skills: { title: 'ระบบทักษะ', description: 'สร้าง จัดการ และแชร์ทักษะ' },
      memory: { title: 'ระบบความจำ', description: 'ความจำการสนทนาระยะยาว' },
      knowledgeBase: { title: 'ฐานความรู้ RAG', description: 'ค้นหาเอกสารอัจฉริยะ' },
      im: { title: 'การผสานรวม IM', description: 'เชื่อมต่อบอท Telegram' },
      security: { title: 'ความปลอดภัยของข้อมูล', description: 'จัดเก็บในเครื่องเป็นหลัก' },
    },
    architecture: {
      title: 'สถาปัตยกรรมระบบ', subtitle: 'สร้างด้วยเทคโนโลยีทันสมัย',
      threeComponent: { title: 'สถาปัตยกรรมสามส่วน', description: 'MaudelClaw ประกอบด้วยสามส่วนหลัก', halo: 'ไคลเอนต์เดสก์ท็อป MaudelClaw', happy: 'ไคลเอนต์มือถือ', agentFlow: 'แบ็กเอนด์ Agent Flow' },
      techStack: { title: 'เทคโนโลยีที่ใช้', frontend: 'Frontend', desktop: 'เฟรมเวิร์กเดสก์ท็อป', backend: 'API Backend', sdk: 'Agent SDK', database: 'ฐานข้อมูล', protocol: 'โปรโตคอล' },
      workflow: { title: 'วิธีการทำงาน', step1: 'อินพุตผู้ใช้', step1Desc: 'อธิบายงานเป็นภาษาธรรมชาติ', step2: 'การเข้าใจงาน', step2Desc: 'AI วิเคราะห์ความต้องการ', step3: 'เรียกใช้เครื่องมือ', step3Desc: 'เรียกเครื่องมือที่เกี่ยวข้องอัตโนมัติ', step4: 'ผลตอบรับการดำเนินการ', step4Desc: 'อัปเดตผลลัพธ์แบบเรียลไทม์', step5: 'ทำซ้ำและปรับปรุง', step5Desc: 'ปรับกลยุทธ์จนกว่าจะบรรลุเป้าหมาย' },
    },
    download: {
      title: 'ดาวน์โหลด MaudelClaw', subtitle: 'เลือกแพลตฟอร์มและเริ่มใช้ในไม่กี่นาที',
      platform: {
        macosArm: { title: 'macOS (Apple Silicon)', version: 'สำหรับชิป M1/M2/M3/M4', download: 'ดาวน์โหลดสำหรับ Apple Silicon' },
        macosIntel: { title: 'macOS (Intel)', version: 'สำหรับ Intel Mac', download: 'ดาวน์โหลดสำหรับ Intel' },
        windows: { title: 'Windows', version: 'ต้องใช้ Windows 10 ขึ้นไป', download: 'ดาวน์โหลดสำหรับ Windows' },
      },
      requirements: { title: 'ความต้องการของระบบ', ram: 'RAM 8GB (แนะนำ 16GB)', storage: 'พื้นที่ว่าง 2GB', network: 'การเชื่อมต่ออินเทอร์เน็ตสำหรับโมเดลคลาวด์', optional: 'รองรับ LLM ในเครื่องด้วย Ollama (ไม่บังคับ)' },
      quickStart: { title: 'เริ่มต้นอย่างรวดเร็ว', step1: 'ดาวน์โหลดและติดตั้ง MaudelClaw', step2: 'เลือกโมเดล AI', step3: 'เริ่มแชทกับ AI agent' },
    },
    footer: {
      description: 'ระบบ AI Agent โอเพนซอร์สสำหรับผู้ให้ความสำคัญกับความเป็นส่วนตัว',
      links: { documentation: 'เอกสาร', community: 'ชุมชน', github: 'GitHub', twitter: 'Twitter' },
      copyright: '© 2026 MaudelClaw สงวนลิขสิทธิ์',
      seo: { title: 'คำหลักที่เกี่ยวข้อง', keywords: 'OpenClaw, Agentic AI, OpenClaw Desktop, AI Agent, LLM Desktop App' },
    },
    faq: {
      title: 'คำถามที่พบบ่อย', subtitle: 'ทุกสิ่งที่คุณต้องรู้เกี่ยวกับ MaudelClaw',
      whatIs: { question: 'MaudelClaw คืออะไร?', answer: 'MaudelClaw เป็นแอปพลิเคชันเดสก์ท็อป AI Agent ข้ามแพลตฟอร์มที่เข้ากันได้กับระบบนิเวศ OpenClaw โดยสมบูรณ์' },
      compatible: { question: 'MaudelClaw เข้ากันได้กับ OpenClaw หรือไม่?', answer: 'ใช่ MaudelClaw เข้ากันได้กับระบบนิเวศ OpenClaw โดยสมบูรณ์' },
      install: { question: 'วิธีติดตั้ง OpenClaw Desktop?', answer: 'คุณสามารถดาวน์โหลดเวอร์ชันที่เหมาะสมสำหรับ Apple Silicon Mac, Intel Mac หรือ Windows' },
      free: { question: 'MaudelClaw ฟรีและโอเพนซอร์สหรือไม่?', answer: 'ใช่ MaudelClaw ฟรีและโอเพนซอร์สโดยสมบูรณ์' },
      models: { question: 'MaudelClaw รองรับโมเดล AI ใดบ้าง?', answer: 'รองรับโมเดล AI คลาวด์ SOTA และโมเดล AI ในเครื่องผ่าน Ollama' },
    },
  },
}

export type Language = 'en' | 'zh' | 'zh-TW' | 'ja' | 'fr' | 'de' | 'es' | 'ru' | 'vi' | 'ar' | 'th'
export type TranslationKeys = typeof translations.en
