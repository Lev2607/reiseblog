import Link from 'next/link';
import Headline from "@/components/Headline";

const headline = "Willkommen zu meinem Reiseblog";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <Headline myHeadline={headline} />

      <div>
        <Link href="/meineVlogs">
          <img
            src="https://images.pexels.com/photos/6016757/pexels-photo-6016757.jpeg"
            style={{ width: "1210px", height: "600px" }}
            alt="Bild 1"
          />
        </Link>
        <div>
          <Link href="/meineVlogs">
            <img
              src="https://images.pexels.com/photos/15603692/pexels-photo-15603692/free-photo-of-preikestolen-en-norvege-preikestolenfjord-fille-seul.jpeg"
              style={{ width: "600px", height: "600px", margin: "5px" }}
              alt="Bild 2"
            />
          </Link>
          <Link href="/meineVlogs">
            <img
              src="https://images.pexels.com/photos/17046476/pexels-photo-17046476/free-photo-of-kloster-santa-catalina-de-siena-arequipa.jpeg?"
              style={{ width: "600px", height: "600px", margin: "5px" }}
              alt="Bild 3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

