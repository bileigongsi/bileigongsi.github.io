import type { UserConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')
import mdFootnote from 'markdown-it-footnote'
import mdTaskList from 'markdown-it-task-lists'

const config = defineConfig({
	vite: {
		plugins: [
		
		],
	},
	base: '/',
	lang: 'zh-CN',
	// 网站标题，左上角以及meta标题
	title: '公司避雷',
	description: '找工作防踩雷',
	cleanUrls: true,
	// 是否忽略死链
	ignoreDeadLinks: false,
	//页面底部显示最后更新时间。
	lastUpdated: true,
	// markdown配置
	colorModeSwitch: true,
	//切换主题
	contributors: true, //页面底部显示文档贡献者列表。
	markdown: {
		math: true,
		lineNumbers: true,
		container: {
			tipLabel: '小提示',
			warningLabel: '注意',
			dangerLabel: '警告',
			infoLabel: '信息',
			detailsLabel: '详情内容',
		},
		// linkify: false,
		config: (md) => {
			md.use(mdFootnote)
			md.use(mdTaskList)
		},
	},
	//  主题配置
	themeConfig: {
		logo: { src: '/favicon.svg', width: 24, height: 24 },
		lastUpdated: {
			text: '最后更新时间',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium',
			},
		},
		darkModeSwitchLabel: '主题',
		sidebarMenuLabel: '总目录',
		returnToTopLabel: '回到顶部',
		externalLinkIcon: true,
		// aside: false,
		outlineTitle: '本页的章节',
		// 显示层级
		outline: { level: 'deep', label: '本页的章节' },
		// lastUpdatedText: '最近更新时间',
		siteTitle: '找工作防踩雷',
		// siteTitle: false, // 不显示标题
		// 上一页下一页文本
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		
	//设置标签页图标
  	head:[
  		['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
		['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#555BC2' }],
		['meta', { name: 'og:type', content: 'website' }],
    ],
		
		//outline: false,
		aside: false,
		
	//头部导航栏
    nav: [
      {
        text: "避雷公司在线表格",
        items: [
          { text: "福州避雷公司表格", link: "https://docs.qq.com/sheet/DZUpIRkdpcXdmYmND?tab=BB08J2" },
          { text: "福州避雷公司表格(更新中)", link: "https://docs.qq.com/sheet/DT3ViRmpKU3Vva3hX" },
          { text: "莆田避雷公司表格(更新中)", link: "https://docs.qq.com/sheet/DT0dWcFdRcnJXdG92?tab=BB08J2" },
          { text: "大泉州防踩雷表格(更新中)", link: "https://docs.qq.com/sheet/DY2RHc0hoT2xhaHJJ?tab=apero3" },
          { text: "厦门避雷公司文档(金山文档)", link: "https://kdocs.cn/l/cgyiX16CVh7L" },
          { text: "厦门避雷公司表格(更新中)", link: "https://docs.qq.com/sheet/DT212TGFSQkZLU3Bs" },
        ],
      },],  //头部导航栏代码结束。

	//侧边栏代码开始
  	sidebar: [
  	
  	 { text: "公告🪧", link: "/notice" },
  
  //福州公司黑榜
      {
        text: "福州公司黑榜",
        collapsed: true,
        items: [
          { text: "福州公司黑榜-0", link: "/fuzhou/blacklist0" },
          { text: "福州公司黑榜-1", link: "/fuzhou/blacklist1" },
        ],
      },
  
  //莆田公司黑榜
      {
        text: "莆田公司黑榜",
        collapsed: true,
        items: [
          { text: "泉州公司黑榜-1", link: "/putian/blacklist1" },
        ],
      },
  
  //泉州公司黑榜
      {
        text: "泉州公司黑榜",
        collapsed: true,
        items: [
          { text: "泉州公司黑榜-1", link: "/quanzhou/blacklist1" },
          { text: "泉州公司黑榜-2", link: "/quanzhou/blacklist2" },
          { text: "泉州公司黑榜-3", link: "/quanzhou/blacklist3" },
          { text: "泉州公司黑榜-4", link: "/quanzhou/blacklist4" },
        ],
      },
      
      //厦门公司黑榜
      {
        text: "厦门公司黑榜",
        collapsed: true,
        items: [
          { text: "厦门公司黑榜-0", link: "/xiameng/blacklist0" },
          { text: "厦门公司黑榜-1", link: "/xiameng/blacklist1" },
          { text: "厦门公司黑榜-2", link: "/xiameng/blacklist2" },
        ],
      },
      
      //避雷公司详解
      {
        text: "公司避雷详解",
        collapsed: true,
        items: [
          { text: "公司避雷详解", link: "/detail" },
        ],
      },
      
      //劳动法学习实操手册
      {
        text: "劳动法学习实操手册(仲裁必看)",
        collapsed: true,
        items: [
          { text: "《劳动法学习实操手册》", link: "https://kdocs.cn/l/caNjbacnJr3U" },
          { text: "第三章 劳动争议法律程序(仲裁必看)", link: "/manual/manual3" },
          { text: "第四章 确定劳动关系及二倍工资争议", link: "/manual/manual4" },
        ],
      },
      
      //劳动仲裁和劳动诉讼的攻略
      {
        text: "劳动仲裁和劳动诉讼攻略",
        collapsed: true,
        items: [
          { text: "福州、莆田、厦门仲裁委地址及联系电话", link: "/54/phone" },
          { text: "一张图弄明白劳动关系与劳务关系的区别", link: "/54/2023-02-24" },
          { text: "关于确认劳动关系的常见法律问题", link: "/54/labor-relationship" },
          { text: "入职公司不签劳动合同怎么办?", link: "/54/2022-06-15" },
          { text: "稳稳的双倍工资，但是公司找我签合同咋办？", link: "/54/2023-02-01" },
          { text: "解散部门+调岗，别被公司套路！", link: "/54/2023-01-25" },
          { text: "补偿金？赔偿金？傻傻分不清楚", link: "/54/2023-06-05" },
          { text: "劳动仲裁怎么准备证据？", link: "/54/how-to-prepare-evidence" },
          { text: "劳动仲裁和劳动诉讼的攻略", link: "/996law/README" },
          { text: "劳动仲裁申请书的写法", link: "/996law/README1" },
          { text: "劳动仲裁申请书 下载", link: "/document/zcsqs" },
          { text: "被迫解除劳动关系通知函", link: "/document/bpjcldgx" },
          { text: "劳动仲裁出庭你需要注意这些", link: "/54/2021-08-23" },
          { text: "举报社保基金违法违规，还有奖励拿？", link: "/54/2023-03-13" },
          { text: "小孙的仲裁经历", link: "/996law/case/mrsun" },
          { text: "周先生自述仲裁经历", link: "/996law/case/selfreport" },
        ],
      },
      
      //劳动人事
      {
        text: "劳动人事 (案例)",
        collapsed: true,
        items: [
          { text: "1、处理加班费争议，如何分配举证责任", link: "/laodong/index1" },
          { text: "2、加班费的仲裁时效应当如何认定", link: "/laodong/index2" },
          { text: "3、劳动者拒绝违法超时加班安排，用人单位能否解除劳动合同", link: "/laodong/index3" },
          { text: "4、劳动者与用人单位订立放弃加班费协议，能否主张加班费", link: "/laodong/index4" },
          { text: "5、用人单位未按规章制度履行加班审批手续，能否认定劳动者加班事实", link: "/laodong/index5" },
          { text: "6、用人单位未与劳动者协商一致增加工作任务，劳动者是否有权拒绝", link: "/laodong/index6" },
          { text: "7、劳动者在离职文件上签字确认加班费已结清，是否有权请求支付欠付的加班费", link: "/laodong/index7" },
          { text: "8、用人单位以规章制度形式否认劳动者加班事实是否有效", link: "/laodong/index8" },
          { text: "9、用人单位与劳动者约定实行包薪制，是否需要依法支付加班费", link: "/laodong/index9" },
        ],
      },
      
      //other
      {
        text: "仲裁文书模版",
		collapsed: true,
        items: [
          { text: "劳动仲裁申请书", link: "/document/zcsqs" },
          { text: "被迫解除劳动关系通知函", link: "/document/bpjcldgx" },
	  	  { text: "错题本 模板", link: "/document/misremembered" },
          //{ text: "计算", link: "/document/cal" },
          //{ text: "逻辑推理", link: "/document/logic" },
        ],
      },
      
], //侧边栏代码结束
		
// 每个页面页脚的编辑此页  :path  为当前路由
	editLink: {
			text: '在 GitHub 中改进此页面的内容',
			pattern: 'https://github.com/bileigongsi/edit/main/docs/:path',
	},

	footer: {
			message: '由 Apache 许可证 2.0 发布',
			copyright: '2023-2024 找工作防踩雷社区',
	},
	
	search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索篇章',
						buttonAriaLabel: '搜索篇章',
					},
					modal: {
						noResultsText: '没有寻找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭搜索',
						},
					},
				},
			},
	},
	
	}, //DefaultTheme代码结束

	buildEnd(siteConfig) {
		// console.log(siteConfig)
	},
	transformHead(ctx) {
		// console.log(1111, ctx)
	},
})

export default config
