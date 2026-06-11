import Card from "./component/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Sijan"
        age={18}
        img="https://images.unsplash.com/photo-1779419171796-1aff900f9f60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Aman"
        age={18}
        img="https://images.unsplash.com/photo-1778875774934-8d301a9b3ac0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
