import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "material-symbols";
import { LeftSection } from "./components/LeftSection";
import { Main } from "./components/Main";
import { RightSection } from "./components/RightSection";

function App() {const posts = [
    {
      user: [
        {
          username: "",
          usertagname: "",
          userProfilePotot: "",
        },
      ],
      post: [
        {
          postPhoto: "",
          postComment: "",
          timePosted: "",
          likes: 3,
          retweets: 4,
        },
      ],
      comments : [
        {
          user : '',
          comment : '',
          commentLikes : 3,
          commentRetweets : 5,
          commentReplyes : 3,
        }
      ]
    },
  ];
  const [count, setCount] = useState(posts);


  

  return (
    <div className="body">
      <LeftSection />
      <Main />
      <RightSection />
    </div>
  );
}

export default App;
