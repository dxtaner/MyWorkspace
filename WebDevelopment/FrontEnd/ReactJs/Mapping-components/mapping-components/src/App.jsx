// import Card from "./components/Card";
// import emojipedia from "./emojipedia";

// function App() {
//   return (
//     <div>
//       <h1>Emoji Dictionary</h1>

//       {emojipedia.map((emojiItem) => (
//         <Card
//           key={emojiItem.id}
//           emoji={emojiItem.emoji}
//           name={emojiItem.name}
//           meaning={emojiItem.meaning}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

import Card from "./components/Card";
import emojipedia from "./emojipedia";

function createCard(emojiItem) {
  return (
    <Card
      key={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      meaning={emojiItem.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>Emoji Dictionary</h1>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
