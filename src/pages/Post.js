import { useParams } from "react-router-dom";
import mobile from '../assets/mobile.svg';
import tablet from '../assets/tablet.svg';
import laptop from '../assets/laptop.svg';
import Section from '../components/Section';

const postImages = {
    mobile,
    tablet,
    laptop
}

function Post() {
    let { category } = useParams();

    /*
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    */
    return (
        <Section image={postImages[category]}/>
    )
}

export default Post;

/*
    useParams Hook
    --------------
    With the help of useParams Hook, we can access the dynamic part of a
    URL.

    useSearchParams Hook
    --------------------
    With the help of useSearchParams Hook, we can access the query parameters of a URL

*/