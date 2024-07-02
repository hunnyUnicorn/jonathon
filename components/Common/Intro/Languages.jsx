import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [react, setReact] = useState(0)
    const [node, setNode] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (react < 99) {
                setReact(prevCount => prevCount + 1);
            }
            if (node < 80) {
                setNode(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [react, node])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Top Skills</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={react} size={75} />
                        <span className='text-xs font-bold text-Snow'>React</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={node} size={75} />
                        <span className='text-xs font-bold text-Snow'>Node.js</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages