import CustomButton from "./CustomButton";
function App() {
  function handleCustomClick(text) {
    alert(`Clicked ${text}`);
  }
  return (
    <div>
   <CustomButton onCustomClick={handleCustomClick} text="How's" color="green" />
   <CustomButton onCustomClick={handleCustomClick} text="your" color="red" />
   <CustomButton onCustomClick={handleCustomClick} text="day?" color="teal"/>
   </div>
  );
}

export default App;
