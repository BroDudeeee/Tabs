import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [tab, setTab] = useState([
    {
      id: "recAGJfiU4CeaV0HL",
      order: 3,
      title: "Full Stack Web Developer",
      dates: "December 2015 - Present",
      duties: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",

        "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",

        "Butcher drinking vinegar franzen authentic messenger bag",
      ],
      company: "TOMMY",
    },
  ]);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTabs(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const showInfo = (id) => {
    const item = tabs.filter((item) => item.id === id);
    setTab(item);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <h1 className="title">Experience</h1>
      <div className="container">
        <div className="companies">
          {tabs.map(({ id, company }) => (
            <h2 onClick={() => showInfo(id)} className="name" key={id}>
              {company}
            </h2>
          ))}
        </div>
        <div className="job">
          <div className="jobName">
            <h2>{tab[0].title}</h2>
            <h4>{tab[0].company}</h4>
            <p className="date">{tab[0].dates}</p>
          </div>
          <div className="duties">
            {tab[0].duties.map((duty, index) => (
              <p key={index}>{duty}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
