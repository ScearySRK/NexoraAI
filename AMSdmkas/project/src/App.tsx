import React, { useEffect, useState, useRef } from 'react';
import { Bot, Sparkles, Terminal, Zap } from 'lucide-react';

function App() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [commands, setCommands] = useState<string[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const terminalCommands = [
    { text: "> Initializing AI agent creation...", color: "text-blue-400" },
    { text: "> Loading neural network architecture...", color: "text-purple-400" },
    { text: "> Training on custom dataset...", color: "text-green-400" },
    { text: "> Optimizing parameters...", color: "text-yellow-400" },
    { text: "> Testing agent responses...", color: "text-pink-400" },
    { text: "> Deploying conversation model...", color: "text-cyan-400" },
    { text: "> Creating customer service agent...", color: "text-red-400" },
    { text: "> Training on support tickets...", color: "text-orange-400" },
    { text: "> Implementing response patterns...", color: "text-teal-400" },
    { text: "> Finalizing agent personality...", color: "text-indigo-400" },
    { text: "> Creating data analysis agent...", color: "text-emerald-400" },
    { text: "> Loading statistical models...", color: "text-rose-400" },
    { text: "> Implementing data visualization...", color: "text-violet-400" },
    { text: "> Optimizing query performance...", color: "text-sky-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCommands(prev => {
        if (prev.length >= terminalCommands.length) {
          return [...terminalCommands];
        }
        return [...prev, terminalCommands[prev.length]];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Header */}
      <header className="container mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16">
          <span className="text-2xl font-bold">Nexora AI</span>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How it Works</a>
          </div>
          <button onClick={scrollToTerminal} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
            Watch Demo
          </button>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Create Your Perfect
            <span className="text-blue-500"> AI Agent</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Train and customize AI agents for your specific needs. Nexora AI makes it simple to create powerful AI solutions that work for you.
          </p>
          <button onClick={scrollToTerminal} className="border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-full text-lg transition-colors">
            Watch Demo
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24" id="features">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Nexora AI</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-blue-500" />,
              title: "Easy to Use",
              description: "No coding required. Create and train AI agents through our intuitive interface."
            },
            {
              icon: <Bot className="w-8 h-8 text-blue-500" />,
              title: "Customizable Agents",
              description: "Train agents for specific tasks and customize their behavior to match your needs."
            },
            {
              icon: <Zap className="w-8 h-8 text-blue-500" />,
              title: "Fast Training",
              description: "Advanced algorithms ensure quick training and deployment of your AI agents."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="card-glow bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-800/30 py-24" id="how-it-works">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account and access the platform"
              },
              {
                step: "2",
                title: "Choose Template",
                description: "Select from pre-built agent templates or start from scratch"
              },
              {
                step: "3",
                title: "Train Agent",
                description: "Customize and train your AI agent with your data"
              },
              {
                step: "4",
                title: "Deploy",
                description: "Deploy your agent and start using it immediately"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section ref={terminalRef} className="container mx-auto px-6 py-24">
        <div className="bg-gray-800/50 rounded-lg overflow-hidden">
          <div className="bg-gray-900 p-4 flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-mono">AI Agent Creation Demo</span>
          </div>
          <div className="p-6 h-64 overflow-y-auto font-mono">
            {commands.map((cmd, index) => (
              <div key={index} className={`${cmd.color} mb-2`}>{cmd.text}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-center">
            <span className="text-xl font-bold">Nexora AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;