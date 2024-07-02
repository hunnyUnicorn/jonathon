import CardLayout from "../../Common/CardLayout"

const AboutCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 px-8 py-4 card_stylings">
                {
                    data.title && <div className=" text-Snow">{data.title}</div>
                }
                <div className="text-sm text-LightGray font-normal">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default AboutCard