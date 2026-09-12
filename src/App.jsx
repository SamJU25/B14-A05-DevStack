import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load technology data from public/technologies.json using useEffect
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load technologies data');
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        toast.error('Could not load technology data.');
        setLoading(false);
      });
  }, []);

  // Handler: Add a technology to the stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      // Duplicate attempt warning toast
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2500,
      });
      return;
    }

    // Add new technology to stack
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  // Handler: Remove a single item from the stack
  const handleRemoveFromStack = (techId) => {
    const removedItem = stack.find((item) => item.id === techId);
    setStack((prev) => prev.filter((item) => item.id !== techId));

    toast.info(`${removedItem?.name || 'Technology'} removed from your stack.`, {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  // Handler: Remove all items from the stack
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies cleared from your stack.', {
      position: 'top-right',
      autoClose: 2500,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} />

      {/* Sticky Navbar with Mobile Menu */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Banner />

        {/* Technologies & Stack Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore the <span className="brand-text-gradient">Technologies</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Main Grid: Cards (3 Cols) + Your Stack Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Technologies Grid (9 columns on lg) */}
            <div className="lg:col-span-8 xl:col-span-9">
              {loading ? (
                <LoadingSpinner />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAddToStack={handleAddToStack}
                      isAdded={stack.some((item) => item.id === tech.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Your Stack Sidebar (3 or 4 columns on lg) */}
            <div className="lg:col-span-4 xl:col-span-3">
              <YourStack
                stack={stack}
                onRemoveItem={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
