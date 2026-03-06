import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;
    // 需要替换成在企业微信群里创建的机器人地址
    const WECOM_WEBHOOK_URL = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=你的KEY";

    const content = {
      msgtype: "markdown",
      markdown: {
        content: `### 官网收到新留言
> **客户姓名**：<font color="info">${name}</font>
> **联系电话**：${phone}
> **电子邮箱**：${email}
> **需求描述**：
> <font color="comment">${message}</font>
> 
> *请及时跟进处理*`
      }
    };

    const response = await fetch(WECOM_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Failed to notify WeCom" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
}    