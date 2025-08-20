export const zh = {
  // 导航
  nav: {
    home: '首页',
    services: '服务',
    contact: '联系我们',
    freeConsultation: '免费咨询',
    about: '关于我们'
  },

  // Hero 区域
  hero: {
    title: 'Sheepaw Pet Travel',
    subtitle: '致力于让每位爱宠人士都能与毛孩子畅通无阻地享受世界',
    features: {
      fullProtection: '全程保障',
      professionalTransport: '专业运输',
      caringService: '贴心服务',
      globalCoverage: '全球覆盖'
    },
    buttons: {
      freeConsultation: '免费咨询',
      learnMore: '了解服务'
    }
  },

  // 服务
  services: {
    title: '我们的服务',
    subtitle: '专业、简约、可靠的宠物跨境方案',
    items: {
      chinaToCanada: {
        title: '中国到加拿大 全流程证件代办',
        description: '与合作兽医机构对接，完成芯片注射、动物卫生证书（Animal Health Certificate）、中华人民共和国出入境检验检疫等手续',
        features: [
          '芯片注射与健康检查（合作兽医院）',
          '动物卫生证书（Animal Health Certificate）办理',
          '中华人民共和国出入境检验检疫流程',
          '全流程跟进与材料审核'
        ]
      },
      canadaToChina: {
        title: '加拿大到中国 全流程证件代办',
        description: '与合作兽医机构对接，完成芯片与疫苗注射、FAVN 抗体检测、CFIA 健康证书等办理',
        features: [
          '芯片与疫苗注射（合作兽医院）',
          'FAVN 抗体检测（FAVN test for pet travel）',
          'CFIA 健康证书（CFIA Health Certificate）',
          '材料准备与时程管理'
        ]
      },
      documentService: {
        title: '宠物旅行指导与高端私人定制',
        description: '提供加拿大与中国地区携宠旅行指导，以及高端私人携带宠物旅行规划',
        features: [
          '加拿大/中国 携宠旅行政策与路线指导',
          '高端私人旅行方案定制',
          '行前准备清单与注意事项'
        ]
      }
    },
    whyChooseUs: {
      title: '为什么选择我们',
      subtitle: '以合规、专业与高效为核心，为您与宠物提供省心体验',
      features: {
        caring: {
          title: '全程用心陪伴',
          description: '理解宠物对家庭的重要性，流程透明、响应迅速'
        },
        protection: {
          title: '法规合规与风险控制',
          description: '严格遵循中加两地法规与检疫要求，降低跨境风险'
        },
        realtime: {
          title: '时程管理与信息跟进',
          description: '关键节点提醒与材料核对，确保按期完成'
        },
        local: {
          title: '两地团队，本土服务',
          description: '中加两地合作机构，提供本地化沟通与服务'
        }
      }
    }
  },

  // 关于我们
  about: {
    title: '关于我们',
    body: '我们专注中加双向宠物跨境出行服务，联合合规的合作兽医与机构，提供芯片与疫苗注射、FAVN 抗体检测、CFIA 健康证书、动物卫生证书、检验检疫等全流程证件代办，并提供加拿大与中国的携宠旅行指导及高端私人旅行规划。'
  },

  // 联系表单
  contact: {
    title: '让我们为您的毛孩子定制专属方案',
    subtitle: '填写下面的表单，我们的专业顾问将在24小时内联系您，为您的毛孩子规划最合适的运输方案',
    sections: {
      aboutYou: '告诉我们关于您',
      aboutPet: '关于您的毛孩子',
      serviceNeeds: '您的服务需求',
      moreInfo: '更多想告诉我们的'
    },
    fields: {
      name: {
        label: '姓名',
        placeholder: '怎么称呼您呢？',
        error: '请输入您的姓名'
      },
      phone: {
        label: '电话',
        placeholder: '方便联系的电话',
        error: '请输入有效的电话号码'
      },
      email: {
        label: '邮箱',
        placeholder: '常用的邮箱地址',
        error: '请输入有效的邮箱地址'
      },
      petType: {
        label: '宠物类型',
        placeholder: '请选择宠物类型',
        error: '请选择宠物类型',
        options: {
          dog: '狗狗',
          cat: '猫咪',
          bird: '鸟类',
          rabbit: '兔子',
          other: '其他'
        }
      },
      route: {
        label: '运输路线',
        placeholder: '请选择运输路线',
        error: '请选择运输路线',
        options: {
          chinaToCanada: '中国到加拿大',
          canadaToChina: '加拿大到中国',
          other: '其他路线'
        }
      },
      timeline: {
        label: '预计时间',
        placeholder: '请选择预计时间',
        error: '请选择预计时间',
        options: {
          asap: '越快越好',
          oneMonth: '1个月内',
          twoThreeMonths: '2-3个月',
          threeSixMonths: '3-6个月',
          flexible: '时间灵活'
        }
      },
      message: {
        label: '详细需求',
        placeholder: '告诉我们您和毛孩子的特殊需要，比如健康状况、特殊要求等...',
        error: '请详细描述您的需求'
      }
    },
    submit: '开始咨询',
    submitting: '提交中...',
    success: '提交成功！我们将在24小时内联系您',
    error: '提交失败，请稍后重试或直接联系我们',
    emergency: '如有紧急需求，请直接联系我们',
    contactInfo: {
      wechat: '微信: sheepaw_pet',
      phone: '电话: 加拿大 (+1) 249-688-3003 / 中国 (+86) 135-2285-3556'
    }
  },

  // 页脚
  footer: {
    description: '我们深知毛孩子对您的重要性，每一个细节都用心安排。以合规、专业与高效为核心，帮助您与宠物顺利跨境。',
    quickLinks: '快速链接',
    contactInfo: '联系方式',
    phone: '电话',
    email: '邮箱',
    address: '地址',
    addressCA: '加拿大：610 Academy Way, Kelowna, BC, V1V 0E8',
    addressCN: '中国：北京市朝阳区光华路甲10号',
    copyright: '© 2025 Sheepaw Pet Travel. 保留所有权利。',
    privacy: '隐私政策',
    terms: '服务条款',
    slogan: '用心服务每一只毛孩子'
  }
}

