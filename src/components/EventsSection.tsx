import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, Users, User, Code, FileText, Bug, HelpCircle, X } from 'lucide-react';
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
    description: 'A thrilling coding challenge to test your programming skills, debugging expertise, and problem-solving abilities across three time-limited rounds. Compete solo and prove your mettle!',
    duration: '2.5 hours',
    teamSize: 'Individual',
    isTeam: false,
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
    description: 'Find and fix bugs in given code snippets. Race against time to debug programs across multiple programming languages and prove your debugging prowess.',
    duration: '2 hours',
    teamSize: 'Team (2)',
    isTeam: true,
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
    description: 'Put your technical knowledge to the test in this exciting quiz competition covering CS fundamentals, current tech trends, and more.',
    duration: '1.5 hours',
    teamSize: 'Team (2-3)',
    isTeam: true,
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
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="event-card group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
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
                    <IconComponent className="w-6 h-6 text-primary" />
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

                <div className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                  Click to view details
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-white/10">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl font-display">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <selectedEvent.icon className="w-5 h-5 text-primary" />
                  </div>
                  {selectedEvent.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>

                <div>
                  <h4 className="text-primary font-semibold mb-3">Event Format:</h4>
                  <ul className="space-y-2">
                    {selectedEvent.format.map((round, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{round}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <p>
                    <span className="text-primary font-semibold">Participation: </span>
                    <span className="text-foreground">{selectedEvent.participation}</span>
                  </p>
                  {selectedEvent.languages && (
                    <p>
                      <span className="text-primary font-semibold">Languages: </span>
                      <span className="text-foreground">{selectedEvent.languages}</span>
                    </p>
                  )}
                  {selectedEvent.topics && (
                    <p>
                      <span className="text-primary font-semibold">Topics: </span>
                      <span className="text-foreground">{selectedEvent.topics}</span>
                    </p>
                  )}
                  <p>
                    <span className="text-primary font-semibold">Prizes: </span>
                    <span className="text-foreground">{selectedEvent.prizes}</span>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-primary font-semibold mb-3">Organizers:</h4>
                  <div className="space-y-1">
                    {selectedEvent.organizers.map((org, idx) => (
                      <p key={idx} className="text-foreground">
                        {org.name} - {org.phone}
                      </p>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedEvent.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
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
