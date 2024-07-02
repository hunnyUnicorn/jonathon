import AboutCard from "./AboutCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const AboutMe = () => {

    const { isLoading, error, data } = useQuery('about', () =>
        axios.get('api/about')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">About Me</div>
            <div className="px-2 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map(() => (
                            <ParagraphSkeleton className={"space-y-2 p-8"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <AboutCard key={key} data={data} />
                        ))
                }

            </div>
        </>
    )
}

export default AboutMe