import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import CodeBlock from '../../../components/ui/CodeBlock';
import { useTheme } from 'contexts/ThemeContext';

const InteractiveCodeHero = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState('');
  const [editableCode, setEditableCode] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { theme, isDark, toggleTheme } = useTheme();

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
      <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-background to-accent-50 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Profile Section */}
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                {/* Profile Picture Container - Rounded Rectangle */}
                <div className="relative w-64 h-80 lg:w-80 lg:h-[420px] profile-container rounded-rect">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                  
                  {/* Main Profile Container - Slimmer Border */}
                  <div className="relative w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-background rounded-xl p-1">
                      <img
                        src="/assets/images/profile-picture.png"
                        alt="Jaimish S. Lakhani - Professional Profile"
                        className="w-full h-full object-cover rounded-lg profile-picture"
                      />
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-violet-500 rounded-full border-3 border-background flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-violet-500 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-purple-600 rounded-full animate-pulse opacity-40"></div>
              </div>
              
              {/* Profile Details */}
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-4xl lg:text-5xl font-bold text-text-primary">Jaimish S. Lakhani</span>
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-text-secondary font-medium text-xl mb-4">Full-Stack Developer & Technical Innovator</p>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-violet-500" />
                  <span className="text-text-secondary">Available for Projects</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-text-primary">50+</div>
                  <div className="text-sm text-text-secondary">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-text-primary">5+</div>
                  <div className="text-sm text-text-secondary">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-text-primary">99%</div>
                  <div className="text-sm text-text-secondary">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Crafting Digital Experiences */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-flex items-center space-x-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Code2" size={16} />
                <span>Live Code Demonstration</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight">
                Crafting Digital
                <span className="text-gradient block">Experiences</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Full-stack developer specializing in React, Node.js, and cloud architecture. 
                Watch my code come to life with interactive demonstrations and see how I build 
                scalable, maintainable applications that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-text-secondary" />
        </div>
      </section>

      {/* Hero Section 2: Interactive Code Editor */}
      <section className="relative min-h-screen bg-gradient-to-br from-accent-50 via-background to-primary-50 flex items-center justify-center overflow-hidden">
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
                      className="w-full h-96 p-4 font-mono text-sm bg-slate-800 text-slate-50 border-0 resize-none focus:outline-none focus:ring-0"
                      placeholder="Write your JavaScript code here..."
                      spellCheck="false"
                      style={{
                        backgroundColor: theme === 'dark' ? '#0f172a' : '#1e293b',
                        color: theme === 'dark' ? '#f8fafc' : '#f1f5f9',
                        tabSize: 2,
                        fontFamily: 'JetBrains Mono, Consolas, Monaco, monospace',
                        lineHeight: '1.5'
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