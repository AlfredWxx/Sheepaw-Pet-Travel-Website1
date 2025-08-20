import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// 邮件配置
const transporter = nodemailer.createTransport({
  service: 'gmail', // 或其他邮件服务
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password',
  },
})

// 多语言邮件模板
const emailTemplates = {
  zh: {
    customerSubject: '感谢您的信任 - 我们将尽快与您联系',
    companySubject: '新的客户咨询 - 需要及时跟进',
    customerTemplate: (name: string, petType: string, route: string, timeline: string) => `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #4F46E5; margin-bottom: 10px;">感谢您的信任</h1>
          <p style="color: #6B7280; font-size: 18px;">我们将尽快与您联系</p>
        </div>
        
        <div style="background: #F9FAFB; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">我们已收到您的咨询：</h2>
          <ul style="color: #6B7280; line-height: 1.6;">
            <li>宠物: ${petType}</li>
            <li>路线: ${route}</li>
            <li>时间: ${timeline}</li>
          </ul>
        </div>
        
        <div style="background: #EEF2FF; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">我们的承诺：</h2>
          <ul style="color: #4F46E5; line-height: 1.6;">
            <li>✓ 24小时内专业顾问联系您</li>
            <li>✓ 为您定制最适合的方案</li>
            <li>✓ 透明的价格，无隐藏费用</li>
            <li>✓ 全程陪伴毛孩子的旅程</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
          <p style="color: #6B7280; margin-bottom: 15px;">如有紧急需求，请随时联系我们：</p>
          <p style="color: #4F46E5; font-weight: 600;">加拿大：+1 (249) 688-3003</p>
          <p style="color: #4F46E5; font-weight: 600;">中国：+86 135-2285-3556 | 微信: sheepaw_pet</p>
        </div>
        
        <div style="text-align: center; color: #6B7280; font-size: 14px;">
          <p>让我们一起守护宠物旅程的每一步</p>
          <p style="margin-top: 10px; font-weight: 600;">温馨的Sheepaw团队</p>
        </div>
      </div>
    `,
    companyTemplate: (name: string, phone: string, email: string, petType: string, route: string, timeline: string, message: string) => `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #4F46E5;">新的客户咨询</h1>
        
        <div style="background: #F9FAFB; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">客户信息：</h2>
          <p><strong>姓名:</strong> ${name}</p>
          <p><strong>电话:</strong> ${phone}</p>
          <p><strong>邮箱:</strong> ${email}</p>
        </div>
        
        <div style="background: #FEF3C7; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">宠物信息：</h2>
          <p><strong>宠物类型:</strong> ${petType}</p>
          <p><strong>运输路线:</strong> ${route}</p>
          <p><strong>预计时间:</strong> ${timeline}</p>
        </div>
        
        <div style="background: #E0E7FF; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">详细需求：</h2>
          <p>${message}</p>
        </div>
        
        <p style="color: #6B7280; font-size: 14px;">请尽快联系客户，提供专业服务。</p>
      </div>
    `,
    errorMessages: {
      missingFields: '请填写所有必填字段',
      success: '咨询提交成功，我们将尽快联系您',
      error: '提交失败，请稍后重试'
    }
  },
  fr: {
    customerSubject: 'Merci pour votre confiance - Nous vous contacterons bientôt',
    companySubject: 'Nouvelle consultation client - Suivi requis',
    customerTemplate: (name: string, petType: string, route: string, timeline: string) => `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #4F46E5; margin-bottom: 10px;">Merci pour votre confiance</h1>
          <p style="color: #6B7280; font-size: 18px;">Nous vous contacterons bientôt</p>
        </div>
        
        <div style="background: #F9FAFB; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Nous avons reçu votre demande :</h2>
          <ul style="color: #6B7280; line-height: 1.6;">
            <li>Animal: ${petType}</li>
            <li>Route: ${route}</li>
            <li>Délai: ${timeline}</li>
          </ul>
        </div>
        
        <div style="background: #EEF2FF; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Notre engagement :</h2>
          <ul style="color: #4F46E5; line-height: 1.6;">
            <li>✓ Contact sous 24h par un conseiller</li>
            <li>✓ Plan personnalisé pour vous</li>
            <li>✓ Prix transparent, pas de frais cachés</li>
            <li>✓ Accompagnement complet du voyage</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
          <p style="color: #6B7280; margin-bottom: 15px;">Pour les urgences, contactez-nous :</p>
          <p style="color: #4F46E5; font-weight: 600;">Canada: +1 (249) 688-3003</p>
          <p style="color: #4F46E5; font-weight: 600;">Chine: +86 135-2285-3556 | WeChat: sheepaw_pet</p>
        </div>
        
        <div style="text-align: center; color: #6B7280; font-size: 14px;">
          <p>Protégeons ensemble chaque étape du voyage de votre compagnon</p>
          <p style="margin-top: 10px; font-weight: 600;">L'équipe chaleureuse de Sheepaw</p>
        </div>
      </div>
    `,
    companyTemplate: (name: string, phone: string, email: string, petType: string, route: string, timeline: string, message: string) => `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #4F46E5;">Nouvelle consultation client</h1>
        
        <div style="background: #F9FAFB; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Informations client :</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background: #FEF3C7; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Informations animal :</h2>
          <p><strong>Type d'animal:</strong> ${petType}</p>
          <p><strong>Route de transport:</strong> ${route}</p>
          <p><strong>Délai prévu:</strong> ${timeline}</p>
        </div>
        
        <div style="background: #E0E7FF; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Besoins détaillés :</h2>
          <p>${message}</p>
        </div>
        
        <p style="color: #6B7280; font-size: 14px;">Veuillez contacter le client rapidement pour un service professionnel.</p>
      </div>
    `,
    errorMessages: {
      missingFields: 'Veuillez remplir tous les champs obligatoires',
      success: 'Demande soumise avec succès, nous vous contacterons bientôt',
      error: 'Échec de la soumission, veuillez réessayer'
    }
  },
  en: {
    customerSubject: 'Thank you for your trust - We will contact you soon',
    companySubject: 'New customer inquiry - Follow-up required',
    customerTemplate: (name: string, petType: string, route: string, timeline: string) => `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #4F46E5; margin-bottom: 10px;">Thank you for your trust</h1>
          <p style="color: #6B7280; font-size: 18px;">We will contact you soon</p>
        </div>
        
        <div style="background: #F9FAFB; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">We have received your inquiry:</h2>
          <ul style="color: #6B7280; line-height: 1.6;">
            <li>Pet: ${petType}</li>
            <li>Route: ${route}</li>
            <li>Timeline: ${timeline}</li>
          </ul>
        </div>
        
        <div style="background: #EEF2FF; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Our commitment:</h2>
          <ul style="color: #4F46E5; line-height: 1.6;">
            <li>✓ Contact within 24h by a consultant</li>
            <li>✓ Personalized plan for you</li>
            <li>✓ Transparent pricing, no hidden fees</li>
            <li>✓ Complete journey accompaniment</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
          <p style="color: #6B7280; margin-bottom: 15px;">For urgent needs, contact us:</p>
          <p style="color: #4F46E5; font-weight: 600;">Canada: +1 (249) 688-3003</p>
          <p style="color: #4F46E5; font-weight: 600;">China: +86 135-2285-3556 | WeChat: sheepaw_pet</p>
        </div>
        
        <div style="text-align: center; color: #6B7280; font-size: 14px;">
          <p>Let's protect every step of your companion's journey together</p>
          <p style="margin-top: 10px; font-weight: 600;">The warm Sheepaw team</p>
        </div>
      </div>
    `,
    companyTemplate: (name: string, phone: string, email: string, petType: string, route: string, timeline: string, message: string) => `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #4F46E5;">New customer inquiry</h1>
        
        <div style="background: #F9FAFB; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Customer information:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background: #FEF3C7; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Pet information:</h2>
          <p><strong>Pet type:</strong> ${petType}</p>
          <p><strong>Transport route:</strong> ${route}</p>
          <p><strong>Expected timeline:</strong> ${timeline}</p>
        </div>
        
        <div style="background: #E0E7FF; padding: 20px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #1F2937; margin-bottom: 15px;">Detailed needs:</h2>
          <p>${message}</p>
        </div>
        
        <p style="color: #6B7280; font-size: 14px;">Please contact the customer quickly for professional service.</p>
      </div>
    `,
    errorMessages: {
      missingFields: 'Please fill in all required fields',
      success: 'Inquiry submitted successfully, we will contact you soon',
      error: 'Submission failed, please try again'
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, petType, route, timeline, message, locale = 'zh' } = body

    // 验证必填字段
    if (!name || !phone || !email || !petType || !route || !timeline || !message) {
      const templates = emailTemplates[locale as keyof typeof emailTemplates] || emailTemplates.zh
      return NextResponse.json(
        { error: templates.errorMessages.missingFields },
        { status: 400 }
      )
    }

    // 获取对应语言的邮件模板
    const templates = emailTemplates[locale as keyof typeof emailTemplates] || emailTemplates.zh

    // 发送邮件给客户（自动回复）
    const customerEmailContent = templates.customerTemplate(name, petType, route, timeline)

    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: templates.customerSubject,
      html: customerEmailContent,
    })

    // 发送邮件给公司（新咨询通知）
    const companyEmailContent = templates.companyTemplate(name, phone, email, petType, route, timeline, message)

    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.COMPANY_EMAIL || 'company@sheepaw.com',
      subject: templates.companySubject,
      html: companyEmailContent,
    })

    return NextResponse.json(
      { message: templates.errorMessages.success },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    // 默认使用中文错误消息
    return NextResponse.json(
      { error: emailTemplates.zh.errorMessages.error },
      { status: 500 }
    )
  }
}
