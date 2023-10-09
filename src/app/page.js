import Headline from ".//components/Headline"

const headline = "Willkommen zu meinem Reiseblog"

export default function Home() {
  return (
    <div>
            <Headline myHeadline={headline} />
    </div>
  )
}