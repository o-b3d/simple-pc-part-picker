import { Link } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";

export default function ContactUs() {
  return (
    <>
      <ContactUsPage />
    </>
  );
}

export function ContactUsPage() {
  return <div className="contactPageContainer">Contact Us Page</div>;
}

{
  /* Use <a href="mailto:obed@ogtesting.com">Contact Us</a> for button */
}

//--> THE BELOW IS JUST FOR TESTING API FETCH!

const url = "https://api.publicapis.org/entries";



export async function testEntries() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

{/* export default function ContactUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error:', error);
      }
    };
 */}