import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
const App = () => {
  const user = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661576428246-40893bd7d743?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "blue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1541560052-5e137f229371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "green",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "orange",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1705091982079-d8bb61603cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "pink",
      tag: "Average",
    },
  ];
  return (
    <div>
      <Section1 users={user} />
      <Section2 />
    </div>
  );
};

export default App;
