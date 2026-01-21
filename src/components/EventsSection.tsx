import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, User, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Compendium',
    subtitle: 'Paper Presentation',
    description: 'Present your innovative research papers and ideas to a panel of expert judges. Showcase your technical writing and presentation skills.',
    duration: '3 hours',
    teamSize: 'Team (2-3)',
    isTeam: true,
    formLink: 'https://forms.gle/your-form-link',
  },
  {
    id: 2,
    title: 'Syntax Saga',
    subtitle: 'Coding Event',
    description: 'Test your programming prowess in this intense coding competition. Solve complex algorithmic challenges under time pressure.',
    duration: '2.5 hours',
    teamSize: 'Individual',
    isTeam: false,
    formLink: 'https://forms.gle/your-form-link',
  },
  {
    id: 3,
    title: 'Debug Dynasty',
    subtitle: 'Debugging Challenge',
    description: 'Find and fix bugs in given code snippets. Race against time to debug programs across multiple programming languages.',
    duration: '2 hours',
    teamSize: 'Team (2)',
    isTeam: true,
    formLink: 'https://forms.gle/your-form-link',
  },
  {
    id: 4,
    title: 'Tech Trivia',
    subtitle: 'Quiz Competition',
    description: 'Put your technical knowledge to the test in this exciting quiz competition covering CS fundamentals, current tech trends, and more.',
    duration: '1.5 hours',
    teamSize: 'Team (2-3)',
    isTeam: true,
    formLink: 'https://forms.gle/your-form-link',
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb w-80 h-80 bg-primary/10 -left-40 top-1/3 animate-pulse-slow" />
      <div className="floating-orb w-64 h-64 bg-secondary/10 right-0 bottom-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Technical Events</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compete in our flagship technical events and prove your expertise. 
            Each event is designed to challenge and inspire.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="event-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="badge-technical mb-3 inline-block">Technical</span>
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    {event.title}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium">{event.subtitle}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="font-display text-xl font-bold text-primary">
                    {String(event.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60" />
                  <span>{event.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  {event.isTeam ? (
                    <Users className="w-4 h-4 text-primary/60" />
                  ) : (
                    <User className="w-4 h-4 text-primary/60" />
                  )}
                  <span>{event.teamSize}</span>
                </div>
              </div>

              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group/btn hover:gap-3 transition-all duration-300"
              >
                Register for this event
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
