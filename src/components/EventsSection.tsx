import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, Users, User, Code, FileText, Bug, HelpCircle, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const events = [
  {
    id: 1,
    title: 'Compendium',
    subtitle: 'Paper Presentation',
    icon: FileText,
    description: 'Present your innovative research papers and ideas to a panel of expert judges. Showcase your technical writing and presentation skills.',
    duration: '3 hours',
    teamSize: 'Team (2-3)',
    isTeam: true,
    color: 'pink',
    formLink: 'https://forms.gle/your-form-link',
    format: [
      'Round 1: Abstract Submission – Submit your research abstract for initial screening.',
      'Round 2: Paper Presentation – Present your paper to the judges panel.',
      'Round 3: Q&A Session – Defend your research and answer technical questions.',
    ],
    participation: 'Team (2-3 members)',
    topics: 'AI/ML, Cybersecurity, Cloud Computing, IoT',
    prizes: 'Exciting rewards for top performers!',
    organizers: [
      { name: 'Rithuparan', phone: '98765 43210' },
      { name: 'Agila', phone: '98765 43211' },
    ],
  },
  {
    id: 2,
    title: 'Syntax Saga',
    subtitle: 'Coding Event',
    icon: Code,
    description: 'A thrilling coding challenge to test your programming skills, debugging expertise, and problem-solving abilities across three time-limited rounds.',
    duration: '2.5 hours',
    teamSize: 'Individual',
    isTeam: false,
    color: 'green',
    formLink: 'https://forms.gle/your-form-link',
    format: [
      'Round 1: Quiz – Technical MCQs and fun riddles on computer science.',
      'Round 2: Debugging – Fix code errors in C, C++, Python, or Java.',
      'Round 3: Problem Solving – Solve complex coding challenges with efficient solutions.',
    ],
    participation: 'Individual',
    languages: 'C, C++, Python, Java',
    prizes: 'Exciting rewards for top performers!',
    organizers: [
      { name: 'Aswin R', phone: '63790 88686' },
      { name: 'Evangline R', phone: '73055 50106' },
    ],
  },
  {
    id: 3,
    title: 'Debug Dynasty',
    subtitle: 'Debugging Challenge',
    icon: Bug,
    description: 'Find and fix bugs in given code snippets. Race against time to debug programs across multiple programming languages.',
    duration: '2 hours',
    teamSize: 'Team (2)',
    isTeam: true,
    color: 'purple',
    formLink: 'https://forms.gle/your-form-link',
    format: [
      'Round 1: Easy Bugs – Fix simple syntax and logical errors.',
      'Round 2: Medium Bugs – Debug runtime errors and edge cases.',
      'Round 3: Hard Bugs – Complex multi-file debugging challenges.',
    ],
    participation: 'Team (2 members)',
    languages: 'C, C++, Python, Java',
    prizes: 'Exciting rewards for top performers!',
    organizers: [
      { name: 'Priya S', phone: '98765 43212' },
      { name: 'Karthik M', phone: '98765 43213' },
    ],
  },
  {
    id: 4,
    title: 'Tech Trivia',
    subtitle: 'Quiz Competition',
    icon: HelpCircle,
    description: 'Put your technical knowledge to the test in this exciting quiz competition covering CS fundamentals and current tech trends.',
    duration: '1.5 hours',
    teamSize: 'Team (2-3)',
    isTeam: true,
    color: 'pink',
    formLink: 'https://forms.gle/your-form-link',
    format: [
      'Round 1: Written Quiz – MCQs on computer science fundamentals.',
      'Round 2: Rapid Fire – Quick-fire questions with time pressure.',
      'Round 3: Buzzer Round – Team vs team buzzer competition.',
    ],
    participation: 'Team (2-3 members)',
    topics: 'CS Fundamentals, Current Tech Trends, History of Computing',
    prizes: 'Exciting rewards for top performers!',
    organizers: [
      { name: 'Surya V', phone: '98765 43214' },
      { name: 'Deepa K', phone: '98765 43215' },
    ],
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          badge: 'badge-technical badge-green',
          icon: 'text-secondary',
          iconBg: 'bg-secondary/10 group-hover:bg-secondary/20',
          border: 'border-secondary/30 hover:border-secondary/60',
          glow: 'hover:shadow-[0_0_40px_hsl(120_100%_50%/0.2)]',
        };
      case 'purple':
        return {
          badge: 'badge-technical',
          icon: 'text-accent',
          iconBg: 'bg-accent/10 group-hover:bg-accent/20',
          border: 'border-accent/30 hover:border-accent/60',
          glow: 'hover:shadow-[0_0_40px_hsl(280_100%_65%/0.2)]',
        };
      default:
        return {
          badge: 'badge-technical',
          icon: 'text-primary',
          iconBg: 'bg-primary/10 group-hover:bg-primary/20',
          border: 'border-primary/30 hover:border-primary/60',
          glow: 'hover:shadow-[0_0_40px_hsl(330_100%_60%/0.2)]',
        };
    }
  };

  return (
    <section id="events" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb w-80 h-80 bg-primary/15 -left-40 top-1/3 animate-pulse-slow" />
      <div className="floating-orb w-64 h-64 bg-secondary/15 right-0 bottom-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-56 h-56 bg-accent/10 right-1/4 top-1/4 animate-float" />

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            const colors = getColorClasses(event.color);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-6 group cursor-pointer transition-all duration-500 ${colors.border} ${colors.glow}`}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`${colors.badge} mb-3 inline-block`}>Technical</span>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {event.title}
                    </h3>
                    <p className={`text-sm font-semibold ${colors.icon}`}>{event.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.iconBg} transition-colors`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${colors.icon} opacity-60`} />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {event.isTeam ? (
                      <Users className={`w-4 h-4 ${colors.icon} opacity-60`} />
                    ) : (
                      <User className={`w-4 h-4 ${colors.icon} opacity-60`} />
                    )}
                    <span>{event.teamSize}</span>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-2 ${colors.icon} font-bold text-sm uppercase tracking-wider`}>
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Non-Technical Events Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8 text-center border-accent/30 hover:border-accent/60 transition-all duration-500 hover:shadow-[0_0_40px_hsl(280_100%_65%/0.2)]"
        >
          <span className="badge-technical mb-4 inline-block">Coming Soon</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gradient mb-2">
            Non Technical Events
          </h3>
          <p className="text-muted-foreground">
            Stay tuned for exciting non-technical events!
          </p>
        </motion.div>
      </div>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/98 backdrop-blur-2xl border-primary/20">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl font-display font-bold">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <selectedEvent.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gradient">{selectedEvent.title}</span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>

                <div>
                  <h4 className="text-secondary font-bold mb-3 uppercase tracking-wider text-sm">Event Format:</h4>
                  <ul className="space-y-2">
                    {selectedEvent.format.map((round, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{round}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-primary font-bold uppercase tracking-wider">Participation: </span>
                    <span className="text-foreground">{selectedEvent.participation}</span>
                  </p>
                  {selectedEvent.languages && (
                    <p>
                      <span className="text-primary font-bold uppercase tracking-wider">Languages: </span>
                      <span className="text-foreground">{selectedEvent.languages}</span>
                    </p>
                  )}
                  {selectedEvent.topics && (
                    <p>
                      <span className="text-primary font-bold uppercase tracking-wider">Topics: </span>
                      <span className="text-foreground">{selectedEvent.topics}</span>
                    </p>
                  )}
                  <p>
                    <span className="text-secondary font-bold uppercase tracking-wider">Prizes: </span>
                    <span className="text-foreground">{selectedEvent.prizes}</span>
                  </p>
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <h4 className="text-secondary font-bold mb-3 uppercase tracking-wider text-sm">Organizers:</h4>
                  <div className="space-y-1">
                    {selectedEvent.organizers.map((org, idx) => (
                      <p key={idx} className="text-foreground text-sm">
                        {org.name} – <span className="text-muted-foreground">{org.phone}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedEvent.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block w-full text-center"
                >
                  Register Now
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EventsSection;
