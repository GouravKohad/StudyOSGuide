import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Clock, 
  CheckSquare, 
  BarChart3, 
  Calendar, 
  BookOpen, 
  Shield, 
  Target,
  TrendingUp,
  Zap,
  Award,
  Brain,
  Focus,
  Timer,
  Monitor,
  LockKeyhole,
  ChevronRight,
  Sparkles,
  LineChart,
  Settings,
  Power
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Organize your JEE preparation with smart task tracking. Create, prioritize, and complete tasks across Physics, Chemistry, and Mathematics.",
      color: "text-chart-1"
    },
    {
      icon: BarChart3,
      title: "Subject Progress",
      description: "Monitor your performance in each subject with detailed analytics. Track completion rates and identify areas that need more focus.",
      color: "text-chart-2"
    },
    {
      icon: Clock,
      title: "Study Timer",
      description: "Built-in Pomodoro timer with customizable durations (25/45/60 min). Stay focused with timed study sessions and track total hours studied.",
      color: "text-chart-3"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Plan your study sessions with an integrated calendar. Schedule mock tests, revision sessions, and practice time with ease.",
      color: "text-chart-4"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Centralize all your study materials in one place. Quick access to NCERT solutions, video lectures, and formula sheets.",
      color: "text-chart-5"
    },
    {
      icon: Shield,
      title: "Distraction-Free Mode",
      description: "Windows Kiosk mode locks you into JeeHub, eliminating distractions. Full-screen focus for maximum productivity during study hours.",
      color: "text-primary"
    }
  ];

  const stats = [
    { value: "1000+", label: "JEE Aspirants", icon: Award },
    { value: "50K+", label: "Study Hours", icon: Timer },
    { value: "3x", label: "Better Focus", icon: Focus },
    { value: "85%", label: "Task Completion", icon: Target }
  ];

  const benefits = [
    {
      title: "Enhanced Focus",
      description: "Eliminate distractions with Kiosk mode. Stay locked in your study environment without interruptions from social media or notifications.",
      icon: Focus,
    },
    {
      title: "Better Time Management",
      description: "Track every minute spent on each subject. Understand where your time goes and optimize your study schedule for maximum efficiency.",
      icon: TrendingUp,
    },
    {
      title: "Clear Progress Tracking",
      description: "Visualize your journey with detailed analytics. Monitor completion rates, study streaks, and subject-wise performance at a glance.",
      icon: LineChart,
    }
  ];

  const kioskSteps = [
    {
      number: "01",
      title: "Enable Kiosk Mode",
      description: "Press Win + R to open Run dialog. Type 'shell:AppsFolder' and press Enter. Find 'JeeHub' or your browser, right-click and select 'Create shortcut'. Add this to shell:startup folder.",
      code: "Win + R → shell:startup",
      icon: Settings
    },
    {
      number: "02",
      title: "Configure Auto-Launch",
      description: "Create a shortcut to your browser with JeeHub URL. Right-click → Properties → Add '--kiosk https://jeehub.onrender.com' to Target. Move shortcut to Startup folder.",
      code: "chrome.exe --kiosk https://jeehub.onrender.com",
      icon: Monitor
    },
    {
      number: "03",
      title: "Lock Down Windows",
      description: "Press Win + X → Settings → Accounts → Family & other users → Set up assigned access → Choose an account → Choose JeeHub as the kiosk app.",
      code: "Win + X → Assigned Access",
      icon: LockKeyhole
    },
    {
      number: "04",
      title: "Exit Kiosk Mode",
      description: "To exit kiosk mode, press Ctrl + Alt + Delete together. Select 'Sign out' or 'Switch user'. You can also use Alt + F4 on the browser window.",
      code: "Ctrl + Alt + Del → Sign Out",
      icon: Power
    }
  ];

  const faqs = [
    {
      question: "What is Windows Kiosk Mode?",
      answer: "Windows Kiosk Mode is a feature that locks your computer to run only a single app in full-screen. For JeeHub, this means your PC will only display the study OS, preventing access to other apps, games, or distractions. It's perfect for creating a dedicated study environment."
    },
    {
      question: "How do I exit Kiosk Mode if I need to?",
      answer: "You can exit Kiosk Mode by pressing Ctrl + Alt + Delete and selecting 'Sign out' or 'Switch user'. Alternatively, use Alt + F4 on the browser window. For emergency situations, you can restart your computer. It's recommended to set up a separate user account for kiosk mode to maintain easy access to your normal Windows environment."
    },
    {
      question: "Will JeeHub work without Kiosk Mode?",
      answer: "Absolutely! JeeHub works perfectly in any browser without Kiosk Mode. Kiosk Mode is an optional feature for students who want maximum focus and discipline. You can use JeeHub normally and enable Kiosk Mode only when you need distraction-free study sessions."
    },
    {
      question: "Is my study data saved locally?",
      answer: "Yes, JeeHub stores all your data locally in your browser using localStorage. This means your tasks, progress, and schedules are saved on your device and remain private. No data is sent to external servers, ensuring complete privacy and offline accessibility."
    },
    {
      question: "Can I use JeeHub on mobile devices?",
      answer: "Yes! JeeHub is fully responsive and works on tablets and smartphones. However, Kiosk Mode is a Windows-specific feature. On mobile, you can use JeeHub through your browser and take advantage of focus apps or 'Do Not Disturb' modes for distraction-free studying."
    },
    {
      question: "What subjects does JeeHub support?",
      answer: "JeeHub is specifically designed for JEE preparation and supports the three core subjects: Physics, Chemistry, and Mathematics. You can create separate tasks, track progress, and manage study time for each subject individually with dedicated analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-chart-2/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-6 px-4 py-1.5" data-testid="badge-version">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Study OS for JEE Aspirants
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6" 
              variants={fadeInUp}
              data-testid="heading-hero"
            >
              Distraction-Free
              <span className="block text-primary mt-2">JEE Preparation</span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl" 
              variants={fadeInUp}
              data-testid="text-hero-description"
            >
              Transform your study routine with JeeHub - a complete operating system designed for focused learning. Track tasks, monitor progress, and eliminate distractions with Windows Kiosk mode.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <Button asChild size="lg" className="gap-2 min-h-12 px-8 text-base" data-testid="button-launch-app">
                <a href="https://jeehub.onrender.com/" target="_blank" rel="noopener noreferrer">
                  Launch JeeHub
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 min-h-12 px-8 text-base" data-testid="button-learn-kiosk">
                <a href="#kiosk-setup">
                  Learn Kiosk Mode
                  <Shield className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <stat.icon className="h-8 w-8 text-primary mb-2" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32" id="features">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <motion.div className="mx-auto max-w-2xl text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" data-testid="heading-features">
                Everything You Need to Excel
              </h2>
              <p className="mt-4 text-lg text-muted-foreground" data-testid="text-features-description">
                Comprehensive tools designed specifically for JEE preparation
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div 
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card 
                    className="h-full hover-elevate border-card-border"
                    data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CardHeader className="gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${feature.color}`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-muted/30 py-24 sm:py-32" id="kiosk-setup">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <motion.div className="mx-auto max-w-2xl text-center mb-16" variants={fadeInUp}>
              <Badge variant="outline" className="mb-4 px-3 py-1" data-testid="badge-kiosk">
                <Monitor className="mr-2 h-3.5 w-3.5" />
                Windows Kiosk Mode
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" data-testid="heading-kiosk">
                Setup Distraction-Free Environment
              </h2>
              <p className="mt-4 text-lg text-muted-foreground" data-testid="text-kiosk-description">
                Follow these steps to lock your Windows PC into JeeHub for ultimate focus
              </p>
            </motion.div>
          </AnimatedSection>

          <div className="space-y-12">
            {kioskSteps.map((step, index) => (
              <AnimatedSection key={index}>
                <motion.div variants={index % 2 === 0 ? slideInLeft : slideInRight}>
                  <Card className="border-card-border" data-testid={`card-kiosk-step-${step.number}`}>
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground text-2xl font-bold">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <step.icon className="h-6 w-6 text-primary" />
                            <CardTitle className="text-2xl" data-testid={`heading-kiosk-step-${step.number}`}>
                              {step.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-base leading-relaxed mt-3" data-testid={`text-kiosk-step-${step.number}`}>
                            {step.description}
                          </CardDescription>
                          {step.code && (
                            <div className="mt-4 rounded-md bg-muted p-4 border border-border">
                              <code className="text-sm font-mono text-foreground" data-testid={`code-step-${step.number}`}>
                                {step.code}
                              </code>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <motion.div variants={scaleIn} className="mt-12">
              <Card className="border-chart-2 bg-chart-2/5 border-2" data-testid="card-kiosk-tip">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-chart-2 shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-xl">Pro Tip for Maximum Focus</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        Create a dedicated Windows user account for studying. Set up Kiosk mode on that account while keeping your main account free for regular use. This way, you can switch between focused study mode and normal PC usage effortlessly.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <motion.div className="mx-auto max-w-2xl text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" data-testid="heading-benefits">
                Why JeeHub Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground" data-testid="text-benefits-description">
                Science-backed features that actually improve your study outcomes
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div 
              className="grid gap-8 lg:grid-cols-3"
              variants={staggerContainer}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 border-2 border-chart-2">
                      <benefit.icon className="h-8 w-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-muted/30 py-24 sm:py-32" id="faq">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" data-testid="heading-faq">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground" data-testid="text-faq-description">
                Everything you need to know about JeeHub and Kiosk mode
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={staggerContainer}>
              <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="border border-border rounded-lg px-6 bg-card"
                      data-testid={`faq-item-${index}`}
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-5" data-testid={`faq-question-${index}`}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5" data-testid={`faq-answer-${index}`}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-chart-2 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-chart-2/30 via-transparent to-transparent"></div>
        
        <AnimatedSection className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Brain className="h-16 w-16 text-primary-foreground mx-auto mb-6 opacity-90" />
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-4" 
              variants={fadeInUp}
              data-testid="heading-cta"
            >
              Ready to Transform Your JEE Preparation?
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-2xl text-lg text-primary-foreground/90 mb-10" 
              variants={fadeInUp}
              data-testid="text-cta-description"
            >
              Join thousands of JEE aspirants who have chosen focused, distraction-free studying with JeeHub. Start tracking your progress today.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <Button asChild size="lg" variant="secondary" className="gap-2 min-h-12 px-8 text-base" data-testid="button-cta-launch">
                <a href="https://jeehub.onrender.com/" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.p 
              className="mt-8 text-sm text-primary-foreground/75" 
              variants={fadeInUp}
              data-testid="text-privacy-note"
            >
              100% Free • No Registration Required • Data Stays Private on Your Device
            </motion.p>
          </motion.div>
        </AnimatedSection>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2" data-testid="logo-footer">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">JeeHub</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2025 JeeHub. Built for JEE Aspirants with focus and discipline.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
