
import { Category } from './types';

export const NAV_DATA: Category[] = [
  {
    id: 'ai-tools',
    title: 'AI 工具',
    subCategories: [
      {
        id: 'smart-chat',
        title: 'AI 助手',
        items: [
          { id: 'chatgpt', name: 'ChatGPT', description: 'OpenAI 旗舰对话模型', url: 'https://chatgpt.com/', iconName: 'Brain', tags: ['OpenAI'], color: 'bg-green-600' },
          { id: 'gemini', name: 'Gemini', description: 'Google 最强多模态', url: 'https://gemini.google.com/app', iconName: 'Sparkles', tags: ['Google'], color: 'bg-blue-600' },
          { id: 'google-ai-studio', name: 'Google AI Studio', description: 'Google AI 开发平台', url: 'https://aistudio.google.com/', iconName: 'Brain', tags: ['Google'], color: 'bg-blue-500' },
          { id: 'deepseek', name: 'DeepSeek', description: '深度求索代码与逻辑', url: 'https://chat.deepseek.com', iconName: 'Code', tags: ['Logic'], color: 'bg-blue-800' },
          { id: 'claude', name: 'Claude', description: '拟人化最高的 AI', url: 'https://claude.ai/', iconName: 'Brain', tags: ['Safe'], color: 'bg-orange-600' },
          { id: 'doubao', name: '豆包', description: '字节跳动智能助手', url: 'https://www.doubao.com/chat/?channel=cnblogs', iconName: 'Bot', tags: ['Byte'], color: 'bg-green-500' },
          { id: 'xinghuo', name: '讯飞星火', description: '科大讯飞认知模型', url: 'https://xinghuo.xfyun.cn/desk', iconName: 'Sparkles', tags: ['Zh'], color: 'bg-blue-500' },
          { id: 'kimi', name: 'Kimi', description: '超长上下文助手', url: 'https://kimi.moonshot.cn/', iconName: 'FileText', tags: ['Long'], color: 'bg-purple-600' },
          { id: 'perplexity', name: 'Perplexity', description: 'AI 驱动的搜索引擎', url: 'https://www.perplexity.ai/', iconName: 'Search', tags: ['Search'], color: 'bg-teal-600' },
          { id: 'tongyi', name: '通义千问', description: '阿里全能 AI', url: 'https://tongyi.aliyun.com/', iconName: 'Brain', tags: ['Ali'], color: 'bg-indigo-600' },
          { id: 'hunyuan', name: '腾讯混元', description: '腾讯大模型助手', url: 'https://hunyuan.tencent.com/', iconName: 'Bot', tags: ['Tencent'], color: 'bg-blue-400' },
          { id: 'chatglm', name: '智谱清言', description: '清华系千亿模型', url: 'https://chatglm.cn/main/alltoolsdetail?lang=zh', iconName: 'Brain', tags: ['Chat'], color: 'bg-cyan-600' },
          { id: 'wenxin', name: '文心一言', description: '百度知识增强大模型', url: 'https://chat.baidu.com/app', iconName: 'Brain', tags: ['Baidu'], color: 'bg-blue-500' },
          { id: 'metaso', name: '秘塔 AI', description: '无广告 AI 搜索', url: 'https://metaso.cn/', iconName: 'Search', tags: ['Search'], color: 'bg-emerald-600' },
          { id: 'monica', name: 'Monica', description: '全能 AI 助手插件', url: 'https://monica.im/', iconName: 'Bot', tags: ['Plugin'], color: 'bg-purple-500' },
          { id: 'zai', name: 'Z.ai', description: 'AI 智能助手', url: 'https://z.ai/', iconName: 'Brain', tags: ['AI'], color: 'bg-blue-600' },
        ]
      },
      {
        id: 'text-gen',
        title: '文稿生成',
        items: [
          { id: 'linggan', name: '灵感大狮', description: 'AI 写作辅助工具', url: 'https://chat.baidu.com/app', iconName: 'PenTool', tags: ['Write'], color: 'bg-pink-500' },
          { id: 'marketing', name: '营销号', description: '文案生成器', url: 'https://kaseidis.gitee.io/interesting_gadgets/marketing_generator', iconName: 'FileText', tags: ['Fun'], color: 'bg-red-500' },
          { id: 'bibigpt', name: 'BibiGPT', description: '音视频内容总结', url: 'https://bibigpt.co', iconName: 'FileVideo', tags: ['Summary'], color: 'bg-yellow-500' },
          { id: 'gamma', name: 'Gamma', description: 'AI 生成 PPT', url: 'https://gamma.app/', iconName: 'Layout', tags: ['PPT'], color: 'bg-indigo-500' },
        ]
      },
      {
        id: 'image-gen',
        title: '图像生成',
        items: [
          { id: 'liblib', name: '哩布哩布', description: 'AI 绘画模型站', url: 'https://www.liblib.art/', iconName: 'Palette', tags: ['Art'], color: 'bg-orange-500' },
          { id: 'lmarena', name: '图像模型', description: '智能绘图工具箱', url: 'https://lmarena.ai/', iconName: 'Image', tags: ['Edit'], color: 'bg-blue-500' },
          { id: 'airandom', name: 'AI 随机图', description: '随机生成', url: 'https://airandomimage.art/', iconName: 'Image', tags: ['AI'], color: 'bg-purple-500' },
        ]
      },
      {
        id: 'video-gen',
        title: '视频生成',
        items: [
          { id: 'jimeng', name: '即梦 AI', description: '字节视频生成', url: 'https://jimeng.jianying.com/ai-tool/home', iconName: 'Video', tags: ['Gen'], color: 'bg-pink-600' },
          { id: 'kling', name: '可灵 AI', description: '快手视频模型', url: 'https://app.klingai.com/cn/', iconName: 'Video', tags: ['Gen'], color: 'bg-green-600' },
          { id: 'runway', name: 'Runway', description: 'AI 视频创意工具', url: 'https://runwayml.com/', iconName: 'Video', tags: ['Pro'], color: 'bg-purple-600' },
          { id: 'luma', name: 'Luma', description: 'Dream Machine', url: 'https://lumalabs.ai/dream-machine', iconName: 'Video', tags: ['3D'], color: 'bg-black' },
          { id: 'pika', name: 'Pika', description: '创意视频生成', url: 'https://pika.art/', iconName: 'Video', tags: ['Fun'], color: 'bg-red-500' },
        ]
      },
            {
        id: '3d-model',
        title: '三维建模',
        items: [
          { id: 'hunyuan3d', name: '混元 3D', description: '腾讯 3D 生成', url: 'https://3d.hunyuan.tencent.com/login', iconName: 'Box', tags: ['3D'], color: 'bg-blue-500' },
          { id: 'tripo', name: 'Tripo 3D', description: '图文转 3D 模型', url: 'https://www.tripo3d.ai/', iconName: 'Box', tags: ['3D'], color: 'bg-purple-600' },
        ]
      },
      {
        id: 'audio-gen',
        title: '音频创作',
        items: [
          { id: 'suno', name: 'Suno', description: 'AI 写歌神器', url: 'https://suno.com/', iconName: 'Music', tags: ['Song'], color: 'bg-black' },
          { id: 'udio', name: 'Udio', description: '高保真 AI 音乐', url: 'https://www.udio.com/', iconName: 'Speaker', tags: ['HiFi'], color: 'bg-red-600' },
          { id: 'elevenlabs', name: 'ElevenLabs', description: '逼真语音合成', url: 'https://elevenlabs.io/', iconName: 'Mic', tags: ['TTS'], color: 'bg-gray-800' },
        ]
      },
      {
        id: 'model-rec',
        title: '模型识别',
        items: [
          { id: 'olocr', name: 'OLOCR', description: '在线 OCR', url: 'https://olocr.com', iconName: 'FileText', tags: ['OCR'], color: 'bg-blue-600' },
          { id: 'huggingface', name: 'TTS', description: '文字转语音', url: 'https://huggingface.co/spaces/zomehwh/vits-models-genshin-bh3', iconName: 'Mic', tags: ['TTS'], color: 'bg-yellow-600' },
          { id: 'midomi', name: '听歌识曲', description: '旋律搜歌', url: 'https://www.midomi.com', iconName: 'Mic', tags: ['Search'], color: 'bg-orange-500' },
        ]
      }
    ]
  },
  {
    id: 'common-websites',
    title: '常用网站',
    subCategories: [
      {
        id: 'social-websites',
        title: '常用网站',
        items: [
          { id: 'xiaohongshu', name: '小红书', description: '生活方式分享平台', url: 'https://www.xiaohongshu.com/', iconName: 'Book', tags: ['Social'], color: 'bg-pink-500' },
          { id: 'xiaohehei', name: '小黑盒', description: '游戏社区平台', url: 'https://www.xiaoheihe.cn/', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-blue-500' },
          { id: 'bilibili', name: 'B站', description: '弹幕视频网站', url: 'https://www.bilibili.com/', iconName: 'Video', tags: ['Video'], color: 'bg-pink-600' },
          { id: 'zhihu', name: '知乎', description: '问答社区平台', url: 'https://www.zhihu.com/', iconName: 'MessageSquare', tags: ['Q&A'], color: 'bg-blue-600' },
        ]
      },
      {
        id: 'email-services',
        title: '邮箱服务',
        items: [
          { id: 'qqmail', name: 'QQ 邮箱', description: '腾讯官方邮箱服务', url: 'https://mail.qq.com/', iconName: 'Mail', tags: ['Email'], color: 'bg-blue-500' },
          { id: '163mail', name: '网易邮箱', description: '中文邮箱第一品牌', url: 'https://mail.163.com/', iconName: 'Mail', tags: ['Email'], color: 'bg-red-600' },
          { id: 'aliyunmail', name: '阿里邮箱', description: '阿里云企业邮箱', url: 'https://mail.aliyun.com/', iconName: 'Mail', tags: ['Email'], color: 'bg-orange-500' },
        ]
      },
      {
        id: 'essential-tools',
        title: '装机必备',
        items: [
          { id: 'qq', name: 'QQ', description: '腾讯即时通讯软件', url: 'https://im.qq.com/', iconName: 'MessageSquare', tags: ['Social'], color: 'bg-blue-500' },
          { id: 'wechat', name: '微信官网', description: '微信官方网站', url: 'https://weixin.qq.com/', iconName: 'MessageSquare', tags: ['Social'], color: 'bg-green-500' },
          { id: 'steam', name: 'Steam', description: '游戏分发平台', url: 'https://store.steampowered.com/', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-blue-500' },
          { id: 'epic', name: 'Epic Games', description: 'Epic游戏商城', url: 'https://www.epicgames.com/store/zh-CN/', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-black' },
          { id: 'uu-accelerator', name: '网易UU加速器', description: '游戏加速工具', url: 'https://uu.163.com/', iconName: 'Zap', tags: ['Game'], color: 'bg-pink-500' },
          { id: 'uu-remote', name: '网易UU远程', description: '远程控制工具', url: 'https://uuyc.163.com/', iconName: 'Monitor', tags: ['Remote'], color: 'bg-blue-500' },
          { id: '7zip', name: '7-Zip', description: '压缩解压工具', url: 'https://www.7-zip.org/', iconName: 'FileZip', tags: ['Tool'], color: 'bg-green-600' },
          { id: 'huorong', name: '火绒安全', description: '电脑安全软件', url: 'https://www.huorong.cn/', iconName: 'Shield', tags: ['Security'], color: 'bg-blue-600' },
          { id: 'google-chrome', name: 'Google浏览器', description: '谷歌浏览器', url: 'https://www.google.com/chrome/', iconName: 'Globe', tags: ['Browser'], color: 'bg-blue-500' },
          { id: 'feishu', name: '飞书', description: '协作办公平台', url: 'https://www.feishu.cn/', iconName: 'MessageSquare', tags: ['Office'], color: 'bg-blue-500' },
          { id: 'tencent-meeting', name: '腾讯会议', description: '在线视频会议', url: 'https://meeting.tencent.com/', iconName: 'Video', tags: ['Meeting'], color: 'bg-green-600' }
        ]
      }
    ]
  },
  {
    id: 'design-creation',
    title: '设计创作',
    subCategories: [
      {
        id: 'prototype',
        title: '原型设计',
        items: [
          { id: 'figma', name: 'Figma', description: 'UI 设计协作平台', url: 'https://www.figma.com/', iconName: 'PenTool', tags: ['UI'], color: 'bg-black' },
          { id: 'gemdesign', name: 'GemDesign', description: 'AI 原型设计', url: 'https://design.gemcoder.com/', iconName: 'Layout', tags: ['UI'], color: 'bg-blue-400' },
          { id: 'autodraw', name: 'Autodraw', description: '谷歌智能画板', url: 'https://www.autodraw.com/', iconName: 'PenTool', tags: ['Draw'], color: 'bg-yellow-400' },
        ]
      },

      {
        id: 'image-edit',
        title: '图片处理',
        items: [
          { id: 'zaixianps', name: '在线 PS', description: '网页版 Photoshop', url: 'https://zaixianps.net', iconName: 'Image', tags: ['PS'], color: 'bg-blue-800' },
          { id: 'tutieshi', name: '图贴士', description: 'GIF 压缩与编辑', url: 'https://tutieshi.com', iconName: 'FileVideo', tags: ['GIF'], color: 'bg-pink-500' },
          { id: 'removephotos_edit', name: '图片编辑', description: '在线修图', url: 'https://remove.photos/zh-cn/', iconName: 'Image', tags: ['Edit'], color: 'bg-blue-400' },
         { id: 'removebg', name: 'Remove.bg', description: '自动去除背景', url: 'https://www.remove.bg/zh', iconName: 'Layers', tags: ['Cut'], color: 'bg-gray-600' },
          { id: 'magiceraser', name: '魔术橡皮', description: '移除图片杂物', url: 'https://magicstudio.com/zh/magiceraser', iconName: 'Scissors', tags: ['Clean'], color: 'bg-purple-500' },
          { id: 'removephotos', name: 'Remove.photos', description: '消除物体', url: 'https://remove.photos/zh-cn/', iconName: 'Image', tags: ['Clean'], color: 'bg-blue-400' },
          { id: 'bgsub', name: 'BgSub', description: '智能换背景', url: 'https://bgsub.cn', iconName: 'Image', tags: ['BG'], color: 'bg-yellow-500' },
          { id: 'pixian', name: 'Pixian', description: '高质量免费抠图', url: 'https://pixian.ai/', iconName: 'Layers', tags: ['Cut'], color: 'bg-indigo-500' },
       { id: 'bigjpg', name: 'BigJPG', description: 'AI 图片无损放大', url: 'https://bigjpg.com/', iconName: 'ZoomIn', tags: ['Scale'], color: 'bg-blue-600' },
          { id: 'upscayl', name: 'Upscayl', description: '开源图片放大', url: 'https://upscayl.org/', iconName: 'Monitor', tags: ['Open'], color: 'bg-gray-800' },
          { id: 'tinypng', name: 'TinyPNG', description: '智能图片压缩', url: 'https://tinypng.com/', iconName: 'Box', tags: ['Tiny'], color: 'bg-green-600' },

        
        ]
      },

            {
        id: 'design-inspire',
        title: '灵感素材',
        items: [
          { id: 'dribbble', name: 'Dribbble', description: '设计灵感社区', url: 'https://dribbble.com/', iconName: 'Basketball', tags: ['UI'], color: 'bg-pink-500' },
          { id: 'behance', name: 'Behance', description: 'Adobe 创意作品', url: 'https://www.behance.net/', iconName: 'Image', tags: ['Art'], color: 'bg-blue-700' },
          { id: 'pinterest', name: 'Pinterest', description: '瀑布流灵感', url: 'https://www.pinterest.com/', iconName: 'Image', tags: ['Idea'], color: 'bg-red-600' },
          { id: 'huaban', name: '花瓣网', description: '设计师灵感', url: 'https://huaban.com/', iconName: 'Image', tags: ['CN'], color: 'bg-red-500' },
         { id: 'coolors', name: 'Coolors', description: '快捷配色生成', url: 'https://coolors.co/', iconName: 'Palette', tags: ['Gen'], color: 'bg-blue-500' },
          { id: 'adobecolor', name: 'Adobe Color', description: 'Adobe 配色轮', url: 'https://color.adobe.com/zh/create/color-wheel', iconName: 'Palette', tags: ['Pro'], color: 'bg-gray-800' },
          { id: 'nippon', name: 'Nippon Colors', description: '日本传统色', url: 'https://nipponcolors.com/', iconName: 'Palette', tags: ['Art'], color: 'bg-red-400' },
  
                  { id: 'maoken', name: '猫啃网', description: '字体聚合站', url: 'https://www.maoken.com', iconName: 'Type', tags: ['Font'], color: 'bg-yellow-600' },
          { id: '100font', name: '100font', description: '免费商用字体', url: 'https://www.100font.com', iconName: 'Type', tags: ['Free'], color: 'bg-black' },
          { id: 'iconfont', name: 'Iconfont', description: '阿里矢量图标库', url: 'https://www.iconfont.cn/', iconName: 'Smile', tags: ['Icon'], color: 'bg-purple-600' },
          { id: 'flaticon', name: 'Flaticon', description: '免费矢量图标', url: 'https://www.flaticon.com/', iconName: 'Smile', tags: ['Icon'], color: 'bg-green-500' },

        
        ]
      },
      {
        id: 'mind-creative',
        title: '思维创意',
        items: [
          { id: 'gitmind', name: 'GitMind', description: 'AI 思维导图', url: 'https://gitmind.cn/', iconName: 'Brain', tags: ['Mind'], color: 'bg-orange-500' },
          { id: 'processon', name: 'ProcessOn', description: '在线绘图', url: 'https://www.processon.com', iconName: 'Map', tags: ['Map'], color: 'bg-blue-500' },
          { id: 'anymind', name: 'AnyMind', description: '脑图工具', url: 'https://www.amymind.com', iconName: 'Map', tags: ['Mind'], color: 'bg-purple-500' },
        ]
      },

      {
        id: 'copy-layout',
        title: '文案排版',
        items: [
          { id: '135editor', name: '135 编辑器', description: '公众号排版', url: 'https://www.135editor.com', iconName: 'Layout', tags: ['Edit'], color: 'bg-orange-600' },
          { id: 'xmyeditor', name: '小蚂蚁', description: '微信编辑器', url: 'https://www.xmyeditor.com', iconName: 'Layout', tags: ['Edit'], color: 'bg-blue-500' },
          { id: 'hemingway', name: 'Hemingway', description: '英文写作优化', url: 'https://www.hemingwayapp.com', iconName: 'PenTool', tags: ['Edit'], color: 'bg-gray-800' },
        ]
      },

      {
        id: 'video-repair',
        title: '视频处理',
        items: [
          { id: 'bigmp4', name: 'BigMP4', description: '视频补帧放大', url: 'https://bigmp4.com', iconName: 'Video', tags: ['AI'], color: 'bg-red-500' },
          { id: 'datatool', name: '视频下载器', description: '全网视频解析', url: 'https://www.datatool.vip/', iconName: 'Download', tags: ['Tool'], color: 'bg-blue-600' },
          { id: 'weibovideo', name: 'B 站下载器', description: 'B 站视频提取', url: 'https://weibo.iiilab.com/', iconName: 'Download', tags: ['Bili'], color: 'bg-pink-400' },
          { id: 'vipvideo', name: 'VIP 解析', description: '全网 VIP 视频', url: 'https://tool.liumingye.cn/video/', iconName: 'Video', tags: ['VIP'], color: 'bg-yellow-500' },
 
       
        ]
      },

    ]
  },
  {
    id: 'utility',
    title: '实用工具',
    subCategories: [
      {
        id: 'network',
        title: '网络辅助',
        items: [
          { id: 'bigme', name: '梯子 BigME', description: '网络加速', url: 'https://1s.bigmeok.me/user#/register?code=fgCaDxLh', iconName: 'Rocket', tags: ['Proxy'], color: 'bg-purple-600' },
          { id: 'urlvoid', name: '安全检测', description: '网站安全扫描', url: 'https://www.urlvoid.com', iconName: 'Shield', tags: ['Sec'], color: 'bg-green-600' },
          { id: 'netspeed', name: '网速测试', description: '宽带速度检测', url: 'https://tool.jy6d.com/netspeed', iconName: 'Activity', tags: ['Speed'], color: 'bg-blue-500' },
          { id: 'qifi', name: 'WiFi 二维码', description: 'WiFi 码生成', url: 'https://qifi.org/', iconName: 'Wifi', tags: ['Net'], color: 'bg-blue-400' },
             { id: 'lanzou', name: '蓝奏云', description: '小文件存储', url: 'https://www.lanzoui.com/', iconName: 'Cloud', tags: ['Cloud'], color: 'bg-blue-400' },
          { id: 'wenshushu', name: '文叔叔', description: '不限速传输', url: 'https://www.wenshushu.cn', iconName: 'Send', tags: ['File'], color: 'bg-indigo-500' },
 
       
        ]
      },
      {
        id: 'file-conv',
        title: '文件转换',
        items: [
          { id: 'ilovepdf', name: 'iLovePDF', description: 'PDF 工具箱', url: 'https://www.ilovepdf.com/zh-cn', iconName: 'FileText', tags: ['PDF'], color: 'bg-red-500' },
          { id: 'alltoall', name: 'AlltoAll', description: '格式转换', url: 'https://www.alltoall.net', iconName: 'RefreshCw', tags: ['Conv'], color: 'bg-green-500' },
          { id: 'cdkm', name: 'CDKM', description: '文件转换', url: 'https://cdkm.com/cn/?src=www.jspoo.com', iconName: 'FileText', tags: ['Conv'], color: 'bg-blue-400' },
          { id: 'tableconvert', name: '表格转换器', description: '格式互转', url: 'https://tableconvert.com/zh-cn/', iconName: 'FileText', tags: ['Excel'], color: 'bg-green-600' },
          { id: 'squoosh', name: 'Squoosh', description: '谷歌图片压缩', url: 'https://squoosh.app/', iconName: 'Image', tags: ['Opt'], color: 'bg-pink-500' },
        ]
      },
      {
        id: 'temp-info',
        title: '临时信息',
        items: [
          { id: 'tempmail', name: '临时邮箱', description: '防骚扰邮箱', url: 'https://www.linshiyou.com', iconName: 'Mail', tags: ['Tmp'], color: 'bg-gray-500' },
          { id: 'sms', name: 'receive-sms', description: '在线接短信', url: 'https://receive-sms.cc', iconName: 'Phone', tags: ['SMS'], color: 'bg-green-500' },
        ]
      },
      {
        id: 'sys-detect',
        title: '系统检测',
        items: [
          { id: 'screenrec', name: '在线录屏', description: '网页屏幕录制', url: 'https://toolwa.com/record', iconName: 'Video', tags: ['Rec'], color: 'bg-red-500' },
          { id: 'screentest', name: '屏幕测试', description: '坏点与色彩', url: 'https://screen.bmcx.com', iconName: 'Monitor', tags: ['Test'], color: 'bg-green-500' },
          { id: 'mic', name: '麦克风测试', description: '麦克风检测', url: 'https://www.onlinemictest.com', iconName: 'Mic', tags: ['Audio'], color: 'bg-red-400' },
          { id: 'ufo', name: 'UFO 帧率', description: '高刷屏幕测试', url: 'https://testufo.com', iconName: 'Monitor', tags: ['Hz'], color: 'bg-purple-600' },
          { id: 'gamepad', name: '手柄检测', description: '游戏手柄测试', url: 'https://hardwaretester.com', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-gray-700' },
        ]
      },
      {
        id: 'dev-tools',
        title: '开发工具',
        items: [
          { id: 'github', name: 'GitHub', description: '代码托管平台', url: 'https://github.com/', iconName: 'Github', tags: ['Git'], color: 'bg-black' },
          { id: 'stackoverflow', name: 'Stack Overflow', description: '开发者问答', url: 'https://stackoverflow.com/', iconName: 'Code', tags: ['Q&A'], color: 'bg-orange-500' },
          { id: 'devdocs', name: 'DevDocs', description: '开发文档聚合', url: 'https://devdocs.io/', iconName: 'Book', tags: ['Docs'], color: 'bg-blue-600' },
          { id: 'carbon', name: 'Carbon', description: '代码转图片', url: 'https://carbon.now.sh/', iconName: 'Image', tags: ['Code'], color: 'bg-gray-800' },
          { id: 'regexr', name: 'RegExr', description: '正则测试', url: 'https://regexr.com/', iconName: 'Code', tags: ['RegEx'], color: 'bg-blue-400' },
          { id: 'jsoncrack', name: 'JSON Crack', description: 'JSON 可视化', url: 'https://jsoncrack.com/', iconName: 'Code2', tags: ['JSON'], color: 'bg-green-600' },
          { id: 'sourcetree', name: 'SourceTree', description: 'Git 客户端工具', url: 'https://www.sourcetreeapp.com/', iconName: 'GitBranch', tags: ['Git'], color: 'bg-blue-500' },
          { id: 'trae', name: 'Trae', description: 'AI 代码助手', url: 'https://www.trae.ai/', iconName: 'Brain', tags: ['AI'], color: 'bg-purple-600' },
          { id: 'cursor', name: 'Cursor', description: 'AI 代码编辑器', url: 'https://cursor.sh/', iconName: 'Terminal', tags: ['Editor'], color: 'bg-black' },
          { id: 'vercel', name: 'Vercel', description: '一键部署平台', url: 'https://vercel.com/', iconName: 'Globe', tags: ['Deploy', 'Cloud'], color: 'bg-black' },
        ]
      },
      {
        id: 'common-tools',
        title: '常用工具',
        items: [
          { id: 'jianliben', name: '简历本', description: '简历制作', url: 'https://www.jianliben.com', iconName: 'FileText', tags: ['CV'], color: 'bg-orange-500' },
          { id: 'flowepub', name: 'EPUB 阅读器', description: '在线阅读', url: 'https://www.flowoss.com', iconName: 'Book', tags: ['Reader'], color: 'bg-teal-500' },
          { id: 'wordlm', name: 'Word 联盟', description: 'Office 学习', url: 'https://www.wordlm3.com/', iconName: 'FileText', tags: ['Learn'], color: 'bg-blue-800' },
          { id: 'qmsj', name: '网名生成器', description: '昵称生成', url: 'https://www.qmsjmfb.com/', iconName: 'Smile', tags: ['Name'], color: 'bg-pink-500' },
          { id: 'listurls', name: '多网址合一', description: '链接合并', url: 'https://listurls.com/', iconName: 'Link', tags: ['Tool'], color: 'bg-gray-600' },
          { id: 'sina', name: '新浪短链', description: '短链接生成', url: 'https://sina.lt/', iconName: 'Link', tags: ['Short'], color: 'bg-orange-500' },
          { id: 'unlockmusic', name: '音乐解锁', description: '加密格式转换', url: 'https://www.sanwe.xyz/tools/unlock-music/', iconName: 'Unlock', tags: ['Tool'], color: 'bg-red-500' },
          { id: 'trace', name: '动漫溯源', description: '截图找动漫', url: 'https://trace.moe/', iconName: 'Search', tags: ['Anime'], color: 'bg-purple-600' },
          { id: 'anitabi', name: '动漫取景地', description: '巡礼地图', url: 'https://anitabi.cn/', iconName: 'Map', tags: ['Travel'], color: 'bg-green-600' },
          { id: 'jfjmusic', name: '音乐鱼', description: '伴奏提取', url: 'https://jfjmusic.top', iconName: 'Music', tags: ['AI'], color: 'bg-pink-500' },
          { id: 'matools', name: '码工具', description: '开发工具集合', url: 'https://www.matools.com', iconName: 'Terminal', tags: ['Tool'], color: 'bg-black' },
          { id: 'toolfk', name: 'ToolFK', description: '在线程序员工具', url: 'https://www.toolfk.com', iconName: 'Terminal', tags: ['Tool'], color: 'bg-blue-700' },
          { id: 'runningcheese', name: '奔跑奶酪', description: '效率方法论', url: 'https://runningcheese.com', iconName: 'Rocket', tags: ['Blog'], color: 'bg-yellow-500' },
        ]
      }
    ]
  },
  {
    id: 'resources',
    title: '资源合集',
    subCategories: [
      {
        id: 'software-res',
        title: '软件下载',
        items: [
          { id: 'macwk', name: 'MacWk', description: 'Mac 软件下载', url: 'https://macwk.com/', iconName: 'DownloadCloud', tags: ['Mac'], color: 'bg-gray-800' },
          { id: 'guohe', name: '果核剥壳', description: '软件分享', url: 'https://www.ghxi.com/', iconName: 'DownloadCloud', tags: ['Soft'], color: 'bg-green-500' },
          { id: 'msdn', name: 'MSDN 我告诉你', description: '原版系统镜像', url: 'https://next.itellyou.cn/', iconName: 'HardDrive', tags: ['OS'], color: 'bg-blue-700' },
        ]
      },
      {
        id: 'stock-images',
        title: '高清图库',
        items: [
          { id: 'unsplash', name: 'Unsplash', description: '免费版权图片', url: 'https://unsplash.com/', iconName: 'ImageIcon', tags: ['CC0'], color: 'bg-black' },
          { id: 'pexels', name: 'Pexels', description: '免费素材图库', url: 'https://www.pexels.com/zh-cn/', iconName: 'ImageIcon', tags: ['CC0'], color: 'bg-green-600' },
          { id: 'wallhaven', name: 'Wallhaven', description: '高清壁纸', url: 'https://wallhaven.cc/', iconName: 'ImageIcon', tags: ['Wall'], color: 'bg-blue-600' },
        ]
      },
      {
        id: 'game-res',
        title: '游戏资源',
        items: [
          { id: 'gamer520', name: 'Gamer520', description: '单机游戏下载', url: 'https://www.gamer520.com', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-red-600' },
        ]
      },
      {
        id: 'music-res',
        title: '音乐资源',
        items: [
          { id: 'flaclife', name: '六音无损', description: 'FLAC 下载', url: 'https://flac.life/', iconName: 'Music', tags: ['Lossless'], color: 'bg-blue-600' },
          { id: 'hifini', name: '磁力音乐', description: '音乐论坛', url: 'https://www.hifini.com/', iconName: 'Music', tags: ['Forum'], color: 'bg-purple-500' },
        ]
      },
      {
        id: 'novel-read',
        title: '小说阅读',
        items: [
          { id: 'lightnovel', name: '轻之国度', description: '轻小说社区', url: 'https://www.lightnovel.us/?465518', iconName: 'Book', tags: ['Novel'], color: 'bg-blue-400' },
          { id: 'mobinovels', name: '魔笔小说', description: '免费轻小说', url: 'https://mobinovels.com/', iconName: 'Book', tags: ['Free'], color: 'bg-purple-500' },
          { id: 'jiumo', name: '鸠摩搜书', description: '电子书搜索', url: 'https://www.jiumodiary.com', iconName: 'Book', tags: ['Search'], color: 'bg-green-600' },
          { id: '6yueting', name: '六月听书', description: '在线有声书', url: 'https://www.6yueting.com/', iconName: 'Headphones', tags: ['Audio'], color: 'bg-orange-500' },
        ]
      },
      {
        id: 'anime-watch',
        title: '动漫观看',
        items: [
          { id: 'age', name: 'AGE 动漫', description: '专注动漫资源', url: 'https://www.agedm.org/', iconName: 'Film', tags: ['Anime'], color: 'bg-blue-500' },
          { id: 'anime1', name: 'Anime1', description: '在线动漫播放', url: 'https://anime1.me/', iconName: 'Film', tags: ['Anime'], color: 'bg-pink-500' },
          { id: 'yhmgo', name: '樱花动漫', description: '老牌动漫站', url: 'https://www.yhmgo.com/', iconName: 'Film', tags: ['Anime'], color: 'bg-pink-400' },
          { id: 'bimi', name: 'BimiACG', description: '哔咪动漫', url: 'https://www.bimiacg4.net/', iconName: 'Film', tags: ['ACG'], color: 'bg-purple-500' },
          { id: 'lldm', name: '铃兰动漫', description: '动漫资源网', url: 'https://www.lldm.net/', iconName: 'Film', tags: ['Anime'], color: 'bg-blue-400' },
          { id: 'nyafun', name: 'NYA Fun', description: '动漫在线看', url: 'https://www.nyafun.net/', iconName: 'Film', tags: ['Anime'], color: 'bg-orange-400' },
          { id: 'gesamtv', name: 'GesamTV', description: '在线动漫', url: 'https://www.mitang.tv/', iconName: 'Film', tags: ['Anime'], color: 'bg-yellow-400' },
        ]
      },
      {
        id: 'manga-read',
        title: '漫画阅读',
        items: [
          { id: 'godamh', name: 'G 站漫画', description: '高质量漫画', url: 'https://godamh.com/', iconName: 'Book', tags: ['Manga'], color: 'bg-pink-500' },
          { id: 'mangacopy', name: 'MangaCopy', description: '漫画阅读', url: 'https://www.mangacopy.com', iconName: 'Book', tags: ['Copy'], color: 'bg-gray-800' },
          { id: 'colamanga', name: 'ColaManga', description: '可乐漫画', url: 'https://www.colamanga.com', iconName: 'Book', tags: ['Cola'], color: 'bg-red-500' },
          { id: 'gufengmh', name: '古风漫画', description: '古风漫画网', url: 'https://www.gufengmh.com', iconName: 'Book', tags: ['Old'], color: 'bg-orange-500' },
          { id: 'baozimh', name: '包子漫画', description: '热门漫画', url: 'https://cn.baozimh.com', iconName: 'Book', tags: ['Hot'], color: 'bg-yellow-500' },
          { id: 'idmzj', name: '动漫之家', description: '老牌漫画站', url: 'https://comic.idmzj.com', iconName: 'Book', tags: ['Home'], color: 'bg-blue-500' },
        ]
      },
      {
        id: 'movies-agg',
        title: '影视聚合',
        items: [
          { id: 'cupfox', name: '茶杯狐', description: '影视聚合搜索', url: 'https://cupfox.app/', iconName: 'Search', tags: ['Movie'], color: 'bg-orange-500' },
          { id: 'myd', name: 'MYD 影视', description: '高清影视站', url: 'https://myd04.com/', iconName: 'Film', tags: ['HD'], color: 'bg-blue-600' },
          { id: 'zhuiyingmao', name: '追影猫', description: '免费追剧', url: 'https://zhuiyingmao5.com/', iconName: 'Film', tags: ['TV'], color: 'bg-purple-600' },
          { id: 'dddog', name: 'DDDOG', description: '影视资源库', url: 'https://www.dddog.cn/movie/', iconName: 'Film', tags: ['Movie'], color: 'bg-gray-700' },
          { id: 'yinghe', name: '影合', description: '影视资源', url: 'https://yinghe.app/', iconName: 'Film', tags: ['Res'], color: 'bg-black' },
          { id: 'yinghe_hard', name: '硬核资源', description: '硬核指南', url: 'https://yinghezhinan.com/', iconName: 'Film', tags: ['Hard'], color: 'bg-gray-800' },
          { id: '4khdr', name: '4K HDR', description: '超高清影视', url: 'https://4khdr.cn', iconName: 'Film', tags: ['4K'], color: 'bg-indigo-900' },
          { id: 'svip', name: '影视搜索', description: 'SVIP 影视', url: 'https://svip.bljiex.cc/', iconName: 'Film', tags: ['VIP'], color: 'bg-red-500' },
          { id: 'ikanbot', name: '爱看机器人', description: '影视聚合', url: 'https://v.ikanbot.com', iconName: 'Bot', tags: ['Agg'], color: 'bg-blue-500' },
        ]
      }
    ]
  },
  {
    id: 'learning',
    title: '学习提升',
    subCategories: [
      {
        id: 'lang-learn',
        title: '语言学习',
        items: [
          { id: 'zhenti', name: '英语真题', description: '真题在线', url: 'https://zhenti.burningvocabulary.com', iconName: 'Book', tags: ['Exam'], color: 'bg-red-500' },
          { id: 'lingohut', name: 'LingoHut', description: '免费外语', url: 'https://www.lingohut.com', iconName: 'Globe', tags: ['Lang'], color: 'bg-blue-500' },
          { id: 'youzack', name: '精听', description: 'Youzack', url: 'https://www.youzack.com', iconName: 'Headphones', tags: ['Listen'], color: 'bg-yellow-500' },
          { id: 'enread', name: '英语阅读', description: '阅读材料', url: 'https://www.enread.com', iconName: 'Book', tags: ['Read'], color: 'bg-blue-400' },
          { id: 'qwerty', name: '拼写练习', description: '打字背词', url: 'https://qwerty.liumingye.cn/', iconName: 'Keyboard', tags: ['Type'], color: 'bg-gray-700' },
          { id: 'visuwords', name: 'Visuwords', description: '可视化单词', url: 'https://visuwords.com/', iconName: 'Eye', tags: ['Vis'], color: 'bg-purple-500' },
          { id: 'toucan', name: 'Toucan', description: '浏览器学外语', url: 'https://jointoucan.com/', iconName: 'Globe', tags: ['Ext'], color: 'bg-green-500' },
          { id: 'animejp', name: '动漫日语', description: '看动漫学日语', url: 'https://anime-manga.jp/zh/', iconName: 'Video', tags: ['JP'], color: 'bg-pink-400' },
          { id: 'cipindanci', name: '词频背词', description: '常用词', url: 'https://www.cipindanci.com/', iconName: 'Book', tags: ['Word'], color: 'bg-green-600' },
          { id: 'duolingo', name: 'Duolingo', description: '趣味学外语', url: 'https://www.duolingo.com/', iconName: 'Globe', tags: ['Fun'], color: 'bg-green-500' },
        ]
      },
      {
        id: 'translation',
        title: '翻译工具',
        items: [
          { id: 'transmart', name: '腾讯翻译', description: '交互翻译', url: 'https://transmart.qq.com', iconName: 'Languages', tags: ['Trans'], color: 'bg-blue-600' },
          { id: 'cnki', name: 'CNKI 翻译', description: '学术翻译', url: 'https://dict.cnki.net/index#', iconName: 'Book', tags: ['Acad'], color: 'bg-red-700' },
        ]
      },
      {
        id: 'ancient-books',
        title: '古籍文史',
        items: [
          { id: 'shidian', name: '识典古籍', description: '古籍阅读', url: 'https://www.shidianguji.com', iconName: 'Book', tags: ['Old'], color: 'bg-amber-700' },
          { id: 'ctext', name: '哲学书', description: '电子化计划', url: 'https://ctext.org/zhs', iconName: 'Scroll', tags: ['Phil'], color: 'bg-red-800' },
          { id: 'shuge', name: '书格', description: '古籍善本', url: 'https://new.shuge.org', iconName: 'Book', tags: ['Book'], color: 'bg-gray-700' },
        ]
      },
      {
        id: 'academic',
        title: '学术课程',
        items: [
          { id: 'khan', name: '可汗学院', description: '免费课程', url: 'https://zh.khanacademy.org', iconName: 'GraduationCap', tags: ['Edu'], color: 'bg-green-600' },
          { id: 'edx', name: 'edX', description: '名校课程', url: 'https://www.edx.org/', iconName: 'GraduationCap', tags: ['Edu'], color: 'bg-black' },
          { id: 'xuetangx', name: '学堂在线', description: '精品好课', url: 'https://www.xuetangx.com/', iconName: 'GraduationCap', tags: ['Edu'], color: 'bg-purple-600' },
          { id: 'crashcourse', name: 'CrashCourse', description: '速成课', url: 'https://crashcourse.club', iconName: 'Video', tags: ['Learn'], color: 'bg-yellow-500' },
          { id: 'runoob', name: '菜鸟教程', description: '基础编程', url: 'https://www.runoob.com', iconName: 'Book', tags: ['Code'], color: 'bg-green-500' },
          { id: 'r2coding', name: '编程自学', description: '自学之路', url: 'https://r2coding.com', iconName: 'Map', tags: ['Road'], color: 'bg-blue-500' },
          { id: 'cxyxiaowu', name: '吴师兄算法', description: '图解算法', url: 'https://cxyxiaowu.com', iconName: 'Code', tags: ['Algo'], color: 'bg-green-600' },
          { id: 'doyoudo', name: 'doyoudo', description: '设计教程', url: 'https://www.doyoudo.com/free', iconName: 'Video', tags: ['Design'], color: 'bg-orange-500' },
          { id: 'oeasy', name: 'oeasy', description: '良心教程', url: 'https://oeasy.org', iconName: 'Book', tags: ['Free'], color: 'bg-blue-400' },
          { id: 'mdn', name: 'MDN Web Docs', description: 'Web 开发文档', url: 'https://developer.mozilla.org/zh-CN/', iconName: 'Code', tags: ['Web'], color: 'bg-black' },
        ]
      },
      {
        id: 'medical',
        title: '医学知识',
        items: [
          { id: 'msd', name: '默沙东', description: '诊疗手册', url: 'https://www.msdmanuals.cn', iconName: 'Stethoscope', tags: ['Med'], color: 'bg-teal-600' },
          { id: 'dxy', name: '丁香用药', description: '用药助手', url: 'https://drugs.dxy.cn/pc', iconName: 'Stethoscope', tags: ['Drug'], color: 'bg-purple-500' },
        ]
      },
      {
        id: 'exams',
        title: '考试题库',
        items: [
          { id: 'examcoo', name: 'ExamCoo', description: '在线考试', url: 'https://www.examcoo.com', iconName: 'FileText', tags: ['Exam'], color: 'bg-blue-400' },
          { id: 'examcoo_sys', name: '免费考试系统', description: '考试酷', url: 'https://www.examcoo.com/', iconName: 'Globe', tags: ['Sys'], color: 'bg-blue-500' },
          { id: 'nssd', name: '社科数据库', description: '国家哲学库', url: 'http://www.nssd.org', iconName: 'Database', tags: ['Data'], color: 'bg-red-600' },
        ]
      }
    ]
  },
  {
    id: 'explore-culture',
    title: '探索文化',
    subCategories: [
      {
        id: 'geo-explore',
        title: '地理探索',
        items: [
          { id: 'zoomearth', name: '实时地球', description: '卫星图', url: 'https://zoom.earth/', iconName: 'Globe', tags: ['Earth'], color: 'bg-blue-600' },
          { id: 'deepsea', name: '深海探索', description: '深海生物', url: 'https://neal.fun/deep-sea', iconName: 'Anchor', tags: ['Sea'], color: 'bg-blue-900' },
          { id: 'bluemarine', name: '海底世界', description: '海洋呼吸', url: 'https://www.bluemarinefoundation.com/the-sea-we-breathe/', iconName: 'Droplet', tags: ['Eco'], color: 'bg-cyan-500' },
          { id: 'randomstreet', name: '随机街景', description: '环游世界', url: 'https://randomstreetview.com/', iconName: 'Map', tags: ['Travel'], color: 'bg-yellow-500' },
          { id: 'skyline', name: '天际摄像头', description: '实时直播', url: 'https://www.skylinewebcams.com/', iconName: 'Camera', tags: ['Live'], color: 'bg-orange-500' },
          { id: 'shark', name: '鲨鱼追踪', description: 'Ocearch', url: 'https://www.ocearch.org/tracker/', iconName: 'Navigation', tags: ['Shark'], color: 'bg-blue-700' },
          { id: 'ventusky', name: 'Ventusky', description: '气象可视化', url: 'https://www.ventusky.com/', iconName: 'Wind', tags: ['Weather'], color: 'bg-teal-500' },
          { id: 'lightpollution', name: '光污染图', description: '全球光污染', url: 'https://www.lightpollutionmap.info/', iconName: 'Lightbulb', tags: ['Map'], color: 'bg-purple-900' },
          { id: 'meteor', name: '流星雨', description: '观测指南', url: 'https://www.meteorshowers.org/', iconName: 'Star', tags: ['Space'], color: 'bg-indigo-500' },
          { id: 'flight', name: '航班追踪', description: '实时航班', url: 'https://zh.flightaware.com/', iconName: 'Plane', tags: ['Air'], color: 'bg-blue-600' },
          { id: 'cybermap', name: '网络攻击图', description: '卡巴斯基', url: 'https://cybermap.kaspersky.com', iconName: 'Shield', tags: ['Cyber'], color: 'bg-green-500' },
        ]
      },
      {
        id: 'museums',
        title: '博物展馆',
        items: [
          { id: 'dpm', name: '故宫全景', description: 'VR 游故宫', url: 'https://pano.dpm.org.cn/', iconName: 'Building2', tags: ['VR'], color: 'bg-red-800' },
          { id: 'digitalcol', name: '故宫文物', description: '数字藏品', url: 'https://digicol.dpm.org.cn/', iconName: 'Database', tags: ['Art'], color: 'bg-red-700' },
          { id: 'cyark', name: 'CyArk', description: '古迹数字化', url: 'https://www.cyark.org/', iconName: 'Building2', tags: ['3D'], color: 'bg-orange-600' },
          { id: 'ltfc', name: '珍宝馆', description: '中华珍宝', url: 'https://g2.ltfc.net/', iconName: 'Image', tags: ['Art'], color: 'bg-yellow-600' },
          { id: 'sxhm', name: '陕西博物馆', description: '线上展览', url: 'https://www.sxhm.com/online.html', iconName: 'Building2', tags: ['History'], color: 'bg-gray-600' },
          { id: 'shanghai', name: '上海博物馆 AR', description: '增强现实', url: 'https://www.shanghaimuseum.net/mu/frontend/pg/index', iconName: 'Smartphone', tags: ['AR'], color: 'bg-blue-500' },
          { id: 'national', name: '国博 VR', description: '国家博物馆', url: 'http://www.chnmuseum.cn/Portals/0/web/vr/', iconName: 'Building2', tags: ['VR'], color: 'bg-red-600' },
          { id: 'louvre', name: '卢浮宫', description: '数字藏品', url: 'https://collections.louvre.fr/', iconName: 'Building2', tags: ['Art'], color: 'bg-yellow-500' },
          { id: 'rijks', name: '荷兰博物馆', description: '国立博物馆', url: 'https://www.rijksmuseum.nl/nl', iconName: 'Building2', tags: ['Art'], color: 'bg-orange-500' },
          { id: 'intel', name: '英特尔博物馆', description: '虚拟展馆', url: 'https://virtualmuseum.intel.com/', iconName: 'Cpu', tags: ['Tech'], color: 'bg-blue-600' },
        ]
      },
      {
        id: 'history-human',
        title: '历史人文',
        items: [
          { id: 'bigpixel', name: '千亿像素', description: '极高清全景', url: 'http://bigpixel.cn/', iconName: 'Camera', tags: ['HD'], color: 'bg-blue-400' },
          { id: 'hpc', name: '历史照片库', description: '中国老照片', url: 'https://www.hpcbristol.net/', iconName: 'Image', tags: ['Photo'], color: 'bg-gray-500' },
          { id: 'sp2000', name: '中国物种', description: '物种名录', url: 'http://sp2000.org.cn/', iconName: 'Dna', tags: ['Bio'], color: 'bg-green-600' },
          { id: 'phonemica', name: '乡音苑', description: '方言地图', url: 'https://phonemica.net', iconName: 'Mic', tags: ['Lang'], color: 'bg-green-500' },
          { id: 'cbaigui', name: '知妖', description: '妖怪图鉴', url: 'http://www.cbaigui.com', iconName: 'Ghost', tags: ['Myth'], color: 'bg-red-800' },
          { id: 'gushigu', name: '故事谷', description: '民间故事', url: 'https://www.gushigu.cn/', iconName: 'Book', tags: ['Story'], color: 'bg-yellow-600' },
          { id: 'yanyuzhai', name: '烟雨阁', description: '野史杂谈', url: 'https://www.yanyuzhai.cn/', iconName: 'Book', tags: ['History'], color: 'bg-gray-600' },
          { id: 'historytoday', name: '历史今天', description: '历史上的今天', url: 'https://baike.baidu.com/calendar/', iconName: 'Clock', tags: ['Time'], color: 'bg-blue-500' },
          { id: 'allhistory', name: '全历史', description: '知识图谱', url: 'https://www.allhistory.com', iconName: 'Clock', tags: ['History'], color: 'bg-purple-600' },
          { id: 'musichistory', name: 'Music Evolved', description: '音乐进化', url: 'https://pudding.cool/2017/03/music-history', iconName: 'Music', tags: ['Data'], color: 'bg-pink-500' },
          { id: 'guancanghai', name: '观沧海', description: '历史地图', url: 'https://www.ageeye.cn/', iconName: 'Map', tags: ['History'], color: 'bg-teal-600' },
        ]
      },
      {
        id: 'art-gallery',
        title: '艺术图库',
        items: [
          { id: 'artvee', name: '艺术公域', description: '古典艺术', url: 'https://artvee.com/', iconName: 'Image', tags: ['Art'], color: 'bg-orange-400' },
          { id: 'sigoo', name: '极像素', description: '高清图库', url: 'https://www.sigoo.com/', iconName: 'Image', tags: ['HD'], color: 'bg-blue-400' },
          { id: 'airpano', name: 'AirPano', description: '全景旅游', url: 'https://www.airpano.org.cn', iconName: 'Globe', tags: ['VR'], color: 'bg-blue-500' },
          { id: 'noway', name: '无限美术馆', description: '3D 艺术', url: 'https://gallery.nowaythis.works/', iconName: 'Building2', tags: ['3D'], color: 'bg-pink-500' },
        ]
      }
    ]
  },
  {
    id: 'entertainment',
    title: '娱乐互动',
    subCategories: [
      {
        id: 'casual-games',
        title: '休闲小游戏',
        items: [
          { id: 'ra2', name: '红警', description: '网页版 RA2', url: 'https://game.chronodivide.com', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-red-600' },
          { id: 'pvz', name: '植物大战僵尸', description: '网页 PVZ', url: 'https://pvz.heheda.top', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-green-600' },
          { id: 'yikm', name: '小霸王', description: '红白机', url: 'https://www.yikm.net', iconName: 'Gamepad2', tags: ['Retro'], color: 'bg-orange-500' },
          { id: 'tetr', name: 'tetr.io', description: '俄罗斯方块', url: 'https://tetr.io', iconName: 'Gamepad2', tags: ['Game'], color: 'bg-purple-600' },
          { id: 'dccxi', name: '信任进化', description: '博弈论', url: 'https://dccxi.com', iconName: 'Brain', tags: ['Game'], color: 'bg-yellow-500' },
          { id: 'syaro', name: '人生重开', description: '文字游戏', url: 'https://syaro.io', iconName: 'RefreshCw', tags: ['Game'], color: 'bg-blue-400' },
          { id: 'slapkirk', name: 'slapkirk', description: '打脸解压', url: 'https://www.slapkirk.com/play', iconName: 'Hand', tags: ['Fun'], color: 'bg-red-400' },
          { id: 'reaction', name: '反应测试', description: '手速测试', url: 'https://humanbenchmark.com/tests/reactiontime', iconName: 'Zap', tags: ['Test'], color: 'bg-blue-500' },
        ]
      },
      {
        id: 'character-create',
        title: '角色捏脸',
        items: [
          { id: 'waifu', name: '美少女生成器', description: 'AI 老婆', url: 'https://thiswaifudoesnotexist.net', iconName: 'Image', tags: ['Anime'], color: 'bg-pink-400' },
          { id: 'picrew', name: '动漫捏脸', description: '头像制作', url: 'https://picrew.me/ja', iconName: 'Smile', tags: ['Avatar'], color: 'bg-pink-500' },
          { id: 'noperson', name: '查无此人', description: 'AI 人脸', url: 'https://thispersondoesnotexist.com', iconName: 'Users', tags: ['AI'], color: 'bg-gray-400' },
        ]
      },
      {
        id: 'instruments',
        title: '在线乐器',
        items: [
          { id: 'virtinstr', name: '虚拟乐器', description: '在线演奏', url: 'https://www.virtualmusicalinstruments.com', iconName: 'Music', tags: ['Play'], color: 'bg-blue-500' },
          { id: 'piano', name: '在线钢琴', description: '弹钢琴', url: 'https://www.xiwnn.com/piano', iconName: 'Music', tags: ['Play'], color: 'bg-black' },
          { id: 'locser', name: '公共音乐', description: '领域音乐', url: 'https://www.locserendipity.com/PushPlay.html', iconName: 'Music', tags: ['Free'], color: 'bg-green-500' },
        ]
      },
      {
        id: 'fun-exp',
        title: '趣味体验',
        items: [
          { id: 'chi', name: '今天吃什么', description: '随机食物', url: 'https://chi.hillcloud.net', iconName: 'Utensils', tags: ['Food'], color: 'bg-orange-500' },
          { id: 'buhuibaidu', name: '你不会百度吗', description: '教你搜索', url: 'https://buhuibaidu.me', iconName: 'Search', tags: ['Fun'], color: 'bg-blue-600' },
          { id: 'fakeupdate', name: '假装升级', description: '摸鱼神器', url: 'https://fakeupdate.net', iconName: 'Monitor', tags: ['Fun'], color: 'bg-blue-500' },
          { id: 'answers', name: '答案之书', description: '解答疑惑', url: 'https://www.myanswersbook.com', iconName: 'Book', tags: ['Fun'], color: 'bg-black' },
          { id: 'nukemap', name: '核弹模拟', description: '爆炸范围', url: 'https://nuclearsecrecy.com/nukemap/', iconName: 'Bomb', tags: ['Sim'], color: 'bg-red-600' },
          { id: 'earthtime', name: '时间线', description: '地球演化', url: 'https://timelineofearth.com/', iconName: 'Clock', tags: ['Time'], color: 'bg-green-600' },
          { id: 'mechkeys', name: '机械键盘图', description: '轴体百科', url: 'https://scrapbox.io/MECHKEYS/', iconName: 'Keyboard', tags: ['Wiki'], color: 'bg-gray-800' },
          { id: 'dialects', name: '方言档案', description: '口音录音', url: 'https://www.dialectsarchive.com/', iconName: 'Mic', tags: ['Lang'], color: 'bg-red-500' },
          { id: 'passport', name: '护照馆', description: '护照排行', url: 'https://www.passportindex.org/', iconName: 'Book', tags: ['Data'], color: 'bg-blue-800' },
          { id: 'flags', name: '世界国旗', description: '国旗百科', url: 'https://world-flags.org/', iconName: 'Flag', tags: ['Wiki'], color: 'bg-red-500' },
          { id: 'nomad', name: 'Nomadlist', description: '数字游民', url: 'https://nomadlist.com/', iconName: 'Map', tags: ['Life'], color: 'bg-red-400' },
          { id: 'manhole', name: '井盖地图', description: '井盖文化', url: 'https://manhole.co.il/', iconName: 'Map', tags: ['Art'], color: 'bg-gray-600' },
          { id: 'infra', name: '电力地图', description: '基建分布', url: 'https://openinframap.org/', iconName: 'Zap', tags: ['Map'], color: 'bg-yellow-500' },
          { id: 'pianospub', name: '公共钢琴', description: '钢琴地图', url: 'https://pianos.pub/', iconName: 'Map', tags: ['Piano'], color: 'bg-black' },
          { id: 'logistics', name: '物流艺术', description: '快递轨迹', url: 'https://logisticsartproject.com/', iconName: 'Truck', tags: ['Art'], color: 'bg-gray-700' },
          { id: 'famicn', name: '模拟器博物馆', description: '红白机历史', url: 'http://www.famicn.com/', iconName: 'Gamepad2', tags: ['Retro'], color: 'bg-red-700' },
          { id: 'archdaily', name: 'ArchDaily', description: '建筑设计', url: 'https://www.archdaily.cn/cn/', iconName: 'Building2', tags: ['Arch'], color: 'bg-blue-500' },
          { id: 'anyknew', name: 'anyknew热点', description: '热点聚合', url: 'https://www.anyknew.com/#/', iconName: 'TrendingUp', tags: ['News'], color: 'bg-blue-500' },
          { id: 'salary', name: '薪情', description: '工资查询', url: 'https://www.51salary.com', iconName: 'BarChart', tags: ['$$$'], color: 'bg-green-600' },
          { id: 'phonemuseum', name: '手机博物馆', description: '发展史', url: 'https://www.mobilephonemuseum.com/catalogue', iconName: 'Smartphone', tags: ['Hist'], color: 'bg-black' },
          { id: 'lbw', name: '移轴摄影', description: '微缩世界', url: 'https://www.littlebigworld.de/', iconName: 'Camera', tags: ['Photo'], color: 'bg-orange-400' },
          { id: 'flatearth', name: '地平说', description: '学会官网', url: 'https://www.tfes.org/', iconName: 'Globe', tags: ['Fun'], color: 'bg-gray-700' },
          { id: 'oec', name: 'OEC数据', description: '经济复杂性', url: 'https://oec.world/', iconName: 'BarChart', tags: ['Data'], color: 'bg-indigo-600' },
          { id: 'wood', name: '木材数据库', description: '木材属性', url: 'https://www.wood-database.com/', iconName: 'Database', tags: ['Wood'], color: 'bg-yellow-700' },
          { id: 'midi', name: '古典音乐库', description: 'MIDI下载', url: 'https://www.kunstderfuge.com/', iconName: 'Music', tags: ['MIDI'], color: 'bg-yellow-600' },
          { id: 'webcam', name: '全球摄像头', description: '世界直播', url: 'https://www.webcamtaxi.com/', iconName: 'Camera', tags: ['Live'], color: 'bg-yellow-500' },
        ]
      }
    ]
  }
];
    