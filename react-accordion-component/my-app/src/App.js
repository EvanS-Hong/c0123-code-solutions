import AccordionCreation from './Accordion';

const listTopics = [
  { id: 1, name: 'Hypertect Markup Language', text: 'Hypertext Markup Language (HTML) is the standard markup langauge for creating web pages and web applications With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies fro the World Wide Web'},
  { id: 2, name: 'Cascading Style Sheets', text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing th presentation of a document written in a markup lanugage like HTML. CSS is  cornerstone techonolog of the World Wide Web alongside HTML and JavaScript'},
  { id: 3, name: 'JavaScript', text: 'JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to the ECMAScript specifcation, Javascript has curly-bracket syntax, dynammic typing, prototype-based object-orientation, and first-class functions'}]

function App() {
  return (
    <div className="App">
      <AccordionCreation list={listTopics}/>
    </div>
  );
}

export default App;
