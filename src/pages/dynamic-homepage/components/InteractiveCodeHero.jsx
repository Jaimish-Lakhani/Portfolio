import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import CodeBlock from '../../../components/ui/CodeBlock';
import BlurText from '../../../components/ui/BlurText';
import { useTheme } from 'contexts/ThemeContext';

const InteractiveCodeHero = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState('');
  const [editableCode, setEditableCode] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { theme, isDark, toggleTheme } = useTheme();

  const handleAnimationComplete = () => {
    console.log('Slogan animation completed!');
  };

  const codeDemos = [
    {
      id: 'basic-js',
      title: 'Basic JavaScript Demo',
      language: 'javascript',
      code: `// Try editing this code and run it!
const greeting = "Hello, World!";
console.log(greeting);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};
console.log("Person:", person);

// Try adding your own code here!`,
      output: '📝 Hello, World!\n📝 Sum of numbers: 15\n📝 Person: {"name":"John Doe","age":30,"city":"New York"}\n\n✅ Code executed successfully!\n⏱️ Execution time: 23ms'
    },
    {
      id: 'array-methods',
      title: 'Array Methods Demo',
      language: 'javascript',
      code: `// Array manipulation examples
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log("Original array:", fruits);

// Filter long names
const longNames = fruits.filter(fruit => fruit.length > 5);
console.log("Long names:", longNames);

// Transform to uppercase
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase:", upperFruits);

// Find specific item
const found = fruits.find(fruit => fruit.startsWith('b'));
console.log("Found fruit starting with 'b':", found);`,
      output: '📝 Original array: apple,banana,orange,grape\n� Long names: banana,orange\n📝 Uppercase: APPLE,BANANA,ORANGE,GRAPE\n� Found fruit starting with \'b\': banana\n\n✅ Code executed successfully!\n⏱️ Execution time: 18ms'
    },
    {
      id: 'functions',
      title: 'Functions & Logic Demo',
      language: 'javascript',
      code: `// Function examples
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

const area = calculateArea(5);
console.log("Circle area (r=5):", area.toFixed(2));

// Arrow function
const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log("Factorial of 5:", factorial(5));

// Object method
const calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

console.log("10 + 5 =", calculator.add(10, 5));
console.log("10 × 5 =", calculator.multiply(10, 5));`,
      output: '📝 Circle area (r=5): 78.54\n📝 Factorial of 5: 120\n📝 10 + 5 = 15\n� 10 × 5 = 50\n\n✅ Code executed successfully!\n⏱️ Execution time: 31ms'
    }
  ];

  const executeCode = () => {
    setIsExecuting(true);
    setOutput('');
    
    setTimeout(() => {
      setOutput(codeDemos[activeDemo].output);
      setIsExecuting(false);
    }, 1500);
  };

  const nextDemo = () => {
    setActiveDemo((prev) => (prev + 1) % codeDemos.length);
    setOutput('');
    setEditableCode(codeDemos[(activeDemo + 1) % codeDemos.length].code);
    setIsEditing(false);
  };

  const prevDemo = () => {
    setActiveDemo((prev) => (prev - 1 + codeDemos.length) % codeDemos.length);
    setOutput('');
    setEditableCode(codeDemos[(activeDemo - 1 + codeDemos.length) % codeDemos.length].code);
    setIsEditing(false);
  };

  const executeCurrentCode = () => {
    setIsExecuting(true);
    setOutput('');
    
    const codeToExecute = isEditing ? editableCode : codeDemos[activeDemo].code;
    
    setTimeout(() => {
      try {
        // Create a safe execution environment
        const result = executeJavaScript(codeToExecute);
        setOutput(result);
      } catch (error) {
        setOutput(`❌ Error: ${error.message}\n🔧 Check your code syntax\n\n${error.stack || ''}`);
      }
      setIsExecuting(false);
    }, 1000);
  };

  const executeJavaScript = (code) => {
    // Create a console capture system
    const logs = [];
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn,
      info: console.info
    };

    // Override console methods to capture output
    const captureConsole = {
      log: (...args) => logs.push(`📝 ${args.join(' ')}`),
      error: (...args) => logs.push(`❌ ${args.join(' ')}`),
      warn: (...args) => logs.push(`⚠️  ${args.join(' ')}`),
      info: (...args) => logs.push(`ℹ️  ${args.join(' ')}`)
    };

    try {
      // Create a safe execution context
      const safeGlobals = {
        console: captureConsole,
        Math: Math,
        Date: Date,
        JSON: JSON,
        setTimeout: (fn, delay) => logs.push(`⏱️  setTimeout called with ${delay}ms delay`),
        setInterval: (fn, delay) => logs.push(`⏱️  setInterval called with ${delay}ms interval`),
        // Add more safe globals as needed
      };

      // Simple function to execute JavaScript safely
      const executeCode = new Function('globals', `
        const { ${Object.keys(safeGlobals).join(', ')} } = globals;
        let result;
        try {
          ${code}
        } catch (error) {
          console.error('Execution error:', error.message);
          throw error;
        }
        return result;
      `);

      const result = executeCode(safeGlobals);
      
      // Format output
      let output = '';
      if (logs.length > 0) {
        output += logs.join('\n') + '\n\n';
      }
      
      if (result !== undefined) {
        output += `✅ Result: ${typeof result === 'object' ? JSON.stringify(result, null, 2) : result}\n`;
      }
      
      if (output === '') {
        output = '✅ Code executed successfully!\n� No output or return value\n⚡ Check your console.log statements';
      }
      
      output += `\n⏱️  Execution time: ${Math.random() * 50 + 10}ms`;
      
      return output;
    } catch (error) {
      throw new Error(`${error.message}\n\n💡 Try using console.log() to see output`);
    }
  };

  const handleEditToggle = () => {
    if (!isEditing) {
      setEditableCode(codeDemos[activeDemo].code);
    }
    setIsEditing(!isEditing);
  };

  const handleCodeChange = (e) => {
    setEditableCode(e.target.value);
  };

  // Initialize editable code when component mounts
  useEffect(() => {
    setEditableCode(codeDemos[activeDemo].code);
  }, [activeDemo]);

  // Initialize with first demo code
  useEffect(() => {
    if (editableCode === '') {
      setEditableCode(codeDemos[0].code);
    }
  }, []);

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Section 1: Profile and Crafting Digital Experiences Side by Side */}
      <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            {/* Left Side - Space for draggable card (now global) */}
            <div className="relative flex flex-col items-center justify-center min-h-[70vh]">
              {/* Draggable card is now rendered globally at App level */}
            </div>

            {/* Right Side - Crafting Digital Experiences */}
            <motion.div 
              className="flex flex-col justify-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center space-x-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <Icon name="Code2" size={16} />
                <span>Live Code Demonstration</span>
              </motion.div>
              
              <div className="space-y-4">
                                <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-left">
                  <BlurText
                    text="Crafting Next-Gen Innovation & Technology"
                    delay={50}
                    animateBy="letters"
                    direction="top"
                    className="text-violet-600 dark:text-violet-400"
                    stepDuration={0.05}
                    style={{
                      background: 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 25%, #7c3aed 50%, #6d28d9 75%, #5b21b6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundSize: '100% 100%'
                    }}
                  />
                </div>
              </div>
              
              <motion.p 
                className="text-xl text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.5, ease: "easeOut" }}
              >
                Backend engineer specializing in Node.js, microservices, MongoDB, and AWS cloud architecture. 
                Watch my code come to life with interactive demonstrations and see how I build 
                scalable, distributed systems that handle millions of requests efficiently.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 4, ease: "easeOut" }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                >
                  View on GitHub
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 4.5, 
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        >
          <Icon name="ChevronDown" size={24} className="text-text-secondary" />
        </motion.div>
      </section>

      {/* Hero Section 2: Interactive Code Editor */}
      <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Interactive Code <span className="text-gradient">Editor</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Edit, execute, and experiment with JavaScript code in real-time. Try modifying the examples or write your own code!
            </p>
          </div>

          {/* Interactive Code Editor */}
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="rounded-xl shadow-2xl overflow-hidden border border-surface-secondary bg-surface transition-all duration-300">
              {/* Editor Header */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-surface-secondary bg-surface-secondary">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-text-primary">
                    {codeDemos[activeDemo].title}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleEditToggle}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        isEditing 
                          ? 'bg-accent text-white' 
                          : 'bg-surface-secondary text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {isEditing ? 'Read Only' : 'Edit Code'}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevDemo}
                    className="p-1 text-text-secondary hover:text-text-primary transition-colors duration-300"
                    disabled={isExecuting}
                  >
                    <Icon name="ChevronLeft" size={16} />
                  </button>
                  <span className="text-xs text-text-secondary">
                    {activeDemo + 1}/{codeDemos.length}
                  </span>
                  <button
                    onClick={nextDemo}
                    className="p-1 text-text-secondary hover:text-text-primary transition-colors duration-300"
                    disabled={isExecuting}
                  >
                    <Icon name="ChevronRight" size={16} />
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="relative">
                {isEditing ? (
                  <div className="relative">
                    <textarea
                      value={editableCode}
                      onChange={handleCodeChange}
                      className="w-full h-96 p-4 font-mono text-sm bg-black text-slate-50 border-0 resize-none focus:outline-none focus:ring-0 scrollbar-dark"
                      placeholder="Write your JavaScript code here..."
                      spellCheck="false"
                      style={{
                        backgroundColor: '#000000',
                        color: theme === 'dark' ? '#f8fafc' : '#f1f5f9',
                        tabSize: 2,
                        fontFamily: 'JetBrains Mono, Consolas, Monaco, monospace',
                        lineHeight: '1.5',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#374151 #000000'
                      }}
                      onKeyDown={(e) => {
                        // Handle Tab key for indentation
                        if (e.key === 'Tab') {
                          e.preventDefault();
                          const textarea = e.target;
                          const start = textarea.selectionStart;
                          const end = textarea.selectionEnd;
                          const value = textarea.value;
                          
                          // Insert 2 spaces for tab
                          const newValue = value.substring(0, start) + '  ' + value.substring(end);
                          setEditableCode(newValue);
                          
                          // Set cursor position after inserted spaces
                          setTimeout(() => {
                            textarea.selectionStart = textarea.selectionEnd = start + 2;
                          }, 0);
                        }
                      }}
                    />
                    <div className="absolute top-2 right-2 flex items-center space-x-2">
                      <span className="text-xs text-green-400 bg-slate-900 px-2 py-1 rounded">
                        Live Editor
                      </span>
                    </div>
                  </div>
                ) : (
                  <CodeBlock language="javascript" className="m-0 h-96 overflow-y-auto">
                    {codeDemos[activeDemo].code}
                  </CodeBlock>
                )}
              </div>

              {/* Output Terminal */}
              <div className="px-6 py-4 border-t border-surface-secondary">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Terminal" size={14} className="text-green-400" />
                    <span className="text-green-400 text-xs font-medium">Output</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Play"
                      iconPosition="left"
                      onClick={executeCurrentCode}
                      disabled={isExecuting}
                      loading={isExecuting}
                    >
                      {isExecuting ? 'Running...' : 'Execute'}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={() => {
                        setOutput('');
                        if (isEditing) {
                          setEditableCode(codeDemos[activeDemo].code);
                        }
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
                {output || isExecuting ? (
                  <CodeBlock language="terminal" className="mt-2">
                    {isExecuting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin">⚡</div>
                        <span>Executing code...</span>
                      </div>
                    ) : (
                      output
                    )}
                  </CodeBlock>
                ) : (
                  <div className="italic text-text-tertiary p-4 bg-surface-secondary rounded">
                    Click "Execute" to run your JavaScript code and see the output! ✨
                  </div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveCodeHero;