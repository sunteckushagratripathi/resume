import { useState, useEffect, useRef } from 'react'
import './Chatbot.css'
import resumeData from '../resumeData.js'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `👋 **Hi there!** I'm Kushagra's AI assistant, powered by the same technologies he works with daily!\n\n🤖 I can tell you all about:\n• His **5+ years** in software development\n• **Cutting-edge AI projects** and innovations\n• **Awards & achievements** in tech\n• **Skills, experience**, and much more!\n\nWhat would you like to explore first? 🚀`,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [showQuickQuestions, setShowQuickQuestions] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Simple markdown-like formatter for bot messages
  const formatBotMessage = (text) => {
    return text
      .split('\n')
      .map((line, i) => {
        // Handle bold text **text**
        const boldFormatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Handle italic text *text*
        const italicFormatted = boldFormatted.replace(/\*(.*?)\*/g, '<em>$1</em>')
        
        return (
          <div 
            key={i} 
            dangerouslySetInnerHTML={{ __html: italicFormatted }}
          />
        )
      })
  }

  // Knowledge base from resume data
  const getResponse = (question) => {
    const lowerQuestion = question.toLowerCase()
    
    // Greeting responses
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey') || lowerQuestion.includes('good morning') || lowerQuestion.includes('good evening')) {
      const greetings = [
        `👋 Hello there! Great to meet you! I'm here to tell you all about **Kushagra's impressive journey** in software development.\n\n🚀 From his college days to becoming a leading software architect, there's so much to explore:\n• **5+ years** of innovation in fintech and AI\n• **International experience** in Germany & Dubai\n• **Award-winning performance** and technical leadership\n\nWhat aspects of his career would you like to dive into? 🤔`,
        
        `🌟 Hi! Thanks for stopping by! I'd love to share **Kushagra's story** with you - it's quite a journey!\n\n💡 Quick highlights:\n• Currently architecting **3,000 TPS systems** at SunTec\n• Building **AI-powered code generation** platforms\n• Leading **7-member teams** and international deployments\n• **Multiple awards** for technical excellence\n\nWhat catches your interest? I'm here to paint you a complete picture! 🎨`,
        
        `🤖 Hey! Welcome to **Kushagra's digital space**! I'm excited to discuss his remarkable evolution from Associate Software Engineer to technical innovator.\n\n⚡ Ready to explore:\n• **Cutting-edge AI projects** with LLMs\n• **Performance optimization** wizardry\n• **Leadership journey** and team building\n• **Award-winning achievements** and recognition\n\nWhere shall we begin this exciting conversation? 🚀`
      ]
      return greetings[Math.floor(Math.random() * greetings.length)]
    }
    
    // Experience related questions
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job') || lowerQuestion.includes('career')) {
      const responses = [
        `🎯 **Kushagra's career journey** is absolutely fascinating! He's built **${resumeData.experience.length} solid years** of experience in the fintech and BFSI sectors, and let me tell you - it's been quite the ride! 🚀\n\n**Currently thriving as an Analyst** at SunTec Business Solutions since August 2023, he's the mastermind behind some truly remarkable achievements:\n\n⚡ **XDM Platform Architecture** - designed a multi-tenant data management system handling **3,000 TPS**!\n🤖 **AI Innovation** - pioneering AI-powered code generation using RAG techniques with LLMs\n👥 **Team Leadership** - leading a **7-member team** and boosting delivery efficiency by **25%**\n\n*Pretty remarkable evolution* from Associate Software Engineer to technical architect, wouldn't you say? 😊`,
        
        `💼 Let me paint you a picture of **Kushagra's professional evolution** - it's genuinely inspiring! 🌟\n\nStarting from his internship days at **IIT Kanpur** and **Lohia Corp**, he's climbed the ladder at SunTec Business Solutions through sheer dedication and technical brilliance.\n\n🔥 **Current achievements include:**\n• **Redis cache optimization** achieving 3,000 TPS (that's insane performance!)\n• **AI-based code generation platforms** (literally building the future)\n• **Performance engineering** - reduced API response times from *10 minutes to milliseconds*! ⚡\n• **International deployments** in Germany and Dubai 🌍\n\nThe guy's not just coding - he's solving real-world problems at **enterprise scale**. That's what I call making an impact! 💪`
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }
    
    // Skills related questions
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech') || lowerQuestion.includes('programming')) {
      const mainSkills = resumeData.skills['Programming Languages & Frameworks'].slice(0, 6).join(', ')
      const responses = [
        `🚀 Kushagra's technical arsenal is quite diverse and cutting-edge! At the core, he's mastered **${mainSkills}**, which forms the backbone of his development work.\n\n🤖 What's particularly exciting is his expertise with AI models like **Llama 3.2B**, **CodeLlama 7B**, and **Salesforce Java Model**. He's not just using these tools - he's fine-tuning them locally and building RAG-based solutions!\n\n⚡ His performance optimization skills with **Redis** and **DynaTrace** are legendary at SunTec (achieving those impressive 3,000 TPS numbers!), and he's equally comfortable with cloud platforms like **Microsoft Azure**.\n\n👥 But here's what makes him special - he bridges the gap between hardcore technical skills and leadership. His communication and team collaboration abilities have made him a natural technical leader.`,
        
        `💻 You know what's impressive about Kushagra's skill set? It's the perfect blend of traditional enterprise technologies and cutting-edge AI capabilities!\n\n🔧 He's got rock-solid foundations in **${mainSkills}**, but he's also pioneering work with **LLMs** and **AI-powered development**. Think about it - how many developers can say they're working with both enterprise Java systems AND training custom AI models?\n\n📊 His database expertise spans everything from **Oracle** and **PostgreSQL** to **MongoDB**, and he's a performance optimization wizard with **Redis**. The containerization skills with **Docker** and **Kubernetes** show he's ready for modern cloud-native architectures.\n\n🎯 It's this combination of depth and breadth that makes him such a valuable asset to any team. He's literally building the future of software development!`
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }
    
    // Projects related questions
    if (lowerQuestion.includes('project') || lowerQuestion.includes('built') || lowerQuestion.includes('developed') || lowerQuestion.includes('created')) {
      const responses = [
        `Oh, Kushagra's project portfolio is where things get really exciting! Let me walk you through some standouts:\n\n🚀 **XDM Platform** - This is his crown jewel. A multi-tenant data management system for telecom and banking that processes 3,000 transactions per second. The polyglot persistence architecture and Redis caching with bloom filters is just... *chef's kiss*.\n\n🤖 **RAG AI Code Generation Platform** - Here's where his AI expertise shines. He built a system using Llama models that converts pseudocode into actual Java code. It's like having a coding assistant that understands your thoughts!\n\n💰 **High-Performance Fintech APIs** - Improved transaction speeds by 70% and reduced errors by 15%. When you're dealing with financial data, these numbers are game-changing.\n\n⚙️ **Custom Rule Engine** - A 30% reduction in processing time and 40% decrease in maintenance efforts. This is the kind of work that makes businesses more efficient.`,
        
        `Kushagra's projects tell a story of innovation and impact. Take the XDM Platform, for instance - it's not just another data management system. It's a sophisticated multi-tenant architecture that serves both telecom and banking sectors with different data persistence strategies optimized for each use case.\n\nBut what really gets me excited is his RAG AI Code Generation Platform. Imagine describing what you want in pseudocode and having an AI system convert it to production-ready Java code using CodeLlama 7B and Llama 3.2B models. He's essentially building the future of software development!\n\nThe fintech APIs project shows his understanding of business impact - a 70% speed improvement isn't just a technical achievement, it's a competitive advantage that directly affects user experience and business outcomes.`
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }
    
    // Education related questions
    if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('college') || lowerQuestion.includes('degree') || lowerQuestion.includes('academic')) {
      const responses = [
        `Kushagra's educational foundation is solid and impressive! He earned his BTech in Computer Science from Ajay Kumar Garg Engineering College in Ghaziabad, graduating in 2020 with a strong 8.5/10 GPA. That's the kind of academic performance that shows both intelligence and dedication.\n\nBefore that, he completed his intermediate education at Delhi Public School, Kanpur with an outstanding 91.6% - clearly, excellence has been a consistent theme in his academic journey. What's beautiful is how he's applied this strong theoretical foundation to solve real-world problems in his professional career.`,
        
        `Education-wise, Kushagra built a strong foundation during his BTech in Computer Science at Ajay Kumar Garg Engineering College (2016-2020). His 8.5/10 GPA reflects not just good grades, but a deep understanding of computer science fundamentals.\n\nHis earlier academic excellence at Delhi Public School, Kanpur (91.6% in intermediate) shows this wasn't a fluke - the guy has always been academically inclined. What I find remarkable is how seamlessly he's translated his academic knowledge into industry expertise, especially in areas like AI and performance optimization that require both theoretical understanding and practical application.`
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }
    
    // Location related questions
    if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('based') || lowerQuestion.includes('live')) {
      return `Kushagra is currently based in ${resumeData.personalInfo.location}, but his professional journey has taken him places! He's primarily worked in the tech hub of Bangalore, which has given him exposure to India's vibrant startup and enterprise ecosystem.\n\nWhat's really cool is his international experience - he's done onsite deployments in Germany and Dubai. These experiences have definitely broadened his perspective on global software development practices and cross-cultural team collaboration. It's this combination of local expertise and international exposure that makes him such a well-rounded professional.`
    }
    
    // Contact related questions
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach') || lowerQuestion.includes('connect')) {
      return `Absolutely! Kushagra is quite accessible and always open to meaningful professional conversations. Here's how you can reach out:\n\n📧 **Email**: ${resumeData.personalInfo.email}\n📱 **Phone**: ${resumeData.personalInfo.phone}\n💼 **LinkedIn**: ${resumeData.personalInfo.linkedin}\n🔧 **GitHub**: ${resumeData.personalInfo.github}\n\nI'd especially recommend checking out his LinkedIn for the latest updates on his projects and professional achievements. He's quite active in the tech community and always interested in discussing innovative solutions and emerging technologies!`
    }
    
    // Achievements/Awards related questions
    if (lowerQuestion.includes('award') || lowerQuestion.includes('achievement') || lowerQuestion.includes('recognition') || lowerQuestion.includes('accomplishment')) {
      return `Kushagra's trophy cabinet is quite impressive! His achievements span technical excellence, leadership, and innovation:\n\n🏆 **2024: Extra Miler Award for Performance Tuning** - This recent recognition highlights his optimization expertise\n🌟 **2022-2023: Lakshya Award** - A testament to his consistent high performance\n👑 **2022: CTO Honor List and Client Honor List Award** - Recognition from both technical leadership and clients\n🎯 **2022: Hackathon Winner at SunTec** - Proving his innovation under pressure\n📚 **2023: Leadership Training (LEAD) completion** - Investing in his leadership capabilities\n\nBut here's a fun one from his college days: he conducted a Java 8 workshop for 950 first-year students! Even back then, he was sharing knowledge and helping others grow. That's the mark of a true leader.`
    }
    
    // AI/LLM related questions
    if (lowerQuestion.includes('ai') || lowerQuestion.includes('llm') || lowerQuestion.includes('machine learning') || lowerQuestion.includes('artificial intelligence')) {
      return `Now this is where Kushagra really shines in the current tech landscape! His AI and LLM expertise isn't just theoretical - it's hands-on, practical, and innovative.\n\nHe's working with cutting-edge models like Llama 3.2B, CodeLlama 7B, and Salesforce Java Model, but here's the kicker - he's not just using them, he's fine-tuning these models locally and deploying them in production environments. His RAG (Retrieval-Augmented Generation) implementations are particularly impressive, especially the pseudocode-to-Java conversion system.\n\nWhat sets him apart is his practical approach to AI. While many people talk about AI, Kushagra is building real solutions that solve actual business problems. His code generation platform using Apache Velocity and LLMs is enabling no-code/low-code development environments. That's the future of software development, and he's building it today!`
    }
    
    // Company/Current role questions
    if (lowerQuestion.includes('company') || lowerQuestion.includes('current') || lowerQuestion.includes('suntec') || lowerQuestion.includes('employer')) {
      return `SunTec Business Solutions has been Kushagra's professional home since October 2020, and what a journey it's been! Starting as an Associate Software Engineer, he's climbed the ranks to become an Analyst - that's some impressive career progression in just a few years.\n\nSunTec specializes in fintech and BFSI (Banking, Financial Services, and Insurance) solutions, which perfectly aligns with Kushagra's expertise in high-performance, scalable systems. The company's focus on financial technology has given him exposure to mission-critical applications where performance, security, and reliability are non-negotiable.\n\nWhat I love about his SunTec journey is how he's evolved from a developer to a technical leader, now heading platform development and AI initiatives. His international deployments in Germany and Dubai through SunTec have given him a global perspective on enterprise software development.`
    }
    
    // Default response with more personality
    const defaultResponses = [
      `That's an interesting question! While I'd love to give you a detailed answer, I'm specifically designed to discuss Kushagra's professional background. I can share insights about:\n\n• His impressive 5+ year journey in software development\n• Technical expertise ranging from Java to cutting-edge AI\n• Groundbreaking projects like the XDM Platform and AI code generation\n• Educational background and professional achievements\n• His leadership experience and international exposure\n• Contact information and ways to connect\n\nWhat aspect of his career would you like to explore? I'm here to paint you a complete picture of his professional excellence!`,
      
      `Great question! I'm Kushagra's dedicated career assistant, so I'm best equipped to discuss his professional journey and achievements. There's so much to uncover about his work:\n\n🚀 His evolution from Associate Software Engineer to technical leader\n💡 Innovative projects that are shaping the future of fintech\n🎯 Awards and recognition for his exceptional performance\n🌍 International experience and cross-cultural leadership\n🤖 Pioneering work in AI and LLM applications\n\nWhich of these areas sparks your curiosity? I'd love to dive deeper into any aspect of his remarkable career!`
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    // Hide quick questions after first user interaction
    setShowQuickQuestions(false)

    // Add user message
    const newMessages = [
      ...messages,
      {
        type: 'user',
        text: inputText,
        timestamp: new Date()
      }
    ]

    setMessages(newMessages)
    setInputText('')
    setIsTyping(true)

    // Generate bot response with realistic typing delay
    const botResponse = getResponse(inputText)
    const typingTime = Math.min(Math.max(botResponse.length * 30, 1000), 4000) // 30ms per character, min 1s, max 4s
    
    setTimeout(() => {
      setIsTyping(false)
      setMessages([
        ...newMessages,
        {
          type: 'bot',
          text: botResponse,
          timestamp: new Date()
        }
      ])
    }, typingTime)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleQuickQuestion = (question) => {
    setShowQuickQuestions(false)
    setInputText(question)
    setTimeout(handleSendMessage, 100)
  }

  const quickQuestions = [
    "What's your experience?",
    "Tell me about your skills",
    "What projects have you built?",
    "How can I contact you?"
  ]

  return (
    <>
      {/* Chat toggle button */}
      <button 
        className={`chat-toggle ${isOpen ? 'chat-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="chatbot-avatar">🤖</span>
              <div>
                <h4>Ask about Kushagra</h4>
                <span className="status">Online</span>
              </div>
            </div>
            <button 
              className="close-chat"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-content">
                  {message.type === 'bot' 
                    ? formatBotMessage(message.text)
                    : message.text.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))
                  }
                </div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="message bot">
                <div className="message-content typing-indicator">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="typing-text">Kushagra's AI is thinking...</span>
                </div>
              </div>
            )}
            
            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions - only show if not hidden */}
          {showQuickQuestions && (
            <div className="quick-questions">
              <div className="quick-questions-title">💡 Ask me about:</div>
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="quick-question"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}
          
          <div className="chatbot-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Kushagra..."
              className="chat-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
              disabled={!inputText.trim()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
