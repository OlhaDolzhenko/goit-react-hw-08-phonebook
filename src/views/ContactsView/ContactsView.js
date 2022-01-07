import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';
import './ContactsView.css';

function ContactsView() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

export default ContactsView;
