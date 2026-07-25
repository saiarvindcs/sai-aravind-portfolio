import PageHeader from '../components/PageHeader';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { profile } from '../data/portfolioData';

export default function Contact() {
  const handleSubmit = e => { e.preventDefault(); const data = new FormData(e.currentTarget); window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(`Name: ${data.get('name')}
Email: ${data.get('email')}

${data.get('message')}`)}`; };
  return <>
    <PageHeader eyebrow="Contact" title="Let’s build something meaningful." description="Use the contact details below or send a message through the form." />
    <section className="container contact-grid"><article className="panel contact-info"><h2>Contact details</h2><a href={`mailto:${profile.email}`}><FiMail/><span><small>Email</small>{profile.email}</span></a><div><FiPhone/><span><small>Phone</small>{profile.phone}</span></div><div><FiMapPin/><span><small>Location</small>{profile.location}</span></div><a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin/><span><small>LinkedIn</small>View profile</span></a><a href={profile.github} target="_blank" rel="noreferrer"><FiGithub/><span><small>GitHub</small>View repositories</span></a></article>
    <form className="panel contact-form" onSubmit={handleSubmit}><h2>Send a message</h2><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Subject<input required name="subject" placeholder="Opportunity or collaboration"/></label><label>Message<textarea required name="message" rows="6" placeholder="Write your message..."/></label><button className="button" type="submit">Open email app <FiMail/></button><p className="form-note">This static portfolio opens the visitor’s default email app. No backend is required.</p></form></section>
  </>;
}
